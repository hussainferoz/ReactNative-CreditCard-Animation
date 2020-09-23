import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Card = ({cardNumber, cardName, cardExpiry, cardCode}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FontAwesome name="cc-visa" size={45} color="#000" />
        <Text style={styles.text}>{cardNumber}</Text>
        <View style={styles.view}>
          <Text style={styles.text}>{cardName}</Text>
          <Text style={styles.text}>{cardExpiry}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

Card.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardExpiry: PropTypes.string,
  cardCode: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    height: height / 3.5,
  },
  card: {
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    backgroundColor: '#f8b5c1',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 22,
  },
  view: {flexDirection: 'row', justifyContent: 'space-between'},
});
