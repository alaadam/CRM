import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Container from './Components/Container/Container'
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container />
      </Router>
    </div>
  );
}

export default observer(App);

