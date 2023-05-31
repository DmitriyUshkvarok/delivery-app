import styled from 'styled-components';
import { GiFoodTruck } from 'react-icons/gi';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;

export const StyleGiFoodTruck = styled(GiFoodTruck)`
  transform: translate(-50% -50%);
  animation: scale 3s infinite linear;
  -webkit-animation: scale 3s infinite linear;

  @keyframes scale {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }
`;
