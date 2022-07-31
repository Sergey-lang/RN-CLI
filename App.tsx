import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import Navigation from './src/navigation/Navigation';
import {AuthProvider} from './src/providers/AuthProvider';

const App: React.FC = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </TailwindProvider>
  );
};

export default App;
