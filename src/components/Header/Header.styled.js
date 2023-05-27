import styled from 'styled-components';
import { GiFullPizza } from 'react-icons/gi';

export const LogoContainer = styled.div`
  margin-left: 30px;
`;

export const StyleGiFullPizza = styled(GiFullPizza)`
  color: gold;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-image: var(--background-header);
  box-shadow: var(--box-shadow-header);
`;

export const NavigationContainer = styled.div`
  margin-left: auto;
  margin-right: 40px;
`;
