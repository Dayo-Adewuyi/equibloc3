"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CreateGigPage: React.FC = () => {
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [kpis, setKpis] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCompanyLogo(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Here you would handle form submission logic, such as posting to an API.
    console.log({
      companyLogo,
      jobTitle,
      companyName,
      rate,
      duration,
      type,
      jobDescription,
      kpis,
    });

    // Reset form after submission (if needed)
    setCompanyLogo(null);
    setJobTitle("");
    setCompanyName("");
    setRate("");
    setDuration("");
    setType("");
    setJobDescription("");
    setKpis("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Create a New Gig</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* File Upload */}
            <div>
              <label htmlFor="companyLogo" className="block text-sm font-medium text-gray-700">
                Company Logo
              </label>
              <input
                type="file"
                id="companyLogo"
                onChange={handleFileChange}
                className="mt-1 block w-full"
                accept="image/*"
              />
            </div>

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Rate */}
            <div>
              <label htmlFor="rate" className="block text-sm font-medium text-gray-700">
                Rate
              </label>
              <input
                type="text"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows={4}
                required
              />
            </div>

            {/* KPIs */}
            <div>
              <label htmlFor="kpis" className="block text-sm font-medium text-gray-700">
                KPIs
              </label>
              <textarea
                id="kpis"
                value={kpis}
                onChange={(e) => setKpis(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Post Gig
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateGigPage;
