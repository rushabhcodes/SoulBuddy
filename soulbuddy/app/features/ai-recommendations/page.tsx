"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIRecommendations() {
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
      <h1 className="text-4xl font-bold mb-8">AI Recommendations</h1>
      {!showResult ? (
        <Card>
          <CardHeader>
            <CardTitle>Enter Your Details</CardTitle>
            <CardDescription>Provide your information for personalized AI recommendations</CardDescription>
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
              <Button type="submit">Get AI Recommendations</Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your AI Recommendations</CardTitle>
            <CardDescription>Personalized suggestions based on your astrological profile</CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Gemstone Suggestions</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Primary: Amethyst - Enhances spiritual awareness and intuition</li>
              <li>Secondary: Citrine - Promotes abundance and personal power</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Recommended Rituals</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Morning Sun Salutation - Aligns your energy with the sun's vitality</li>
              <li>Evening Gratitude Meditation - Enhances positive energy and attracts abundance</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Astrological Do's and Don'ts</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Do's:</h3>
                <ul className="list-disc list-inside">
                  <li>Focus on communication this week</li>
                  <li>Embrace new learning opportunities</li>
                  <li>Spend time in nature for grounding</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Don'ts:</h3>
                <ul className="list-disc list-inside">
                  <li>Avoid major financial decisions</li>
                  <li>Don't neglect self-care routines</li>
                  <li>Refrain from unnecessary conflicts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

