import Container from 'components/Container/Container';
import { AiFillHome } from 'react-icons/ai';
import { RiShoppingBasketFill } from 'react-icons/ri';

import {
  StyleNavigation,
  NavigationList,
  NavigationItem,
  StyleNavLink,
  StyeOrderCount,
} from './Navigation.styled';

const Navigation = ({ orderCount }) => {
  return (
    <Container>
      <StyleNavigation>
        <NavigationList>
          <StyleNavLink to="/">
            <NavigationItem>
              <AiFillHome size={40} />
            </NavigationItem>
          </StyleNavLink>
          <StyleNavLink to="/basket-products">
            <StyeOrderCount>{orderCount}</StyeOrderCount>
            <NavigationItem>
              <RiShoppingBasketFill size={40} />
            </NavigationItem>
          </StyleNavLink>
        </NavigationList>
      </StyleNavigation>
    </Container>
  );
};

export default Navigation;
