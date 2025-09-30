import { Navigation } from "@/components/navigation"
import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage() {
    return (
        <main className="relative bg-[#0F0F0F] min-h-screen">
            <Navigation />
            <ChatInterface />
        </main>
    )
}
