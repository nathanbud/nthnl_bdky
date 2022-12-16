import './App.css';
import Header from './components/Header';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      <Portfolio/>
    </div>
  );
}

export default App;
