export interface FormData {
  // Personal Information
  fullName: string;
  email: string;
  countryOfCitizenship: string;
  countryOfResidence: string;
  ageGroup: string;
  
  // Education
  highestEducation: string;
  educationInCanada: boolean;
  
  // Work Experience
  workExperience: string;
  workInRegulatedProfession: boolean;
  occupation: string;
  
  // Language
  speakEnglishOrFrench: boolean;
  languageTest: string;
  
  // Immigration Goals
  immigrationGoal: string;
  
  // Personal Circumstances
  maritalStatus: string;
  hasChildren: boolean;
  childrenAges?: string;
  
  // Immigration Interest
  immigrationInterest: string;
  
  // Previous Experience
  studiedOrWorkedInCanada: boolean;
  jobOfferFromCanadianEmployer: boolean;
  hasRelativesInCanada: boolean;
  hasSettlementFunds: boolean;
  
  // Business Experience
  businessOrManagerialExperience: boolean;
  
  // Additional Information
  additionalInfo?: string;
}