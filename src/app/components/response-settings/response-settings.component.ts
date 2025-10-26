import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseSettings } from '../../models/agent.model';

@Component({
  selector: 'app-response-settings',
  imports: [CommonModule],
  styleUrl: './response-settings.component.scss',
  template: `
    <section id="responses" class="form-section">
      <div class="section-header">
        <h2 class="section-title">Response Settings</h2>
        <p class="section-description">Customize pre-defined messages and response behavior</p>
      </div>

      <div class="form-grid">
        <div class="form-group col-span-2">
          <label class="form-label">
            <span class="label-icon">👋</span>
            Greeting Message
          </label>
          <input
            type="text"
            [value]="settings().greetingMessage"
            class="form-input"
            placeholder="Hello! How can I help you?"
          />
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">
            <span class="label-icon">❓</span>
            Fallback Message
          </label>
          <input
            type="text"
            [value]="settings().fallbackMessage"
            class="form-input"
            placeholder="I'm not sure I understand..."
          />
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">
            <span class="label-icon">🌙</span>
            Offline Message
          </label>
          <input
            type="text"
            [value]="settings().offlineMessage"
            class="form-input"
            placeholder="We're currently offline..."
          />
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">
            <span class="label-icon">👋</span>
            End Conversation Message
          </label>
          <input
            type="text"
            [value]="settings().endConversationMessage"
            class="form-input"
            placeholder="Thank you for chatting!"
          />
        </div>
      </div>
    </section>
  `,
})
export class ResponseSettingsComponent {
  settings = input.required<ResponseSettings>();
}
