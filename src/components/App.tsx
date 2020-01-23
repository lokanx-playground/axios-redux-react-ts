import * as React from 'react';
import './App.css';

import CharacterList from '../containers/CharacterList';

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <h1>The Force Awakens</h1>
      <CharacterList />
    </>
  );
};

export default App;