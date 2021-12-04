import React from 'react';
import { StyleSheet, View } from 'react-native';

const Box = () => {
  return <View style={styles.box} />;
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Box;
