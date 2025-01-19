"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [insightResult, setInsightResult] = useState(null);
  const [formVisible, setFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    gender: "",
    state: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const payload = {
      name: formData.name,
      dob: formData.dateOfBirth,
      time_of_birth: formData.timeOfBirth,
      gender: formData.gender,
      state: formData.state,
      city: formData.location,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/generate_kundali", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Kundali generated:", result);

        // Send the result to /api/getInsight
        try {
          const insightResponse = await fetch("/api/getInsight", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: result }),
          });

          if (insightResponse.ok) {
            const insightResult = await insightResponse.json();
            setInsightResult(insightResult);
            setFormVisible(false);
          } else {
            console.error("Failed to get insight");
          }
        } catch (insightError) {
          console.error(
            "Error sending result to /api/getInsight:",
            insightError
          );
        }
      } else {
        console.error("Failed to generate kundali");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChatRedirect = () => {
    router.push('/dashboard/chat');
  };

  const renderInsightResult = (result) => {
    const data = JSON.parse(result.outputs[0].outputs[0].results.message.text);
    return (
      <div className="insight-result p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Astrological Insights for {data.name}
        </h2>
        <div className="insight-section mb-4">
          <h3 className="text-xl font-semibold mb-2">Career</h3>
          <p>
            <strong>Summary:</strong> {data.Career.Summary}
          </p>
          <p>
            <strong>Opportunities:</strong>{" "}
            {data.Career.Opportunities.join(", ")}
          </p>
          <p>
            <strong>Challenges:</strong> {data.Career.Challenges.join(", ")}
          </p>
          <p>
            <strong>Advice:</strong> {data.Career.Advice}
          </p>
        </div>
        <div className="insight-section mb-4">
          <h3 className="text-xl font-semibold mb-2">Relationships</h3>
          <p>
            <strong>Summary:</strong> {data.Relationships.Summary}
          </p>
          <div className="insight-subsection mb-2">
            <h4 className="text-lg font-semibold mb-1">Romantic</h4>
            <p>
              <strong>Compatibility:</strong>{" "}
              {data.Relationships.Romantic.Compatibility}
            </p>
            <p>
              <strong>Challenges:</strong>{" "}
              {data.Relationships.Romantic.Challenges.join(", ")}
            </p>
            <p>
              <strong>Advice:</strong> {data.Relationships.Romantic.Advice}
            </p>
          </div>
          <div className="insight-subsection mb-2">
            <h4 className="text-lg font-semibold mb-1">Personal</h4>
            <p>
              <strong>Friendships:</strong>{" "}
              {data.Relationships.Personal.Friendships.join(", ")}
            </p>
            <p>
              <strong>Social Interactions:</strong>{" "}
              {data.Relationships.Personal.SocialInteractions}
            </p>
            <p>
              <strong>Advice:</strong> {data.Relationships.Personal.Advice}
            </p>
          </div>
        </div>
        <div className="insight-section mb-4">
          <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
          <p>
            <strong>Areas for Improvement:</strong>{" "}
            {data.PersonalGrowth.AreasForImprovement.join(", ")}
          </p>
          <p>
            <strong>Spiritual Development:</strong>{" "}
            {data.PersonalGrowth.SpiritualDevelopment}
          </p>
          <p>
            <strong>Life Lessons:</strong>{" "}
            {data.PersonalGrowth.LifeLessons.join(", ")}
          </p>
        </div>
        <div className="insight-section mb-4">
          <h3 className="text-xl font-semibold mb-2">Family</h3>
          <p>
            <strong>Dynamics:</strong> {data.Family.Dynamics}
          </p>
          <p>
            <strong>Support:</strong> {data.Family.Support}
          </p>
          <p>
            <strong>Challenges:</strong> {data.Family.Challenges.join(", ")}
          </p>
        </div>
        <div className="insight-section mb-4">
          <h3 className="text-xl font-semibold mb-2">Social Connections</h3>
          <p>
            <strong>Overview:</strong> {data.SocialConnections.Overview}
          </p>
          <p>
            <strong>Opportunities:</strong>{" "}
            {data.SocialConnections.Opportunities.join(", ")}
          </p>
          <p>
            <strong>Challenges:</strong>{" "}
            {data.SocialConnections.Challenges.join(", ")}
          </p>
          <p>
            <strong>Advice:</strong> {data.SocialConnections.Advice}
          </p>
        </div>
        <div className="insight-section mb-4">
          <h3 className="text-xl font-semibold mb-2">Daily Horoscope</h3>
          <p>
            <strong>Summary:</strong> {data.DailyHoroscope.Summary}
          </p>
          <p>
            <strong>Advice:</strong> {data.DailyHoroscope.Advice}
          </p>
          <p>
            <strong>Transits:</strong> {data.DailyHoroscope.Transits.join(", ")}
          </p>
        </div>
        <div className="insight-section mb-4">
          <h3 className="text-xl font-semibold mb-2">Monthly Horoscope</h3>
          <p>
            <strong>Summary:</strong> {data.MonthlyHoroscope.Summary}
          </p>
          <p>
            <strong>Opportunities:</strong>{" "}
            {data.MonthlyHoroscope.Opportunities.join(", ")}
          </p>
          <p>
            <strong>Challenges:</strong>{" "}
            {data.MonthlyHoroscope.Challenges.join(", ")}
          </p>
          <p>
            <strong>Advice:</strong> {data.MonthlyHoroscope.Advice}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A1828] text-white">
      <div className="container mx-auto p-8 max-w-4xl">
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-400"></div>
          </div>
        )}
        
        {formVisible && (
          <div className="bg-[#1A2937] rounded-2xl shadow-xl p-8 mb-8 border border-gray-700">
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Your Astrological Journey Begins Here
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0A1828] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0A1828] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Time of Birth
                    </label>
                    <input
                      type="time"
                      name="timeOfBirth"
                      value={formData.timeOfBirth}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0A1828] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0A1828] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0A1828] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500"
                      placeholder="Enter your state"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0A1828] border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-white placeholder-gray-500"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-200"
              >
                Generate Your Astrological Insights
              </button>
            </form>
          </div>
        )}

        {insightResult && (
          <div className="bg-[#1A2937] rounded-2xl shadow-xl p-8 animate-fade-in border border-gray-700">
            {renderInsightResult(insightResult)}
            <button
              onClick={() => setFormVisible(true)}
              className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:shadow-purple-500/20 transform hover:scale-[1.02] transition-all duration-200"
            >
              Generate New Reading
            </button>
          </div>
        )}

        {/* Floating chat button with updated styling */}
        <button
          onClick={handleChatRedirect}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-200 group"
        >
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#1A2937] text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-gray-700">
            Chat with AI Assistant
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
