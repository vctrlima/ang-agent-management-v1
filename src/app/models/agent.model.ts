export interface AgentConfig {
  general: GeneralSettings;
  behavior: BehaviorSettings;
  responses: ResponseSettings;
  integrations: IntegrationSettings;
  training: TrainingData;
}

export interface GeneralSettings {
  agentName: string;
  description: string;
  avatarUrl: string;
  primaryColor: string;
  language: string;
  timezone: string;
}

export interface BehaviorSettings {
  personality: string;
  responseStyle: string;
  conversationMode: string;
  proactiveMessages: boolean;
  maxResponseLength: number;
  confidenceThreshold: number;
}

export interface ResponseSettings {
  greetingMessage: string;
  fallbackMessage: string;
  offlineMessage: string;
  endConversationMessage: string;
  typingIndicator: boolean;
  responseDelay: number;
}

export interface IntegrationSettings {
  enabledChannels: string[];
  webhookUrl: string;
  apiKey: string;
  customHeaders: Record<string, string>;
}

export interface TrainingData {
  knowledgeBase: string[];
  faqPairs: FaqPair[];
  customIntents: Intent[];
}

export interface FaqPair {
  question: string;
  answer: string;
}

export interface Intent {
  name: string;
  utterances: string[];
  response: string;
}

export interface NavigationSection {
  id: string;
  label: string;
  icon: string;
}
