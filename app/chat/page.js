"use client"
import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ChatWindow from '../ui/components/chat/chatWindow';
import chat from "@/app/ui/styles/chat.module.css"

export default function Chat() {
    const [prompt, setPrompt] = useState('');

    const [chatcont, setChatcont] = useState([])

    const handleInputChange = (event) => {
        setPrompt(event.target.value);
    };

    const API_KEY = process.env.NEXT_PUBLIC_G_key; // Replace with your actual key

    const generateResponse = async () => {
        
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setChatcont((prevChatcont) => [
            ...prevChatcont,
            { user: prompt, res: text },
        ]);
        console.log("hi", chatcont)

    };

    return (
        <div>
            <div className={`${chat.container}`}>
                <ChatWindow content={chatcont} />
                <div className={`${chat.btmform}`}>
                    <div  className={`${chat.form}`}>
                        <input className={`${chat.input}`} type="text" value={prompt} onChange={handleInputChange} />
                        <button className={`${chat.submit}`} onClick={() => { generateResponse() }}>Ask Gemini</button>
                    </div>
                </div>
            </div>

        </div>
    );
};





