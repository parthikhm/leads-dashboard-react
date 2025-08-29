import React from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  Calendar, 
  DollarSign, 
  MessageCircle, 
  Send,
  User,
  Briefcase,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Lead } from '../types/Lead';

interface LeadDetailsProps {
  lead: Lead;
  onClose: () => void;
}

const LeadDetails: React.FC<LeadDetailsProps> = ({ lead, onClose }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'pending':
        return 'status-pending';
      case 'converted':
        return 'status-converted';
      case 'inactive':
        return 'status-inactive';
      default:
        return 'status-inactive';
    }
  };

  const mockMessages = [
    {
      id: '1',
      subject: 'Inquiry From Contact Page By "Manthan Bhavsar"',
      content: 'Thank you for reaching out and sharing your impressive guest posting service offerings.',
      date: 'N/A',
      requirements: 'We are looking for shopify beautiful website.',
      aiResponse: `Thank you for reaching out and sharing your impressive guest posting service offerings.

It sounds like you provide a robust solution for enhancing website authority and driving organic traffic through high-quality backlinks. Our team at Metizsoft focuses on delivering tailored SEO strategies that can significantly improve search engine rankings.

Since you mentioned high DA guest posts and their benefits, it would be beneficial to discuss your needs further to determine how we can assist you in maximizing your online presence.

Please feel free to share more specifics about your project or goals, and we can arrange a call to explore potential collaboration opportunities.`
    },
    {
      id: '2',
      subject: 'Inquiry From Hire Page By "Manthan"',
      content: 'Thank you for reaching out regarding your need for a Webflow team.',
      date: '07/10/2025',
      requirements: 'We are looking for webflow team.',
      aiResponse: `Thank you for reaching out regarding your need for a Webflow team.

At Metizsoft, we specialize in web development services, including the use of Webflow for creating responsive and visually appealing websites. Our team is experienced in designing user-centric interfaces, integrating seamless animations, and ensuring that your site performs optimally across all devices.

Could you please share a few more details about your project requirements? This will help us understand how we can best assist you with your Webflow needs.`
    }
  ];

  return (
    <div className="w-96 bg-white border-l border-neutral-200 flex flex-col h-full shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-neutral-200 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${lead.color} rounded-xl flex items-center justify-center shadow-md`}>
              <span className="text-white font-semibold text-lg">{lead.avatar}</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">{lead.name}</h2>
              <p className="text-sm text-neutral-600">{lead.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-3 mb-4">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(lead.status)}`}>
            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
          </span>
          <div className="flex items-center space-x-1 text-sm text-neutral-500 bg-white px-2 py-1 rounded-full">
            <MessageCircle className="w-4 h-4" />
            <span>{lead.messages} messages</span>
          </div>
          <div className="text-sm text-neutral-500 bg-white px-2 py-1 rounded-full">
            {lead.messages} Total
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {mockMessages.map((message, index) => (
          <div key={message.id} className="border-b border-neutral-200">
            {/* Message Header */}
            <div className="p-4 bg-neutral-50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-primary-500" />
                  <h3 className="font-semibold text-neutral-900">Message {index + 1}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500" />
                  <span className="text-xs text-secondary-600 bg-secondary-100 px-2 py-1 rounded-full font-medium">
                    Sent
                  </span>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Client Name</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-900">{lead.name}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Email Address</span>
                  </div>
                  <p className="text-sm text-neutral-900 truncate">{lead.email}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Contact Number</span>
                  </div>
                  <p className="text-sm text-neutral-900">{lead.phone}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Date</span>
                  </div>
                  <p className="text-sm text-neutral-900">{message.date}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Interested Service</span>
                  </div>
                  <p className="text-sm text-neutral-900">{lead.interestedService}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Project Budget</span>
                  </div>
                  <p className="text-sm font-semibold text-primary-600">{lead.projectBudget}</p>
                </div>
              </div>

              <div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Mail Subject</span>
                </div>
                <p className="text-sm text-neutral-900 font-medium">{message.subject}</p>
              </div>

              <div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Requirements</span>
                </div>
                <p className="text-sm text-neutral-700">{message.requirements}</p>
              </div>

              {message.aiResponse && (
                <div className="mt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">AI Generated Response</span>
                  </div>
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 border border-primary-200">
                    <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">{message.aiResponse}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-neutral-200 bg-neutral-50">
        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-sm">
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-2.5 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-white transition-colors">
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;