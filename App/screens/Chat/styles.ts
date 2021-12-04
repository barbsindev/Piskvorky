import styled from 'styled-components/native';

export const SendWrapper = styled.View`
  flex-direction: row;
`;

export const MessagesWrapper = styled.ScrollView`
  flex: 1;
  height: 100%;
`;

export const ChatWrapper = styled.SafeAreaView`
  flex-direction: column;
  height: 100%;
  padding: 10px;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.bg};
`;

export const SingleMessageWrapper = styled.View`
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.fg};
`;
