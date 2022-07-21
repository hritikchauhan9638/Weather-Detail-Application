import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <Search />
    </div>
  );
}

export default App;

// API key from open weather site
// d06a903268c0308628a1ba4f71f7bf47

// url from api
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
