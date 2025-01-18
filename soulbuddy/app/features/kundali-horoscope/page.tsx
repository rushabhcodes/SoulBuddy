"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function KundaliHoroscope() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    location: '',
    gender: '',
    state: ''
  })
  const [showResult, setShowResult] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResult(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Kundali & Horoscope</h1>
      {!showResult ? (
        <Card>
          <CardHeader>
            <CardTitle>Enter Your Details</CardTitle>
            <CardDescription>Provide your birth information for an accurate reading</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="timeOfBirth">Time of Birth</Label>
                <Input id="timeOfBirth" name="timeOfBirth" type="time" value={formData.timeOfBirth} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select name="gender" onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
              </div>
              <Button type="submit">Generate Kundali & Horoscope</Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Kundali & Horoscope</CardTitle>
            <CardDescription>Based on your birth details</CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Birth Chart</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-indigo-800 p-4 rounded-lg text-center">
                  <h3 className="font-bold">House {i + 1}</h3>
                  <p>Planet: {['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Rahu', 'Ketu'][Math.floor(Math.random() * 9)]}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mb-4">Insights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Career: Focus on creative pursuits this month.</li>
              <li>Relationships: Communication will be key in your partnerships.</li>
              <li>Personal Growth: Meditation will bring clarity to your goals.</li>
              <li>Family: Spend quality time with older family members.</li>
              <li>Social Connections: Networking opportunities arise mid-month.</li>
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

