import styled from 'styled-components';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  padding: 2rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    border-color: rgba(100, 150, 255, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(100, 150, 255, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.6;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechBadge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: rgba(100, 150, 255, 0.15);
  color: #64b5f6;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

const Highlights = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HighlightItem = styled.li`
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.5;
`;

export default function Projects() {
  const projects = [
    {
      title: 'Market Place Mobile Application',
      description:
        'End-to-end testing of marketplace features for Android and iOS with strong focus on automation, API validation, and release readiness.',
      tech: ['Playwright', 'Postman', 'Appium', 'API Testing'],
      highlights: [
        'Performed manual + automation testing across mobile builds',
        'Validated APIs, error handling, performance checks, and backend integrations',
        'Acted as POC for release readiness and coordinated Play Store deployment validation',
      ],
    },
    {
      title: 'Procure 360 (ERP Procurement Module)',
      description:
        'Procurement workflow testing across PR, PO, vendor management, approvals, and end-to-end ERP integrations.',
      tech: ['Playwright', 'Postman', 'JIRA', 'SQL'],
      highlights: [
        'Manual, regression, and API testing for procurement flows',
        'Automated key flows using Playwright for faster regression cycles',
        'Collaborated with product/design teams for UI/UX consistency',
      ],
    },
    {
      title: 'Vendor Portal',
      description:
        'End-to-end vendor lifecycle testing including onboarding, tax verification, business partner creation, and approval flows.',
      tech: ['Postman', 'Playwright', 'Appium', 'Jenkins'],
      highlights: [
        'Performed UI + API testing across vendor workflows',
        'Ensured stability of approval flows and ERP integration accuracy',
        'Worked across web and mobile platforms for complete validation',
      ],
    },
    {
      title: 'Item Portal',
      description:
        'Testing of Purchase, Cost, and Subcontracting item creation, classification, and approval processes in ERP.',
      tech: ['Playwright', 'Postman', 'SQL', 'JIRA'],
      highlights: [
        'Functional + integration testing across all item flows',
        'Automated repetitive scenarios for faster coverage',
        'Identified workflow and data validation issues across modules',
      ],
    },
    {
      title: 'Converse Portal',
      description:
        'ERP communication workflow testing across departments with role-based routing and data validation.',
      tech: ['Playwright', 'Postman', 'JIRA'],
      highlights: [
        'Performed system + integration testing for cross-department workflows',
        'Validated role-based access and workflow routing',
        'Ensured data accuracy across multiple ERP modules',
      ],
    },
    {
      title: 'UI/UX Designs (Web + Mobile)',
      description:
        'Created modern UI/UX designs supporting development teams with clear and interactive prototypes.',
      tech: ['Figma', 'ProtoPie'],
      highlights: [
        'Designed 300+ mobile screens and 500+ web frames',
        'Created interactive prototypes for improved usability',
        'Ensured clarity and developer-ready design specifications',
      ],
    },
    {
  title: 'Infor LN Upgrade (10.4 to 10.7)',
  timeline: 'Nov 2022 – May 2023',
  description:
    'Supported the end-to-end upgrade process from Infor LN 10.4 to 10.7, including configuration updates, data validation, and system alignment across modules.',
  tech: ['Infor LN', 'ERP Modules', 'Data Validation', 'Testing'],
  highlights: [
    'Assisted in upgrade planning, execution, and environment preparation',
    'Collaborated with functional teams to gather requirements and align module configurations',
    'Performed data validation and supported system setup for smooth transition',
    'Provided user training, documentation, and post-upgrade support to ensure adoption',
  ],
},
  ];

  return (
    <ProjectsSection>
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <Divider />
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <Highlights>
                {project.highlights.map((highlight, idx) => (
                  <HighlightItem key={idx}>{highlight}</HighlightItem>
                ))}
              </Highlights>
              <TechStack>
                {project.tech.map((tech, idx) => (
                  <TechBadge key={idx}>{tech}</TechBadge>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}
