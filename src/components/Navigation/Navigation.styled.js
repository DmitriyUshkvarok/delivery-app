import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleNavigation = styled.nav`
  width: 100%;
  display: flex;
`;

export const NavigationList = styled.ul`
  width: 100%;
  max-width: 300px;
  display: flex;
  gap: 25px;
`;

export const NavigationItem = styled.li`
  cursor: pointer;
`;

export const StyleNavLink = styled(NavLink)`
  fill: var(--color-icon);
  color: var(--color-icon);
  transition: color var(--transition);

  &:hover {
    color: var(--hover-color-text);
  }

  &.active {
    color: gold;
  }
`;
