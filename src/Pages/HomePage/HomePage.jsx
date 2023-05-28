import Header from 'components/Header/Header';
import {
  HomePageTitle,
  FoodList,
  FoodItem,
  FoodItemImage,
  InfoFoodWrapper,
  FoodItemName,
  FoodItemPrice,
  ToggleOrder,
  StyleMdAddShoppingCart,
  StyleOkCheck,
  CounterWrapper,
  BtnIncrement,
  InputCounter,
  BtnDecrement,
} from './HomePage.styled';
import delivery from '../../DATA/delivery.json';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { firestore } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const HomePage = () => {
  const [selectedItems, setSelectedItems] = useState(
    JSON.parse(localStorage.getItem('selectedItems')) || []
  );
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem('countItems')) || 0
  );
  const [productLoading, setProductLoading] = useState([]);

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    localStorage.setItem('countItems', JSON.stringify(count));
  }, [selectedItems, count]);

  const handleOrderToggleFood = async itemId => {
    if (selectedItems.includes(itemId)) {
      return;
    }

    if (!count[itemId]) {
      toast.warning('Select a product quantity');
      return;
    }

    await addProductToDb(itemId);
    setSelectedItems(prev => [...prev, itemId]);
  };

  const addProductToDb = async id => {
    try {
      setProductLoading(prevLoading => ({
        ...prevLoading,
        [id]: true,
      }));

      setLoading(true);
      const selectedItem = delivery.items.find(item => item.id === id);
      if (selectedItem) {
        await addDoc(collection(firestore, 'products'), {
          name: selectedItem.name,
          price: selectedItem.price,
          image: selectedItem.image || 'https://dummyimage.com/200x300/fff/aaa',
          selected: true,
          count: count[id] || 0,
        });
        toast.success('Product added successfully');
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      toast.error('Error adding product to Firestore');
    } finally {
      setProductLoading(prevLoading => ({
        ...prevLoading,
        [id]: false,
      }));
      setLoading(false);
    }
  };

  const handleIncrement = itemId => {
    setCount(prevCounts => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = itemId => {
    setCount(prevCounts => {
      const newCount = (prevCounts[itemId] || 0) - 1;
      return {
        ...prevCounts,
        [itemId]: newCount >= 0 ? newCount : 0,
      };
    });
  };

  return (
    <div>
      <Header />
      <HomePageTitle>Food delivery anywhere in the city</HomePageTitle>
      <FoodList>
        {delivery.items.map(item => (
          <FoodItem key={item.id}>
            <FoodItemImage
              src={
                item.image
                  ? item.image
                  : 'https://dummyimage.com/200x300/fff/aaa'
              }
              alt={item.name}
            />
            <InfoFoodWrapper>
              <FoodItemName>{item.name}</FoodItemName>
              <FoodItemPrice>${item.price}</FoodItemPrice>
            </InfoFoodWrapper>
            {productLoading[item.id] ? (
              <p
                style={{
                  color: 'aqua',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  position: 'absolute',
                  zIndex: '10',
                  top: '10px',
                  right: '10px',
                }}
              >
                Adding...
              </p>
            ) : (
              <ToggleOrder
                onClick={() => handleOrderToggleFood(item.id)}
                disabled={
                  (loading || selectedItems.includes(item.id),
                  count[item.id] === 0)
                }
              >
                {selectedItems.includes(item.id) ? (
                  <StyleOkCheck size={30} color="green" />
                ) : (
                  <StyleMdAddShoppingCart size={30} color="gold" />
                )}
              </ToggleOrder>
            )}

            <CounterWrapper>
              <BtnIncrement
                type="button"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </BtnIncrement>
              <InputCounter
                type="text"
                name="counter"
                value={count[item.id] || 0}
                readOnly
              />
              <BtnDecrement
                type="button"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </BtnDecrement>
            </CounterWrapper>
          </FoodItem>
        ))}
      </FoodList>
    </div>
  );
};

export default HomePage;
