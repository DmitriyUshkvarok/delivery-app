import Container from 'components/Container/Container';
import { AiFillHome } from 'react-icons/ai';
import { RiShoppingBasketFill } from 'react-icons/ri';

import {
  StyleNavigation,
  NavigationList,
  NavigationItem,
  StyleNavLink,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <StyleNavigation>
        <NavigationList>
          <StyleNavLink to="/">
            <NavigationItem>
              <AiFillHome size={50} />
            </NavigationItem>
          </StyleNavLink>
          <StyleNavLink to="/basket-products">
            <NavigationItem>
              <RiShoppingBasketFill size={50} />
            </NavigationItem>
          </StyleNavLink>
        </NavigationList>
      </StyleNavigation>
    </Container>
  );
};

export default Navigation;
