import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';

import Card from '../components/Card';
import Color from '../constants/color';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import Input from '../components/Input';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, '')); // valiadation of the user  input or
    //user cant enter any thing , expect numbers
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
  
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });


  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'numer has to be entered between  1 to 99 .',
        [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
      );
      //return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  // let confirmedOutput;

  // if (confirmed){
  //   confirmedOutput = <Text> Chosen number: {selectedNumber} </Text>
  // }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText> You selected </BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton  onPress={() => props.onStartGame(selectedNumber)} > 
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
    <TouchableWithoutFeedback
      onPress={() => {
        // if user touches anywhere on  the screen the keyboard dissapearss
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>The Game Screen</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText> Select a Number </BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={resetInputHandler}
                title="Reset"
                color={Color.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={confirmInputHandler}
                title="Confirm"
                color={Color.accent}
              />
            </View>
          </View>
        </Card>
        
  
        {confirmedOutput}

      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 40,
    alignItems: 'center'
  },
  text:{
    fontFamily: 'open-sans'
  }
});

export default StartGameScreen;
