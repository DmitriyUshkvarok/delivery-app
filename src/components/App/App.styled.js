import styled from 'styled-components';
import { GiFoodTruck } from 'react-icons/gi';

export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;

export const StyleGiFoodTruck = styled(GiFoodTruck)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  animation: scale 1s infinite linear;
  -webkit-animation: scale 1s infinite linear;

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
