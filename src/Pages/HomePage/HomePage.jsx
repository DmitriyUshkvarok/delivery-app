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
  StyleMdRemoveShoppingCart,
} from './HomePage.styled';
import delivery from '../../DATA/delivery.json';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { firestore } from '../../firebase/config';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

const HomePage = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOrderToggleFood = async itemId => {
    if (selectedItems[itemId]) {
      await deleteProductFromDb(itemId);
      const updatedSelectedItems = { ...selectedItems };
      delete updatedSelectedItems[itemId];
      setSelectedItems(updatedSelectedItems);
    } else {
      await addProductToDb(itemId);
      setSelectedItems(prev => ({
        ...prev,
        [itemId]: true,
      }));
    }
  };

  const addProductToDb = async itemId => {
    console.log('add', itemId);
    try {
      setLoading(true);
      const selectedItem = delivery.items.find(item => item.id === itemId);
      if (selectedItem) {
        await addDoc(collection(firestore, 'products'), {
          id: itemId,
          name: selectedItem.name,
          price: selectedItem.price,
          image: selectedItem.image,
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

  const deleteProductFromDb = async itemId => {
    console.log('remove', itemId);
    try {
      setLoading(true);
      const productReff = doc(firestore, 'products', itemId);
      await deleteDoc(productReff);
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Error deleting product from Firestore');
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
              disabled={loading}
            >
              {selectedItems[item.id] ? (
                <StyleMdRemoveShoppingCart size={30} color="gold" />
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
