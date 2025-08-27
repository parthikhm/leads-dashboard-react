import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { Lead } from '../types/Lead';

interface LeadsTableProps {
  leads: Lead[];
  selectedLead: Lead | null;
  onSelectLead: (lead: Lead) => void;
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads, selectedLead, onSelectLead }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'converted':
        return 'bg-blue-100 text-blue-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-400';
      case 'pending':
        return 'bg-yellow-400';
      case 'converted':
        return 'bg-blue-400';
      case 'inactive':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              Leads ({leads.length})
            </h2>
          </div>
          <div className="text-sm text-gray-500">
            {selectedLead ? `${leads.findIndex(l => l.id === selectedLead.id) + 1} of ${leads.length}` : `${leads.length} Total`}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-200">
          {leads.map((lead) => (
            <div
              key={lead.id}
              onClick={() => onSelectLead(lead)}
              className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                selectedLead?.id === lead.id ? 'bg-primary-50 border-r-4 border-primary-500' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className={`w-10 h-10 ${lead.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-medium text-sm">{lead.avatar}</span>
                </div>

                {/* Lead Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {lead.name}
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${getStatusDot(lead.status)}`}></span>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{lead.messages} messages</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>Last updated {lead.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-gray-600 truncate">{lead.email}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Service:</span> {lead.interestedService}
                    </div>
                    <div className="text-xs font-medium text-secondary-600">
                      Budget: {lead.projectBudget}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;