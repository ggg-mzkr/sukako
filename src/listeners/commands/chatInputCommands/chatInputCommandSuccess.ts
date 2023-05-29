import { Listener, LogLevel, type ChatInputCommandSuccessPayload } from '@sapphire/framework'
import type { Logger } from '@sapphire/plugin-logger'
import { logSuccessCommand } from '../../../lib/utils'

export class UserListener extends Listener {
  public run (payload: ChatInputCommandSuccessPayload): void {
    logSuccessCommand(payload)
  }

  public onLoad (): void {
    this.enabled = (this.container.logger as Logger).level <= LogLevel.Debug
    super.onLoad()
  }
}
