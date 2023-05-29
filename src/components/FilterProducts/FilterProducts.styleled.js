import styled from 'styled-components';

export const FilterList = styled.ul`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  gap: 5px;
  margin-top: 10px;
  box-shadow: var(--box-shadow-header);
  padding: 10px;
  border-radius: var(--border-radius);
`;

export const FilterItem = styled.li`
  padding: 5px;
  border-radius: var(--border-radius);
  background-color: rgba(0, 0, 0, 0.5);
  color: aqua;
  text-shadow: var(--text-shadow);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: var(--box-shadow-header);
  transition: var(--transition);

  &:hover {
    color: gold;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
