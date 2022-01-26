// import './App.css';
import AuthorizedApp from './AuthorizedApp';
import UnauthorizedApp from './UnauthorizedApp';
import { useEffect, useState } from 'react';
import "./custom.scss"
function App() {

  const [ user, setUser ] = useState("guest")

  // useEffect(()=> {
  //   fetch('/me').then((r)=> {
  //     if (r.ok){
  //       r.json().then((data)=> {
  //         setUser(data)
  //       })
  //     }
  //   })
  // },[])

  return (
    <div className="App">
    
  { user ? 
  <AuthorizedApp />
  : 
  <UnauthorizedApp />
  }    
    </div>
  );
}

export default App;
