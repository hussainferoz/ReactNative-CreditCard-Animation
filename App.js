import React, {useState} from 'react';

import {View, StatusBar, StyleSheet} from 'react-native';

import Card from './components/Card';
import Form from './components/Form';

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCode, setCardCode] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <Card {...{cardNumber, cardName, cardExpiry, cardCode}} />
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
    flex: 2,
    backgroundColor: '#2b92e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

export default App;
