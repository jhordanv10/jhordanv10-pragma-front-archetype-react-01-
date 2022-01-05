import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardHome from './../components/molecules/CardHome/CardHome';
import Header from '../components/molecules/Header/Header';
import './Home.scss';

const api =  axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
})

function Home() {  
  const [list, setList] = useState([]);
  
  useEffect(()=>{
    api.get ('/').then( res =>{
      setList(res.data.results);
      console.dir(res.data.results); 
    })
  }, [setList]);

  return (
    <div className="p-home">
      <Header />
      <div>
        {list.map((item)=> (
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
