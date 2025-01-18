"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProtectedRoute() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    location: '',
    gender: '',
    state: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'timeOfBirth') {
      const timeValue = value.length === 5 ? value : value.padStart(5, '0');
      setFormData({ ...formData, [name]: timeValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      timeOfBirth: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen flex-col items-center p-4">
        {/* Header Section */}
        <div className="w-full max-w-4xl text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-white mb-2">Your Cosmic Journey</h1>
          <p className="text-purple-200 text-lg">Discover your celestial path by sharing your details</p>
        </div>

        {/* Form Section */}
        <div className="bg-indigo-900/50 backdrop-blur-lg p-8 rounded-2xl max-w-md w-full shadow-2xl border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Enter Your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="bg-indigo-800/50 text-white border-indigo-600/50 focus:border-purple-400 backdrop-blur-sm"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth" className="text-white">Date of Birth</Label>
              <Input 
                id="dateOfBirth" 
                name="dateOfBirth" 
                type="date" 
                value={formData.dateOfBirth} 
                onChange={handleChange} 
                required 
                className="bg-indigo-800/50 text-white border-indigo-600/50 focus:border-purple-400 backdrop-blur-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeOfBirth" className="text-white">Time of Birth</Label>
              <Input 
                id="timeOfBirth" 
                name="timeOfBirth" 
                type="time" 
                value={formData.timeOfBirth}
                onChange={handleChange}
                required 
                className="bg-indigo-800/50 text-white border-indigo-600/50 focus:border-purple-400 backdrop-blur-sm [color-scheme:dark]"
                placeholder="Select time"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-white">Location</Label>
              <Input 
                id="location" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                required 
                className="bg-indigo-800/50 text-white border-indigo-600/50 focus:border-purple-400 backdrop-blur-sm"
                placeholder="Enter your birth place"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender" className="text-white">Gender</Label>
              <Select 
                name="gender" 
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                required
              >
                <SelectTrigger className="bg-indigo-800/50 text-white border-indigo-600/50 focus:border-purple-400 backdrop-blur-sm">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-indigo-800 text-white">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="text-white">State</Label>
              <Input 
                id="state" 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                required 
                className="bg-indigo-800/50 text-white border-indigo-600/50 focus:border-purple-400 backdrop-blur-sm"
                placeholder="Enter your state"
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                Begin Your Journey
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Section */}
        <div className="w-full max-w-4xl text-center mt-8 text-purple-200/60 text-sm">
          <p>Your cosmic journey awaits. All information is kept confidential.</p>
        </div>
      </div>
    </div>
  );
}