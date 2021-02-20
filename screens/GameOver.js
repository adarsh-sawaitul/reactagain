import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Color from '../constants/color';

const GameOver = (props) => {
  return (
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
        Youre phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}>{props.roundsNumber}</Text>
      </BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  resultContainer:{
        marginHorizontal: 20
  },
  resultText:{
    textAlign: 'center'
  },
  highlight: {
      color: Color.primary,
      fontFamily: 'open-sans-bold',
      
  }
});

export default GameOver;
