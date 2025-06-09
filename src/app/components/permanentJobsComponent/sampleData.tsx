// component/sampleData.tsx
export interface Job {
  jobId: string;
  positionName: string;
  jobSector: string;
  location: string;
  country: string;
  jobType: string;
  workType: string;
  salaryRange: string;
  jobLevel: string;
  jobDescription: string;
  jobResponsibility: string[];
  jobRequirement: string[];
  isApplied: boolean;
}

// Sample data for jobs
export const sampleJobs: Job[] = [
  {
    jobId: "LOC001",
    positionName: "Locum Pharmacist",
    jobSector: "Healthcare",
    location: "Abuja",
    country: "England",
    jobType: "Full-Time",
    workType: "On-site",
    salaryRange: "₦15,000/day",
    jobLevel: "Mid-Level",
    jobDescription:
      "We are seeking a registered Locum Pharmacist to fill in at our retail pharmacy for a short-term contract.",
    jobResponsibility: [
      "Dispense prescription medications accurately",
      "Provide advice on drug interactions and dosage",
      "Maintain inventory and regulatory compliance",
    ],
    jobRequirement: [
      "Bachelor’s degree in Pharmacy (B.Pharm)",
      "Valid practicing license from PCN",
      "Previous locum experience is a plus",
    ],
    isApplied: false,
  },
  {
    jobId: "LOC002",
    positionName: "Locum Medical Officer",
    jobSector: "Medical & Clinical",
    location: "Port Harcourt",
    country: "Scotland",
    jobType: "Part-Time",
    workType: "On-site",
    salaryRange: "₦25,000/day",
    jobLevel: "Junior-Level",
    jobDescription:
      "A reputable hospital is in need of a Locum Medical Officer for weekend coverage and public holidays.",
    jobResponsibility: [
      "Attend to outpatient and emergency cases",
      "Prescribe medications and conduct basic procedures",
      "Work closely with nurses and other clinical staff",
    ],
    jobRequirement: [
      "MBBS or equivalent medical degree",
      "Valid MDCN license",
      "Ability to work independently under pressure",
    ],
    isApplied: true,
  },
  {
    jobId: "LOC003",
    positionName: "Locum Nurse (RN)",
    jobSector: "Nursing",
    location: "Ibadan",
    country: "Wales",
    jobType: "Locum",
    workType: "On-site",
    salaryRange: "₦12,000/day",
    jobLevel: "Mid-Level",
    jobDescription:
      "We require a Registered Nurse for weekend locum shifts in a private hospital.",
    jobResponsibility: [
      "Monitor patient vitals and administer medication",
      "Assist doctors with procedures",
      "Maintain patient records and care plans",
    ],
    jobRequirement: [
      "Registered Nurse (RN) certification",
      "Nursing and Midwifery Council license",
      "1+ years of clinical experience",
    ],
    isApplied: false,
  },
  {
    jobId: "LOC004",
    positionName: "Locum Laboratory Scientist",
    jobSector: "Laboratory Services",
    location: "Benin City",
    country: "Northern Ireland",
    jobType: "Locum",
    workType: "On-site",
    salaryRange: "₦10,000/day",
    jobLevel: "Junior-Level",
    jobDescription:
      "Diagnostic center seeks a Locum Lab Scientist for weekday morning shifts.",
    jobResponsibility: [
      "Conduct laboratory tests and analyze results",
      "Prepare reports for clinicians",
      "Ensure lab safety and cleanliness",
    ],
    jobRequirement: [
      "BMLS degree",
      "Valid license from MLSCN",
      "Attention to detail and accuracy",
    ],
    isApplied: false,
  },
  {
    jobId: "LOC005",
    positionName: "Locum Radiographer",
    jobSector: "Medical Imaging",
    location: "Enugu",
    country: "Republic of Ireland",
    jobType: "Part-Time",
    workType: "On-site",
    salaryRange: "₦18,000/day",
    jobLevel: "Mid-Level",
    jobDescription:
      "Locum Radiographer needed for X-ray and ultrasound imaging at a diagnostic center.",
    jobResponsibility: [
      "Perform diagnostic imaging procedures",
      "Maintain imaging equipment",
      "Assist physicians with imaging analysis",
    ],
    jobRequirement: [
      "B.Sc. in Radiography",
      "Valid professional license",
      "Experience with digital imaging systems",
    ],
    isApplied: true,
  },
  {
    jobId: "LOC006",
    positionName: "Locum Dental Surgeon",
    jobSector: "Dental",
    location: "Lagos",
    country: "England",
    jobType: "Contract",
    workType: "On-site",
    salaryRange: "₦20,000/day",
    jobLevel: "Senior-Level",
    jobDescription:
      "Dental clinic seeks experienced Locum Dental Surgeon for holiday coverage.",
    jobResponsibility: [
      "Perform dental check-ups and treatments",
      "Conduct minor oral surgeries",
      "Advise patients on oral hygiene",
    ],
    jobRequirement: [
      "Bachelor of Dental Surgery (BDS)",
      "Valid license with MDCN",
      "3+ years of dental experience",
    ],
    isApplied: false,
  },
  {
    jobId: "LOC007",
    positionName: "Locum Physiotherapist",
    jobSector: "Rehabilitation",
    location: "Abeokuta",
    country: "Scotland",
    jobType: "Part-Time",
    workType: "On-site",
    salaryRange: "₦15,000/day",
    jobLevel: "Mid-Level",
    jobDescription:
      "Physiotherapy center requires a Locum Physiotherapist for weekend sessions.",
    jobResponsibility: [
      "Assess and treat physical injuries",
      "Develop personalized recovery plans",
      "Document patient progress",
    ],
    jobRequirement: [
      "BPT or equivalent in Physiotherapy",
      "License from MRTBN",
      "Excellent interpersonal skills",
    ],
    isApplied: true,
  },
  {
    jobId: "LOC008",
    positionName: "Locum Optometrist",
    jobSector: "Eye Care",
    location: "Ilorin",
    country: "Wales",
    jobType: "Locum",
    workType: "On-site",
    salaryRange: "₦14,000/day",
    jobLevel: "Junior-Level",
    jobDescription:
      "Eye clinic requires a Locum Optometrist for weekday evening clinics.",
    jobResponsibility: [
      "Perform vision tests and eye exams",
      "Prescribe corrective lenses",
      "Refer patients for specialized care if needed",
    ],
    jobRequirement: [
      "Doctor of Optometry (OD)",
      "Licensed with Optometrists & Dispensing Opticians Board",
      "Good communication skills",
    ],
    isApplied: false,
  },
  {
    jobId: "LOC009",
    positionName: "Locum Psychiatric Nurse",
    jobSector: "Mental Health",
    location: "Kaduna",
    country: "Northern Ireland",
    jobType: "Part-Time",
    workType: "On-site",
    salaryRange: "₦13,000/day",
    jobLevel: "Mid-Level",
    jobDescription:
      "Mental health facility seeks Locum Psychiatric Nurse for overnight shifts.",
    jobResponsibility: [
      "Support patients with mental health issues",
      "Administer medication and therapy support",
      "Collaborate with mental health professionals",
    ],
    jobRequirement: [
      "RN with specialty in psychiatry",
      "Mental health nursing experience",
      "Compassionate and patient-centered approach",
    ],
    isApplied: false,
  },
  {
    jobId: "LOC010",
    positionName: "Locum Community Health Extension Worker",
    jobSector: "Primary Healthcare",
    location: "Osogbo",
    country: "Republic of Ireland",
    jobType: "Contract",
    workType: "On-site",
    salaryRange: "₦8,000/day",
    jobLevel: "Entry-Level",
    jobDescription:
      "Health center is hiring a CHEW on a locum basis for outreach and routine checks.",
    jobResponsibility: [
      "Conduct community health education",
      "Provide first aid and immunization services",
      "Keep accurate health records",
    ],
    jobRequirement: [
      "CHEW certificate",
      "Experience in rural healthcare is an advantage",
      "Fluent in local language",
    ],
    isApplied: false,
  },
  {
    jobId: "LOC011",
    positionName: "Locum Midwife",
    jobSector: "Maternity Services",
    location: "Asaba",
    country: "England",
    jobType: "Locum",
    workType: "On-site",
    salaryRange: "₦16,000/day",
    jobLevel: "Mid-Level",
    jobDescription:
      "We are looking for an experienced Midwife to provide locum maternity support during night shifts.",
    jobResponsibility: [
      "Provide antenatal and postnatal care",
      "Assist during labour and delivery",
      "Monitor mother and baby well-being",
    ],
    jobRequirement: [
      "Qualified Midwife (RM)",
      "Registered with NMCN",
      "2+ years of experience in labor wards",
    ],
    isApplied: true,
  },
];