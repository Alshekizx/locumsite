// component/sampleData.tsx

export interface LocumJob {
  jobId: string;
  date: string;               // e.g., "2025-06-15"
  time: string;               // e.g., "08:00 AM - 04:00 PM"
  startTime: string;          // e.g., "08:00 AM"
  endTime: string;            // e.g., "04:00 PM"
  shift: string;              // e.g., "Morning", "Afternoon", "Evening", "Night"
  hours: number;              // e.g., 8
  totalPay: string;           // e.g., "£280"
  ratePerHour: string;        // e.g., "£35"
  location: string;           // e.g., "London, UK"
  unpaidMinutes: number;      // e.g., 30
  companyName: string;        // e.g., "MediCare Clinic"
  positionName: string;
  specialisation: string;    // e.g., "General Practice Locum"
  details: string;            // e.g., "Covering morning appointments and minor procedures"
  isApplied: boolean;
  country: string;          // Optional, e.g., "UK"
  distance: number;        // Optional, e.g., 5.0 (in miles or km)
}

// Sample data for locum jobs
export const LocumJobs: LocumJob[] = [
  {
    jobId: "LOC-1001",
    date: "2025-06-10",
    time: "09:00 AM - 05:00 PM",
    startTime: "09:00 AM",
    endTime: "05:00 PM",
    shift: "Day",
    hours: 8,
    ratePerHour: "£40",
    totalPay: "£320",
    location: "Manchester, UK",
    country: "Republic of Ireland",
    unpaidMinutes: 60,
    companyName: "Northfield Medical Centre",
    positionName: "GP Locum",
    specialisation: "GP Locum",
    distance: 6.0,
    details:
      "Full day surgery cover with walk-in consultations in the morning and appointments in the afternoon.",
    isApplied: false,
  },
  {
    jobId: "LOC-1002",
    date: "2025-06-12",
    time: "08:30 AM - 01:30 PM",
    startTime: "08:30 AM",
    endTime: "01:30 PM",
    shift: "Morning",
    hours: 5,
    ratePerHour: "£38",
    totalPay: "£190",
    location: "Leeds",
    country: "England",
    unpaidMinutes: 0,
    companyName: "Westside Clinic",
    positionName: "Practice Nurse Locum",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Morning clinic covering blood tests, wound dressings, and chronic disease checks.",
    isApplied: false,
  },
  {
    jobId: "LOC-1003",
    date: "2025-06-14",
    time: "01:00 PM - 09:00 PM",
    startTime: "01:00 PM",
    endTime: "09:00 PM",
    shift: "Evening",
    hours: 8,
    ratePerHour: "£42",
    totalPay: "£336",
    location: "Liverpool",
    country: "Wales",
    unpaidMinutes: 30,
    companyName: "Mersey Health Centre",
    positionName: "GP Locum",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Evening shift covering urgent care walk-ins and electronic prescriptions.",
    isApplied: false,
  },
  {
    jobId: "LOC-1004",
    date: "2025-06-15",
    time: "07:00 AM - 03:00 PM",
    startTime: "07:00 AM",
    endTime: "03:00 PM",
    shift: "Morning",
    hours: 8,
    ratePerHour: "£37",
    totalPay: "£296",
    location: "Birmingham",
    country: "England",
    unpaidMinutes: 45,
    companyName: "Harborne Medical Group",
    positionName: "Healthcare Assistant Locum",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Assist with morning rounds and patient triage, BP checks, and ECGs.",
    isApplied: false,
  },
  {
    jobId: "LOC-1005",
    date: "2025-06-17",
    time: "10:00 PM - 06:00 AM",
    startTime: "10:00 PM",
    endTime: "06:00 AM",
    shift: "Night",
    hours: 8,
    ratePerHour: "£50",
    totalPay: "£400",
    location: "London",
    country: "Wales",
    unpaidMinutes: 60,
    companyName: "CityCare Hospital",
    positionName: "Night GP Locum",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Overnight GP support for emergency cases and admissions. On-call room available.",
    isApplied: false,
  },
  {
    jobId: "LOC-1006",
    date: "2025-06-18",
    time: "12:00 PM - 08:00 PM",
    startTime: "12:00 PM",
    endTime: "08:00 PM",
    shift: "Afternoon",
    hours: 8,
    ratePerHour: "£41",
    totalPay: "£328",
    location: "Sheffield",
    country: "Republic of Ireland",
    unpaidMinutes: 30,
    companyName: "Southcare GP Practice",
    positionName: "Locum Doctor",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Busy afternoon clinic with mix of face-to-face and telephone appointments.",
    isApplied: false,
  },
  {
    jobId: "LOC-1007",
    date: "2025-06-20",
    time: "08:00 AM - 02:00 PM",
    startTime: "08:00 AM",
    endTime: "02:00 PM",
    shift: "Morning",
    hours: 6,
    ratePerHour: "£39",
    totalPay: "£234",
    location: "Nottingham",
    country: "England",
    unpaidMinutes: 15,
    companyName: "Trent Medical Centre",
    positionName: "Locum Nurse",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Routine patient reviews and minor ailments. Some admin support required.",
    isApplied: false,
  },
  {
    jobId: "LOC-1008",
    date: "2025-06-22",
    time: "02:00 PM - 10:00 PM",
    startTime: "02:00 PM",
    endTime: "10:00 PM",
    shift: "Evening",
    hours: 8,
    ratePerHour: "£45",
    totalPay: "£360",
    location: "Glasgow",
    country: "Wales",
    unpaidMinutes: 30,
    companyName: "Clyde Health Services",
    positionName: "Advanced Nurse Practitioner",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Out-of-hours urgent treatment centre. Must be confident in independent prescribing.",
    isApplied: false,
  },
  {
    jobId: "LOC-1009",
    date: "2025-06-23",
    time: "06:00 AM - 02:00 PM",
    startTime: "06:00 AM",
    endTime: "02:00 PM",
    shift: "Morning",
    hours: 8,
    ratePerHour: "£43",
    totalPay: "£344",
    location: "Edinburgh",
    country: "Scotland",
    unpaidMinutes: 60,
    companyName: "Royal Infirmary Clinic",
    positionName: "GP Locum",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Morning appointments with triage responsibilities. Basic computer skills required.",
    isApplied: false,
  },
  {
    jobId: "LOC-1010",
    date: "2025-06-25",
    time: "04:00 PM - 10:00 PM",
    startTime: "04:00 PM",
    endTime: "10:00 PM",
    shift: "Evening",
    hours: 6,
    ratePerHour: "£44",
    totalPay: "£264",
    location: "Brighton",
    country: "Northern Ireland",
    unpaidMinutes: 15,
    companyName: "Bright Medical Hub",
    positionName: "Locum GP",
    specialisation: "General Practice Locum",
    distance: 5.0,
    details:
      "Evening shift focusing on telephone triage and urgent prescriptions.",
    isApplied: false,
  }
];
