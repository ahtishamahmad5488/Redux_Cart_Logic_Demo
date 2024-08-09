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
import {addToCart} from './Redux/action';
import {useDispatch} from 'react-redux';

let listProducts = [
  {
    image:
      'https://1ststep.pk/cdn/shop/files/7_ba88bcd0-3cb2-4579-9f1e-184cf979c026_720x.jpg?v=1704113181',
    name: 'SNEAKERS 0120332',
    brand: 'Service',
    price: 1900,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/1_a7f99474-1aa2-4202-ab11-f40f6512e1aa_720x.webp?v=1704113537',
    name: 'SNEAKERS 0120334',
    brand: 'Adidas',
    price: 2200,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/1_0fd7d410-243a-4b4f-951b-815c161a6932_720x.webp?v=1713623599',
    name: 'SANDAL 0140863',
    brand: 'Nike',
    price: 2900,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/4_55e9f13a-852e-4aa4-8682-083a6e19769d_720x.webp?v=1710926179',
    name: 'SANDAL 0140773',
    brand: 'Skechers',
    price: 1299,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/1_7daf8452-e212-4aaa-af38-080b49947fea_720x.webp?v=1711120789',
    name: 'SANDAL 0140173',
    brand: 'Bata',
    price: 1900,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/4_6edbbfc6-48a5-4caf-9c04-883e5de46bd5_720x.webp?v=1704112943',
    name: 'SNEAKERS 0120331',
    brand: 'Clarks',
    price: 3200,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/7_ba88bcd0-3cb2-4579-9f1e-184cf979c026_720x.jpg?v=1704113181',
    name: 'SNEAKERS 0120332',
    brand: 'PUMA',
    price: 1200,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/1_f2edf42c-59e6-4a44-aa83-0a0eea3a0833_720x.webp?v=1704113388',
    name: 'SNEAKERS 0120333',
    brand: 'Converse',
    price: 2599,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/7_30aca93b-5f53-41ab-a218-0ff8df9f7f34_720x.webp?v=1714834317',
    name: 'SLIPPER 0150769',
    brand: 'Vans',
    price: 3500,
    qty: 0,
  },
  {
    image:
      'https://1ststep.pk/cdn/shop/files/4_0888468c-3bed-4e2c-a1e8-c5cbdca1db88_720x.webp?v=1711965795',
    name: 'SLIPPER 0150649',
    brand: 'Birkenstock',
    price: 2799,
    qty: 0,
  },
];

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        data={listProducts}
        renderItem={({item, index}) => {
          return (
            <View style={style.cartItemsStyle}>
              <Image style={style.image} source={{uri: item.image}} />
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
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  {item.qty == 0 ? (
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
                  ) : null}
                </View>
              </View>
            </View>
          );
        }}
      />
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
