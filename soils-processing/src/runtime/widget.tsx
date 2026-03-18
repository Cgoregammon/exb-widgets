/** @jsx jsx */
import { React, jsx, AllWidgetProps, css } from 'jimu-core'
import { IMConfig } from '../config'
import esriRequest from 'esri/request'

const { useState, useRef, useCallback } = React

const widgetStyles = css`
  .sp-container { width:100%; height:100%; display:flex; flex-direction:column; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; font-size:12px; overflow:hidden; }
  .sp-content { flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:12px; }
  .sp-title { font-size:16px; font-weight:700; color:var(--dark-800,#333); margin-bottom:4px; }
  .sp-subtitle { font-size:12px; color:var(--dark-400,#999); margin-bottom:8px; }
  .sp-field { display:flex; flex-direction:column; gap:4px; }
  .sp-label { font-weight:600; font-size:13px; color:var(--dark-600,#555); }
  .sp-required { color:var(--danger,#dc3545); font-size:11px; }
  .sp-dropzone { width:100%; padding:20px 12px; border:2px dashed var(--light-500,#ccc); border-radius:8px; text-align:center; color:var(--dark-400,#999); cursor:pointer; transition:border-color .2s,background .2s; font-size:13px; }
  .sp-dropzone:hover { border-color:var(--primary,#0079c1); background:var(--light-100,#f8f8f8); }
  .sp-dropzone.sp-dragging { border-color:var(--primary,#0079c1); background:var(--light-200,#f0f0f0); }
  .sp-dropzone.sp-has-file { border-color:var(--success,#28a745); background:var(--light-100,#f8f8f8); color:var(--dark-800,#333); }
  .sp-dropzone input { display:none; }
  .sp-input { width:100%; padding:8px 10px; border:1px solid var(--light-500,#ccc); border-radius:4px; font-size:13px; font-family:inherit; }
  .sp-input:focus { outline:none; border-color:var(--primary,#0079c1); }
  .sp-submit-btn { width:100%; padding:10px 16px; border:none; border-radius:6px; background:var(--primary,#0079c1); color:#fff; font-size:14px; font-weight:600; font-family:inherit; cursor:pointer; transition:background .15s; }
  .sp-submit-btn:hover:not(:disabled) { background:#005a8e; }
  .sp-submit-btn:disabled { opacity:.5; cursor:default; }
  .sp-progress { display:flex; flex-direction:column; gap:8px; padding:12px; background:var(--light-100,#f8f8f8); border:1px solid var(--light-400,#ddd); border-radius:6px; }
  .sp-progress-title { font-weight:600; font-size:13px; color:var(--dark-600,#555); }
  .sp-progress-bar-bg { width:100%; height:8px; background:var(--light-400,#ddd); border-radius:4px; overflow:hidden; }
  .sp-progress-bar { height:100%; background:var(--primary,#0079c1); border-radius:4px; transition:width .3s; }
  .sp-progress-bar.sp-complete { background:var(--success,#28a745); }
  .sp-progress-bar.sp-error { background:var(--danger,#dc3545); }
  .sp-progress-status { font-size:12px; color:var(--dark-400,#999); }
  .sp-message { font-size:12px; padding:8px 12px; border-radius:4px; }
  .sp-message-success { background:#d4edda; color:#155724; border:1px solid #c3e6cb; }
  .sp-message-error { background:#f8d7da; color:#721c24; border:1px solid #f5c6cb; }
  .sp-message-info { background:#d1ecf1; color:#0c5460; border:1px solid #bee5eb; }
  .sp-download-btn { display:inline-flex; align-items:center; justify-content:center; gap:6px; width:100%; padding:10px 16px; border:none; border-radius:6px; background:var(--success,#28a745); color:#fff; font-size:14px; font-weight:600; font-family:inherit; cursor:pointer; transition:background .15s; text-decoration:none; }
  .sp-download-btn:hover { background:#218838; color:#fff; }
  .sp-reset-btn { width:100%; padding:8px 16px; border:1px solid var(--light-500,#ccc); border-radius:6px; background:var(--white,#fff); color:var(--dark-600,#555); font-size:13px; font-family:inherit; cursor:pointer; }
  .sp-reset-btn:hover { background:var(--light-300,#e8e8e8); }
  .sp-file-info { display:flex; align-items:center; justify-content:space-between; font-size:12px; }
  .sp-file-name { font-weight:600; color:var(--dark-800,#333); }
  .sp-file-remove { color:var(--danger,#dc3545); cursor:pointer; font-size:11px; border:none; background:none; text-decoration:underline; font-family:inherit; }
`

type JobStatus = 'idle' | 'uploading' | 'submitted' | 'processing' | 'complete' | 'failed'

export default function SoilsProcessingWidget (props: AllWidgetProps<IMConfig>) {
  const { config } = props

  const [file, setFile] = useState<File | null>(null)
  const [jobName, setJobName] = useState<string>(config?.defaultName || '')
  const [dragging, setDragging] = useState<boolean>(false)
  const [jobStatus, setJobStatus] = useState<JobStatus>('idle')
  const [progressPct, setProgressPct] = useState<number>(0)
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [gpMessage, setGpMessage] = useState<string>('')
  const [downloadUrl, setDownloadUrl] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const fileInputRef = useRef<HTMLInputElement>(null)
  const pollTimerRef = useRef<any>(null)

  const gpUrl = config?.gpServiceUrl || 'https://atlas.michels.us/arcgis/rest/services/Geoprocessing/M0109SoilsProcessing_GPServer/M0109SoilsProcessing'
  const gpServerUrl = gpUrl.substring(0, gpUrl.lastIndexOf('/'))

  const handleFile = useCallback((f: File) => {
    const ext = f.name.toLowerCase().split('.').pop()
    if (ext === 'kmz' || ext === 'kml') {
      setFile(f)
      setErrorMessage('')
    } else {
      setErrorMessage('Please select a .kmz or .kml file.')
      setFile(null)
    }
  }, [])

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }, [handleFile])

  const resetForm = useCallback(() => {
    setFile(null)
    setJobName(config?.defaultName || '')
    setJobStatus('idle')
    setProgressPct(0)
    setStatusMessage('')
    setGpMessage('')
    setDownloadUrl('')
    setErrorMessage('')
    if (pollTimerRef.current) clearInterval(pollTimerRef.current)
  }, [config])

  const submitJob = useCallback(async () => {
    if (!file || !jobName.trim()) return

    setJobStatus('uploading')
    setProgressPct(10)
    setStatusMessage('Uploading file...')
    setErrorMessage('')
    setGpMessage('')
    setDownloadUrl('')

    try {
      // Step 1: Upload file using esriRequest (handles auth automatically)
      const uploadUrl = `${gpServerUrl}/uploads/upload`
      const formData = new FormData()
      formData.append('file', file)
      formData.append('f', 'json')

      const uploadResult = await esriRequest(uploadUrl, {
        method: 'post',
        body: formData,
        responseType: 'json'
      })

      const uploadData = uploadResult.data
      if (!uploadData?.item?.itemID) {
        throw new Error(uploadData?.error?.message || 'File upload failed.')
      }

      const itemId = uploadData.item.itemID
      setProgressPct(30)
      setStatusMessage('File uploaded. Submitting job...')
      setJobStatus('submitted')

      // Step 2: Submit GP job using esriRequest
      const submitUrl = `${gpUrl}/submitJob`
      const submitFormData = new FormData()
      submitFormData.append('inKMZ', JSON.stringify({ itemID: itemId }))
      submitFormData.append('Name', jobName.trim())
      submitFormData.append('f', 'json')

      const submitResult = await esriRequest(submitUrl, {
        method: 'post',
        body: submitFormData,
        responseType: 'json'
      })

      const submitData = submitResult.data
      if (!submitData?.jobId) {
        throw new Error(submitData?.error?.message || 'Job submission failed.')
      }

      const jobId = submitData.jobId
      setProgressPct(50)
      setStatusMessage('Job submitted. Processing...')
      setJobStatus('processing')

      // Step 3: Poll for job completion
      const pollUrl = `${gpUrl}/jobs/${jobId}`
      pollTimerRef.current = setInterval(async () => {
        try {
          const pollResult = await esriRequest(pollUrl, {
            query: { f: 'json' },
            responseType: 'json'
          })

          const pollData = pollResult.data
          const status = pollData.jobStatus

          if (status === 'esriJobSucceeded') {
            clearInterval(pollTimerRef.current)
            setProgressPct(90)
            setStatusMessage('Processing complete. Getting results...')

            // Get the message output
            if (pollData.results?.message) {
              try {
                const msgResult = await esriRequest(`${pollUrl}/results/message`, {
                  query: { f: 'json' },
                  responseType: 'json'
                })
                if (msgResult.data?.value) {
                  setGpMessage(msgResult.data.value)
                }
              } catch (e) {}
            }

            // Get the output file
            if (pollData.results?.outTab) {
              try {
                const outResult = await esriRequest(`${pollUrl}/results/outTab`, {
                  query: { f: 'json' },
                  responseType: 'json'
                })
                if (outResult.data?.value?.url) {
                  setDownloadUrl(outResult.data.value.url)
                }
              } catch (e) {}
            }

            setProgressPct(100)
            setStatusMessage('Complete!')
            setJobStatus('complete')

          } else if (status === 'esriJobFailed' || status === 'esriJobCancelled' || status === 'esriJobTimedOut') {
            clearInterval(pollTimerRef.current)

            let errMsg = 'Job failed.'
            if (pollData.messages) {
              const errMessages = pollData.messages
                .filter((m: any) => m.type === 'esriJobMessageTypeError' || m.type === 'esriJobMessageTypeWarning')
                .map((m: any) => m.description)
              if (errMessages.length > 0) errMsg = errMessages.join('; ')
            }

            setProgressPct(100)
            setStatusMessage(errMsg)
            setJobStatus('failed')
            setErrorMessage(errMsg)

          } else {
            const progressMap: any = { 'esriJobSubmitted': 50, 'esriJobWaiting': 55, 'esriJobExecuting': 70 }
            setProgressPct(progressMap[status] || 60)
            setStatusMessage(`Status: ${status.replace('esriJob', '')}...`)
          }
        } catch (pollError) {
          clearInterval(pollTimerRef.current)
          setJobStatus('failed')
          setErrorMessage('Error checking job status: ' + (pollError as Error).message)
        }
      }, 3000)

    } catch (e) {
      setJobStatus('failed')
      setProgressPct(0)
      setErrorMessage((e as Error).message)
      setStatusMessage('')
    }
  }, [file, jobName, gpUrl, gpServerUrl])

  const canSubmit = file && jobName.trim() && jobStatus === 'idle'
  const isProcessing = ['uploading', 'submitted', 'processing'].includes(jobStatus)

  return (
    <div css={widgetStyles}>
      <div className='sp-container'>
        <div className='sp-content'>
          <div>
            <div className='sp-title'>Soils Processing</div>
            <div className='sp-subtitle'>Upload a KMZ/KML file to generate a soils report from the USA Soils Map Units service.</div>
          </div>

          <div className='sp-field'>
            <div className='sp-label'>Input KMZ/KML File <span className='sp-required'>*</span></div>
            {!file ? (
              <div
                className={`sp-dropzone ${dragging ? 'sp-dragging' : ''}`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setDragging(true) }}
                onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); setDragging(false) }}
                onDrop={(e) => { e.preventDefault(); e.stopPropagation(); setDragging(false); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f) }}
              >
                <input ref={fileInputRef} type='file' accept='.kml,.kmz' onChange={onFileChange} />
                Drop a KMZ or KML file here, or click to browse
              </div>
            ) : (
              <div className='sp-dropzone sp-has-file'>
                <div className='sp-file-info'>
                  <span className='sp-file-name'>{file.name}</span>
                  {jobStatus === 'idle' && (
                    <button className='sp-file-remove' onClick={() => setFile(null)}>Remove</button>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className='sp-field'>
            <div className='sp-label'>Name / Job Number <span className='sp-required'>*</span></div>
            <input
              className='sp-input'
              type='text'
              placeholder='Enter a Bid or Job Number'
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              disabled={isProcessing}
            />
          </div>

          {jobStatus === 'idle' && (
            <button className='sp-submit-btn' onClick={submitJob} disabled={!canSubmit}>
              Submit for Processing
            </button>
          )}

          {isProcessing && (
            <div className='sp-progress'>
              <div className='sp-progress-title'>Processing...</div>
              <div className='sp-progress-bar-bg'>
                <div className='sp-progress-bar' style={{ width: `${progressPct}%` }} />
              </div>
              <div className='sp-progress-status'>{statusMessage}</div>
            </div>
          )}

          {errorMessage && <div className='sp-message sp-message-error'>{errorMessage}</div>}
          {gpMessage && <div className='sp-message sp-message-info'>{gpMessage}</div>}

          {jobStatus === 'complete' && (
            <React.Fragment>
              <div className='sp-progress'>
                <div className='sp-progress-title'>Processing Complete</div>
                <div className='sp-progress-bar-bg'>
                  <div className='sp-progress-bar sp-complete' style={{ width: '100%' }} />
                </div>
              </div>
              {downloadUrl && (
                <a className='sp-download-btn' href={downloadUrl} target='_blank' rel='noopener noreferrer'>
                  Download Soils Report
                </a>
              )}
              <button className='sp-reset-btn' onClick={resetForm}>Process Another File</button>
            </React.Fragment>
          )}

          {jobStatus === 'failed' && (
            <React.Fragment>
              <div className='sp-progress'>
                <div className='sp-progress-title'>Processing Failed</div>
                <div className='sp-progress-bar-bg'>
                  <div className='sp-progress-bar sp-error' style={{ width: '100%' }} />
                </div>
              </div>
              <button className='sp-reset-btn' onClick={resetForm}>Try Again</button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}
