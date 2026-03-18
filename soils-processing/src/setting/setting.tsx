/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput } from 'jimu-ui'
import { IMConfig } from '../config'

export default function SoilsProcessingSetting (props: AllWidgetSettingProps<IMConfig>) {
  const { config, id } = props

  const onGpUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id,
      config: config.set('gpServiceUrl', e.target.value)
    })
  }

  const onDefaultNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSettingChange({
      id,
      config: config.set('defaultName', e.target.value)
    })
  }

  return (
    <div style={{ padding: '12px' }}>
      <SettingSection title='GP Service Configuration'>
        <SettingRow>
          <div className='w-100'>
            <label style={{ fontWeight: 600, fontSize: '13px', display: 'block', marginBottom: '4px' }}>
              GP Service Task URL
            </label>
            <TextInput
              style={{ width: '100%' }}
              placeholder='https://server/arcgis/rest/services/.../GPServer/TaskName'
              value={config?.gpServiceUrl || ''}
              onChange={onGpUrlChange}
            />
            <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
              Full URL to the GP service task endpoint.
            </p>
          </div>
        </SettingRow>
      </SettingSection>

      <SettingSection title='Defaults'>
        <SettingRow>
          <div className='w-100'>
            <label style={{ fontWeight: 600, fontSize: '13px', display: 'block', marginBottom: '4px' }}>
              Default Name / Job Number
            </label>
            <TextInput
              style={{ width: '100%' }}
              placeholder='Optional default value'
              value={config?.defaultName || ''}
              onChange={onDefaultNameChange}
            />
            <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
              Pre-fill the Name field with this value.
            </p>
          </div>
        </SettingRow>
      </SettingSection>
    </div>
  )
}
