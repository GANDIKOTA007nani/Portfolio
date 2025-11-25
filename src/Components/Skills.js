import styled from 'styled-components';
import {
  CodeOutlined,
  ToolOutlined,
  DatabaseOutlined,
  BugOutlined,
} from '@ant-design/icons';

const SkillsSection = styled.section`
  padding: 6rem 4rem;
  margin-left: 260px;
  background: rgba(15, 23, 42, 0.5);

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  padding: 2rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    border-color: rgba(100, 150, 255, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(100, 150, 255, 0.1);
  }
`;

const CardIcon = styled.div`
  font-size: 32px;
  color: #64b5f6;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0 0 1rem 0;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillItem = styled.div`
  font-size: 14px;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '▸';
    color: #64b5f6;
    font-weight: bold;
  }
`;

export default function Skills() {
  const skillsData = [
    {
      icon: <BugOutlined />,
      title: 'Automation Tools',
      skills: ['Playwright', 'Appium', 'Selenium (Basic)', 'Jenkins CI/CD'],
    },
    {
      icon: <CodeOutlined />,
      title: 'Programming & Scripting',
      skills: ['JavaScript', 'Python', 'C / C++', 'SQL', 'HTML / CSS'],
    },
    {
      icon: <ToolOutlined />,
      title: 'Testing Expertise',
      skills: [
        'Functional Testing',
        'Regression Testing',
        'API Testing',
        'Smoke & Sanity Testing',
        'UI Testing',
        'Cross-Browser Testing',
      ],
    },
    {
      icon: <DatabaseOutlined />,
      title: 'ERP & Tools',
      skills: [
        'Infor LN (10.4 / 10.7)',
        'Infor ION',
        'Procurement',
        'Inventory',
        'Finance',
        'Warehouse',
        'Postman',
        'JMeter',
        'Git / GitHub',
        'JIRA',
      ],
    },
  ];

  return (
    <SkillsSection>
      <Container>
        <SectionTitle>Skills & Expertise</SectionTitle>
        <Divider />
        <SkillsGrid>
          {skillsData.map((category, index) => (
            <SkillCard key={index}>
              <CardIcon>{category.icon}</CardIcon>
              <CardTitle>{category.title}</CardTitle>
              <SkillList>
                {category.skills.map((skill, idx) => (
                  <SkillItem key={idx}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}
