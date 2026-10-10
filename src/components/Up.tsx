"use client"
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Up = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <div className="fixed bottom-10 right-12 z-50">
            {isVisible && (
            <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className="cursor-pointer transition-colors bg-violet-500 hover:bg-violet-600 rounded-full p-2.5">
                <ArrowUp size={25} color="white" />
            </button>
            )}
        </div>
    );
};

export default Up;