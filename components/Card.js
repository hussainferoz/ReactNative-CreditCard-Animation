import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, View, Text, Dimensions, Animated} from 'react-native';

const {width, height} = Dimensions.get('window');
const {Value} = Animated;

const Card = ({cardNumber, cardName, cardExpiry, cardCode, cardAnimation}) => {
  const forntrotateY = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  const backrotateY = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-180deg', '-360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          styles.backCard,
          {
            transform: [{rotateY: backrotateY}],
          },
        ]}>
        <View style={styles.top} />
        <View style={styles.view}>
          <View style={styles.middle} />
          <Text
            style={[
              styles.text,
              {
                flex: 1,
                paddingLeft: 10,
                paddingTop: 5,
              },
            ]}>
            {cardCode}
          </Text>
        </View>
        <View style={styles.bottom} />
      </Animated.View>

      <Animated.View
        style={[
          styles.card,
          styles.frontCard,
          {
            transform: [{rotateY: forntrotateY}],
          },
        ]}>
        <FontAwesome name="cc-visa" size={45} color="#000" />
        <Text style={styles.text}>{cardNumber}</Text>
        <View style={styles.view}>
          <Text style={styles.text}>{cardName}</Text>
          <Text style={styles.text}>{cardExpiry}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Card;

Card.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardExpiry: PropTypes.string,
  cardCode: PropTypes.string,
  cardAnimation: PropTypes.instanceOf(Value),
};

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    height: height / 3.5,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#f8b5c1',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  frontCard: {
    padding: 20,
    backfaceVisibility: 'hidden',
  },
  backCard: {
    padding: 1,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 22,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  top: {
    height: 55,
    backgroundColor: '#000',
  },
  middle: {
    flex: 2,
    height: 45,
    backgroundColor: '#8c8c8c',
  },
  bottom: {
    height: 40,
    backgroundColor: '#f0f0f0',
  },
});
