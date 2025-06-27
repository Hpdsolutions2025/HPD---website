import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      slogan: "Say Goodbye to Prompt Overload. HPD Builds It Clean.",
      about: "HPD was born to simplify the chaos of human-AI interaction.",
      contact: "Contact: Hitesh Kumar – HPDsolution2025@gmail.com"
    },
    hi: {
      slogan: "प्रॉम्प्ट ओवरलोड को अलविदा कहें। HPD इसे साफ और सरल बनाता है।",
      about: "HPD का जन्म मानव और AI के जटिल संबंधों को सरल बनाने के लिए हुआ था।",
      contact: "संपर्क करें: हितेश कुमार – HPDsolution2025@gmail.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{content[lang].slogan}</h1>
      <p className="mb-2">{content[lang].about}</p>
      <p className="mb-4">{content[lang].contact}</p>
      <button
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
      >
        Switch to {lang === 'en' ? 'Hindi' : 'English'}
      </button>
    </div>
  );
};

export default App;
