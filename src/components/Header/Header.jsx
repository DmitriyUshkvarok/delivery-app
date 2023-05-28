import Navigation from 'components/Navigation/Navigation';
import { Link } from 'react-router-dom';
import {
  StyleHeader,
  NavigationContainer,
  LogoContainer,
  StyleGiFullPizza,
} from './Header.styled';

const Header = ({ orderCount }) => {
  return (
    <StyleHeader>
      <LogoContainer>
        <Link to="/">
          <StyleGiFullPizza size={50}></StyleGiFullPizza>
        </Link>
      </LogoContainer>
      <NavigationContainer>
        <Navigation orderCount={orderCount} />
      </NavigationContainer>
    </StyleHeader>
  );
};

export default Header;
