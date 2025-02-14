"use client";
import { useState } from "react";
import PButtons from "./pButtons";
import Pheader from "./Pheader";
import PFooter from "./PFooter";

export default function Previews() {
    const [selectedComponent, setSelectedComponent] = useState("buttons");

    const renderPreview = () => {
        switch(selectedComponent) {
            case "buttons":
                return (
                    <PButtons/>
                );
            case "header":
                return (
                    <Pheader/>
                );
            case "footer":
                return (
                    <PFooter/>
                );
            default:
                return <div className="p-8">Select a component to preview</div>;
        }
    };

    if (process.env.NEXT_PUBLIC_DEBUG === "false") {
        window.location.href = "/";
        return;
    }

    return (
        <div className="flex min-h-screen ltr:flex-row rtl:flex-row-reverse">
            {/* Sidebar */}
            <div className="w-64 bg-gray-100 p-4 border-r border-gray-200">
                <h1 className="text-xl font-bold mb-4">Components</h1>
                <button
                    onClick={() => setSelectedComponent("buttons")}
                    className={`w-full text-left p-2 rounded ${
                        selectedComponent === "buttons" 
                            ? "bg-gray-200" 
                            : "hover:bg-gray-200"
                    }`}
                >
                    Buttons
                </button>
                <button
                    onClick={() => setSelectedComponent("header")}
                    className={`w-full text-left p-2 rounded ${
                        selectedComponent === "header" 
                            ? "bg-gray-200" 
                            : "hover:bg-gray-200"
                    }`}
                >
                    Header
                </button>
                <button
                    onClick={() => setSelectedComponent("footer")}
                    className={`w-full text-left p-2 rounded ${
                        selectedComponent === "footer" 
                            ? "bg-gray-200" 
                            : "hover:bg-gray-200"
                    }`}
                >
                    Footer
                </button>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-white">
                {renderPreview()}
            </div>
        </div>
    );
}
