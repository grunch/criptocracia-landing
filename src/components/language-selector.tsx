import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => changeLanguage('en')} 
        className={i18n.language === 'en' ? 'active' : ''}
      >
        {t('languageSelector.en')}
      </button>
      <button 
        onClick={() => changeLanguage('es')} 
        className={i18n.language === 'es' ? 'active' : ''}
      >
        {t('languageSelector.es')}
      </button>
    </div>
  );
};

export default LanguageSelector;
