import FileUpload from "./FileUpload";
// UserDashboard.jsx
const UserDashboard = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            User Dashboard
          </h1>
          <p className="text-gray-500 mb-6">
            Upload your documents (Images or PDFs) here.
          </p>
          <FileUpload />
        </div>
      </div>
    );
  };
  
  export default UserDashboard;  // Ensure this export is default
  