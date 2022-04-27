
import React from 'react';
import {View,Text} from 'react-native';
import Board from './App/screens/Board';
import Theme from './App/components/Theme';
import { Container } from './styles/App';
const App = () => {
 return (
   <Theme>
     <Board />
   </Theme>
 )
};
export default App;


