
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../constants/color';
import TitleText from '../components/TitleText';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 45,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'open-sans-bold'
  },
});

export default Header;
