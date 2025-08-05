import React, { useState, useEffect } from "react";

const FIELDS = {
  experience: {
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    description: "",
  },
  educationDetails: {
    school: "",
    degree: "",
    fieldOfStudy: "",
    from: "",
    to: "",
    description: "",
  },
  nameHeadline: {
    name: "",
    headline: "",
  },
};

const EditModal = ({ type, onClose, onSave, customFields }) => {
  const [formData, setFormData] = useState(FIELDS[type] || {});

  useEffect(() => {
    if (customFields) {
      setFormData(customFields);
    }
  }, [customFields]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    onSave(type, formData);
  };

  return (
    <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4 capitalize">Edit {type}</h2>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-3">
            <label className="block text-sm font-medium capitalize">{key}</label>
            <input
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </div>
        ))}
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="text-sm px-4 py-1 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="text-sm bg-blue-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
