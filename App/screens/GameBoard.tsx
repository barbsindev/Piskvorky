import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Chat from './Chat/Chat';

const Row = () => {
  return (
    <View style={styles.row}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

export default function Board({ route }: any): any {
  return (
    <View style={styles.container}>
      {/* comment out chat */}
      <Chat />
      <Text style={styles.player}>Player: {route.params.paramKey} </Text>
      <View style={styles.board}>
        <Row />
        <Row />
        <Row />
      </View>
      <FontAwesomeIcon icon={faComment} size={70} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  board: {
    flex: 1,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  player: {
    padding: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    color: '#27bdac',
  },
});
