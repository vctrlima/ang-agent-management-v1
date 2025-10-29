import { Injectable, signal } from '@angular/core';
import { AgentConfig, NavigationSection } from '../models/agent.model';

@Injectable({
  providedIn: 'root',
})
export class AgentMockService {
  private agentConfig = signal<AgentConfig>({
    general: {
      agentName: 'Customer Support Bot',
      description: 'Intelligent assistant for customer inquiries and support',
      avatarUrl: 'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Ryan',
      primaryColor: '#cc0000',
      language: 'English',
      timezone: 'UTC-5',
    },
    behavior: {
      personality: 'Professional & Friendly',
      responseStyle: 'Conversational',
      conversationMode: 'Interactive',
      proactiveMessages: true,
      maxResponseLength: 500,
      confidenceThreshold: 0.75,
    },
    responses: {
      greetingMessage: 'Hello! How can I assist you today?',
      fallbackMessage: "I'm not sure I understand. Could you rephrase that?",
      offlineMessage: 'Our team is currently offline. We will respond shortly.',
      endConversationMessage: 'Thank you for chatting with us! Have a great day!',
      typingIndicator: true,
      responseDelay: 1000,
    },
    integrations: {
      enabledChannels: ['Web', 'Mobile', 'Slack'],
      webhookUrl: 'https://api.example.com/webhook',
      apiKey: '••••••••••••••••',
      customHeaders: {
        'X-Custom-Header': 'value',
      },
    },
    training: {
      knowledgeBase: ['Product documentation', 'FAQ database', 'Support tickets history'],
      faqPairs: [
        {
          question: 'How do I reset my password?',
          answer: 'You can reset your password by clicking "Forgot Password" on the login page.',
        },
        {
          question: 'What are your business hours?',
          answer: 'We are available Monday to Friday, 9 AM to 6 PM EST.',
        },
      ],
      customIntents: [
        {
          name: 'greeting',
          utterances: ['hello', 'hi', 'hey', 'good morning'],
          response: 'Hello! How can I help you today?',
        },
      ],
    },
  });

  readonly navigationSections: NavigationSection[] = [
    { id: 'general', label: 'General Settings', icon: '⚙️' },
    { id: 'behavior', label: 'Behavior', icon: '🧠' },
    { id: 'responses', label: 'Responses', icon: '💬' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' },
    { id: 'training', label: 'Training Data', icon: '📚' },
  ];

  getAgentConfig() {
    return this.agentConfig.asReadonly();
  }

  updateAgentConfig(config: Partial<AgentConfig>) {
    this.agentConfig.update((current) => ({ ...current, ...config }));
  }
}
