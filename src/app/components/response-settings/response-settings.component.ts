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

        <div class="form-group">
          <label class="form-label">Response Delay (ms)</label>
          <input
            type="number"
            [value]="settings().responseDelay"
            class="form-input"
            min="0"
            max="5000"
            step="100"
          />
        </div>

        <div class="form-group">
          <label class="toggle-label">
            <input type="checkbox" [checked]="settings().typingIndicator" class="toggle-input" />
            <span class="toggle-slider"></span>
            <span class="toggle-text">Show Typing Indicator</span>
          </label>
        </div>
      </div>
    </section>
  `,
})
export class ResponseSettingsComponent {
  settings = input.required<ResponseSettings>();
}
