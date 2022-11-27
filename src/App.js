import Home from './Home'
import Flight from './Flight'
import Trip from './Trip'
import {Route, Routes} from "react-router-dom"

const App = () => {

  return (
    <>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theFlight" element= {<Flight />} />
          <Route path="/yourTrip" element={<Trip />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
