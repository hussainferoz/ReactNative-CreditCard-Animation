import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FontAwesome name="cc-visa" size={45} color="#000" />
        <Text style={styles.text}>{`3534    3500    0000    3654`}</Text>
        <View style={styles.view}>
          <Text style={styles.text}>Hussain Feroz</Text>
          <Text style={styles.text}>03/21</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

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
