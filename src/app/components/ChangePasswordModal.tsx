import React, { useState } from "react";

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
  onSave
}) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    onClose();
  };

  // 👇 Prevent modal from rendering if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="modalCard max-w-md w-full">
        <p className=" font-semibold mb-10" style={{color:"var(--color-primary)"}}>
          Change Password
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)]">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              className="mt-1 block w-full p-2 border border-[var(--color-border)] rounded-md"
              value={formData.currentPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)]">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              className="mt-1 block w-full p-2 border border-[var(--color-border)] rounded-md"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)]">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="mt-1 block w-full p-2 border border-[var(--color-border)] rounded-md"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="inverseButton">
              Cancel
            </button>
            <button type="submit" className="button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
