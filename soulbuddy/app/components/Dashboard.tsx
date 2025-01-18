"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Star, Moon, MessageCircle } from 'lucide-react'

interface DashboardProps {
  feature: string
  userData: {
    name: string
    dateOfBirth: string
    timeOfBirth: string
    location: string
    gender: string
    state: string
  }
}

export default function Dashboard({ feature, userData }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const renderFeatureContent = () => {
    switch (feature) {
      case 'Kundali & Horoscope':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Your Kundali & Horoscope</CardTitle>
              <CardDescription>Based on your birth details</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Here's your personalized Kundali and Horoscope information.</p>
              {/* Add more detailed Kundali & Horoscope information here */}
            </CardContent>
          </Card>
        )
      case 'AI Recommendations':
        return (
          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Personalized suggestions for you</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Based on your profile, here are some AI-powered recommendations:</p>
              <ul className="list-disc list-inside">
                <li>Suggested Gemstone: Amethyst</li>
                <li>Recommended Ritual: Morning Sun Salutation</li>
                <li>Astrological Insight: Focus on communication this week</li>
              </ul>
            </CardContent>
          </Card>
        )
      case 'Spiritual Content':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Spiritual Content</CardTitle>
              <CardDescription>Tailored content for your spiritual journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Explore these spiritual practices aligned with your horoscope:</p>
              <ul className="list-disc list-inside">
                <li>Meditation: 10-minute Mindfulness Practice</li>
                <li>Workout: Yoga for Balance and Harmony</li>
                <li>Sleep: Guided Relaxation for Restful Sleep</li>
              </ul>
            </CardContent>
          </Card>
        )
      case 'Spiritual Chatbot':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Spiritual Chatbot</CardTitle>
              <CardDescription>Get instant spiritual advice</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ask our AI-powered spiritual chatbot any question:</p>
              {/* Add a chat interface here */}
              <div className="mt-4">
                <input type="text" placeholder="Type your question..." className="w-full p-2 rounded border border-purple-300 bg-indigo-900" />
                <Button className="mt-2">Ask</Button>
              </div>
            </CardContent>
          </Card>
        )
      default:
        return <p>Select a feature to see more information.</p>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Your Soul Buddy Dashboard, {userData.name}</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="feature">Selected Feature</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Your Spiritual Overview</CardTitle>
              <CardDescription>A summary of your spiritual journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-purple-400" />
                  <span>Born on: {userData.dateOfBirth}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-purple-400" />
                  <span>Lucky Color: Blue</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Moon className="w-6 h-6 text-purple-400" />
                  <span>Moon Sign: Libra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                  <span>Daily Mantra: "I am at peace with the universe."</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="feature">
          {renderFeatureContent()}
        </TabsContent>
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>Your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
                <p><strong>Time of Birth:</strong> {userData.timeOfBirth}</p>
                <p><strong>Location:</strong> {userData.location}</p>
                <p><strong>Gender:</strong> {userData.gender}</p>
                <p><strong>State:</strong> {userData.state}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

