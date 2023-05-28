import {
  StyleFooter,
  FooterList,
  FooterItem,
  FooterLink,
} from './Footer.styled';
import Container from 'components/Container/Container';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import {
  FaTelegram,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <FooterList>
          <FooterItem>
            <FooterLink
              href="https://github.com/DmitriyUshkvarok"
              target="_blank"
            >
              <GoMarkGithub size={20} />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink
              href="https://www.linkedin.com/in/dmitriy-ushkvarok/"
              target="_blank"
            >
              <BsLinkedin size={20} />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="https://t.me/Dmitriy_Ushkvarok" target="_blank">
              <FaTelegram size={20} />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="https://wa.me/80957453646" target="_blank">
              <FaWhatsapp size={20} />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink
              href="https://www.facebook.com/profile.php?id=100033147623156"
              target="_blank"
            >
              <FaFacebook size={20} />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink
              href="https://www.instagram.com/dmitriy_ushkvarok/"
              target="_blank"
            >
              <FaInstagram size={20} />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink
              href="mailto:dmitriy.ushkvarok@gmail.com"
              target="_blank"
            >
              <AiOutlineMail size={20} />
            </FooterLink>
          </FooterItem>
        </FooterList>
      </Container>
    </StyleFooter>
  );
};

export default Footer;
