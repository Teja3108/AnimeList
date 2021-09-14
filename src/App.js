import logo from './logo.svg';
import './App.css';
import Card from './Cards';
import anime from './Scards';
// let number = [1,2,3,4,5]


function App() {
  return (
    <>
     <h1 className = "heading_style">Top Animes of All Time</h1>
    <div>
    {anime.map((obj,index)=>(
      <Card 
    sname = {obj.sname}
    imgsrc = {obj.imgsrc}
    name = {obj.name}
    slink = {obj.slink}
     />
    ))}
  
    </div>
    </>
  );
}

export default App;
