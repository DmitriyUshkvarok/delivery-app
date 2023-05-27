import styled from 'styled-components';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';

export const StyleIoChevronBackCircleSharp = styled(IoChevronBackCircleSharp)`
  color: aqua;

  &:hover {
    color: var(--hover-color-text);
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: var(--border-radius);
  background-color: var(--hover-color-text);
  border: none;
  cursor: pointer;
  transition: background-color var(--transition);
  box-shadow: var(--box-shadow-header);

  &:hover {
    background-color: gold;

    > ${StyleIoChevronBackCircleSharp} {
      color: var(--hover-color-text);
    }
  }
`;

export const BasketPageTitle = styled.h2`
  margin-top: 110px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  color: var(--color-title);
  text-shadow: var(--text-shadow);
`;

export const BasketPageSubTitle = styled.h3`
  color: var(--color-title);
  text-shadow: var(--text-shadow);
`;

export const NoProducts = styled.p`
  color: var(--color-title);
  text-shadow: var(--text-shadow);
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const BasketPageList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 30px;
`;

export const BasketPageItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  max-width: 500px;
  height: 100px;
  box-shadow: var(--box-shadow-header);
  border-radius: var(--border-radius);
  padding: 5px;
`;

export const BasketPageItemImg = styled.img`
  max-width: 100px;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
`;

export const BasketPageItemName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: gold;
  text-shadow: var(--text-shadow);
`;

export const BasketPageItemPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: aqua;
  text-shadow: var(--text-shadow);
`;

export const StyledTiDelete = styled(TiDelete)`
  color: red;
  width: 30px;
  height: 30px;

  &:hover {
    color: var(aqua);
  }
`;

export const BtnDeletedProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: aqua;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: var(--box-shadow-header);
  width: 30px;
  height: 30px;
  transition: var(--transition);

  &:hover {
    background-color: gold;

    > ${StyledTiDelete} {
      color: aqua;
    }
  }
`;
