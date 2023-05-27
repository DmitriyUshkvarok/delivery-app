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

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleOrderToggleFood = async itemId => {
    if (selectedItems.includes(itemId)) {
      return;
    }

    await addProductToDb(itemId);
    setSelectedItems(prev => [...prev, itemId]);
  };

  const addProductToDb = async id => {
    try {
      setLoading(true);
      const selectedItem = delivery.items.find(item => item.id === id);
      if (selectedItem) {
        await addDoc(collection(firestore, 'products'), {
          name: selectedItem.name,
          price: selectedItem.price,
          image: selectedItem.image,
          selected: true,
        });
        toast.success('Product added successfully');
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      toast.error('Error adding product to Firestore');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <HomePageTitle>Food delivery anywhere in the city</HomePageTitle>
      <FoodList>
        {delivery.items.map(item => (
          <FoodItem key={item.id}>
            <FoodItemImage src={item.image} alt={item.name} />
            <InfoFoodWrapper>
              <FoodItemName>{item.name}</FoodItemName>
              <FoodItemPrice>${item.price}</FoodItemPrice>
            </InfoFoodWrapper>
            <ToggleOrder
              onClick={() => handleOrderToggleFood(item.id)}
              disabled={loading || selectedItems.includes(item.id)}
            >
              {selectedItems.includes(item.id) ? (
                <StyleOkCheck size={30} color="green" />
              ) : (
                <StyleMdAddShoppingCart size={30} color="gold" />
              )}
            </ToggleOrder>
          </FoodItem>
        ))}
      </FoodList>
    </div>
  );
};

export default HomePage;
