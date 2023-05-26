import styled from 'styled-components';

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
