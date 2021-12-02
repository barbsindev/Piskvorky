import React from 'react';
import { View } from 'react-native';

interface WrapperProps {
  className?: string;
  justifyContent?: string;
  alignItems?: string;
  display?: string;
  flexDirection?: string;
  flex: number;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <View>{children}</View>;
};

export default Wrapper;
