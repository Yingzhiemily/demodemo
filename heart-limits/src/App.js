import { useState } from 'react';

function App() {

  const [age, setAge] = useState(40);
  const [result, setResult] = useState(0);

  const calculate = () => {
    let upper = "" + (220 - age) * 0.85;
    let lower = "" + (220 - age) * 0.65;
    setResult(lower + "-" + upper);
  }


  return(
   <>
   <h3>Heart rate limits calculator</h3>
   <form>
    <div>
      <label>Age</label><br />
      <input name='age' type='number' step='1' value={age} onChange={e => setAge (e.target.value)}/>
    </div>
   
    <div>
      <label>Heart rate limits</label><br/>
      <output>{result}</output>
    </div>
    <button type="button" onClick={calculate}>Calculate</button>
   </form>
   </>
  )
}

export default App;
