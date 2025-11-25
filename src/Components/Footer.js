
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-left: 260px;
  padding: 2rem 4rem;
  background: rgba(15, 23, 42, 0.8);
  border-top: 1px solid rgba(100, 150, 255, 0.1);
  text-align: center;
  color: #94a3b8;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 2rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const HighlightLink = styled.a`
  color: #64b5f6;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        © {currentYear} Gandikota Kondalarao. Designed & Built with{' '}
        <span style={{ color: '#64b5f6' }}>React</span>,{' '}
        <HighlightLink
          href='https://styled-components.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          styled-components
        </HighlightLink>{' '}
        &{' '}
        <HighlightLink
          href='https://ant.design'
          target='_blank'
          rel='noopener noreferrer'
        >
          Ant Design
        </HighlightLink>
      </FooterText>
    </FooterContainer>
  );
}
