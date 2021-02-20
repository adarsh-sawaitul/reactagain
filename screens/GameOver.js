import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';


import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Color from '../constants/color';

const GameOver = (props) => {
  return (
    <ScrollView>
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //source={require('../assets/sucess.png')}
          source={{
            uri:
              'https://static.vecteezy.com/system/resources/previews/000/105/461/non_2x/comic-style-game-over-illustration-vector.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Youre phone needed{' '}
          <Text style={styles.highlight}>{props.roundNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        <BodyText>Number was: {props.userNumber}</BodyText>
        <MainButton title="NEW GAME" onPress={props.onRestart} />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window') < 400  ? 16 : 20
  },
  highlight: {
    color: Color.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOver;
