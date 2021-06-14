
import './App.css';
import resObj from './Components/restObj/restObj';
import Data from "./data.json";

function App() {

  // let randValue = Data[Math.floor(Math.random() * Data.length)];
  


  function myFunction(Data) {
    let myData = Data;
    // console.log(myData);
    let food = myData[Math.floor(Math.random() * myData.length)];
    console.log(food);
    

    
    
    var x = document.getElementById("re");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    
    
  }

  

// document.getElementById('select').onblur = function () {
//     this.style.display = 'none';
// };
  return (
    <div className="App">
      <button className="toggle" onClick={myFunction}>click</button>

      <div id="re" className="restaurants">
        { Data.map(post => {
          return(

            <div key={ post.id } className="restaurant">
            <h4>{ post.title }</h4>
            <p>{ post.connent} </p>
            </div>
          )
        }) }

      </div>
      
    </div>
  );
}

export default App;
