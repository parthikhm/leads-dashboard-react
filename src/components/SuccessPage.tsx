import React from 'react';
import { CheckCircle, Mail, FileText, ArrowLeft } from 'lucide-react';

interface SuccessPageProps {
  onStartOver: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onStartOver }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-success-50 via-white to-primary-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-success-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Assessment Submitted Successfully!
          </h1>
          
          <p className="text-lg text-neutral-600 mb-8">
            Thank you for completing the Immigration Eligibility Assessment. 
            Your form has been submitted and linked to your account.
          </p>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2 text-primary-600" />
              What Happens Next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-primary-600 font-bold text-xs">1</span>
                </div>
                <p className="text-neutral-700">
                  You will receive a confirmation email with your assessment details
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-secondary-600 font-bold text-xs">2</span>
                </div>
                <p className="text-neutral-700">
                  Our licensed immigration consultant will review your information
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-accent-600 font-bold text-xs">3</span>
                </div>
                <p className="text-neutral-700">
                  You'll receive a detailed eligibility report within 2-3 business days
                </p>
              </div>
            </div>
          </div>

          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-center mb-2">
              <FileText className="w-5 h-5 text-warning-600 mr-2" />
              <h4 className="font-semibold text-warning-800">Important Note</h4>
            </div>
            <p className="text-sm text-warning-700">
              The assessment report is prepared manually by a licensed Canadian immigration consultant. 
              You will receive payment details for your eligibility report via email.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onStartOver}
              className="flex items-center justify-center space-x-2 bg-neutral-100 text-neutral-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Submit Another Assessment</span>
            </button>
            
            <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg">
              Check Email for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;