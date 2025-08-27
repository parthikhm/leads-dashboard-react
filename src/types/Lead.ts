export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'pending' | 'converted' | 'inactive';
  messages: number;
  lastUpdated: string;
  projectBudget: string;
  interestedService: string;
  avatar: string;
  color: string;
}

export interface Message {
  id: string;
  subject: string;
  content: string;
  date: string;
  requirements: string;
  aiResponse?: string;
}