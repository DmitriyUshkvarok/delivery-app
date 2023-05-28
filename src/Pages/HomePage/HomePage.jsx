import Header from 'components/Header/Header';
import {
  OrderForm,
  OrderFormTitle,
  OrderFormGroup,
  InputName,
  InputPhone,
  InputEmail,
  InputAdress,
  HeaderWrapper,
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
import { collection, addDoc, query, getDocs, where } from 'firebase/firestore';
import { format } from 'date-fns';

const HomePage = () => {
  const [selectedItems, setSelectedItems] = useState(
    JSON.parse(localStorage.getItem('selectedItems')) || []
  );
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem('countItems')) || 0
  );
  const [productLoading, setProductLoading] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [formValues, setFormValues] = useState({
    userName: '',
    email: '',
    number: '',
    address: '',
  });

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    localStorage.setItem('countItems', JSON.stringify(count));
  }, [selectedItems, count]);

  // смена иконки и блокировка иконки добавить продукт если не выбрано количество товара
  const handleOrderToggleFood = async (itemId, formValues) => {
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

  // добавить обьект в базу данных firestore
  const addProductToDb = async id => {
    const date = new Date();
    const formatData = format(new Date(date), 'dd MMMM, yyyy | HH:mm');
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
          order: orderCount,
          ...formValues,
          formatData,
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

  // добавить количество  товаров для заказа
  const handleIncrement = itemId => {
    setCount(prevCounts => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  // убавить количество товаров для заказа
  const handleDecrement = itemId => {
    setCount(prevCounts => {
      const newCount = (prevCounts[itemId] || 0) - 1;
      return {
        ...prevCounts,
        [itemId]: newCount >= 0 ? newCount : 0,
      };
    });
  };

  // запрос на получение общего количества товаров в корзине чтобы отобразить его на иконке корзинки в хедере
  const getCountOfOrders = async () => {
    try {
      const q = query(
        collection(firestore, 'products'),
        where('selected', '==', true)
      );
      const querySnapshot = await getDocs(q);
      const count = querySnapshot.size;
      setOrderCount(count);
    } catch (error) {
      console.error('Error getting count of orders:', error);
      return 0;
    }
  };
  getCountOfOrders();

  // значения инпутов формы
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <HeaderWrapper>
        <Header orderCount={orderCount} />
      </HeaderWrapper>
      <HomePageTitle>Food delivery anywhere in the city</HomePageTitle>
      <OrderForm>
        <OrderFormTitle>Enter your information</OrderFormTitle>
        <OrderFormGroup>
          <InputName
            value={formValues.userName}
            onChange={handleInputChange}
            placeholder="name"
            type="text"
            name="userName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </OrderFormGroup>
        <OrderFormGroup>
          <InputPhone
            value={formValues.number}
            onChange={handleInputChange}
            placeholder="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </OrderFormGroup>
        <OrderFormGroup>
          <InputEmail
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="email"
            type="mail"
            name="email"
            required
          />
        </OrderFormGroup>
        <OrderFormGroup>
          <InputAdress
            value={formValues.address}
            onChange={handleInputChange}
            placeholder="address"
            type="text"
            name="address"
            required
          />
        </OrderFormGroup>
      </OrderForm>
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
    </>
  );
};

export default HomePage;
