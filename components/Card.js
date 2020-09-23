import React from 'react';

import {StyleSheet, View, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}></View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 60,
    height: height / 3.5,
  },
  card: {
    borderRadius: 20,
    elevation: 5,
    backgroundColor: '#f8b5c1',
    ...StyleSheet.absoluteFillObject,
  },
});
