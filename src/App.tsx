import React from 'react';
import './App.css';

// Import content for sections (assuming they are strings or can be rendered directly)
// In a real app, these would likely be fetched or imported from .md files if using a loader
const whatIsCriptocracia = `Criptocracia is an innovative and experimental open-source electronic voting system, meticulously engineered in Rust. It stands at the forefront of secure digital democracy, designed to operate on a trustless basis. This means it aims to minimize the reliance on central authorities for the integrity of the voting process. At its core, Criptocracia employs advanced cryptographic techniques, specifically blind RSA signatures, to uphold the paramount principles of vote secrecy and voter anonymity. Furthermore, it integrates the Nostr protocol, a decentralized and censorship-resistant network, to ensure the secure and private transmission of encrypted voting data. The project, while still in its experimental phase and not yet ready for production deployment, represents a significant step towards building more resilient, transparent, and auditable e-voting solutions for the future.`;

const whatIsCriptocraciaFor = `Criptocracia is designed to address the critical and growing need for secure, transparent, and anonymous electronic voting systems. Its primary purpose is to provide a robust platform for conducting elections, particularly in environments where trust in central authorities or existing electoral systems may be compromised or limited. This is especially relevant in contexts where there are concerns about authoritarian regimes potentially manipulating electoral processes to maintain power.\n\nSpecifically, Criptocracia aims to:\n1. Enhance Electoral Integrity\n2. Protect Voter Anonymity and Secrecy\n3. Promote Transparency and Auditability\n4. Explore Modern Cryptographic Solutions\n5. Empower Voters in Trust-Limited Settings\n\nIn essence, Criptocracia is for creating a more trustworthy and secure foundation for democratic elections in the digital age, fostering greater confidence in electoral outcomes and protecting the fundamental rights of voters.`;

const whyIsCriptocraciaImportant = `The importance of Criptocracia lies in its potential to address fundamental challenges to democratic processes in an increasingly digital world. Traditional voting systems, whether paper-based or electronic, often face issues of trust, security, and accessibility. Criptocracia offers a forward-looking approach that leverages cutting-edge technology to mitigate these concerns.\n\nIts significance can be understood through several key aspects:\n1. Strengthening Democratic Integrity\n2. Protecting Fundamental Voter Rights\n3. Addressing the Threat of Authoritarian Manipulation\n4. Pioneering Secure E-Voting Solutions\n5. Fostering Public Auditability and Trust\n6. Promoting Open Source and Collaboration\n\nWhile Criptocracia is still experimental, its importance lies in its ambitious attempt to tackle some of the most pressing issues facing electoral systems today. It represents a commitment to leveraging technology not just for convenience, but for the core values of security, privacy, and verifiability that underpin a healthy democracy.`;

const projectGoals = `The overarching goal of Criptocracia is to harness the power of open technologies and modern cryptography to develop a voting system that is both fraud-resistant and publicly auditable. This initiative recognizes the pressing need for electoral systems that can inspire confidence and withstand manipulation, especially in environments where trust in central authorities may be limited.\n\nKey objectives of the Criptocracia project include:\n1. Develop a Fraud-Resistant Voting System\n2. Ensure Public Auditability\n3. Leverage Open Technologies\n4. Implement Advanced Cryptographic Techniques\n5. Enhance Voter Privacy and Anonymity\n6. Provide a Model for Secure E-Voting\n7. Address Challenges in Trust-Limited Environments\n\nUltimately, Criptocracia strives to contribute to the evolution of democratic processes by providing a technological framework that upholds the highest standards of security, transparency, and voter protection.`;

const technologyBehindCriptocracia = `Criptocracia leverages cutting-edge cryptographic techniques and decentralized communication protocols to achieve its security and privacy goals. The two key technological pillars of the system are Blind RSA Signatures and the Nostr protocol.\n\n### Blind Signatures\nBlind signatures are a cryptographic primitive that forms the cornerstone of Criptocracia's approach to ensuring vote secrecy and voter anonymity\n\n### Nostr Protocol for Data Transmission and Voter Authenticity\nNostr (Notes and Other Stuff Transmitted by Relays) is a decentralized protocol that enables censorship-resistant and privacy-focused communication... (content continues as previously written for technology_behind_criptocracia.md, shortened for brevity here)`;

const fundamentalRequirements = `Criptocracia is built upon a set of core security properties, derived from initial consultations, to ensure a trustworthy and robust electronic voting system. These fundamental requirements are critical to the project's mission:\n\n- Vote Secrecy/Anonymity\n- Voter Authentication\n- Vote Uniqueness\n- Verifiability/Auditability\n- Nostr's Role`;

interface SectionProps {
  title: string;
  content: string | React.ReactNode;
  imageName?: string; // e.g., 'what_is_criptocracia.png'
  reverseLayout?: boolean;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, content, imageName, reverseLayout, id }) => {
  // In a real app, you might generate image paths dynamically
  const imagePath = imageName ? `/assets/${imageName}` : undefined;

  return (
    <section id={id} className={`section ${reverseLayout ? 'reverse' : ''}`}>
      <div className="section-content">
        <h2>{title}</h2>
        {typeof content === 'string' ? (
          content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          content
        )}
      </div>
      {imagePath && (
        <div className="section-image">
          {/* Placeholder for image - will be generated later */}
          <img src={imagePath} alt={title} />
        </div>
      )}
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Criptocracia</h1>
        <p>An Experimental, Trustless Open-Source Electronic Voting System</p>
      </header>

      <main className="main-content">
        <Section
          id="what-is"
          title="What is Criptocracia?"
          content={whatIsCriptocracia}
          imageName="what_is_criptocracia.png" // Placeholder, to be generated
        />
        <Section
          id="what-for"
          title="What is Criptocracia for?"
          content={whatIsCriptocraciaFor}
          imageName="what_for_criptocracia.png" // Placeholder, to be generated
          reverseLayout
        />
        <Section
          id="why-important"
          title="Why is Criptocracia important?"
          content={whyIsCriptocraciaImportant}
          imageName="why_important_criptocracia.png" // Placeholder, to be generated
        />
        <Section
          id="goals"
          title="Project Goals"
          content={projectGoals}
          imageName="project_goals_criptocracia.png" // Placeholder, to be generated
          reverseLayout
        />
        <Section
          id="technology"
          title="Technology Behind Criptocracia"
          content={<>
            <p>{technologyBehindCriptocracia.split('### Blind Signatures')[0]}</p>
            <h3>Blind Signatures</h3>
            <p>{technologyBehindCriptocracia.split('### Blind Signatures')[1].split('### Nostr Protocol')[0]}</p>
            <h3>Nostr Protocol for Data Transmission and Voter Authenticity</h3>
            <p>{technologyBehindCriptocracia.split('### Nostr Protocol for Data Transmission and Voter Authenticity')[1]}</p>
          </>}
          imageName="technology_criptocracia.png" // Placeholder, to be generated
        />
        <Section
          id="requirements"
          title="Fundamental Requirements"
          content={fundamentalRequirements.split('\n').map((item, index) => {
            if (item.startsWith('- ')) {
              return <li key={index}>{item.substring(2)}</li>;
            }
            return <p key={index}>{item}</p>;
          })}
          imageName="fundamental_requirements_criptocracia.png" // Placeholder, to be generated
          reverseLayout
        />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Criptocracia. All rights reserved.</p>
        <p>This is an experimental project and not for production use.</p>

<a 
  href="https://github.com/grunch/criptocracia/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="github-link"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '5px'}}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
</a>

      </footer>
    </div>
  );
};

export default App;

