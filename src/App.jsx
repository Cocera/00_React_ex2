import './App.css';
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/Card.jsx";
import Contact from './components/Contact/Contact.jsx';

const flowers = [
  {
    title: "Margarita",
    link: "https://nuestraflora.com/wp-content/uploads/2019/07/margarita-1.jpg"
  },
  {
    title: "Tulip",
    link: "https://images.pexels.com/photos/66896/tulips-flowers-fish-eye-red-66896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Lily",
    link: "https://s3g2u3k4.rocketcdn.me/wp-content/uploads/sites/4/2022/04/lily.jpg"
  },
  {
    title: "Rose",
    link: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    title: "Chrysanthemum",
    link: "https://media.houseandgarden.co.uk/photos/6335c1584ea4e6f735bbeb37/4:3/w_899,h_674,c_limit/chrysflowers1.jpg"
  },
  {
    title: "Anemone",
    link: "https://c.stocksy.com/a/4LVC00/z9/2980406.jpg"
  },
]

function App() {
  return (
  <>
    < Header />
    < Contact />
    <div className='p-5 d-flex flex-row grid gap-4'>
      {flowers.map((flower) => {
        console.log('flower es:', flower);
        return < Card title={flower.title} link={flower.link}/>
      })}
    </div>
    < Home title="Chrysanthemum" link="https://images.pexels.com/photos/2382970/pexels-photo-2382970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    < Home title="Tulip" link="https://images.pexels.com/photos/66896/tulips-flowers-fish-eye-red-66896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    < Home title="Lily" link="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/pink%20lilies-Anastasios71-SS.jpeg?itok=mmh-o8yf"/>
    
  </>
  )
};

export default App;
