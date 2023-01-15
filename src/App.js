import  './App.css';
import React, {useState} from 'react';

function App() {

  const [hori, setHori] = useState(10)
  const [veri, setVeri] = useState(0)
  const [blur, setBlur] = useState(0)
  const [color, setColor] = useState("#000000")
  const [checkOne, setCheckOne] = useState(false)

  return (
    <div className="App">

      <div className='controls'>
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200"  value={hori} onChange={(e) => setHori(e.target.value) } />
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200"  value={veri} onChange={(e) => setVeri(e.target.value) } />
        <label>Blur </label>
        <input type="range" min="0" max="200"  value={blur} onChange={(e) => setBlur(e.target.value) } />
        <label>color </label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
        <div className="switch">
          
          <label>
            Outline
            <input type="checkbox"  checked={checkOne} onChange={() => setCheckOne(!checkOne)}/>
            <span className="lever"></span>
            On
          </label>
        </div>


      </div>

      <div className='output'></div>
      <div className='box' style = {{boxShadow:`${checkOne?"inset": ""} ${hori}px ${veri}px ${blur}px ${color}` }} >
       <p>box-shadow:{hori}px {veri}px {blur}px {color}</p> 
      </div>


    </div>
  );
}

export default App;
