"use client";

import { ArrowLeftIcon, TrashIcon, PencilIcon } from "@heroicons/react/20/solid";
import { sampleUserProfile } from "../../components/userSampleData";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import EditProfileModal from "../../components/editProfileModal";
import ChangePasswordModal from "../../components/ChangePasswordModal";

export default function MyProfile() {
  const {
    fullName,
    professionalTitle,
    email,
    phoneNumber,
    location,
    address,
    portfolioLink,
    profilePicture,
  } = sampleUserProfile;

  const [resume, setResume] = useState(sampleUserProfile.resumeDoc);
  const [coverLetter, setCoverLetter] = useState(sampleUserProfile.coverLetterDoc);

  const handleDeleteResume = () => setResume("");
  const handleDeleteCoverLetter = () => setCoverLetter("");

    // Inside the MyProfile component (add near useState hooks)
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName,
    professionalTitle,
    email,
    phoneNumber,
    location,
    address,
  });
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  

const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFile: React.Dispatch<React.SetStateAction<string>>
) => {
  const file = e.target.files?.[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    setFile(fileURL); // Simulates setting an uploaded file; replace with upload logic if needed
  }
};

  return (
    <div className="containerDiv flex flex-col gap-5 justify-center items-center" style={{ paddingTop: "100px" }}>
      <div className="flatCard flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center gap-2">
          <Link href="/" className="IconButton"> 
        <ArrowLeftIcon className="w-5 h-5 text-[--color-primary]" />
        </Link>
          <p className="text-lg font-medium text-[--color-text]">My Profile</p>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-center gap-3 bg-[var(--primary-100)] py-10">
          {profilePicture ? (
            <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={profilePicture}
              alt={`${fullName}'s profile picture`}
              width={96}  // 24 * 4 = 96px
              height={96}
              className="object-cover"
            />
          </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-[--primary-100] flex items-center justify-center text-3xl font-bold">
              {fullName.split(" ").map(n => n[0]).join("")}
            </div>
          )}
          <p className="font-semibold" style={{ color: "#000000" }}>{fullName}</p>
          <span className="text-[--color-text-muted]">{professionalTitle}</span>
          <span className="text-[--color-text-muted]">{location}</span>
        </div>

        {/* Personal Info */}
        <div>
          <p className="text-xl font-semibold mb-4" style={{ color: "var(--color-primary)" }}>Personal Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[--color-text]">
            <div><strong>Full Name:</strong> {fullName}</div>
            <div><strong>Profession Title:</strong> {professionalTitle}</div>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>Phone Number:</strong> {phoneNumber}</div>
            <div><strong>Location:</strong> {location}</div>
            <div><strong>Address:</strong> {address}</div>
          </div>
        </div>

        {/* Documents */}
        <div>
          <p className="text-xl font-semibold mb-4" style={{ color: "var(--color-primary)" }}>My Documents</p>
          
          {/* Portfolio Link */}
          <div className="mb-4">
            <strong>Portfolio Link:</strong>{" "}
            <a href={portfolioLink} target="_blank" className="links">{portfolioLink}</a>
          </div>

          {/* Resume Document */}
          {resume ? (
            <div className="flex justify-between items-center bg-[--primary-100] p-2 rounded mb-2">
              <a href={resume} target="_blank" className="flex items-center gap-2 text-[--color-text]">
                <FaFilePdf className="text-red-600" />
                My Resume.pdf
              </a>
              <TrashIcon className="h-5 w-5 cursor-pointer" onClick={handleDeleteResume} />
            </div>
          ) : (
            <div className="border border-dashed border-[--color-border] rounded-lg p-4 text-center cursor-pointer hover:border-[--color-primary] mb-2">
              <input
                type="file"
                id="resumeUpload"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, setResume)}
                className="hidden"
              />
              <label htmlFor="resumeUpload" className="flex items-center justify-center gap-2 text-[--color-primary] font-medium cursor-pointer">
                <FaFilePdf className="text-red-600" />
                Upload Resume
              </label>
            </div>
          )}

          {/* Cover Letter Document */}
          {coverLetter ? (
            <div className="flex justify-between items-center bg-[--primary-100] p-2 rounded">
              <a href={coverLetter} target="_blank" className="flex items-center gap-2 text-[--color-text]">
                <FaFilePdf className="text-red-600" />
                Cover Letter.pdf
              </a>
              <TrashIcon className="h-5 w-5 cursor-pointer" onClick={handleDeleteCoverLetter} />
            </div>
          ) : (
            <div className="border border-dashed border-[--color-border] rounded-lg p-4 text-center cursor-pointer hover:border-[--color-primary]">
              <input
                type="file"
                id="coverLetterUpload"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, setCoverLetter)}
                className="hidden"
              />
              <label htmlFor="coverLetterUpload" className="flex items-center justify-center gap-2 text-[--color-primary] font-medium cursor-pointer">
                <FaFilePdf className="text-red-600" />
                Upload Cover Letter
              </label>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
         <button onClick={() => setIsPasswordModalOpen(true)} className="text-[--color-primary] underline text-lg">
          Change Password
        </button>
          <button
          onClick={() => setIsEditOpen(true)}
          className="button flex items-center gap-2"
        >
          Edit Profile
          <PencilIcon className="h-5 w-5" />
        </button>
        </div>

      </div>
      <EditProfileModal
      isOpen={isEditOpen}
      onClose={() => setIsEditOpen(false)}
      initialData={profileData}
      onSave={(updatedData) => setProfileData(updatedData)}
    />

    <ChangePasswordModal
       isOpen={isPasswordModalOpen}
      onClose={() => setIsPasswordModalOpen(false)}
      onSave={(data) => {
        console.log("Password change submitted:", data);
        // Optionally validate here or trigger API call
      }}
    />

    </div>
  );
}