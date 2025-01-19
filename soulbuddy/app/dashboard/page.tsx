"use client";
import React, { useState } from "react";

const DashboardPage = () => {
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
    redirect("dashboard/chat");
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
    <div className="container mx-auto p-4">
      {loading && <p className="text-center text-lg">Loading...</p>}
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time of Birth
            </label>
            <input
              type="time"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
      {insightResult && renderInsightResult(insightResult)}
    </div>
  );
};

export default DashboardPage;
