import React from 'react';
import { View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const Cross = () => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <Svg height="100" width="100">
        <Line x1="0" y1="0" x2="50" y2="50" stroke="red" strokeWidth="8" />
        <Line x1="50" y1="0" x2="0" y2="50" stroke="red" strokeWidth="8" />
      </Svg>
    </View>
  );
};

export default Cross;
