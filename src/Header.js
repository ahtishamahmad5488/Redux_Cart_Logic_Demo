import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartItem = useSelector(state => state.reducer);
  const cartCount = cartItem.length;

  return (
    <View>
      <View style={style.header}>
        <Text style={style.textHeader}>Redux Demo</Text>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 40,
              width: 90,
              marginRight: 10,
              backgroundColor: 'orange',
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text style={style.countItem}>{cartCount}</Text>
            <Image style={style.img} source={require('./Images/card.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'space-between',
  },
  textHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  countItem: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  img: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default Header;
