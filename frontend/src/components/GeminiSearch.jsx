import React, { useState, useRef, useEffect } from "react";

const App = () => {
  // State for the user's prompt (input)
  const [prompt, setPrompt] = useState("");
  // State to handle loading status
  const [isLoading, setIsLoading] = useState(false);
  // State to handle potential API errors
  const [error, setError] = useState(null);
  // State to store the full conversation history
  const [chatHistory, setChatHistory] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (!prompt.trim()) return; // Don't search with an empty prompt

    setIsLoading(true);
    setError(null);

    // Create a new chat history array with the user's message added
    const newChatHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: prompt }] },
    ];
    setChatHistory(newChatHistory);
    setPrompt(""); // Clear the input box immediately

    const apiKey = "AIzaSyABnqVU4GRHGTVUppFOisO-62AgS4KANu0";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    try {
      const payload = { contents: newChatHistory };

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`API call failed with status: ${res.status}`);
      }

      const result = await res.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        // Find and replace asterisks to bold the text.
        let text = result.candidates[0].content.parts[0].text;
        text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        // Add the model's response to the chat history
        setChatHistory(prevHistory => [
          ...prevHistory,
          { role: "model", parts: [{ text: text }] },
        ]);
      } else {
        throw new Error("Invalid API response format.");
      }
    } catch (err) {
      console.error("Error fetching from Gemini API:", err);
      setError("Sorry, I couldn't get a response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // UI components are defined here to keep the example self-contained
  const Navbar = () => (
    <nav className="p-4 text-white">
      {/* Navbar content */}
    </nav>
  );

  const FloatingParticles = ({ children }) => (
    <div className="relative">
      {children}
    </div>
  );
  
  // The search bar and response display area, with dynamic styling
  const SearchAndResponse = () => {
    const inputRef = useRef(null);
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Scroll to the bottom of the chat history when it updates
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);

    return (
      <div className="w-full max-w-4xl px-4 flex flex-col items-center h-[calc(100vh-250px)]">
        {/* Response box that appears after a search */}
        {chatHistory.length > 0 && (
          <div className="flex flex-col mt-8 mb-4 text-white text-left p-6 w-full bg-transparent overflow-y-auto">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg my-2 ${
                  message.role === "user"
                    ? "bg-gray-800 self-start text-right"
                    : "bg-gray-700 self-end text-left"
                }`}
              >
                <p
                  className="whitespace-pre-wrap leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: message.parts[0].text.replace(/#+ /g, '').replace(/(\*\*|`)/g, '') }}
                ></p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        )}

        {/* Search form */}
        <form onSubmit={handleSearch} className="flex w-full max-w-2xl rounded-full bg-white shadow-lg p-2 transition-all duration-300 hover:shadow-xl focus-within:ring-4 focus-within:ring-white focus-within:ring-opacity-50">
          <input
            ref={inputRef}
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow bg-transparent text-gray-800 focus:outline-none placeholder-gray-500 px-4 py-2"
            placeholder="Ask me anything..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 disabled:bg-gray-400"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Search'
            )}
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 font-['Inter']">
      <Navbar />
      <FloatingParticles>
        <div className={`relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-transparent z-10 w-full transition-all duration-500 ease-in-out`}>
          <div className="text-white text-center p-6 w-full">
            <h1 className="text-[60px] font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Hello Sritiz!</h1>
            <h1 className="text-[25px] font-bold mb-6">What can I do for you?</h1>
            <div className="w-full flex justify-center">
              <SearchAndResponse />
            </div>
          </div>
        </div>
      </FloatingParticles>
    </div>
  );
};

export default App;
