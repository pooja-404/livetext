import logo from './logo.svg';
import './App.css';
import Investing from './components/Investing';

import StocksData from './components/StocksData';
import Statistics from './components/Statatics';


function App() {
  return (
    <div className="App bg-[#17151A] opacity-[80 %]">
      <Investing />
      <StocksData />
      <Statistics />
    </div>
  );
}

export default App;
