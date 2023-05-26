import { useEffect, useState } from 'react';
import { firestore } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import {
  BasketPageTitle,
  BasketPageSubTitle,
  BasketPageList,
  BasketPageItem,
  BasketPageItemName,
  BasketPageItemPrice,
  BasketPageItemImg,
} from './BasketPage.styled';

const BasketPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'products'));
        const fetchedProducts = querySnapshot.docs.map(doc => doc.data());
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchedProducts();
  }, []);

  return (
    <div>
      <BasketPageTitle>Shopping cart</BasketPageTitle>
      <BasketPageSubTitle>Goods in cart:</BasketPageSubTitle>
      <BasketPageList>
        {products.map(product => (
          <BasketPageItem key={product.id}>
            <BasketPageItemName>name: {product.name}</BasketPageItemName>
            <BasketPageItemPrice>price: ${product.price}</BasketPageItemPrice>
            <BasketPageItemImg src={product.image} alt={product.name} />
          </BasketPageItem>
        ))}
      </BasketPageList>
    </div>
  );
};

export default BasketPage;
