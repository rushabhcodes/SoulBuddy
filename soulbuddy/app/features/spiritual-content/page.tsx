"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SpiritualContent() {
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
      <h1 className="text-4xl font-bold mb-8">Spiritual Content</h1>
      {!showResult ? (
        <Card>
          <CardHeader>
            <CardTitle>Enter Your Details</CardTitle>
            <CardDescription>Provide your information for personalized spiritual content</CardDescription>
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
              <Button type="submit">Get Spiritual Content</Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Spiritual Content</CardTitle>
            <CardDescription>Tailored spiritual practices based on your astrological profile</CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Meditation</h2>
            <p className="mb-4">10-minute Mindfulness Practice: Focus on your breath and visualize a warm, golden light enveloping your body. This practice aligns with your current astrological energies to promote inner peace and clarity.</p>
            
            <h2 className="text-2xl font-semibold mb-4">Workout</h2>
            <p className="mb-4">Yoga for Balance and Harmony: A 20-minute yoga sequence emphasizing poses that resonate with your zodiac sign. This practice will help balance your energy and promote physical and spiritual well-being.</p>
            
            <h2 className="text-2xl font-semibold mb-4">Sleep Content</h2>
            <p className="mb-4">Guided Relaxation for Restful Sleep: A 15-minute audio journey through a celestial landscape, designed to calm your mind and prepare your body for deep, restorative sleep.</p>
            
            <h2 className="text-2xl font-semibold mb-4">Daily Affirmation</h2>
            <p className="mb-4">"I am in harmony with the universe, and divine energy flows through me."</p>
            
            <Button className="mt-4">Access Full Content</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

