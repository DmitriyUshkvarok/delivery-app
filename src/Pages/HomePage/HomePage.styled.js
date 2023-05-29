import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';
import { RiCheckboxCircleLine } from 'react-icons/ri';

export const OrderForm = styled.form`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  box-shadow: var(--box-shadow-header);
  margin-left: auto;
  margin-right: auto;
  border-radius: var(--border-radius);
`;
export const OrderFormTitle = styled.h2`
  color: aqua;
  font-weight: bold;
  text-shadow: var(--text-shadow);
  text-align: center;
`;

export const OrderFormGroup = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const InputName = styled.input`
  width: 100%;
  max-width: 400px;
  display: flex;
  padding: 5px;
`;
export const InputPhone = styled.input`
  display: flex;
  padding: 5px;
  width: 100%;
  /* max-width: 400px;  */
`;
export const InputEmail = styled.input`
  display: flex;
  padding: 5px;
  width: 100%;
  /* max-width: 400px;  */
`;
export const InputAdress = styled.input`
  display: flex;
  padding: 5px;
  width: 100%;
  /* width: 100%;
  max-width: 400px; */
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const HomePageTitle = styled.h1`
  margin-top: 130px;
  text-align: center;
  max-width: 400px;
  font-size: 37px;
  letter-spacing: 1px;
  color: aqua;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  text-shadow: var(--text-shadow);
  border-radius: 10px;
  box-shadow: var(--box-shadow-header);
`;

export const FoodList = styled.ul`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 90px;
`;

export const FoodItem = styled.li`
  position: relative;
  background-image: var(--background-movies-item);
  width: 100%;
  max-width: 300px;
  height: 150px;
  padding: 5px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-header);
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
  color: gold;
  text-shadow: var(--text-shadow);
`;

export const FoodItemPrice = styled.span`
  margin-left: auto;
  display: block;
  color: aqua;
  font-weight: bold;
  text-shadow: var(--text-shadow);
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

export const StyleOkCheck = styled(RiCheckboxCircleLine)`
  cursor: pointer;
  transition: fill var(--transition);

  &:hover {
    color: var(--color-title);
    fill: var(--color-title);
  }
`;

export const CounterWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius);
`;

export const BtnIncrement = styled.button`
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: aqua;
  text-shadow: var(--text-shadow);
  cursor: pointer;
`;

export const InputCounter = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: aqua;
  text-shadow: var(--text-shadow);
`;

export const BtnDecrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: aqua;
  text-shadow: var(--text-shadow);
  cursor: pointer;
`;
