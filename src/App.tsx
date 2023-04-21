import React from 'react';
import {StatusBar} from 'react-native';
import RootStack from './libs/navigation/RootStack';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />

      <RootStack />
    </React.Fragment>
  );
}

export default App;
