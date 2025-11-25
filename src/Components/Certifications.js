import styled from 'styled-components';
import { TrophyOutlined } from '@ant-design/icons';

const EducationSection = styled.section`
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
  margin-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// const EducationList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const EducationCard = styled.div`
//   padding: 2rem;
//   background: rgba(100, 150, 255, 0.05);
//   border: 1px solid rgba(100, 150, 255, 0.1);
//   border-radius: 12px;
//   border-left: 3px solid #64b5f6;
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(100, 150, 255, 0.1);
//     transform: translateX(8px);
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 1rem;
//   margin-bottom: 1rem;
// `;

// const IconBox = styled.div`
//   font-size: 24px;
//   color: #64b5f6;
//   flex-shrink: 0;
// `;

// const CardContent = styled.div`
//   flex: 1;
// `;

// const Degree = styled.h3`
//   font-size: 18px;
//   font-weight: 700;
//   color: #e2e8f0;
//   margin: 0 0 0.25rem 0;
// `;

// const Institution = styled.p`
//   font-size: 14px;
//   color: #64b5f6;
//   margin: 0 0 0.5rem 0;
//   font-weight: 600;
// `;

// const Year = styled.p`
//   font-size: 13px;
//   color: #94a3b8;
//   margin: 0;
// `;

const CertificationsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CertCard = styled.div`
  padding: 1.5rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    transform: translateY(-4px);
  }
`;

const CertTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CertDescription = styled.p`
  font-size: 13px;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.6;
`;

const AchievementsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AchievementItem = styled.div`
  padding: 1rem;
  background: rgba(100, 150, 255, 0.05);
  border-left: 2px solid #64b5f6;
  border-radius: 4px;
`;

const AchievementText = styled.p`
  font-size: 14px;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.6;
`;

export default function Certifications() {
  return (
    <EducationSection>
      <Container>
        <SectionTitle>Certifications & Achievements</SectionTitle>
        <Divider />
        <ContentWrapper>
          {/* <div
            style={{
              display: 'flex',

              gap: '1rem',
            }}
          > */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#e2e8f0',
                margin: '0 0 1.5rem 0',
              }}
            >
              Certifications
            </h3>
            <CertificationsContent>
              <CertCard>
                <CertTitle>
                  <TrophyOutlined />
                  Associate Consultant – Infor LN
                </CertTitle>
                <CertDescription>
                  Professional certification validating expertise in Infor LN
                  ERP system including Procurement, Inventory, Finance,
                  Projects, and Warehouse modules. Verifiable through Credly
                  platform.
                </CertDescription>
              </CertCard>
            </CertificationsContent>
          </div>

          <div>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#e2e8f0',
                margin: '0 0 1.5rem 0',
              }}
            >
              Key Achievements
            </h3>
            <AchievementsContent>
              <AchievementItem>
                <AchievementText>
                  🚀 Reduced regression testing time by 30% through Playwright
                  automation implementation
                </AchievementText>
              </AchievementItem>
              <AchievementItem>
                <AchievementText>
                  👥 Successfully led a 6-member QA team, delivering projects on
                  schedule
                </AchievementText>
              </AchievementItem>
              <AchievementItem>
                <AchievementText>
                  💡 Improved user adoption and satisfaction as Product POC
                </AchievementText>
              </AchievementItem>
            </AchievementsContent>
          </div>
          {/* </div> */}
        </ContentWrapper>
      </Container>
    </EducationSection>
  );
}
