"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialData: {
    fullName: string;
    professionalTitle: string;
    email: string;
    phoneNumber: string;
    location: string;
    address: string;
  };
  onSave: (data: Props["initialData"]) => void;
};

export default function EditProfileModal({ isOpen, onClose, initialData, onSave }: Props) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="modalCard w-full max-w-[700px] max-h-[700px]"
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--color-text)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p
            className="text-xl font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            Personal Information
          </p>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-red-500"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label
                className="mb-1 text-sm font-medium capitalize"
                style={{ color: "var(--color-text-muted)" }}
              >
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                className="p-2 rounded border"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-card-bg)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-sans)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="inverseButton">
            Cancel
          </button>
          <button onClick={handleSubmit} className="button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}