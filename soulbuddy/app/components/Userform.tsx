"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Dashboard from './Dashboard'

interface UserFormProps {
  feature: string
  onClose: () => void
}

export default function UserForm({ feature, onClose }: UserFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    location: '',
    gender: '',
    state: ''
  })
  const [showDashboard, setShowDashboard] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'timeOfBirth') {
      const timeValue = value.length === 5 ? value : value.padStart(5, '0')
      setFormData({ ...formData, [name]: timeValue })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      timeOfBirth: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData) // Debug log
    setShowDashboard(true)
  }

  if (showDashboard) {
    return <Dashboard feature={feature} userData={formData} />
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-indigo-900 p-8 rounded-lg max-w-md w-full shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-white">Enter Your Details for {feature}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="bg-indigo-800 text-white border-indigo-600 focus:border-purple-400"
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
              className="bg-indigo-800 text-white border-indigo-600 focus:border-purple-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeOfBirth" className="text-white">Time of Birth</Label>
            <Input 
              id="timeOfBirth" 
              name="timeOfBirth" 
              type="time" 
              value={formData.timeOfBirth}
              onChange={handleTimeChange}
              required 
              className="bg-indigo-800 text-white border-indigo-600 focus:border-purple-400 [color-scheme:dark]"
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
              className="bg-indigo-800 text-white border-indigo-600 focus:border-purple-400"
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
              <SelectTrigger className="bg-indigo-800 text-white border-indigo-600 focus:border-purple-400">
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
              className="bg-indigo-800 text-white border-indigo-600 focus:border-purple-400"
              placeholder="Enter your state"
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-purple-400 text-white hover:bg-purple-700"
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

