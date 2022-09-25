import './App.css';
import {useState} from "react";

const URL = 'https://api.exchangerate.host/latest?access_key=' 
const API_KEY = '911b3806a1cbe40dacf96b52c007b3f3'


function App() {
  const [eur,setEur] = useState(0);
  const [gbp,setGbp] = useState(0);
  const [usd,setUsd] = useState(0);
  const [rate,setRate] = useState(0);
  const [rate2,setRate2] = useState(0);

  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL + API_KEY;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        console.log(json.rates.GBP);
        console.log(json.rates.USD);
        setRate(json.rates.GBP);
        setGbp(eur * json.rates.GBP);
        setRate2(json.rates.USD);
        setUsd(eur * json.rates.USD);
      } else {
        alert("Error retrieving exchange rate.");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }

  }

  return (
   <div id = "container">
    <form onSubmit={convert}>
      <div>
        <label>EUR</label>&nbsp;
        <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)}/>
      </div>
      <div>
        <label>GDP:</label>
        <output>{gbp.toFixed(2)}€</output>&nbsp;&nbsp;
        <output>{rate}</output>
      </div>
      <div>
        <label>USD:</label>
        <output>{usd.toFixed(2)}$</output>&nbsp;&nbsp;
        <output>{rate2}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>

    </form>

   </div>
  );
}

export default App;
