import { useEffect, useState } from 'react';
import { firestore } from '../../firebase/config';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import {
  StyleGiFullPizza,
  ButtonBack,
  StyleIoChevronBackCircleSharp,
  BasketPageTitle,
  BasketPageSubTitle,
  NoProducts,
  BasketPageList,
  BasketPageItem,
  UserContacts,
  UserContactsInfo,
  SpanUserTextInfo,
  OrderInfoContainer,
  BasketPageItemName,
  BasketPageItemPrice,
  BasketPageItemCount,
  BasketPageItemCountDate,
  BasketPageItemImg,
  BtnDeletedProduct,
  StyledTiDelete,
  StyleLoaderDeleting,
} from './BasketPage.styled';

const BasketPage = ({ orderCount }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productLoading, setProductLoading] = useState({});

  const navigate = useNavigate();

  // получение списка продуктов заказа из базы данных
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

  //общий подсчет сцуммы заказа
  const updateTotalPrice = productsList => {
    const total = productsList.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    setTotalPrice(total);
  };

  // навигация на предидущую страницу
  const handleBackPage = () => {
    navigate(-1);
  };

  // удаления продукта из базы данных
  const deleteProductFromDb = async itemId => {
    try {
      setProductLoading(prevLoading => ({
        ...prevLoading,
        [itemId]: true,
      }));

      const productDoc = doc(firestore, 'products', itemId);
      await deleteDoc(productDoc);
      toast.success('Product deleted successfully');

      setProducts(prevProducts =>
        prevProducts.filter(product => product.id !== itemId)
      );
      updateTotalPrice(products.filter(product => product.id !== itemId));
      localStorage.removeItem('selectedItems');
      localStorage.removeItem('countItems');
    } catch (error) {
      toast.error('Error deleting product from Firestore');
    } finally {
      setProductLoading(prevLoading => ({
        ...prevLoading,
        [itemId]: false,
      }));

      setLoading(false);
    }
  };

  return (
    <>
      <Header orderCount={orderCount} />
      <Container>
        <BasketPageTitle>Shopping cart</BasketPageTitle>
        <Link onClick={handleBackPage}>
          <ButtonBack>
            <StyleIoChevronBackCircleSharp size={30} />
          </ButtonBack>
        </Link>
        {loading ? (
          <StyleGiFullPizza size={50} color="gold" />
        ) : (
          <>
            <BasketPageSubTitle>
              Total price: ${totalPrice.toFixed(2)}
            </BasketPageSubTitle>
            {products.length === 0 ? (
              <NoProducts>No products found.</NoProducts>
            ) : (
              <BasketPageList>
                {products.map(product => (
                  <BasketPageItem key={product.id}>
                    <BasketPageItemImg
                      src={
                        product.image
                          ? product.image
                          : 'https://dummyimage.com/200x300/fff/aaa'
                      }
                      alt={product.name}
                    />
                    <UserContacts>
                      <UserContactsInfo>
                        <SpanUserTextInfo>Customer name:</SpanUserTextInfo>
                        {product.userName}
                      </UserContactsInfo>
                      <UserContactsInfo>
                        <SpanUserTextInfo>Email:</SpanUserTextInfo>
                        {product.email}
                      </UserContactsInfo>
                      <UserContactsInfo>
                        <SpanUserTextInfo>Phone:</SpanUserTextInfo>
                        {product.number}
                      </UserContactsInfo>
                      <UserContactsInfo>
                        <SpanUserTextInfo>Adress:</SpanUserTextInfo>
                        {product.address}
                      </UserContactsInfo>
                    </UserContacts>
                    <OrderInfoContainer>
                      <BasketPageItemName>
                        Product: {product.name}
                      </BasketPageItemName>
                      <BasketPageItemCount>
                        Restaurant chain:{product.store}
                      </BasketPageItemCount>
                      <BasketPageItemPrice>
                        Price: ${product.price}
                      </BasketPageItemPrice>
                      <BasketPageItemCount>
                        Quantity:{product.count}
                      </BasketPageItemCount>
                      <BasketPageItemCountDate>
                        Date:{product.formatData}
                      </BasketPageItemCountDate>
                    </OrderInfoContainer>
                    <BtnDeletedProduct
                      onClick={() => deleteProductFromDb(product.id)}
                    >
                      {productLoading[product.id] ? (
                        <StyleLoaderDeleting>Deleting...</StyleLoaderDeleting>
                      ) : (
                        <StyledTiDelete />
                      )}
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
