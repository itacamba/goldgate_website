import Home from './Components/Home/Home'
import FreeEstimate from './Components/FreeEstimate/FreeEstimate'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router className="App">

    {/* Navbar Goes Here */}

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/free-estimate" element={<FreeEstimate/>} />
      </Routes>

    {/* Footer Goes Here */}

</Router>

  );
}

export default App;
