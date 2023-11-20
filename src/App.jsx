import './App.css';
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
  return (
  <>
    < Header />
    < Home title="Chrysanthemum" link="https://images.pexels.com/photos/2382970/pexels-photo-2382970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    < Home title="Tulip" link="https://images.pexels.com/photos/66896/tulips-flowers-fish-eye-red-66896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    < Home title="Lily" link="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/pink%20lilies-Anastasios71-SS.jpeg?itok=mmh-o8yf"/>
    < Card />
  </>
  )
};

export default App;
