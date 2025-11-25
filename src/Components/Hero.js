import styled from 'styled-components';
import { ArrowDownOutlined } from '@ant-design/icons';

const HeroSection = styled.section`
  padding: 6rem 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  margin-left: 260px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(100, 150, 255, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    min-height: auto;
  }
`;

const Content = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #e2e8f0 0%, #64b5f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #cbd5e1;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 16px;
  color: #94a3b8;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  max-width: 800px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #64b5f6 0%, #3b82f6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(100, 150, 255, 0.3);
  }
`;

const SecondaryButton = styled.button`
  padding: 0.75rem 2rem;
  background: transparent;
  color: #64b5f6;
  border: 1px solid #64b5f6;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-10px);
    }
  }

  svg {
    font-size: 24px;
    color: #64b5f6;
  }
`;

export default function Hero({ setActiveSection }) {
  return (
    <HeroSection>
      <Content>
        <Subtitle>Welcome to my portfolio</Subtitle>
        <Title>Gandikota Kondalarao</Title>
        <Subtitle>QA Automation Engineer & Product POC</Subtitle>

        <Description>
          Professional with 3+ years of experience in both manual and automation testing across web and mobile applications. 
          Skilled in <b>Playwright (JavaScript/Python)</b>  and foundational Selenium for robust end-to-end automation. 
          Proficient in functional, integration, regression, and system testing with hands-on API testing using Postman. 
          Adept in <b>UI/UX design principles and front-end development with React.js.</b>  
          Experienced in ERP domains including Procurement, Supply Chain Management, Warehouse, and Master Data. 
          with additional experience as an <b>ERP Associate Consultant. Served as the Project POC,</b> 
          coordinating cross-functional communication and ensuring smooth project execution. Focused on delivering high-quality.
        </Description>

        <ButtonGroup>
          <PrimaryButton
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </PrimaryButton>

          <SecondaryButton
            onClick={() => {
              const link = document.createElement('a');
              link.href = process.env.PUBLIC_URL + '/Rao.pdf';
              link.download = 'Rao.pdf';
              link.click();
            }}
          >
            Download Resume
          </SecondaryButton>
        </ButtonGroup>
      </Content>

      <ScrollIndicator>
        <ArrowDownOutlined />
      </ScrollIndicator>
    </HeroSection>
  );
}
