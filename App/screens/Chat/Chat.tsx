import React, { useRef, useState } from 'react';
import { View, TextInput, Alert, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { flexDirection, justifyContent, margin } from 'styled-system';
import { PressableButton } from '../../components/PressableButton.tsx';
import { StyledText } from '../../components/StyledText';
import { ChatWrapper, MessagesWrapper, SendWrapper, SingleMessageWrapper } from './styles';
import { ChatTextInput } from '../../components/ChatTextInput';

const Chat = () => {
  const [value, onChangeText] = useState('Placeholder');
  const [sentMessage, setSentMessage] = useState<string[]>([]);
  const textInput = useRef<any>(null);
  const scrollView = useRef<any>(null);

  const sendPressed = () => {
    setSentMessage((sentMessage) => [...sentMessage, value]);
  };

  return (
    <ChatWrapper needsOffscreenAlphaCompositing>
      <View
        needsOffscreenAlphaCompositing
        style={{
          flexDirection: 'column',
          flex: 1,
          opacity: 1,
        }}
      >
        <MessagesWrapper
          ref={scrollView}
          onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}
        >
          <View
            style={{
              height: '100%',
              flexDirection: 'column',
              padding: 10,
            }}
          >
            {sentMessage !== undefined &&
              sentMessage.map((item, index) => {
                return (
                  <>
                    <View
                      key={index}
                      style={{ width: '100%', flexDirection: 'row', marginVertical: 10 }}
                    >
                      <SingleMessageWrapper>
                        <StyledText textColor={'white'} text={item.toString()}></StyledText>
                      </SingleMessageWrapper>
                    </View>
                  </>
                );
              })}
          </View>
        </MessagesWrapper>
        <SendWrapper>
          <View style={{ flex: 1, height: 60, padding: 10 }}>
            <ChatTextInput
              multiline
              numberOfLines={4}
              onChangeText={(text: string) => onChangeText(text)}
              value={value}
              style={{ padding: 10, borderRadius: 30 }}
            />
          </View>
          <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
            <PressableButton text="Send" pressed={sendPressed}></PressableButton>
          </View>
        </SendWrapper>
      </View>
    </ChatWrapper>
  );
};

export default Chat;
