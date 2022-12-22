import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dropdown from "./components/Dropdown";
import sunRise from "../src/assets/img/24701-nature-natural-beauty.jpeg"
import madagascar from "../src/assets/img/people-living-banks-river-tropical-african-mada-madagascar-sunny-day-76086378.jpeg";
import banff from "../src/assets/img/beautiful-moraine-lake-banff-national-park-alberta-canada_131985-98.jpeg";
import Footer from "./components/footer";

const places = [
    {
        name: 'Sun Rise',
        avatar: sunRise,
        description: 'This is a very beautiful sunrise which is visible from mostly all places in the planet earth.'
    },
    {
        name: 'Madagascar',
        avatar: madagascar,
        description: 'This is a very beautiful place which is loved by mostly all people in the planet earth.'
    },
    {
        name: 'Banff',
        avatar: banff,
        description: 'This is a very beautiful lake which is loved by mostly all people in the planet earth.'
    },
]

function App() {
    const [currPlace, setCurrPlace] = useState(places[0]);
    const [index, setIndex] = useState(0);
    
    return (
        <div className="App bg-white p-3 sm:rounded-lg border-gray-300 shadow-sm">
            <div className="w-96">
                <Dropdown places={places} currPlace={currPlace} setIndex={setIndex} setCurrPlace={setCurrPlace}/>
            </div>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg w-96 mt-2 border border-gray-300">
                <img src={currPlace.avatar} />
                <h1 className="text-black text-2xl mt-2">{currPlace.name}</h1>
                <p className="text-black mt-1 mb-2">{currPlace.description}</p>
            </div>
            <div className="mt-2">
                <Footer index={index} setIndex={setIndex} places={places} currPlace={currPlace} setCurrPlace={setCurrPlace} isNextAvailable={index < places.length - 1} isPreviousAvailable={index > 0}/>
            </div>
        </div>
    )
}

export default App
