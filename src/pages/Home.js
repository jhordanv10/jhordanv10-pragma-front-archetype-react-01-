import React from 'react';
// import axios from 'axios';
import CardHome from './../components/molecules/CardHome/CardHome';
import Header from '../components/molecules/Header/Header';
import './Home.scss';

const mockData = [
  {
    id: 1,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Name",
    species: "Species",
  },
  {
    id: 2,
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Name",
    species: "Species",
  }
]

function Home() {  
  
  return (
    <div className="p-home">
      <Header />
      <div>
        {mockData.map((item)=> (
          <CardHome 
            key = {item.id}
            title = {item.name}
            subtitle = {item.species}
            img = {item.image}
          />
        ))}
      </div> 
    </div>
  );
}

export default Home;
