import React, {useState, useRef} from 'react';

import {View, StatusBar, StyleSheet, Animated} from 'react-native';

import Card from './components/Card';
import Form from './components/Form';

const {Value, timing} = Animated;

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCode, setCardCode] = useState('');

  const cardAnimation = useRef(new Value(0)).current;

  const animation = (value) => {
    timing(cardAnimation, {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Card
          {...{cardNumber, cardName, cardExpiry, cardCode, cardAnimation}}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Form
          {...{
            cardNumber,
            setCardNumber,
            cardName,
            setCardName,
            cardExpiry,
            setCardExpiry,
            cardCode,
            setCardCode,
            animation,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b92e4',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#2b92e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

export default App;
