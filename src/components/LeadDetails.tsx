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
  Clock
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
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'converted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const mockMessages = [
    {
      id: '1',
      subject: 'Inquiry From Contact Page By "Manthan Bhavsar"',
      content: 'Thank you for reaching out and sharing your impressive guest posting service offerings.',
      date: 'N/A',
      requirements: 'We are looking for shopify beautiful website.',
      aiResponse: `It sounds like you provide a robust solution for enhancing website authority and driving organic traffic through high-quality backlinks. Our team at Metizsoft focuses on delivering tailored SEO strategies that can significantly improve search engine rankings.

Since you mentioned high DA guest posts and their benefits, it would be beneficial to discuss your needs further to determine how we can assist you in maximizing your online presence.

Please feel free to share more specifics about your project or goals, and we can arrange a call to explore potential collaboration opportunities.`
    },
    {
      id: '2',
      subject: 'Inquiry From Hire Page By "Manthan"',
      content: 'Thank you for reaching out regarding your need for a Webflow team.',
      date: '07/10/2025',
      requirements: 'We are looking for webflow team.',
      aiResponse: `At Metizsoft, we specialize in web development services, including the use of Webflow for creating responsive and visually appealing websites. Our team is experienced in designing user-centric interfaces, integrating seamless animations, and ensuring that your site performs optimally across all devices.

Could you please share a few more details about your project requirements? This will help us understand how we can best assist you with your Webflow needs.`
    }
  ];

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${lead.color} rounded-full flex items-center justify-center`}>
              <span className="text-white font-medium text-lg">{lead.avatar}</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{lead.name}</h2>
              <p className="text-sm text-gray-600">{lead.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(lead.status)}`}>
            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
          </span>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <MessageCircle className="w-4 h-4" />
            <span>{lead.messages} messages</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Last updated {lead.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="p-6 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <User className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Client Name</p>
                <p className="font-medium text-gray-900">{lead.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Date</p>
                <p className="font-medium text-gray-900">N/A</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Email Address</p>
                <p className="font-medium text-gray-900 truncate">{lead.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Contact Number</p>
                <p className="font-medium text-gray-900">{lead.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-sm">
            <Briefcase className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-gray-500">Interested Service</p>
              <p className="font-medium text-gray-900">{lead.interestedService}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-gray-500">Project Budget</p>
              <p className="font-medium text-secondary-600">{lead.projectBudget}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {mockMessages.map((message, index) => (
          <div key={message.id} className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-primary-500" />
                <h3 className="font-medium text-gray-900">Message {index + 1}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  ✓ Sent
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Client Name</p>
                <p className="text-sm text-gray-900">{lead.name}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Email Address</p>
                <p className="text-sm text-gray-900">{lead.email}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Contact Number</p>
                <p className="text-sm text-gray-900">{lead.phone}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Date</p>
                <p className="text-sm text-gray-900">{message.date}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Interested Service</p>
                <p className="text-sm text-gray-900">{lead.interestedService}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Project Budget</p>
                <p className="text-sm text-secondary-600 font-medium">{lead.projectBudget}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Mail Subject</p>
                <p className="text-sm text-gray-900">{message.subject}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Requirements</p>
                <p className="text-sm text-gray-900">{message.requirements}</p>
              </div>

              {message.aiResponse && (
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-accent-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">AI Generated Response</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700 leading-relaxed">{message.aiResponse}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;