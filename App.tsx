import React from 'react';

import Theme from './App/components/Theme';

import Navigation from './App/navigation/Navigation';
import { Container } from './styles/App';

// Theme component provides styles in ./component/theme as props to all the children

const App = () => {
  return (
    <Theme>
      <Container>
        <Navigation />
      </Container>
    </Theme>
  );
};
export default App;
