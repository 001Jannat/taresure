import React from 'react';
import '../styles/Language.css';

const Language = () => {
  const languages = [
    { name: 'English', code: 'en' },
    { name: 'عربي/عربى ʿarabī [ ʿarabī:]', code: 'ar' },
    { name: 'اردو', code: 'ur' },
    { name: 'Hindi', code: 'hi' },
    { name: 'বাঙ্লা', code: 'bn' },
    { name: 'فارسی/Fārsī', code: 'fa' },
    { name: 'Español', code: 'es' },
    { name: 'pýсский язык', code: 'ru' },
    { name: 'Português', code: 'pt' },
    { name: '한국어', code: 'ko' },
    { name: 'Tiếng Việt', code: 'vi' }
  ];

  const handleLanguageSelect = (code) => {
    // Here you would typically implement language change logic
    console.log('Selected language:', code);
  };

  return (
    <div className="language-container">
      <div className="language-list">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className="language-item"
            onClick={() => handleLanguageSelect(lang.code)}
          >
            <span className="language-text">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language; 