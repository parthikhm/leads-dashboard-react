import React, { useState } from 'react';
import { MapPin, User, GraduationCap, Briefcase, FileText, CheckCircle } from 'lucide-react';
import EligibilityForm from './components/EligibilityForm';
import AuthModal from './components/AuthModal';
import SuccessPage from './components/SuccessPage';

function App() {
  const [currentStep, setCurrentStep] = useState<'form' | 'auth' | 'success'>('form');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    
    if (isLoggedIn) {
      // User is already logged in, proceed to success
      setCurrentStep('success');
    } else {
      // User not logged in, show auth modal
      setShowAuthModal(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
    setCurrentStep('success');
  };

  const handleStartOver = () => {
    setCurrentStep('form');
    setFormData(null);
  };

  if (currentStep === 'success') {
    return <SuccessPage onStartOver={handleStartOver} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-900">Immigration Assessment</h1>
                <p className="text-sm text-neutral-600">Eligibility Evaluation Portal</p>
              </div>
            </div>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-neutral-700">Welcome back!</span>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Immigration Eligibility Assessment
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Complete this form to request a personalized evaluation of your immigration options. 
            Assessments are completed by licensed Canadian immigration consultants.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="ml-2 text-sm font-medium text-primary-600">Assessment Form</span>
            </div>
            <div className="w-8 h-px bg-neutral-300"></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isLoggedIn ? 'bg-success-600' : 'bg-neutral-300'
              }`}>
                <User className="w-4 h-4 text-white" />
              </div>
              <span className={`ml-2 text-sm font-medium ${
                isLoggedIn ? 'text-success-600' : 'text-neutral-500'
              }`}>Authentication</span>
            </div>
            <div className="w-8 h-px bg-neutral-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="ml-2 text-sm font-medium text-neutral-500">Submission Complete</span>
            </div>
          </div>
        </div>

        <EligibilityForm onSubmit={handleFormSubmit} />
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
}

export default App;