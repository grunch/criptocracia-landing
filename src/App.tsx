import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSelector from './components/language-selector';

// Importa las imágenes
import whatIsImage from '/assets/what_is_criptocracia.png';
import whatForImage from '/assets/what_for_criptocracia.png';
import whyImportantImage from '/assets/why_important_criptocracia.png';
import projectGoalsImage from '/assets/project_goals_criptocracia.png';
import technologyImage from '/assets/technology_criptocracia.png';
import requirementsImage from '/assets/fundamental_requirements_criptocracia.png';

interface SectionProps {
  id: string;
  title: string;
  content: string;
  imageName: string;
  reverseLayout?: boolean;
  customContent?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  content, 
  imageName, 
  reverseLayout = false,
  customContent 
}) => {
  return (
    <section id={id} className={`section ${reverseLayout ? 'reverse' : ''}`}>
      <div className="section-content">
        <h2>{title}</h2>
        {customContent ? (
          customContent
        ) : (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </div>
      <div className="section-image">
        <img src={imageName} alt={title} />
      </div>
    </section>
  );
};

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSelector />
      <header className="header">
        <div className="gradient-bg"></div>
        <h1>Criptocracia</h1>
        <p>{t('subtitle')}</p>
      </header>
      <main className="main-content">
        <Section
          id="what-is"
          title={t('whatIs.title')}
          content={t('whatIs.content')}
          imageName={whatIsImage}
        />
        <Section
          id="what-for"
          title={t('whatFor.title')}
          content={t('whatFor.content')}
          imageName={whatForImage}
          reverseLayout
          customContent={
              <>
                <p>{t('whatFor.content')}</p>
                <p>{t('whatFor.bullets_title')}</p>
                {(() => {
                  const bulletPoints = t('whatFor.bullets', { returnObjects: true }) as string[];
                  return (
                    <ol className="goals-list">
                      {bulletPoints.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ol>
                  );
                })()}
                <p>{t('whatFor.conclusion')}</p>
              </>
          }
        />
        <Section
          id="why-important"
          title={t('whyImportant.title')}
          content={t('whyImportant.content')}
          imageName={whyImportantImage}
        />
        <Section
          id="goals"
          title={t('goals.title')}
          content={t('goals.content')}
          imageName={projectGoalsImage}
          reverseLayout
          customContent={
              <>
                <p>{t('goals.content')}</p>
                <h3>{t('goals.bullets_title')}</h3>
                {(() => {
                  const bulletPoints = t('goals.bullets', { returnObjects: true }) as string[];
                  return (
                    <ol className="goals-list">
                      {bulletPoints.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ol>
                  );
                })()}
                <p>{t('goals.conclusion')}</p>
              </>
          }
        />
        <Section
          id="technology"
          title={t('technology.title')}
          content={t('technology.content')}
          imageName={technologyImage}
          customContent={
            <>
              <p>{t('technology.content')}</p>
              <h3>{t('technology.blindSignatures')}</h3>
              <p>{t('technology.blindSignaturesContent')}</p>
              <h3>{t('technology.nostr')}</h3>
              <p>{t('technology.nostrContent')}</p>
            </>
          }
        />
        <Section
          id="requirements"
          title={t('requirements.title')}
          content={t('requirements.content')}
          imageName={requirementsImage}
          reverseLayout
          customContent={
            <>
              <p>{t('requirements.content')}</p>
              {(() => {
                const bulletPoints = t('requirements.bullets', { returnObjects: true }) as string[];
                return (
                  <ul className="requirements-list">
                    {bulletPoints.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                );
              })()}
            </>
          }
        />
      </main>
      <footer className="footer">
        <div className="container">
          <p>{t('footer.copyright')}</p>
          <a 
            href="https://github.com/grunch/criptocracia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            {t('footer.viewOnGithub' )}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
