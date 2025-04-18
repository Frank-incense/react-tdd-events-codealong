import { useState } from "react";

function App() {
  const [pepperoniChecked, setChecked] = useState(false)

  function handleClick(){
    setChecked(!pepperoniChecked)
  }
  return (
    <div>
      <input 
      type="checkbox" 
      name="addPepperoni" 
      id="addPepperoni" 
      onChange={handleClick}
      aria-checked={pepperoniChecked} 
      checked={pepperoniChecked}/>
      <label htmlFor="addPepperoni">add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniChecked ? 
        <li>Pepperoni</li>:
         null}
      </ul>
    </div>
  )
}

export default App;
