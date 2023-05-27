import Navigation from 'components/Navigation/Navigation';
import {
  StyleHeader,
  NavigationContainer,
  LogoContainer,
  StyleGiFullPizza,
} from './Header.styled';

const Header = () => {
  return (
    <StyleHeader>
      <LogoContainer>
        <StyleGiFullPizza size={50}></StyleGiFullPizza>
      </LogoContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StyleHeader>
  );
};

export default Header;
