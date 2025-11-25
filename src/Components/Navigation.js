import styled from 'styled-components';
import {
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  FileSearchOutlined,
  ProjectOutlined,
  BookOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';

const NavContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 260px;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-right: 1px solid rgba(100, 116, 139, 0.1);
  z-index: 1000;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: sticky;
    border-right: none;
    border-bottom: 1px solid rgba(100, 116, 139, 0.1);
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #64b5f6;
  letter-spacing: -1px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 1rem;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.li`
  margin: 0;
`;

// Removed TypeScript typing
const NavLink = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) =>
    props.active ? 'rgba(100, 150, 255, 0.15)' : 'transparent'};
  color: ${(props) => (props.active ? '#64b5f6' : '#cbd5e1')};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-left: 2px solid
    ${(props) => (props.active ? '#64b5f6' : 'transparent')};

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    color: #64b5f6;
  }

  svg {
    font-size: 16px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem 1rem;
  margin-top: auto;
  border-top: 1px solid rgba(100, 116, 139, 0.1);
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #cbd5e1;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    color: #64b5f6;
    transform: translateY(-2px);
  }
`;

export default function Navigation({ activeSection, setActiveSection }) {
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavContainer>
      <Logo>GK</Logo>

      <NavList>
        <NavItem>
          <NavLink
            active={activeSection === 'hero'}
            onClick={() => scrollToSection('hero')}
          >
            <HomeOutlined /> Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={activeSection === 'about'}
            onClick={() => scrollToSection('about')}
          >
            <UserOutlined /> About
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={activeSection === 'skills'}
            onClick={() => scrollToSection('skills')}
          >
            <CodeOutlined /> Skills
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={activeSection === 'experience'}
            onClick={() => scrollToSection('experience')}
          >
            <FileSearchOutlined /> Experience
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={activeSection === 'projects'}
            onClick={() => scrollToSection('projects')}
          >
            <ProjectOutlined /> Projects
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={activeSection === 'education'}
            onClick={() => scrollToSection('education')}
          >
            <BookOutlined /> Education
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeSection === 'certifications'}
            onClick={() => scrollToSection('certifications')}
          >
            <SafetyCertificateOutlined /> Certifications
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            active={activeSection === 'contact'}
            onClick={() => scrollToSection('contact')}
          >
            <MailOutlined /> Contact
          </NavLink>
        </NavItem>
      </NavList>

      <SocialLinks>
        <SocialLink
          href='https://linkedin.com/in/gandikota-kondalarao-b21484237/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </SocialLink>

        <SocialLink
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github'></i>
        </SocialLink>

        <SocialLink href='mailto:gandikotakondalarao7@gmail.com'>
          <i className='fas fa-envelope'></i>
        </SocialLink>
      </SocialLinks>
    </NavContainer>
  );
}
