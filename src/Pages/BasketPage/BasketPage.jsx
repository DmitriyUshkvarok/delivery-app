import { useEffect, useState } from 'react';
import { firestore } from '../../firebase/config';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import {
  ButtonBack,
  StyleIoChevronBackCircleSharp,
  BasketPageTitle,
  BasketPageSubTitle,
  NoProducts,
  BasketPageList,
  BasketPageItem,
  BasketPageItemName,
  BasketPageItemPrice,
  BasketPageItemImg,
  BtnDeletedProduct,
  StyledTiDelete,
} from './BasketPage.styled';

const BasketPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(firestore, 'products'));
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);
        updateTotalPrice(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const updateTotalPrice = productsList => {
    const total = productsList.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(total);
  };

  const handleBackPage = () => {
    navigate(-1);
  };

  const deleteProductFromDb = async itemId => {
    console.log(itemId);
    try {
      const productDoc = doc(firestore, 'products', itemId);
      await deleteDoc(productDoc);
      toast.success('Product deleted successfully');

      setProducts(prevProducts =>
        prevProducts.filter(product => product.id !== itemId)
      );
      updateTotalPrice(products.filter(product => product.id !== itemId));
      localStorage.removeItem('selectedItems');
    } catch (error) {
      toast.error('Error deleting product from Firestore');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <BasketPageTitle>Shopping cart</BasketPageTitle>
        <Link onClick={handleBackPage}>
          <ButtonBack>
            <StyleIoChevronBackCircleSharp size={30} />
          </ButtonBack>
        </Link>
        {loading ? (
          <div>Loading...</div> // Показать индикатор загрузки или блокировать элементы
        ) : (
          <>
            <BasketPageSubTitle>
              Total price: ${totalPrice.toFixed(1)}
            </BasketPageSubTitle>
            {products.length === 0 ? (
              <NoProducts>No products found.</NoProducts>
            ) : (
              <BasketPageList>
                {products.map(product => (
                  <BasketPageItem key={product.id}>
                    <BasketPageItemImg src={product.image} alt={product.name} />
                    <BasketPageItemName>
                      name: {product.name}
                    </BasketPageItemName>
                    <BasketPageItemPrice>
                      price: ${product.price}
                    </BasketPageItemPrice>
                    <BtnDeletedProduct
                      onClick={() => deleteProductFromDb(product.id)}
                    >
                      <StyledTiDelete />
                    </BtnDeletedProduct>
                  </BasketPageItem>
                ))}
              </BasketPageList>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default BasketPage;
