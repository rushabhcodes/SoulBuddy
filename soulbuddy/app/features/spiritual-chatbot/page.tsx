"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function SpiritualChatbot() {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([])
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      // Simulate bot response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: `Thank you for your question: "${input}". As an AI spiritual guide, I'm here to provide insights and support on your spiritual journey.` }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Spiritual Chatbot</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chat with Your Spiritual Guide</CardTitle>
          <CardDescription>Ask questions and receive spiritual guidance</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] mb-4 p-4 rounded-md border">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-purple-600' : 'bg-indigo-600'}`}>
                  {message.content}
                </span>
              </div>
            ))}
          </ScrollArea>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Type your question here..." 
              className="flex-grow"
            />
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

