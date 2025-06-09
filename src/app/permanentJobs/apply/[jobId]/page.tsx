'use client'; // ⬅️ Required for using useState and other hooks

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { sampleJobs } from "@/app/components/permanentJobsComponent/sampleData";
import ApplySection from "../../../components/applyCard";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ApplyPage = () => {
  const params = useParams();
  const jobId = params?.jobId as string;
  const job = sampleJobs.find((j) => j.jobId === jobId);
  const router = useRouter();

  const [resumeName, setResumeName] = useState<string | null>(null);
  const [coverLetterName, setCoverLetterName] = useState<string | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFileName: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  if (!job) {
    return <div className="text-center py-20 text-xl">Job not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 space-y-8">
      {/* Back Icon and Title */}
      <div className="flex items-center gap-2">

        <Link href="/forJobSeeker" className="IconButton"> 
        <ArrowLeftIcon className="w-5 h-5 text-[--color-primary]" />
        </Link>
        <p className="text-lg font-medium">Apply</p>
      </div>

      {/* Job Description */}
      <div>
        <span className="block text-sm font-medium text-[--color-text-muted] mb-2">
          Job Description
        </span>
        <ApplySection jobs={[job]} />
      </div>

      {/* Resume Upload */}
      <div className="space-y-2">
        <label className="text-[--color-text] font-medium">Upload Your Resume</label>
        <div className="border border-dashed border-[--color-border] rounded-lg p-4 text-center cursor-pointer hover:border-[--color-primary]">
          <input
            type="file"
            id="resumeUpload"
            accept=".pdf"
            onChange={(e) => handleFileChange(e, setResumeName)}
            className="hidden"
          />
          <label htmlFor="resumeUpload" className="flex items-center justify-center gap-2 text-[--color-primary] font-medium cursor-pointer">
            <DocumentArrowUpIcon className="w-5 h-5" />
            {resumeName ? resumeName : "Upload resume"}
          </label>
        </div>
      </div>

      {/* Cover Letter Upload */}
      <div className="space-y-2">
        <label className="text-[--color-text] font-medium">
          Upload Cover Letter <span className="text-sm text-[--color-text-muted]">(optional)</span>
        </label>
        <div className="border border-dashed border-[--color-border] rounded-lg p-4 text-center cursor-pointer hover:border-[--color-primary]">
          <input
            type="file"
            id="coverLetterUpload"
            accept=".pdf"
            onChange={(e) => handleFileChange(e, setCoverLetterName)}
            className="hidden"
          />
          <label htmlFor="coverLetterUpload" className="flex items-center justify-center gap-2 text-[--color-primary] font-medium cursor-pointer">
            <DocumentArrowUpIcon className="w-5 h-5" />
            {coverLetterName ? coverLetterName : "Upload cover letter"}
          </label>
        </div>
      </div>

      {/* Apply Button */}
      <button
  className="w-full button"
  onClick={() => router.push("/permanentJobs/apply/success")}
>
  Apply
</button>
    </div>
  );
};

export default ApplyPage;
