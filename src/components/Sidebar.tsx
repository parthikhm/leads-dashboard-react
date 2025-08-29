import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  FileText, 
  Settings, 
  ChevronDown,
  FolderOpen,
  BookOpen
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-neutral-200 flex flex-col shadow-sm">
      {/* Logo Section */}
      <div className="p-6 border-b border-neutral-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">LS</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-neutral-900">Laravel Starter Kit</h1>
          </div>
        </div>
      </div>

      {/* Platform Section */}
      <div className="px-6 py-4">
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
          Platform
        </p>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <LayoutDashboard className="w-5 h-5 mr-3 text-neutral-500" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2.5 text-sm font-medium text-white bg-secondary-500 rounded-lg shadow-sm"
          >
            <Users className="w-5 h-5 mr-3" />
            Leads
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <BarChart3 className="w-5 h-5 mr-3 text-neutral-500" />
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <FileText className="w-5 h-5 mr-3 text-neutral-500" />
            Reports
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2.5 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <Settings className="w-5 h-5 mr-3 text-neutral-500" />
            Settings
          </a>
        </nav>
      </div>

      {/* Repository Section */}
      <div className="px-6 py-4 border-t border-neutral-200">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-neutral-800 cursor-pointer transition-colors">
            <FolderOpen className="w-4 h-4" />
            <span>Repository</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-neutral-800 cursor-pointer transition-colors">
            <BookOpen className="w-4 h-4" />
            <span>Documentation</span>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="mt-auto p-6 border-t border-neutral-200">
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-neutral-50 rounded-lg p-2 -m-2 transition-colors">
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">PM</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-900">Parthik Modi</p>
            <p className="text-xs text-neutral-500">Admin</p>
          </div>
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;