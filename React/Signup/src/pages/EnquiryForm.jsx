import React, { useState } from "react";

const EnquiryForm = () => {
     const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    college: "",
    year: "",
    branch: "",
    courses: [],
    source: "",
    executive: "",
  });
 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = formData.courses;

      if (checked) {
        temp.push(value);
        setFormData((prev) => ({ ...prev, [name]: temp }));
      } else {
        temp = temp.filter((item) => item !== value);
        setFormData((prev) => ({ ...prev, [name]: temp }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      qualification: "",
      college: "",
      year: "",
      branch: "",
      courses: [],
      source: "",
      executive: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);try {
      console.log(formData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClear();
  };

   
  

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="bg-blue-200 w-full max-w-3xl rounded-xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Enquiry Form
        </h1>

        <form onSubmit={handleSubmit} onReset={handleClear}>
          {/* Name */}
          <div className="mb-4 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-2/3 border rounded px-3 py-2 "
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">Contact No</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-2/3 border rounded px-3 py-2 "
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-2/3 border rounded px-3 py-2 "
            />
          </div>

          {/* Qualification */}
          <div className="mb-4 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-2/3 border rounded px-3 py-2"
            />
          </div>

          {/* College */}
          <div className="mb-4 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">College</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-2/3 border rounded px-3 py-2"
            />
          </div>

          {/* Year & Branch */}
          <div className="mb-4 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">Year / Branch</label>
            <div className="w-2/3 flex gap-2">
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                className="w-1/2 border rounded px-3 py-2"
              />
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-1/2 border rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Courses */}
          <div className="mb-4 flex gap-4">
            <label className="w-1/3 font-semibold">Interested Course</label>
            <div className="w-2/3 space-y-1">
              <input
                type="checkbox"
                name="courses"
                value="Full Stack"
                checked={formData.courses.includes("Full Stack")}
                onChange={handleChange}
              />{" "}
              Full Stack <br />
              <input
                type="checkbox"
                name="courses"
                value="Data Science"
                checked={formData.courses.includes("Data Science")}
                onChange={handleChange}
              />{" "}
              Data Science <br />
              <input
                type="checkbox"
                name="courses"
                value="Java"
                checked={formData.courses.includes("Java")}
                onChange={handleChange}
              />{" "}
              Java <br />
              <input
                type="checkbox"
                name="courses"
                value="Python"
                checked={formData.courses.includes("Python")}
                onChange={handleChange}
              />{" "}
              Python
            </div>
          </div>

          {/* Source */}
          <div className="mb-4 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">Source</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-2/3 border rounded px-3 py-2"
            >
              <option value="">Select</option>
              <option value="call">Call</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend</option>
            </select>
          </div>

          {/* Executive */}
          <div className="mb-6 flex gap-4 items-center">
            <label className="w-1/3 font-semibold">Executive Name</label>
            <input
              type="text"
              name="executive"
              value={formData.executive}
              onChange={handleChange}
              className="w-2/3 border rounded px-3 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <button
              type="reset"
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white rounded-lg"
            >
              {isLoading ? "Submitting..." : "Submit"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
