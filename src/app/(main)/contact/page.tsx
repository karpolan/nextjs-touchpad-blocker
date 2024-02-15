import { PUBLIC_URL } from '../../../config';
import { Wrapper } from '@/components';
import BlockSocialMedia from './BlockSocialMedia';
import BlockContactForm from './BlockContactForm';

export const metadata = {
  alternates: {
    canonical: `${PUBLIC_URL}/contact/`,
  },
};

/**
 * Content of Contact page
 * @page Contact
 */
const ContactPage = () => {
  return (
    <Wrapper tag="article">
      <BlockContactForm />
      <BlockSocialMedia />
    </Wrapper>
  );
};

export default ContactPage;
