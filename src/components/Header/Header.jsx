import Navigation from 'components/Navigation/Navigation';
import { StyleHeader, NavigationContainer } from './Header.styled';

const Header = () => {
  return (
    <StyleHeader>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StyleHeader>
  );
};

export default Header;
