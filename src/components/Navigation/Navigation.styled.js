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
  position: relative;
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

export const StyeOrderCount = styled.p`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
`;
