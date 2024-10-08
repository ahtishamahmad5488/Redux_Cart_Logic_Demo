import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity, removeToCart} from './Redux/action';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  ///------Function Handle Remove / Increase / Decrease Quantity
  const handleIncreaseQuantity = id => {
    dispatch(increaseQuantity(id));
  };
  const handleDecreaseQuantity = id => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemoveToCart = item => {
    dispatch(removeToCart(item));
  };

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 60,
          paddingRight: 20,
          paddingLeft: 20,
          backgroundColor: 'white',
          elevation: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 20,
          }}>
          {/* Navigate to Back Screen */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{height: 20, width: 20}}
              source={require('./Images/cross.png')}
            />
          </TouchableOpacity>
          <Text style={style.cartTitle}>Your Cart Items</Text>
        </View>
      </View>
      <View>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            renderItem={({item, index}) => {
              return (
                <View style={style.cartItemsStyle}>
                  <Image style={style.image} source={{uri: item.image}} />
                  <View style={{padding: 10}}>
                    <Text
                      style={{color: 'black', fontSize: 18, fontWeight: '800'}}>
                      {item.name}
                    </Text>
                    <Text
                      style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                      {item.brand}
                    </Text>
                    <Text
                      style={{color: 'green', fontSize: 16, fontWeight: '600'}}>
                      {'Quantity: ' + item.qty}
                    </Text>
                    <Text
                      style={{color: 'green', fontSize: 16, fontWeight: '600'}}>
                      {'Total: Rs ' + item.qty * item.price}
                    </Text>

                    {/* Increase / Decrease / Remove To Cart Logic */}

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
                        {item.qty}
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
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 5,
                      }}>
                      <TouchableOpacity
                        onPress={() => handleRemoveToCart(item)}
                        style={{
                          backgroundColor: 'red',
                          borderRadius: 8,
                          height: 26,
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}>
                        <Text style={{color: 'white'}}>Remove To Cart</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        ) : (
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: '900',
            }}>
            Empty Cart
          </Text>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cartTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 80,
  },
  cartItemsStyle: {
    width: '90%',
    height: 160,
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
    width: 130,
    height: 140,
    borderRadius: 10,
  },
});

export default Cart;
