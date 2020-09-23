import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Form = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.view}>
          <Text style={styles.text}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="3534 3500 0000 3654"
            placeholderTextColor="#8c8c8c"
          />
        </View>

        <View style={[styles.view, {flexDirection: 'row'}]}>
          <View style={[styles.view, {flex: 1, paddingRight: 10}]}>
            <Text style={styles.text}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="03/21"
              placeholderTextColor="#8c8c8c"
            />
          </View>

          <View style={[styles.view, {flex: 1, paddingLeft: 10}]}>
            <Text style={styles.text}>Secure Code</Text>
            <TextInput
              style={styles.input}
              placeholder="142"
              placeholderTextColor="#8c8c8c"
            />
          </View>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}>Name On Card</Text>
          <TextInput
            style={styles.input}
            placeholder="Hussain Feroz"
            placeholderTextColor="#8c8c8c"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={[styles.text, {color: '#000'}]}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    margin: 20,
    justifyContent: 'space-between',
  },
  view: {
    marginVertical: 3,
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
    backgroundColor: '#e3d474',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
