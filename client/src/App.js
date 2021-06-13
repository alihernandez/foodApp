
import './App.css';
import resObj from './Components/restObj/restObj';
import Data from "./data.json";

function App() {

  let random =() => {
    console.log("it works!"); 
    
  }
  return (
    <div className="App">
      <button onClick={random}>click</button>

      <div className="restaurants">
        { Data.map(post => {
          return(

            <>
            <h4>{ post.title }</h4>
            <p>{ post.connent} </p>
            </>
          )
        }) }

      </div>
      
    </div>
  );
}

export default App;
