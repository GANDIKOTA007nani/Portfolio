import styled from 'styled-components';
import { CheckOutlined } from '@ant-design/icons';

const ExperienceSection = styled.section`
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
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const TimelineItem = styled.div`
  padding: 2rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 12px;
  border-left: 3px solid #64b5f6;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    border-color: #64b5f6;
    transform: translateX(8px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const JobTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0;
`;

const Company = styled.p`
  font-size: 16px;
  color: #64b5f6;
  margin: 0.25rem 0 0 0;
  font-weight: 600;
`;

const DateRange = styled.p`
  font-size: 14px;
  color: #94a3b8;
  margin: 0;
  white-space: nowrap;
`;

const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const JobPoint = styled.div`
  font-size: 14px;
  color: #cbd5e1;
  display: flex;
  gap: 0.75rem;
  line-height: 1.6;

  svg {
    color: #64b5f6;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export default function Experience() {
  const experiences = [
    {
      title: 'QA Engineer & Product POC',
      company: 'Piersoft Technologies, Hyderabad',
      dateRange: 'May 2023 – Present',
      points: [
        'Performed manual & automation testing for web and mobile apps using Playwright and basic Selenium',
        'Conducted functional, regression, integration, and system testing with full coverage',
        'Acted as Product POC coordinating with clients, developers, and design teams',
        'Led API testing using Postman ensuring backend integration and response accuracy',
        'Created & maintained test cases, test plans, and release documentation to UI/UX improvements',
      ],
    },
    {
      title: 'Infor ERP LN Consultant & Infor ION Specialist',
      company: 'Piersoft Technologies, Hyderabad',
      dateRange: 'June 2022 – May 2023',
      points: [
        'Configured Procurement, Warehouse, Master Data, Manufacturing, Sales, and Finance modules',
        'Streamlined procurement and warehouse workflows improving operational efficiency reducing process delays.',
        'Collaborated with clients to gather requirements, perform gap analysis, and deliver optimized, scalable ERP solutions.',
        'Utilized Infor ION to manage approval flows, trigger automated tasks, and configure real-time notifications across modules, ensuring seamless process automation.',
        'Participated in end-to-end implementation activities including configuration, testing, user training, and post-deployment support.',
        'Technologies: Infor LN (10.4 & 10.7), Infor ION',
      ],
    },
    // {
    //   title: 'QA Intern',
    //   company: 'Piersoft Technologies, Hyderabad',
    //   dateRange: 'June 2022 – Nov 2022',
    //   points: [
    //     'Gained hands-on experience with Procurement, Inventory, Finance, Projects, and Warehouse modules',
    //     'Assisted in frontend development using React, JavaScript, HTML, and CSS',
    //     'Designed UI/UX prototypes using Figma and ProtoPie',
    //     'Created and executed manual test cases and validated ERP system functionalities',
    //   ],
    // },
  ];

  return (
    <ExperienceSection>
      <Container>
        <SectionTitle>Professional Experience</SectionTitle>
        <Divider />
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <JobHeader>
                <div>
                  <JobTitle>{exp.title}</JobTitle>
                  <Company>{exp.company}</Company>
                </div>
                <DateRange>{exp.dateRange}</DateRange>
              </JobHeader>
              <JobDescription>
                {exp.points.map((point, idx) => (
                  <JobPoint key={idx}>
                    <CheckOutlined />
                    <span>{point}</span>
                  </JobPoint>
                ))}
              </JobDescription>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
}
