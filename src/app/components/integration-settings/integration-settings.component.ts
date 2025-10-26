import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IntegrationSettings } from '../../models/agent.model';

@Component({
  selector: 'app-integration-settings',
  imports: [CommonModule],
  styleUrl: './integration-settings.component.scss',
  template: `
    <section id="integrations" class="form-section">
      <div class="section-header">
        <h2 class="section-title">Integration Settings</h2>
        <p class="section-description">Connect your agent to external platforms and services</p>
      </div>

      <div class="form-grid">
        <div class="form-group col-span-2">
          <label class="form-label">Enabled Channels</label>
          <div class="channel-grid">
            @for (channel of availableChannels; track channel) {
            <label class="channel-card" [class.selected]="isChannelEnabled(channel)">
              <input
                type="checkbox"
                [checked]="isChannelEnabled(channel)"
                class="channel-checkbox"
              />
              <span class="channel-icon">{{ getChannelIcon(channel) }}</span>
              <span class="channel-name">{{ channel }}</span>
            </label>
            }
          </div>
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">Webhook URL</label>
          <div class="input-with-icon">
            <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <input
              type="url"
              [value]="settings().webhookUrl"
              class="form-input"
              placeholder="https://api.example.com/webhook"
              [ngStyle]="{ 'padding-left': '38px' }"
            />
          </div>
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">API Key</label>
          <div class="input-with-icon">
            <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <input
              type="password"
              [value]="settings().apiKey"
              class="form-input"
              placeholder="Enter API key"
              [ngStyle]="{ 'padding-left': '38px' }"
            />
          </div>
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">Custom Headers</label>
          <div class="header-list">
            @for (header of getCustomHeaders(); track header.key) {
            <div class="header-item">
              <input
                type="text"
                [value]="header.key"
                class="form-input flex-1"
                placeholder="Header name"
              />
              <input
                type="text"
                [value]="header.value"
                class="form-input flex-1"
                placeholder="Header value"
              />
              <button type="button" class="delete-btn">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
            }
            <button type="button" class="add-header-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Header
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class IntegrationSettingsComponent {
  settings = input.required<IntegrationSettings>();

  availableChannels = ['Web', 'Mobile', 'Slack', 'Teams', 'WhatsApp', 'Telegram', 'Email', 'SMS'];

  isChannelEnabled(channel: string): boolean {
    return this.settings().enabledChannels.includes(channel);
  }

  getChannelIcon(channel: string): string {
    const icons: Record<string, string> = {
      Web: '🌐',
      Mobile: '📱',
      Slack: '💬',
      Teams: '👥',
      WhatsApp: '📞',
      Telegram: '✈️',
      Email: '📧',
      SMS: '💬',
    };
    return icons[channel] || '📢';
  }

  getCustomHeaders(): Array<{ key: string; value: string }> {
    return Object.entries(this.settings().customHeaders).map(([key, value]) => ({ key, value }));
  }
}
