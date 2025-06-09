// components/forJobSeekerComponent/userSampleData

// Type and Interface Definition
type UserProfile = {
  fullName: string;
  professionalTitle: string;
  email: string;
  phoneNumber: string;
  location: string;
  address: string;
  portfolioLink: string;
  coverLetterDoc: string;
  resumeDoc: string;
  profilePicture: string; 
};

// Sample User Profile Data
export const sampleUserProfile: UserProfile = {
  fullName: "Seyi Adeyemi",
  professionalTitle: "Full-Stack Software Developer",
  email: "seyi.adeyemi@example.com",
  phoneNumber: "+234-801-234-5678",
  location: "Abuja, Nigeria",
  address: "Plot 17, City Homes Estate, Gwarimpa, Abuja, Nigeria",
  portfolioLink: "https://seyi-dev.vercel.app",
  coverLetterDoc: "https://example.com/docs/seyi_adele_cover_letter.pdf",
  resumeDoc: "https://example.com/docs/seyi_adele_resume.pdf",
  profilePicture: "/images/default.jpg" 
};