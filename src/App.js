
import './App.css';
import Investing from './components/Investing';
import StocksData from './components/StocksData';
import Statistics from './components/Statatics';



function App() {
  return (
    <div className="App bg-[#17151A] opacity-[80 %]">
      <Investing />
      <div className='bg-[url(./assets/images/bgimg.png)] bg-cover bg-center bg-no-repeat'>
        <StocksData />
      </div>
      <Statistics />
    </div>
  );
}

export default App;
