// components/forJobSeakerComponent/userSampleData.ts

export type UserProfile = {
  fullName: string;
  professionalTitle: string;
  email: string;
  phoneNumber: string;
  location: string;
  address: string;
  portfolioLink: string;
  profilePicture: string; // URL or empty string if no picture
  resumeDoc: string;      // URL or empty string if not uploaded
  coverLetterDoc: string; // URL or empty string if not uploaded
};

export const sampleUserProfile: UserProfile = {
  fullName: "Seyi Adeyemi",
  professionalTitle: "Frontend Developer",
  email: "seyi@example.com",
  phoneNumber: "+234 701 234 5678",
  location: "Abuja, Nigeria",
  address: "Plot 23, Gwarimpa Estate, Abuja",
  portfolioLink: "https://seyi.dev",
  profilePicture: "https://via.placeholder.com/150",
  resumeDoc: "https://example.com/sample-resume.pdf",
  coverLetterDoc: "https://example.com/sample-coverletter.pdf",
};