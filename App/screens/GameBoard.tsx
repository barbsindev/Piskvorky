import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ViewPropTypes,
  ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
// import Chat from './Chat/Chat';
import Round from './Circle';
import Chat from './Chat/Chat';
// import Box from './Box';

export default function Board({ route }: any): any {
  const handleEvent: any = (): any => {
    console.log('Clicked box');
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 358a642cc83eba4677980ffb4d59739720fd2f0a
  const Box = () => {
    return (
      <View style={styles.box}>
        <Round />
<<<<<<< HEAD
=======
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
>>>>>>> master
=======
>>>>>>> 358a642cc83eba4677980ffb4d59739720fd2f0a
      </View>
    );
  };
  return (
    // <ScrollView>
    //   {/* <SafeAreaView> */}
    //   <View style={styles.container}>
    //     {/* <Chat /> */}
    //     <Text style={styles.player}>Player: {route.params.paramKey} </Text>
    //     <View style={styles.board}>
    //       <TouchableOpacity onPress={handleEvent}>
    //         <View style={styles.box}>
    //           <Round />
    //         </View>
    //       </TouchableOpacity>

    //       <FontAwesomeIcon icon={faComment} size={60} style={styles.icon} />
    //     </View>
    //   </View>
    //   {/* </SafeAreaView> */}
    // </ScrollView>
    <ScrollView>
      <Box />
      <Chat />
    </ScrollView>
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
  // row: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },

  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  player: {
    padding: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: '#27bdac',
  },
});
