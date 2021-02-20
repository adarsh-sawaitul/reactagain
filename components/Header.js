import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import color from '../constants/color';
import TitleText from '../components/TitleText';

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    //backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndroid:{
    backgroundColor: color.primary
  },
  // headerTitle: {
  //   color: 'black',
  //   fontSize: 25,
  //   fontFamily: 'open-sans-bold',
  // },
  title: {
    color: Platform.OS === 'ios' ? color.primary : 'white'
  }
});

export default Header;
