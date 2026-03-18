import { ImmutableObject } from 'jimu-core'

export interface Config {
  gpServiceUrl: string
  defaultName: string
}

export type IMConfig = ImmutableObject<Config>
