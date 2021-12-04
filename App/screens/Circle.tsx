import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Round = () => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="30" strokeWidth="8" stroke="green" />
      </Svg>
    </View>
  );
};

export default Round;
