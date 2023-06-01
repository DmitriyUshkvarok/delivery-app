import styled from 'styled-components';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { GiFullPizza } from 'react-icons/gi';

export const StyleGiFullPizza = styled(GiFullPizza)`
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
  max-width: 400px;
  margin-top: 110px;
  margin-bottom: 30px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 37px;
  letter-spacing: 1px;
  color: aqua;
  text-shadow: var(--text-shadow);
  border-radius: 10px;
  box-shadow: var(--box-shadow-header);
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
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 90px;
  margin-left: auto;
  margin-right: auto;
`;

export const BasketPageItem = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 800px;
  box-shadow: var(--box-shadow-header);
  border-radius: var(--border-radius);
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const BasketPageItemImg = styled.img`
  max-width: 150px;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
`;

export const UserContactsInfo = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: gold;
  text-shadow: var(--text-shadow);
`;

export const SpanUserTextInfo = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: aqua;
  text-shadow: var(--text-shadow);
`;

export const UserContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-right: 50px;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  gap: 10px;
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

export const BasketPageItemCountDate = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: gray;
  text-shadow: 5px, 5px, 5px gray;
`;

export const BasketPageItemCount = styled.span`
  color: aqua;
  font-size: 14px;
  font-weight: 700;
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

export const StyleLoaderDeleting = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: aqua;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(-50% -20px);
`;

export const LogoRestaurant = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-10px, -50%);
  max-width: 30px;
`;
