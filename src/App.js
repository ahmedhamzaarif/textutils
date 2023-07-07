import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Header from'./components/Header'

function App() {
  return (
    <div className="App">
      <Header logo={logo} title={"TexUtils"}/>
    </div>
  );
}

export default App;
