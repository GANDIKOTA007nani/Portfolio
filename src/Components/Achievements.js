import styled from 'styled-components';

const AchievementsContainer = styled.section`
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
  background: #0f1419;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const Line = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, #60a5fa 0%, transparent 100%);
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #0f1419 100%);
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #334155;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #60a5fa;
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.1);
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #60a5fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f1419;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const Description = styled.p`
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

const CertificationContainer = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #0f1419 100%);
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #334155;
  margin-top: 28px;
  text-align: center;
`;

const CertTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #60a5fa;
  margin: 0 0 12px 0;
`;

const CertDescription = styled.p`
  color: #cbd5e1;
  margin: 0 0 16px 0;
`;

export const Achievements = () => {
  const achievements = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='20px'
          viewBox='0 -960 960 960'
          width='20px'
          fill='#000000'
        >
          <path d='M122-263q-11-11-11-25.5t11-25.5l211-211q21-21 51-21t51 21l106 105 245-275q10-11 25-12t26 9q11 10 12 25t-9 26L595-371q-21 23-52 24t-53-21L384-474 172-262q-11 11-25 10.5T122-263Z' />
        </svg>
      ),
      title: 'Testing Efficiency',
      description:
        'Reduced regression testing time by 30% through Playwright automation',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='20px'
          viewBox='0 -960 960 960'
          width='20px'
          fill='#000000'
        >
          <path d='M96-284q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432q66 0 126.5 17T625-366q22 13 34.5 34.61T672-284v20q0 29.7-21.16 50.85Q629.68-192 599.96-192H167.72Q138-192 117-213.15T96-264v-20Zm696 92h-67q9-17 14-35.19 5-18.18 5-36.81v-20q0-42-19.5-78T672-421q39 8 75.5 21.5T817-366q22 13 34.5 34.67Q864-309.65 864-284v20q0 29.7-21.15 50.85Q821.7-192 792-192ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm336-144q0 60-42 102t-102 42q-8 0-15-.5t-15-2.5q25-29 39.5-64.5T600-624q0-41-14.5-76.5T546-765q8-2 15-2.5t15-.5q60 0 102 42t42 102ZM168-264h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-264Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21ZM384-264Zm0-360Z' />
        </svg>
      ),
      title: 'Team Leadership',
      description:
        'Successfully led a 6-member QA team, delivering projects on time',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='20px'
          viewBox='0 -960 960 960'
          width='20px'
          fill='#000000'
        >
          <path d='m432-384-217-36q-22-4-28.5-25.5T197-482l394-373q5-5 11.5-7t17.5-2q18 0 27.5 15.5T649-817L528-576l217 36q22 4 28.5 25.5T763-478L369-105q-5 5-11.5 7T340-96q-18 0-27.5-15.5T311-143l121-241Zm38 84 191-180-241-41 70-139-191 181 241 40-70 139Zm10-180Z' />
        </svg>
      ),
      title: 'Quality Delivery',
      description: 'Improved user adoption and satisfaction as Product POC',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='20px'
          viewBox='0 -960 960 960'
          width='20px'
          fill='#000000'
        >
          <path d='m480-483-67 51q-5 4-10.5 0t-3.5-10l26-83-69-54q-5-4-3-10t9-6h83l26-82q2-6 9-6t9 6l26 82h83q7 0 9 6t-3 10l-69 54 26 83q2 6-3.5 10t-10.5 0l-67-51Zm0 387L307-58q-17 4-30.5-7T263-93v-235q-43-37-69-99t-26-125q0-130 91-221t221-91q130 0 221 91t91 221q0 64-24 125.5T696-327v234q0 17-13.5 28T652-58L480-96Zm0-216q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM335-138l145-32 144 32v-138q-33 18-69.5 27t-74.5 9q-38 0-75-8.5T335-276v138Zm145-70Z' />
        </svg>
      ),
      title: 'ERP Expertise',
      description:
        'Deep expertise in Infor LN ERP modules across multiple domains',
    },
  ];

  return (
    <AchievementsContainer id='achievements'>
      <SectionHeader>
        <SectionTitle>Achievements & Certifications</SectionTitle>
        <Line />
      </SectionHeader>
      <AchievementsGrid>
        {achievements.map((achievement, idx) => (
          <AchievementCard key={idx}>
            <IconWrapper>{achievement.icon}</IconWrapper>
            <Title>{achievement.title}</Title>
            <Description>{achievement.description}</Description>
          </AchievementCard>
        ))}
      </AchievementsGrid>
      <CertificationContainer>
        <CertTitle>🏆 Associate Consultant – Infor LN</CertTitle>
        <CertDescription>
          Credly Certified | Expert-level knowledge in Infor LN ERP Systems
        </CertDescription>
        <p style={{ color: '#60a5fa', fontSize: '0.9rem', margin: 0 }}>
          Verify Credential -
        </p>
      </CertificationContainer>
    </AchievementsContainer>
  );
};
