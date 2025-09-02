import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-white font-bold text-2xl">LS</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Lead Management
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Your comprehensive solution for managing leads and growing your business
          </p>
        </div>
        
        <div className="space-y-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg">
            Get Started
          </button>
          <p className="text-gray-500 text-sm">
            Ready to transform your lead management process
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;