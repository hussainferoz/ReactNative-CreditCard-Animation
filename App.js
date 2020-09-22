import React from 'react';
import {View, StatusBar, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
      </View>
      <View style={styles.formContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b92e4',
  },
  cardContainer: {
    flex: 2,
    backgroundColor: '#2b92e4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width - 60,
    height: height / 3.5,
    borderRadius: 20,
    backgroundColor: '#f8b5c1',
  },
  formContainer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

export default App;
