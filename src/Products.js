import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from './Header';

///----Import Actions From Action.js
import {addToCart, increaseQuantity, decreaseQuantity} from './Redux/action';

///----Hooks import from React-Redux
///----useDispatch used to call Function in redux
///---useSelector used to get data from store
import {useDispatch, useSelector} from 'react-redux';

///---Navigation used to navigate to another screen
import {useNavigation} from '@react-navigation/native';

///-----Product Listing
let listProducts = [
  {
    id: 0,
    image:
      'https://1ststep.pk/cdn/shop/files/7_ba88bcd0-3cb2-4579-9f1e-184cf979c026_720x.jpg?v=1704113181',
    name: 'SNEAKERS 0120332',
    brand: 'Service',
    price: 1900,
    qty: 0,
  },
  {
    id: 1,
    image:
      'https://1ststep.pk/cdn/shop/files/1_a7f99474-1aa2-4202-ab11-f40f6512e1aa_720x.webp?v=1704113537',
    name: 'SNEAKERS 0120334',
    brand: 'Adidas',
    price: 2200,
    qty: 0,
  },
  {
    id: 2,
    image:
      'https://1ststep.pk/cdn/shop/files/1_0fd7d410-243a-4b4f-951b-815c161a6932_720x.webp?v=1713623599',
    name: 'SANDAL 0140863',
    brand: 'Nike',
    price: 2900,
    qty: 0,
  },
  {
    id: 3,
    image:
      'https://1ststep.pk/cdn/shop/files/4_55e9f13a-852e-4aa4-8682-083a6e19769d_720x.webp?v=1710926179',
    name: 'SANDAL 0140773',
    brand: 'Skechers',
    price: 1299,
    qty: 0,
  },
  {
    id: 4,
    image:
      'https://1ststep.pk/cdn/shop/files/1_7daf8452-e212-4aaa-af38-080b49947fea_720x.webp?v=1711120789',
    name: 'SANDAL 0140173',
    brand: 'Bata',
    price: 1900,
    qty: 0,
  },
  {
    id: 5,
    image:
      'https://1ststep.pk/cdn/shop/files/4_6edbbfc6-48a5-4caf-9c04-883e5de46bd5_720x.webp?v=1704112943',
    name: 'SNEAKERS 0120331',
    brand: 'Clarks',
    price: 3200,
    qty: 0,
  },
  {
    id: 6,
    image:
      'https://1ststep.pk/cdn/shop/files/7_ba88bcd0-3cb2-4579-9f1e-184cf979c026_720x.jpg?v=1704113181',
    name: 'SNEAKERS 0120432',
    brand: 'PUMA',
    price: 1200,
    qty: 0,
  },
  {
    id: 7,
    image:
      'https://1ststep.pk/cdn/shop/files/1_f2edf42c-59e6-4a44-aa83-0a0eea3a0833_720x.webp?v=1704113388',
    name: 'SNEAKERS 0120333',
    brand: 'Converse',
    price: 2500,
    qty: 0,
  },
  {
    id: 8,
    image:
      'https://1ststep.pk/cdn/shop/files/7_30aca93b-5f53-41ab-a218-0ff8df9f7f34_720x.webp?v=1714834317',
    name: 'SLIPPER 0150769',
    brand: 'Vans',
    price: 3500,
    qty: 0,
  },
  {
    id: 9,
    image:
      'https://1ststep.pk/cdn/shop/files/4_0888468c-3bed-4e2c-a1e8-c5cbdca1db88_720x.webp?v=1711965795',
    name: 'SLIPPER 0150649',
    brand: 'Birkenstock',
    price: 2799,
    qty: 0,
  },
];

///---Main Product Function
const Products = () => {
  const cartItem = useSelector(state => state.reducer);
  const cartCount = cartItem.length;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  ///---used to calculate prices of Items
  const getTotalPrice = () => {
    let total = 0;
    cartItem.forEach(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  ////-------Call Functions

  const handleAddToCart = item => {
    dispatch(addToCart({...item, qty: 1}));
  };
  const handleIncreaseQuantity = id => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = id => {
    dispatch(decreaseQuantity(id));
  };

  ////------return Cart Item Id
  // item: Represents the current element in the cartItem array during each iteration.
  // item.id === id: The condition that is checked for each item.
  // It returns true if the id of the current item matches the id passed to the function.
  const getCartItemById = id => {
    return cartItem.find(item => item.id === id);
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        data={listProducts}
        ///-----KeyExtractor use to get ID Unique for each item in cartItem
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          ///------For Unique ID
          const cartItem = getCartItemById(item.id);
          return (
            <View style={style.cartItemsStyle}>
              {/* Images From List */}
              <Image style={style.image} source={{uri: item.image}} />

              {/* OtherInformation From List */}
              <View style={{padding: 10}}>
                <Text style={{color: 'black', fontSize: 18, fontWeight: '800'}}>
                  {item.name}
                </Text>
                <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                  {item.brand}
                </Text>
                <Text style={{color: 'green', fontSize: 16, fontWeight: '600'}}>
                  {'Rs ' + item.price}
                </Text>

                {/* Button Logic Add / Increase / Decrease To Cart */}
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  {!cartItem ? (
                    <TouchableOpacity
                      onPress={() => handleAddToCart(item)}
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 8,
                        height: 26,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}>
                      <Text style={{color: 'white'}}>Add To Cart</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() => handleDecreaseQuantity(item.id)}
                        style={{
                          backgroundColor: 'green',
                          borderRadius: 8,
                          height: 26,
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}>
                        <Text style={{color: 'white'}}>-</Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 16,
                          fontWeight: '600',
                          color: 'black',
                          marginRight: 10,
                        }}>
                        {cartItem.qty}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleIncreaseQuantity(item.id)}
                        style={{
                          backgroundColor: 'green',
                          borderRadius: 8,
                          height: 26,
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}>
                        <Text style={{color: 'white'}}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />

      {/* Information About Price & Cart Item Quantity */}

      {cartItem.length > 0 ? (
        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: '#faebd7',
            position: 'absolute',
            bottom: 0,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '800'}}>
              {'Added Items ' + ' (' + cartCount + ') '}
            </Text>
            <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
              {'Total:' + getTotalPrice()}
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{
                width: '70%',
                height: 35,
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '800',
                }}>
                View Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  cartItemsStyle: {
    width: '90%',
    height: 120,
    backgroundColor: 'white',
    elevation: 5,
    alignSelf: 'center',
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default Products;
