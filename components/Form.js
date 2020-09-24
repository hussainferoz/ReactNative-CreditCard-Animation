import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Form = ({
  cardNumber,
  setCardNumber,
  cardName,
  setCardName,
  cardExpiry,
  setCardExpiry,
  cardCode,
  setCardCode,
  animation,
}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.view}>
          <Text style={styles.text}>Card Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="3534 3500 0000 3654"
            placeholderTextColor="#8c8c8c"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            onFocus={() => animation(0)}
          />
        </View>

        <View style={[styles.view, {flexDirection: 'row'}]}>
          <View style={[styles.view, {flex: 1, paddingRight: 10}]}>
            <Text style={styles.text}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              placeholderTextColor="#8c8c8c"
              value={cardExpiry}
              onChangeText={(text) => setCardExpiry(text)}
              onFocus={() => animation(0)}
            />
          </View>

          <View style={[styles.view, {flex: 1, paddingLeft: 10}]}>
            <Text style={styles.text}>Secure Code</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="142"
              placeholderTextColor="#8c8c8c"
              value={cardCode}
              onChangeText={(text) => setCardCode(text)}
              onFocus={() => animation(1)}
            />
          </View>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}>Name On Card</Text>
          <TextInput
            style={styles.input}
            placeholder="Hussain Feroz"
            placeholderTextColor="#8c8c8c"
            value={cardName}
            onChangeText={(text) => setCardName(text)}
            onFocus={() => animation(0)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, {color: '#000'}]}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Form;

Form.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardExpiry: PropTypes.string,
  cardCode: PropTypes.string,
  setCardNumber: PropTypes.func,
  setCardName: PropTypes.func,
  setCardExpiry: PropTypes.func,
  setCardCode: PropTypes.func,
  animation: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    margin: 20,
    // justifyContent: 'space-between',
  },
  view: {
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    color: 'teal',
    fontWeight: '600',
  },
  input: {
    height: 60,
    borderWidth: 1.5,
    borderColor: '#bfbfbf',
    paddingLeft: 30,
    fontSize: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#e3d474',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
