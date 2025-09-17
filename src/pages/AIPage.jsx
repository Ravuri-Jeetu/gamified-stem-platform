import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button'; // Import the Button component
import Logo from '../components/common/Logo';

const AIPage = () => {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // New state for selected file
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim() && !selectedFile) return;

    const userMessage = { text: prompt, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setPrompt('');
    setSelectedFile(null); // Clear selected file after submission
    setLoading(true);

    let requestBody;
    let headers = {};

    if (selectedFile) {
      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('file', selectedFile);
      requestBody = formData;
      // No Content-Type header needed for FormData, browser sets it automatically with boundary
    } else {
      requestBody = JSON.stringify({ prompt });
      headers['Content-Type'] = 'application/json';
    }

    try {
      const res = await fetch('http://localhost:3001/api/ollama', {
        method: 'POST',
        headers: headers,
        body: requestBody,
      });
      const data = await res.json();
      const aiMessage = { text: data.response, sender: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching from backend:', error);
      const errorMessage = { text: t('aiPage.responseError'), sender: 'ai', isError: true };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow overflow-y-auto p-4 pb-28 space-y-4">
        <div className="flex justify-center mb-4">
          <Logo className="h-12 w-auto" />
        </div>
        <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
          {t('aiPage.title')}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          {t('aiPage.description')}
        </p>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xl px-4 py-2 rounded-lg shadow ${message.sender === 'user'
                ? 'bg-accent-500 text-white' : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200'}
                ${message.isError ? 'bg-red-500 text-white' : ''}`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xl px-4 py-2 rounded-lg shadow bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              {t('aiPage.responseLoading')}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-t-xl dark:bg-gray-800 max-w-4xl mx-auto z-10">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <label htmlFor="prompt" className="sr-only">
            {t('aiPage.promptLabel')}
          </label>
           <textarea
             id="prompt"
             name="prompt"
             rows="1"
             required
             className="flex-grow resize-none overflow-hidden px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-accent-400 dark:focus:border-accent-400"
             placeholder={t('aiPage.placeholder')}
             value={prompt}
             onChange={(e) => setPrompt(e.target.value)}
             onKeyDown={(e) => {
               if (e.key === 'Enter' && !e.shiftKey) {
                 e.preventDefault();
                 handleSubmit(e);
               }
             }}
           />
           <input
             type="file"
             id="file-upload"
             className="hidden"
             accept="image/*,application/pdf"
             onChange={handleFileChange}
           />
           <Button
             as="label"
             htmlFor="file-upload"
             variant="secondary"
             className="cursor-pointer"
             iconPosition="left"
             icon={(
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 15.75V19.5a2.25 2.25 0 002.25 2.25h4.5a2.25 2.25 0 002.25-2.25v-3.75m-9-3l.935-1.172c.321-.401.75-.685 1.207-.87.458-.185.94-.278 1.425-.278h.5c.485 0 .967.093 1.425.278.457.185.886.469 1.207.87l.935 1.172M12 12v6" />
               </svg>
             )}
           >
             {t('aiPage.uploadFile')}
           </Button>
          <Button
            type="submit"
            disabled={loading}
            variant="accent"
            isLoading={loading}
            iconPosition="right"
            icon={!loading && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            )}
          >
            {loading ? t('aiPage.sending') : t('aiPage.send')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AIPage;