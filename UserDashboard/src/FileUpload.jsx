import React, { useState } from "react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const validFiles = uploadedFiles.filter((file) =>
      ["image/png", "image/jpeg", "application/pdf"].includes(file.type)
    );

    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-4 rounded-md mb-4">
        <input
          type="file"
          multiple
          accept="image/png, image/jpeg, application/pdf"
          className="hidden"
          id="fileInput"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
        >
          Select Files
        </label>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Uploaded Files:
        </h2>
        {files.length === 0 ? (
          <p className="text-gray-500">No files uploaded yet.</p>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {files.map((file, index) => (
              <li key={index} className="text-gray-600">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
