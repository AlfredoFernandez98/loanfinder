import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  max-width: var(--max-width-lg);
  margin: 0 auto;
  padding: var(--space-16) var(--space-4);
`;

const Title = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  text-align: center;
  margin-bottom: var(--space-12);
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 1s ease-out ${props => 0.2 + props.index * 0.1}s both;

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
`;

const Question = styled.button`
  width: 100%;
  padding: var(--space-6);
  background: none;
  border: none;
  text-align: left;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.05);
  }

  .icon {
    font-size: var(--font-size-xl);
    color: var(--primary-600);
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  }
`;

const Answer = styled.div`
  padding: ${props => props.isOpen ? `0 ${props.theme?.space || '1.5rem'} 1.5rem` : '0'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  p {
    font-size: var(--font-size-base);
    color: var(--gray-700);
    line-height: 1.6;
    margin: 0 var(--space-6);
    opacity: ${props => props.isOpen ? '1' : '0'};
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    transition: all 0.3s ease 0.1s;
  }
`;

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Hvordan virker LoanFinder?",
      answer: "LoanFinder er en gratis tjeneste, der lader dig sammenligne lånetilbud fra flere banker med kun én ansøgning. Du udfylder vores sikre formular, og vi sender din ansøgning til vores bankpartnere. Du modtager derefter op til 4 konkurrencedygtige tilbud inden for 24 timer."
    },
    {
      question: "Koster det noget at bruge LoanFinder?",
      answer: "Nej, LoanFinder er 100% gratis at bruge. Vi tjener penge gennem provision fra bankerne, når du vælger et lån gennem vores platform. Der er ingen skjulte gebyrer eller omkostninger for dig som kunde."
    },
    {
      question: "Hvor sikre er mine oplysninger?",
      answer: "Dine oplysninger er helt sikre hos os. Vi bruger 256-bit SSL kryptering (samme niveau som banker), er GDPR-compliant og er autoriseret af Finanstilsynet. Dine data deles kun med de banker, du eksplicit giver samtykke til."
    },
    {
      question: "Hvor hurtigt kan jeg få et lånetilbud?",
      answer: "De fleste kunder modtager deres første tilbud inden for 2-6 timer. Alle tilbud er typisk klar inden for 24 timer. Behandlingstiden afhænger af lånets størrelse og kompleksitet."
    },
    {
      question: "Påvirker det min kreditvurdering at søge gennem LoanFinder?",
      answer: "Vores indledende vurdering påvirker ikke din kreditvurdering. Først når du accepterer et specifikt tilbud fra en bank, foretages der en decideret kreditvurdering, som kan påvirke din kreditscore."
    },
    {
      question: "Hvilke typer lån kan jeg sammenligne?",
      answer: "Du kan sammenligne boliglån, forbrugslån, billån, erhvervslån og privatlån. Vi dækker både refinansiering af eksisterende lån og helt nye lån til forskellige formål."
    },
    {
      question: "Hvad hvis jeg ikke er tilfreds med tilbuddene?",
      answer: "Du er aldrig forpligtet til at acceptere et tilbud. Hvis du ikke finder et passende tilbud, kan du frit vælge ikke at fortsætte. Du kan også kontakte vores kundeservice for rådgivning om alternative muligheder."
    },
    {
      question: "Kan jeg ansøge hvis jeg har dårlig kredit?",
      answer: "Ja, vi arbejder med banker, der specialiserer sig i forskellige kreditprofiler. Selvom du har haft økonomiske udfordringer tidligere, kan vi hjælpe dig med at finde banker, der tilbyder lån til din situation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Ofte stillede spørgsmål</Title>
      <FAQList>
        {faqData.map((item, index) => (
          <FAQItem key={index} index={index}>
            <Question 
              onClick={() => toggleFAQ(index)}
              isOpen={openIndex === index}
            >
              {item.question}
              <span className="icon">+</span>
            </Question>
            <Answer isOpen={openIndex === index}>
              <p>{item.answer}</p>
            </Answer>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
}

export default FAQ;
