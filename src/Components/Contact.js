import { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

/* -------------------------------------------------------------------------- */
/*                               Styled Components                            */
/* -------------------------------------------------------------------------- */

const ContactSection = styled.section`
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
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #cbd5e1;
  text-align: center;
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: rgba(100, 150, 255, 0.1);
    border-color: rgba(100, 150, 255, 0.3);
    transform: translateX(8px);
  }
`;

const InfoIcon = styled.div`
  font-size: 24px;
  color: #64b5f6;
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.p`
  font-size: 12px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
`;

const InfoValue = styled.p`
  font-size: 16px;
  color: #e2e8f0;
  margin: 0;
  font-weight: 500;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
`;

const Input = styled.input`
  padding: 0.75rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(100, 150, 255, 0.1);
    border-color: #64b5f6;
  }

  &::placeholder {
    color: #64748b;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  background: rgba(100, 150, 255, 0.05);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 14px;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(100, 150, 255, 0.1);
    border-color: #64b5f6;
  }

  &::placeholder {
    color: #64748b;
  }
`;

const SubmitButton = styled.button`
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(100, 150, 255, 0.1);
`;

const SocialLink = styled.a`
  font-size: 28px;
  color: #cbd5e1;
  transition: all 0.3s ease;

  &:hover {
    color: #64b5f6;
    transform: translateY(-4px);
  }
`;

/* -------------------------------------------------------------------------- */
/*                                Main Component                               */
/* -------------------------------------------------------------------------- */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        'service_trniy27', // <-- replace
        'template_gwrrl78', // <-- replace
        {
          to_email: 'gandikotakondalarao7@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'fDs7Utqr2eoftEV_s' // <-- replace
      )
      .then(() => {
        alert('Message sent successfully!');

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log('Email send error:', error);
        alert('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <ContactSection>
      <Container>
        <SectionTitle>Let's Connect</SectionTitle>
        <Subtitle>
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </Subtitle>

        <ContentGrid>
          <ContactInfo>
            <InfoCard href='mailto:gandikotakondalarao7@gmail.com'>
              <InfoIcon>
                <MailOutlined />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>gandikotakondalarao7@gmail.com</InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard href='tel:+917036305040'>
              <InfoIcon>
                <PhoneOutlined />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>+91 703-630-5040</InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard as='div'>
              <InfoIcon>
                <EnvironmentOutlined />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>Hyderabad, India</InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard
              href='https://www.linkedin.com/in/gandikota-kondalarao-b21484237/'
              target='_blank'
            >
              <InfoIcon>
                <LinkedinOutlined />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>LinkedIn</InfoLabel>
                <InfoValue>View Profile</InfoValue>
              </InfoContent>
            </InfoCard>
          </ContactInfo>

          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Full Name</Label>
              <Input
                type='text'
                name='name'
                placeholder='Your name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Email Address</Label>
              <Input
                type='email'
                name='email'
                placeholder='your@email.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Subject</Label>
              <Input
                type='text'
                name='subject'
                placeholder='Message subject'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea
                name='message'
                placeholder='Your message...'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </FormContainer>
        </ContentGrid>

        <SocialLinks>
          <SocialLink
            href='https://linkedin.com/in/gandikota-kondalarao-b21484237/'
            target='_blank'
          >
            <LinkedinOutlined />
          </SocialLink>

          <SocialLink href='https://github.com' target='_blank'>
            <GithubOutlined />
          </SocialLink>

          <SocialLink href='mailto:gandikotakondalarao7@gmail.com'>
            <MailOutlined />
          </SocialLink>
        </SocialLinks>
      </Container>
    </ContactSection>
  );
}
