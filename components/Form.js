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
  const codeValidate = new RegExp('^[0-9]{1,3}$');
  const expiryValidate = new RegExp('^[0-9/]{1,5}$');
  const nameValidate = new RegExp('^[a-zA-z ]*$');
  const numberValidate = new RegExp('^[0-9]{1,16}$');

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
            onChangeText={(text) => {
              if (text.length === 0) return setCardNumber(text);
              if (numberValidate.test(text)) setCardNumber(text);
            }}
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
              onChangeText={(text) => {
                if (text.length === 0) return setCardExpiry(text);
                if (expiryValidate.test(text)) setCardExpiry(text);
              }}
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
              onChangeText={(text) => {
                if (text.length === 0) return setCardCode(text);
                if (codeValidate.test(text)) setCardCode(text);
              }}
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
            onChangeText={(text) => {
              if (text.length === 0) return setCardName(text);
              if (nameValidate.test(text)) setCardName(text);
            }}
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
