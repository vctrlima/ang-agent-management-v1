import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AgentConfig } from '../../models/agent.model';

@Component({
  selector: 'app-preview-panel',
  imports: [CommonModule],
  templateUrl: './preview-panel.component.html',
  styleUrl: './preview-panel.component.scss',
})
export class PreviewPanelComponent {
  config = input.required<AgentConfig>();

  readonly sampleMessages = [
    { type: 'bot', text: '', isGreeting: true },
    { type: 'user', text: 'How do I reset my password?' },
    {
      type: 'bot',
      text: 'You can reset your password by clicking "Forgot Password" on the login page.',
    },
    { type: 'user', text: 'Thanks!' },
    { type: 'bot', text: '', isEnd: true },
  ];

  getGreetingMessage(): string {
    return this.config().responses.greetingMessage;
  }

  getEndMessage(): string {
    return this.config().responses.endConversationMessage;
  }
}
