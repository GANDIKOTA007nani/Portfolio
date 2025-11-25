import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 4rem;
  margin-left: 260px;
  background: rgba(30, 41, 59, 0.5);

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: #e2e8f0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #64b5f6 0%, #3b82f6 100%);
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #cbd5e1;
  line-height: 1.8;
  margin: 0;
`;

const HighlightText = styled.span`
  color: #64b5f6;
  font-weight: 600;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const StatCard = styled.div`
  padding: 1.5rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    border-color: rgba(100, 150, 255, 0.3);
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: #64b5f6;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export default function About() {
  return (
    <AboutSection>
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Divider />
        <Content>
          <TextBlock>
            <Paragraph>
              I am a <HighlightText>QA Engineer and Product POC</HighlightText>{' '}
              with 3+ years of experience in manual and automation testing
              across web and mobile applications. I specialize in
              <HighlightText>
                Playwright (JavaScript/Python), API Testing, Functional &
                Regression Testing
              </HighlightText>
              and have strong exposure to ERP domains including Procurement,
              Supply Chain, Warehouse, and Master Data.
            </Paragraph>

            <Paragraph>
              I currently work at Piersoft Technologies as both a
              <HighlightText>
                QA Engineer & Product Point of Contact
              </HighlightText>
              , where I collaborate closely with clients, development teams, and
              UI/UX designers to ensure smooth delivery and requirement clarity.
              I have tested multiple enterprise applications end-to-end,
              automated critical flows, validated API integrations using
              Postman, and contributed to improving product quality across web,
              mobile, and ERP platforms.
            </Paragraph>

            <Paragraph>
              Before transitioning into QA, I worked as an
              <HighlightText>Infor LN ERP Consultant</HighlightText>, where I
              configured and customized modules including Procurement,
              Warehouse, Master Data, Sales, and Finance. This blend of QA + ERP
              expertise helps me understand systems deeply, identify root causes
              faster, and validate real-world business workflows effectively.
            </Paragraph>

            <Paragraph>
              I am passionate about building reliable automation suites,
              streamlining testing processes, and ensuring consistent product
              quality. I have 
              <HighlightText>
                 reduced regression testing time by 60%
              </HighlightText>{' '}
              through automation and have successfully led a team of 6 members
              while delivering high-impact projects on schedule.
            </Paragraph>
          </TextBlock>
          <StatsGrid>
            <StatCard>
              <StatNumber>3+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>6</StatNumber>
              <StatLabel>Team Members Led</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>60%</StatNumber>
              <StatLabel>Automation Improvement</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>7+</StatNumber>
              <StatLabel>Major Projects Delivered</StatLabel>
            </StatCard>
          </StatsGrid>
        </Content>
      </Container>
    </AboutSection>
  );
}
