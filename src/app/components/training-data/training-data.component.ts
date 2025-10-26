import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingData } from '../../models/agent.model';

@Component({
  selector: 'app-training-data',
  imports: [CommonModule],
  styleUrl: './training-data.component.scss',
  template: `
    <section id="training" class="form-section">
      <div class="section-header">
        <h2 class="section-title">Training Data</h2>
        <p class="section-description">Configure knowledge base and training data sources</p>
      </div>

      <div class="form-grid">
        <div class="form-group col-span-2">
          <label class="form-label">Knowledge Base Sources</label>
          <div class="tag-list">
            @for (source of data().knowledgeBase; track source) {
            <span class="tag">
              {{ source }}
              <button type="button" class="tag-remove">×</button>
            </span>
            }
            <button type="button" class="add-tag-btn">+ Add Source</button>
          </div>
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">FAQ Pairs</label>
          <div class="faq-list">
            @for (faq of data().faqPairs; track faq.question) {
            <div class="faq-item">
              <div class="faq-header">
                <span class="faq-badge">Q</span>
                <input
                  type="text"
                  [value]="faq.question"
                  class="form-input flex-1"
                  placeholder="Question"
                />
              </div>
              <div class="faq-answer">
                <span class="faq-badge">A</span>
                <textarea
                  [value]="faq.answer"
                  class="form-textarea flex-1"
                  rows="2"
                  placeholder="Answer"
                ></textarea>
              </div>
              <button type="button" class="delete-btn">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            }
            <button type="button" class="add-faq-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add FAQ Pair
            </button>
          </div>
        </div>

        <div class="form-group col-span-2">
          <label class="form-label">Custom Intents</label>
          <div class="intent-list">
            @for (intent of data().customIntents; track intent.name) {
            <div class="intent-item">
              <div class="intent-header">
                <input
                  type="text"
                  [value]="intent.name"
                  class="form-input font-semibold"
                  placeholder="Intent name"
                />
                <button type="button" class="delete-btn">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="intent-body">
                <div class="intent-section">
                  <label class="text-xs font-semibold text-gray-600">Utterances:</label>
                  <div class="tag-list">
                    @for (utterance of intent.utterances; track utterance) {
                    <span class="tag-sm">
                      {{ utterance }}
                      <button type="button" class="tag-remove">×</button>
                    </span>
                    }
                    <button type="button" class="add-tag-btn-sm">+ Add</button>
                  </div>
                </div>
                <div class="intent-section">
                  <label class="text-xs font-semibold text-gray-600">Response:</label>
                  <input
                    type="text"
                    [value]="intent.response"
                    class="form-input"
                    placeholder="Response message"
                  />
                </div>
              </div>
            </div>
            }
            <button type="button" class="add-intent-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Intent
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TrainingDataComponent {
  data = input.required<TrainingData>();
}
