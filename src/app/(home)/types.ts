export interface ChatThread {
  id: string;
  topic: string;
  messages: ChatMessage[];
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  sentAt: string;
  isEdited?: boolean;
  content: string;
}
