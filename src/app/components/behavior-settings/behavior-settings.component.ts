import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BehaviorSettings } from '../../models/agent.model';

@Component({
  selector: 'app-behavior-settings',
  imports: [CommonModule],
  styleUrl: './behavior-settings.component.scss',
  template: `
    <section id="behavior" class="form-section">
      <div class="section-header">
        <h2 class="section-title">Behavior Settings</h2>
        <p class="section-description">Define how your agent interacts and responds</p>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Personality</label>
          <select [value]="settings().personality" class="form-select">
            <option value="Professional & Friendly">Professional & Friendly</option>
            <option value="Casual & Fun">Casual & Fun</option>
            <option value="Formal & Technical">Formal & Technical</option>
            <option value="Empathetic & Caring">Empathetic & Caring</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Response Style</label>
          <select [value]="settings().responseStyle" class="form-select">
            <option value="Conversational">Conversational</option>
            <option value="Concise">Concise</option>
            <option value="Detailed">Detailed</option>
            <option value="Step-by-step">Step-by-step</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Conversation Mode</label>
          <select [value]="settings().conversationMode" class="form-select">
            <option value="Interactive">Interactive</option>
            <option value="Linear">Linear</option>
            <option value="Guided">Guided</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Max Response Length</label>
          <div class="slider-container">
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              [value]="settings().maxResponseLength"
              class="slider"
            />
            <span class="slider-value">{{ settings().maxResponseLength }} chars</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Confidence Threshold</label>
          <div class="slider-container">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              [value]="settings().confidenceThreshold"
              class="slider"
            />
            <span class="slider-value">{{ settings().confidenceThreshold * 100 }}%</span>
          </div>
        </div>

        <div class="form-group">
          <label class="toggle-label">
            <input type="checkbox" [checked]="settings().proactiveMessages" class="toggle-input" />
            <span class="toggle-slider"></span>
            <span class="toggle-text">Enable Proactive Messages</span>
          </label>
          <p class="form-hint">Agent can initiate conversations when appropriate</p>
        </div>
      </div>
    </section>
  `,
})
export class BehaviorSettingsComponent {
  settings = input.required<BehaviorSettings>();
}
