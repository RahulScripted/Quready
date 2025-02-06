import React, { useEffect, useRef, useState } from 'react'
import {X, User, Bot, MessageCircle} from 'lucide-react'

const Chatbot = () => {
  
  // Hooks
  const [open,setOpen] = useState(false);
  const [message, setMessage] = useState([
    {sender: "bot", text: "Welcome! How can I help you today?"}
  ]);
  const [loading,setLoading] = useState(false);
  const [input,setInput] = useState("");
  const chatEndRef = useRef(null);

  // Custom response
  const customResponse = {
    "hello": "Hi there! How can I assist you?",
    "help": "Sure! let me know how I can help you",
    "pricing": "No, Quready is completely free",
    "default": "I'm sorry 🫨, please go to the 'Contact Us' page and fill out the form to clarify your doubts."
  }   

  // Function on sending message
  const sendMessage = () => {
    if(!input.trim()) return;
    const userMessage = {sender: "user", text: input};
    setMessage(prevMessages => [...prevMessages , userMessage]);
    setInput("")
    setLoading(true)

    setTimeout(() => {
        const botResponse = customResponse[input.toLowerCase()] || customResponse["default"];
        setMessage(prevMessages => [...prevMessages, {sender: "bot", text: botResponse}]);
        setLoading(false);
    },1500);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({behavior: "smooth"});
  },[message,loading])

  return (
    <div className='fixed bottom-5 right-5 z-30'>
        {!open && (
            <button className='bg-violet-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer' onClick={() => setOpen(true)}>
                <MessageCircle className='w-6 h-6 md:w-7 md:h-7 object-cover' />
            </button>
        )}
        {open && (
            <div className='fixed bottom-0 right-0 md:bottom-5 md:right-5 w-full md:w-1/2 h-screen md:h-[80vh] bg-gray-200 text-white z-30 md:rounded-md flex flex-col overflow-hidden'>

                {/* Upper Part */}
                <div className='bg-violet-600 p-3 flex justify-between items-center'>

                    {/* Heading */}
                    <span className='text-sm md:text-xl font-medium'>Quready</span>

                    <button onClick={() => setOpen(false)}>
                        <X size={20} className='cursor-pointer' />
                    </button>
                </div>

                {/* Lower Part */}
                <div className='flex-1 overflow-y-auto p-3 space-y-4'>
                    {message.map((msg,index) => (
                        <div 
                            key={index} 
                            className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            {msg.sender === "bot" && 
                                <Bot size={20} className='text-violet-600 w-5 h-5 md:w-7 md:h-7 p-0.75 border rounded-full' /> 
                            }

                            <div className={`p-2 rounded-md max-w-[75%] ${msg.sender === "user" ? "bg-gray-600" : "bg-violet-600"}`}>
                                {msg.text}
                            </div>

                            {msg.sender === "user" && 
                                <User size={20} className='text-black w-5 h-5 md:w-7 md:h-7 p-0.75 border rounded-full' /> 
                            }
                        </div>
                    ))}
                    

                    {/* Add loading */}
                    {loading && (
                        <div className='flex items-center space-x-2 justify-start animate-pulse'>
                            <Bot size={20} className='text-violet-600 w-5 h-5 md:w-7 md:h-7' />
                            <div className='p-2 rounded-md max-w-[75%] bg-violet-600'>
                                Thinking...
                            </div>
                        </div>
                    )}

                    {/* Add reference */}
                    <div ref={chatEndRef}></div>
                </div>

                    {/* User Input & send */}
                <div className='px-4 bg-transparent py-3 border-t border-black flex'>
                    <input 
                        type="text"
                        className='flex-1 rounded-l-md outline-none bg-transparent text-black'
                        placeholder='Enter your message..'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button className='bg-violet-600 hover:bg-indigo-600 transition-colors duration-200 px-6 py-1.5 rounded-full cursor-pointer' onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Chatbot