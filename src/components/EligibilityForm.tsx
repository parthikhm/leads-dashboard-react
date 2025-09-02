import React from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '../types/FormData';
import { Send } from 'lucide-react';

interface EligibilityFormProps {
  onSubmit: (data: FormData) => void;
}

const EligibilityForm: React.FC<EligibilityFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const hasChildren = watch('hasChildren');

  const onFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8">
        {/* Personal Information Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-600 font-bold text-sm">1</span>
            </div>
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                type="text"
                className="form-input"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-error-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">What is your email address? *</label>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                className="form-input"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-error-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Country of citizenship *</label>
              <select {...register('countryOfCitizenship', { required: 'Country of citizenship is required' })} className="form-input">
                <option value="">Select country</option>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="philippines">Philippines</option>
                <option value="nigeria">Nigeria</option>
                <option value="pakistan">Pakistan</option>
                <option value="other">Other</option>
              </select>
              {errors.countryOfCitizenship && (
                <p className="text-error-500 text-sm mt-1">{errors.countryOfCitizenship.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Country of Residence *</label>
              <select {...register('countryOfResidence', { required: 'Country of residence is required' })} className="form-input">
                <option value="">Select country</option>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="philippines">Philippines</option>
                <option value="nigeria">Nigeria</option>
                <option value="pakistan">Pakistan</option>
                <option value="other">Other</option>
              </select>
              {errors.countryOfResidence && (
                <p className="text-error-500 text-sm mt-1">{errors.countryOfResidence.message}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Age Group *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('ageGroup', { required: 'Age group is required' })} type="radio" value="under-18" className="radio-input" />
                <label className="text-sm text-neutral-700">Under 18</label>
              </div>
              <div className="radio-item">
                <input {...register('ageGroup')} type="radio" value="18-29" className="radio-input" />
                <label className="text-sm text-neutral-700">18-29</label>
              </div>
              <div className="radio-item">
                <input {...register('ageGroup')} type="radio" value="30-39" className="radio-input" />
                <label className="text-sm text-neutral-700">30-39</label>
              </div>
              <div className="radio-item">
                <input {...register('ageGroup')} type="radio" value="40-49" className="radio-input" />
                <label className="text-sm text-neutral-700">40-49</label>
              </div>
              <div className="radio-item">
                <input {...register('ageGroup')} type="radio" value="50-59" className="radio-input" />
                <label className="text-sm text-neutral-700">50-59</label>
              </div>
              <div className="radio-item">
                <input {...register('ageGroup')} type="radio" value="over-59" className="radio-input" />
                <label className="text-sm text-neutral-700">Over 59</label>
              </div>
            </div>
            {errors.ageGroup && (
              <p className="text-error-500 text-sm mt-1">{errors.ageGroup.message}</p>
            )}
          </div>
        </div>

        {/* Education Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-secondary-600 font-bold text-sm">2</span>
            </div>
            Education
          </h3>

          <div className="form-group">
            <label className="form-label">What is your highest education level? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('highestEducation', { required: 'Education level is required' })} type="radio" value="high-school" className="radio-input" />
                <label className="text-sm text-neutral-700">High School</label>
              </div>
              <div className="radio-item">
                <input {...register('highestEducation')} type="radio" value="college-diploma" className="radio-input" />
                <label className="text-sm text-neutral-700">College Diploma</label>
              </div>
              <div className="radio-item">
                <input {...register('highestEducation')} type="radio" value="bachelors-degree" className="radio-input" />
                <label className="text-sm text-neutral-700">Bachelor's Degree</label>
              </div>
              <div className="radio-item">
                <input {...register('highestEducation')} type="radio" value="masters-degree" className="radio-input" />
                <label className="text-sm text-neutral-700">Master's Degree</label>
              </div>
              <div className="radio-item">
                <input {...register('highestEducation')} type="radio" value="phd" className="radio-input" />
                <label className="text-sm text-neutral-700">PhD or higher</label>
              </div>
              <div className="radio-item">
                <input {...register('highestEducation')} type="radio" value="trade-certificate" className="radio-input" />
                <label className="text-sm text-neutral-700">Trade Certificate</label>
              </div>
              <div className="radio-item">
                <input {...register('highestEducation')} type="radio" value="no-formal-education" className="radio-input" />
                <label className="text-sm text-neutral-700">No formal education</label>
              </div>
            </div>
            {errors.highestEducation && (
              <p className="text-error-500 text-sm mt-1">{errors.highestEducation.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Was your education completed outside of Canada? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('educationInCanada', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                <label className="text-sm text-neutral-700">Yes</label>
              </div>
              <div className="radio-item">
                <input {...register('educationInCanada')} type="radio" value="false" className="radio-input" />
                <label className="text-sm text-neutral-700">No</label>
              </div>
            </div>
            {errors.educationInCanada && (
              <p className="text-error-500 text-sm mt-1">Please select an option</p>
            )}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-accent-600 font-bold text-sm">3</span>
            </div>
            Work Experience
          </h3>

          <div className="form-group">
            <label className="form-label">How many years of full time, skilled work experience do you have? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('workExperience', { required: 'Work experience is required' })} type="radio" value="less-than-1" className="radio-input" />
                <label className="text-sm text-neutral-700">Less than 1 year</label>
              </div>
              <div className="radio-item">
                <input {...register('workExperience')} type="radio" value="1-2-years" className="radio-input" />
                <label className="text-sm text-neutral-700">1-2 years</label>
              </div>
              <div className="radio-item">
                <input {...register('workExperience')} type="radio" value="3-4-years" className="radio-input" />
                <label className="text-sm text-neutral-700">3-4 years</label>
              </div>
              <div className="radio-item">
                <input {...register('workExperience')} type="radio" value="5-6-years" className="radio-input" />
                <label className="text-sm text-neutral-700">5-6 years</label>
              </div>
              <div className="radio-item">
                <input {...register('workExperience')} type="radio" value="over-6-years" className="radio-input" />
                <label className="text-sm text-neutral-700">Over 6 years</label>
              </div>
            </div>
            {errors.workExperience && (
              <p className="text-error-500 text-sm mt-1">{errors.workExperience.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Is your work experience in a regulated profession? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('workInRegulatedProfession', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                <label className="text-sm text-neutral-700">Yes</label>
              </div>
              <div className="radio-item">
                <input {...register('workInRegulatedProfession')} type="radio" value="false" className="radio-input" />
                <label className="text-sm text-neutral-700">No</label>
              </div>
              <div className="radio-item">
                <input {...register('workInRegulatedProfession')} type="radio" value="not-sure" className="radio-input" />
                <label className="text-sm text-neutral-700">Not Sure</label>
              </div>
            </div>
            {errors.workInRegulatedProfession && (
              <p className="text-error-500 text-sm mt-1">Please select an option</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">What is your occupation title? *</label>
            <input
              {...register('occupation', { required: 'Occupation is required' })}
              type="text"
              className="form-input"
              placeholder="Enter your occupation"
            />
            {errors.occupation && (
              <p className="text-error-500 text-sm mt-1">{errors.occupation.message}</p>
            )}
          </div>
        </div>

        {/* Language Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-warning-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-warning-600 font-bold text-sm">4</span>
            </div>
            Language Skills
          </h3>

          <div className="form-group">
            <label className="form-label">Do you speak English or French? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('speakEnglishOrFrench', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                <label className="text-sm text-neutral-700">Yes</label>
              </div>
              <div className="radio-item">
                <input {...register('speakEnglishOrFrench')} type="radio" value="false" className="radio-input" />
                <label className="text-sm text-neutral-700">No</label>
              </div>
            </div>
            {errors.speakEnglishOrFrench && (
              <p className="text-error-500 text-sm mt-1">Please select an option</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">If you have would you take your level?</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('languageTest')} type="radio" value="beginner" className="radio-input" />
                <label className="text-sm text-neutral-700">Beginner</label>
              </div>
              <div className="radio-item">
                <input {...register('languageTest')} type="radio" value="intermediate" className="radio-input" />
                <label className="text-sm text-neutral-700">Intermediate</label>
              </div>
              <div className="radio-item">
                <input {...register('languageTest')} type="radio" value="advanced" className="radio-input" />
                <label className="text-sm text-neutral-700">Advanced</label>
              </div>
              <div className="radio-item">
                <input {...register('languageTest')} type="radio" value="fluent" className="radio-input" />
                <label className="text-sm text-neutral-700">Fluent</label>
              </div>
              <div className="radio-item">
                <input {...register('languageTest')} type="radio" value="native" className="radio-input" />
                <label className="text-sm text-neutral-700">Native</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Have you taken an official language test (IELTS, CELPIP, TEF, etc.)? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('languageTest', { required: 'This field is required' })} type="radio" value="yes" className="radio-input" />
                <label className="text-sm text-neutral-700">Yes</label>
              </div>
              <div className="radio-item">
                <input {...register('languageTest')} type="radio" value="no" className="radio-input" />
                <label className="text-sm text-neutral-700">No</label>
              </div>
            </div>
            {errors.languageTest && (
              <p className="text-error-500 text-sm mt-1">Please select an option</p>
            )}
          </div>
        </div>

        {/* Personal Circumstances Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-success-600 font-bold text-sm">5</span>
            </div>
            Personal Circumstances
          </h3>

          <div className="form-group">
            <label className="form-label">Marital Status *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('maritalStatus', { required: 'Marital status is required' })} type="radio" value="single" className="radio-input" />
                <label className="text-sm text-neutral-700">Single</label>
              </div>
              <div className="radio-item">
                <input {...register('maritalStatus')} type="radio" value="married" className="radio-input" />
                <label className="text-sm text-neutral-700">Married</label>
              </div>
              <div className="radio-item">
                <input {...register('maritalStatus')} type="radio" value="common-law" className="radio-input" />
                <label className="text-sm text-neutral-700">Common-law</label>
              </div>
              <div className="radio-item">
                <input {...register('maritalStatus')} type="radio" value="separated" className="radio-input" />
                <label className="text-sm text-neutral-700">Separated</label>
              </div>
              <div className="radio-item">
                <input {...register('maritalStatus')} type="radio" value="divorced" className="radio-input" />
                <label className="text-sm text-neutral-700">Divorced</label>
              </div>
              <div className="radio-item">
                <input {...register('maritalStatus')} type="radio" value="widowed" className="radio-input" />
                <label className="text-sm text-neutral-700">Widowed</label>
              </div>
            </div>
            {errors.maritalStatus && (
              <p className="text-error-500 text-sm mt-1">{errors.maritalStatus.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Do you have children? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('hasChildren', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                <label className="text-sm text-neutral-700">Yes</label>
              </div>
              <div className="radio-item">
                <input {...register('hasChildren')} type="radio" value="false" className="radio-input" />
                <label className="text-sm text-neutral-700">No</label>
              </div>
            </div>
            {errors.hasChildren && (
              <p className="text-error-500 text-sm mt-1">Please select an option</p>
            )}
          </div>

          {hasChildren === 'true' && (
            <div className="form-group">
              <label className="form-label">If yes, How many and what ages?</label>
              <input
                {...register('childrenAges')}
                type="text"
                className="form-input"
                placeholder="e.g., 2 children: ages 8 and 12"
              />
            </div>
          )}
        </div>

        {/* Immigration Goals Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-600 font-bold text-sm">6</span>
            </div>
            Immigration Goals
          </h3>

          <div className="form-group">
            <label className="form-label">Why are you interested in immigrating to Canada? *</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input {...register('immigrationInterest')} type="checkbox" value="permanent-residence" className="checkbox-input" />
                <label className="text-sm text-neutral-700">Permanent Residence (Express Entry or PNP)</label>
              </div>
              <div className="checkbox-item">
                <input {...register('immigrationInterest')} type="checkbox" value="work-permit" className="checkbox-input" />
                <label className="text-sm text-neutral-700">Work Permit</label>
              </div>
              <div className="checkbox-item">
                <input {...register('immigrationInterest')} type="checkbox" value="study-permit" className="checkbox-input" />
                <label className="text-sm text-neutral-700">Study Permit</label>
              </div>
              <div className="checkbox-item">
                <input {...register('immigrationInterest')} type="checkbox" value="family-sponsorship" className="checkbox-input" />
                <label className="text-sm text-neutral-700">Family Sponsorship</label>
              </div>
              <div className="checkbox-item">
                <input {...register('immigrationInterest')} type="checkbox" value="business-immigration" className="checkbox-input" />
                <label className="text-sm text-neutral-700">Business Immigration Program</label>
              </div>
              <div className="checkbox-item">
                <input {...register('immigrationInterest')} type="checkbox" value="refugee-claim" className="checkbox-input" />
                <label className="text-sm text-neutral-700">Refugee Claim</label>
              </div>
              <div className="checkbox-item">
                <input {...register('immigrationInterest')} type="checkbox" value="not-sure" className="checkbox-input" />
                <label className="text-sm text-neutral-700">I'm not sure</label>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Experience Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-secondary-600 font-bold text-sm">7</span>
            </div>
            Previous Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="form-label">Have you or your spouse previously studied or worked in Canada? *</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input {...register('studiedOrWorkedInCanada', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                  <label className="text-sm text-neutral-700">Yes</label>
                </div>
                <div className="radio-item">
                  <input {...register('studiedOrWorkedInCanada')} type="radio" value="false" className="radio-input" />
                  <label className="text-sm text-neutral-700">No</label>
                </div>
              </div>
              {errors.studiedOrWorkedInCanada && (
                <p className="text-error-500 text-sm mt-1">Please select an option</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Do you currently have a job offer from a Canadian employer? *</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input {...register('jobOfferFromCanadianEmployer', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                  <label className="text-sm text-neutral-700">Yes</label>
                </div>
                <div className="radio-item">
                  <input {...register('jobOfferFromCanadianEmployer')} type="radio" value="false" className="radio-input" />
                  <label className="text-sm text-neutral-700">No</label>
                </div>
              </div>
              {errors.jobOfferFromCanadianEmployer && (
                <p className="text-error-500 text-sm mt-1">Please select an option</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Do you have any relatives in Canada? *</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input {...register('hasRelativesInCanada', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                  <label className="text-sm text-neutral-700">Yes</label>
                </div>
                <div className="radio-item">
                  <input {...register('hasRelativesInCanada')} type="radio" value="false" className="radio-input" />
                  <label className="text-sm text-neutral-700">No</label>
                </div>
              </div>
              {errors.hasRelativesInCanada && (
                <p className="text-error-500 text-sm mt-1">Please select an option</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Do you have any settlement funds available? *</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input {...register('hasSettlementFunds', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                  <label className="text-sm text-neutral-700">Yes</label>
                </div>
                <div className="radio-item">
                  <input {...register('hasSettlementFunds')} type="radio" value="false" className="radio-input" />
                  <label className="text-sm text-neutral-700">No</label>
                </div>
              </div>
              {errors.hasSettlementFunds && (
                <p className="text-error-500 text-sm mt-1">Please select an option</p>
              )}
            </div>
          </div>
        </div>

        {/* Business Experience Section */}
        <div className="border-b border-neutral-200 pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-accent-600 font-bold text-sm">8</span>
            </div>
            Business Experience
          </h3>

          <div className="form-group">
            <label className="form-label">Do you or your spouse have a business or have managerial experience? *</label>
            <div className="radio-group">
              <div className="radio-item">
                <input {...register('businessOrManagerialExperience', { required: 'This field is required' })} type="radio" value="true" className="radio-input" />
                <label className="text-sm text-neutral-700">Yes</label>
              </div>
              <div className="radio-item">
                <input {...register('businessOrManagerialExperience')} type="radio" value="false" className="radio-input" />
                <label className="text-sm text-neutral-700">No</label>
              </div>
            </div>
            {errors.businessOrManagerialExperience && (
              <p className="text-error-500 text-sm mt-1">Please select an option</p>
            )}
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="pb-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-600 font-bold text-sm">9</span>
            </div>
            Additional Information
          </h3>

          <div className="form-group">
            <label className="form-label">Additional information or special circumstances (optional)</label>
            <textarea
              {...register('additionalInfo')}
              rows={4}
              className="form-input resize-none"
              placeholder="Please provide any additional information that might be relevant to your immigration assessment..."
            />
          </div>

          <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-accent-800">
              <strong>Note:</strong> After submitting this form, you will receive an email with the next steps, 
              including payment details for your eligibility report. The report is 
              prepared manually by a licensed Canadian immigration consultant.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg flex items-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>Submit Assessment</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EligibilityForm;