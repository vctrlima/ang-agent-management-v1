import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingData } from '../../models/agent.model';

@Component({
  selector: 'app-training-data',
  imports: [CommonModule],
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
                  <input type="text" [value]="faq.question" class="form-input flex-1" placeholder="Question" />
                </div>
                <div class="faq-answer">
                  <span class="faq-badge">A</span>
                  <textarea [value]="faq.answer" class="form-textarea flex-1" rows="2" placeholder="Answer"></textarea>
                </div>
                <button type="button" class="delete-btn">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            }
            <button type="button" class="add-faq-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
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
                  <input type="text" [value]="intent.name" class="form-input font-semibold" placeholder="Intent name" />
                  <button type="button" class="delete-btn">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
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
                    <input type="text" [value]="intent.response" class="form-input" placeholder="Response message" />
                  </div>
                </div>
              </div>
            }
            <button type="button" class="add-intent-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              Add Intent
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import './general-settings/general-settings.component.scss';

    .tag-list {
      @apply flex flex-wrap gap-2;
    }

    .tag {
      @apply inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700;
      @apply rounded-full text-sm font-medium;
    }

    .tag-sm {
      @apply inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700;
      @apply rounded text-xs;
    }

    .tag-remove {
      @apply text-lg leading-none hover:text-red-600 transition-colors duration-200;
    }

    .add-tag-btn {
      @apply px-3 py-1.5 text-sm font-medium text-blue-600 border-2 border-dashed border-blue-300;
      @apply rounded-full hover:bg-blue-50 transition-all duration-200;
    }

    .add-tag-btn-sm {
      @apply px-2 py-1 text-xs font-medium text-gray-600 border border-dashed border-gray-300;
      @apply rounded hover:bg-gray-50 transition-all duration-200;
    }

    .faq-list, .intent-list {
      @apply space-y-4;
    }

    .faq-item {
      @apply relative p-4 border-2 border-gray-200 rounded-lg;
      @apply hover:border-blue-300 transition-colors duration-200;
    }

    .faq-header, .faq-answer {
      @apply flex gap-3 items-start mb-3;

      &:last-child {
        @apply mb-0;
      }
    }

    .faq-badge {
      @apply flex items-center justify-center w-8 h-8 bg-blue-600 text-white;
      @apply rounded-full font-bold text-sm flex-shrink-0;
    }

    .intent-item {
      @apply p-4 border-2 border-gray-200 rounded-lg space-y-3;
      @apply hover:border-blue-300 transition-colors duration-200;
    }

    .intent-header {
      @apply flex gap-3 items-center;
    }

    .intent-body {
      @apply space-y-3 pl-2 border-l-2 border-gray-200;
    }

    .intent-section {
      @apply pl-3 space-y-2;
    }

    .delete-btn {
      @apply p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded;
      @apply transition-colors duration-200 flex-shrink-0;
    }

    .add-faq-btn, .add-intent-btn {
      @apply w-full flex items-center justify-center gap-2 px-4 py-3;
      @apply text-blue-600 border-2 border-dashed border-blue-300 rounded-lg;
      @apply hover:bg-blue-50 transition-all duration-200 font-medium;
    }
  `],
})
export class TrainingDataComponent {
  data = input.required<TrainingData>();
}
