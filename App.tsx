import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import Navigation from './src/navigation/Navigation';

const App: React.FC = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Navigation />
    </TailwindProvider>
  );
};

export default App;
