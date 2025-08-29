import React from 'react';
import { MessageCircle, Clock, Users } from 'lucide-react';
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

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-secondary-400';
      case 'pending':
        return 'bg-yellow-400';
      case 'converted':
        return 'bg-accent-400';
      case 'inactive':
        return 'bg-neutral-400';
      default:
        return 'bg-neutral-400';
    }
  };

  return (
    <div className="flex-1 overflow-hidden bg-white">
      <div className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-primary-500" />
            <h2 className="text-lg font-semibold text-neutral-900">
              Leads ({leads.length})
            </h2>
          </div>
          <div className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
            {selectedLead ? `${leads.findIndex(l => l.id === selectedLead.id) + 1} of ${leads.length}` : `${leads.length} Total`}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-neutral-200">
          {leads.map((lead) => (
            <div
              key={lead.id}
              onClick={() => onSelectLead(lead)}
              className={`p-4 cursor-pointer transition-all duration-200 hover:bg-neutral-50 ${
                selectedLead?.id === lead.id ? 'bg-primary-50 border-r-4 border-primary-500' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className={`w-10 h-10 ${lead.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="text-white font-medium text-sm">{lead.avatar}</span>
                </div>

                {/* Lead Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-sm font-semibold text-neutral-900 truncate">
                        {lead.name}
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${getStatusDot(lead.status)}`}></span>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-neutral-500">
                      <div className="flex items-center space-x-1 bg-neutral-100 px-2 py-1 rounded-full">
                        <MessageCircle className="w-3 h-3" />
                        <span>{lead.messages}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>Last updated {lead.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm text-neutral-600 truncate">{lead.email}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-neutral-500">
                      <span className="font-medium">Service:</span> {lead.interestedService}
                    </div>
                    <div className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {lead.projectBudget}
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