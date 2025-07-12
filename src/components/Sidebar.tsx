import {
    Home,
    BookOpen,
    MessageCircle,
    ClipboardList,
    User
} from "lucide-react";
import { useState } from "react";

const menu = [
    { name: "Dashboard", icon: <Home size={24} />, id: "dashboard" },
    { name: "Courses", icon: <BookOpen size={24} />, id: "courses" },
    { name: "Chat", icon: <MessageCircle size={24} />, id: "chat" },
    { name: "Tasks", icon: <ClipboardList size={24} />, id: "tasks" },
    { name: "Profile", icon: <User size={24} />, id: "profile" }
];

export default function Sidebar() {
    const [active, setActive] = useState("dashboard");

    return (
        <aside className="w-20 h-screen bg-purple-700 text-white flex flex-col items-center py-6 space-y-6 shadow-xl">
            <nav className="flex flex-col gap-4">
                {menu.map((item) => (
                    <button
                        key={item.id}
                        title={item.name}
                        onClick={() => setActive(item.id)}
                        className={`p-3 rounded-lg transition-all flex items-center justify-center 
                            ${
                                active === item.id
                                    ? "bg-white text-purple-700 shadow-md"
                                    : "hover:bg-purple-600"
                            }`}
                    >
                        {item.icon}
                    </button>
                ))}
            </nav>
        </aside>
    );
}
