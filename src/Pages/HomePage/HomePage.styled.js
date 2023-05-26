import styled from 'styled-components';
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

export const HomePageTitle = styled.h1`
  margin-top: 130px;
  text-align: center;
  max-width: 400px;
  font-size: 37px;
  letter-spacing: 1px;
  color: var(--color-title);
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
`;

export const FoodList = styled.ul`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const FoodItem = styled.li`
  position: relative;
  background-image: var(--background-movies-item);
  width: 100%;
  max-width: 300px;
  height: 150px;
  padding: 5px;
  border-radius: var(--border-radius);
`;

export const FoodItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 5px;
  border-radius: var(--border-radius);
`;

export const InfoFoodWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const FoodItemName = styled.h3`
  font-size: 14px;
  letter-spacing: 2px;
  color: var(--color-title);
`;

export const FoodItemPrice = styled.span`
  margin-left: auto;
  display: block;
  color: var(--color-icon);
  font-weight: bold;
`;

export const ToggleOrder = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: none;
`;

export const StyleMdAddShoppingCart = styled(MdAddShoppingCart)`
  cursor: pointer;
  transition: fill var(--transition);

  &:hover {
    color: var(--color-title);
    fill: var(--color-title);
  }
`;

export const StyleMdRemoveShoppingCart = styled(MdRemoveShoppingCart)`
  cursor: pointer;
  transition: fill var(--transition);

  &:hover {
    color: var(--color-title);
    fill: var(--color-title);
  }
`;
