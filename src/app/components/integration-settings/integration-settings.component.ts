import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationSettings } from '../../models/agent.model';

@Component({
  selector: 'app-integration-settings',
  imports: [CommonModule],
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>
            <input
              type="url"
              [value]="settings().webhookUrl"
              class="form-input pl-10"
              placeholder="https://api.example.com/webhook"
            />
          </div>
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">API Key</label>
          <div class="input-with-icon">
            <svg class="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
            <input
              type="password"
              [value]="settings().apiKey"
              class="form-input pl-10"
              placeholder="Enter API key"
            />
          </div>
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">Custom Headers</label>
          <div class="header-list">
            @for (header of getCustomHeaders(); track header.key) {
              <div class="header-item">
                <input type="text" [value]="header.key" class="form-input flex-1" placeholder="Header name" />
                <input type="text" [value]="header.value" class="form-input flex-1" placeholder="Header value" />
                <button type="button" class="delete-btn">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            }
            <button type="button" class="add-header-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              Add Header
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import 'tailwindcss' reference;

    .channel-grid {
      @apply grid grid-cols-2 md:grid-cols-4 gap-3;
    }

    .channel-card {
      @apply flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg;
      @apply cursor-pointer transition-all duration-200;
      @apply hover:border-blue-300 hover:bg-blue-50;

      &.selected {
        @apply border-blue-500 bg-blue-50;

        .channel-icon {
          @apply scale-110;
        }
      }
    }

    .channel-checkbox {
      @apply sr-only;
    }

    .channel-icon {
      @apply text-3xl transition-transform duration-200;
    }

    .channel-name {
      @apply text-sm font-medium text-gray-700;
    }

    .input-with-icon {
      @apply relative;
    }

    .input-icon {
      @apply absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400;
    }

    .header-list {
      @apply space-y-3;
    }

    .header-item {
      @apply flex gap-3 items-center;
    }

    .delete-btn {
      @apply p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200;
      @apply focus:outline-none focus:ring-2 focus:ring-red-500;
    }

    .add-header-btn {
      @apply flex items-center gap-2 px-4 py-2 text-blue-600 border-2 border-dashed border-blue-300;
      @apply rounded-lg hover:bg-blue-50 transition-all duration-200;
      @apply focus:outline-none focus:ring-2 focus:ring-blue-500;
      @apply font-medium text-sm;
    }
  `],
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
      WhatsApp: '💚',
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
