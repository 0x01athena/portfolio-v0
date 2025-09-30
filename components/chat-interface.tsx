"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Phone, Video, MoreVertical, Smile, Paperclip } from "lucide-react"

interface Message {
    id: string
    text: string
    sender: "user" | "support"
    timestamp: Date
    type?: "text" | "image" | "file"
}

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hello! Welcome to Fulgo Mobile Support. How can I help you today?",
            sender: "support",
            timestamp: new Date(),
        }
    ])
    const [newMessage, setNewMessage] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [supportOnline, setSupportOnline] = useState(true)

    // Removed automatic scroll functionality

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            text: newMessage,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMessage])
        setNewMessage("")
        setIsTyping(true)

        // Simulate support response
        setTimeout(() => {
            setIsTyping(false)
            const supportMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "Thank you for your message. Our support team will respond shortly. Is there anything specific you'd like to know about our products?",
                sender: "support",
                timestamp: new Date(),
            }
            setMessages(prev => [...prev, supportMessage])
        }, 2000)
    }

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <section className="relative flex justify-center items-center bg-[#0F0F0F] min-h-screen pt-20">
            <Image src="/images/dashboard-bg.png" alt="Chat Background" fill className="object-cover opacity-100" />

            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Live <span className="text-[#EC3E0B]">Support</span> Chat
                    </h1>
                    <div className="flex items-center justify-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${supportOnline ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                        <span className="text-gray-300">
                            {supportOnline ? 'Support team is online' : 'Support team is offline'}
                        </span>
                    </div>
                </div>

                {/* Chat Container */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                    {/* Chat Header */}
                    <div className="bg-black/60 border-b border-gray-700/50 p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#EC3E0B] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">FM</span>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Fulgo Mobile Support</h3>
                                <p className="text-gray-400 text-sm">
                                    {supportOnline ? 'Online' : 'Offline'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="h-[460px] overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[70%] rounded-lg p-3 ${message.sender === "user"
                                        ? "bg-[#EC3E0B] text-white"
                                        : "bg-gray-700 text-white"
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-orange-200" : "text-gray-400"
                                        }`}>
                                        {formatTime(message.timestamp)}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-700 rounded-lg p-3">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Message Input */}
                    <div className="bg-black/60 border-t border-gray-700/50 p-4">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Paperclip className="w-4 h-4" />
                            </Button>
                            <Input
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 h-10 bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-[#EC3E0B] focus:ring-0"
                            />
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Smile className="w-4 h-4" />
                            </Button>
                            <Button
                                type="submit"
                                className="bg-[#EC3E0B] hover:bg-orange-600 text-white"
                                disabled={!newMessage.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
