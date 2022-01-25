import './App.css';
import AuthorizedApp from './AuthorizedApp';
import UnauthorizedApp from './UnauthorizedApp';
import { useState } from 'react';

function App() {

  const [ user, setUser ] = useState(null)

  return (
    <div className="App">
    {user ? 
      <AuthorizedApp />
      : 
      <UnauthorizedApp />
    }
      
       
    </div>
  );
}

export default App;
