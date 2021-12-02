import React from 'react';
import { TextInput } from 'react-native';

export const ChatTextInput = (props: {
  multiline: true;
  numberOfLines: number;
  onChangeText: (text: string) => void;
  value: string;
  style: { padding: number; borderRadius: number };
}) => {
  return (
    <TextInput
      {...props}
      editable
      style={{
        borderRadius: 10,
        height: '100%',
        borderWidth: 1,
        borderColor: '#27bdac',
        padding: 5,
      }}
    />
  );
};
