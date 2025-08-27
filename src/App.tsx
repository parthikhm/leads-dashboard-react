import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import LeadsTable from './components/LeadsTable';
import LeadDetails from './components/LeadDetails';
import { Lead } from './types/Lead';

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Manthan Bhavsar',
    email: 'manthan.bhavsar@gmail.com',
    phone: '9377449881',
    status: 'active',
    messages: 2,
    lastUpdated: 'N/A',
    projectBudget: '$10K',
    interestedService: 'Website Development',
    avatar: 'MB',
    color: 'bg-primary-500'
  },
  {
    id: '2',
    name: 'Rudra Patel',
    email: 'rudra.patel@metizsoft.com',
    phone: '9876543210',
    status: 'pending',
    messages: 15,
    lastUpdated: '2 days ago',
    projectBudget: '$25K',
    interestedService: 'Mobile App Development',
    avatar: 'RT',
    color: 'bg-secondary-500'
  },
  {
    id: '3',
    name: 'Rinkal Mohan',
    email: 'rinkal.mohan@metizsoft.com',
    phone: '9123456789',
    status: 'converted',
    messages: 2,
    lastUpdated: '1 week ago',
    projectBudget: '$15K',
    interestedService: 'E-commerce Development',
    avatar: 'RM',
    color: 'bg-accent-500'
  },
  {
    id: '4',
    name: 'Kunal Prajapati',
    email: 'kunal.p.prajapati1990@gmail.com',
    phone: '9988776655',
    status: 'active',
    messages: 1,
    lastUpdated: '3 days ago',
    projectBudget: '$8K',
    interestedService: 'SEO Services',
    avatar: 'KP',
    color: 'bg-orange-500'
  },
  {
    id: '5',
    name: 'Kunal Prajapati',
    email: 'metizeo@gmail.com',
    phone: '9876543211',
    status: 'inactive',
    messages: 2,
    lastUpdated: '1 month ago',
    projectBudget: '$12K',
    interestedService: 'Digital Marketing',
    avatar: 'KP',
    color: 'bg-purple-500'
  },
  {
    id: '6',
    name: 'Rehan Gheewala',
    email: 'rehanmangheewala@gmail.com',
    phone: '9123456780',
    status: 'pending',
    messages: 1,
    lastUpdated: '5 days ago',
    projectBudget: '$20K',
    interestedService: 'Custom Software',
    avatar: 'RG',
    color: 'bg-green-500'
  },
  {
    id: '7',
    name: 'Suneet Suvera',
    email: 'sales@analogtechnologies.com',
    phone: '9876543212',
    status: 'converted',
    messages: 4,
    lastUpdated: '2 weeks ago',
    projectBudget: '$30K',
    interestedService: 'Enterprise Solution',
    avatar: 'SS',
    color: 'bg-blue-500'
  },
  {
    id: '8',
    name: 'Kasandra Choksi',
    email: 'partners@polarus.com',
    phone: '9123456781',
    status: 'active',
    messages: 4,
    lastUpdated: '1 day ago',
    projectBudget: '$18K',
    interestedService: 'Cloud Migration',
    avatar: 'KC',
    color: 'bg-pink-500'
  },
  {
    id: '9',
    name: 'John Shelton',
    email: 'johnshelton242@gmail.com',
    phone: '9876543213',
    status: 'pending',
    messages: 1,
    lastUpdated: '4 days ago',
    projectBudget: '$22K',
    interestedService: 'Data Analytics',
    avatar: 'JS',
    color: 'bg-indigo-500'
  }
];

function App() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(mockLeads[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const filteredLeads = mockLeads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col">
            <SearchFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              dateFrom={dateFrom}
              setDateFrom={setDateFrom}
              dateTo={dateTo}
              setDateTo={setDateTo}
            />
            <LeadsTable
              leads={filteredLeads}
              selectedLead={selectedLead}
              onSelectLead={setSelectedLead}
            />
          </div>
          {selectedLead && (
            <LeadDetails
              lead={selectedLead}
              onClose={() => setSelectedLead(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;