import Card from './Card.js';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([])

  const addCard = () => {
    const newCard = {id: Math.random() * 100000}
    setItems([...items, newCard]);
  }

  const deleteCard = (index) => {
    const newItems = items.filter((_,i) => i!== index);
    setItems(newItems);
  }

  function listElement(item,index){
  return <li
  key={item.id}
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid #ccc',
    padding: '10px 10px',
    listStyle: 'none', 
  }}
>
  <Card id = {Math.trunc(item.id)} />
  <button
      style={{
        backgroundColor: '#8C0404',
        color: 'white',
        border: 'none',
        borderRadius: '5px', 
        cursor: PointerEvent,
        fontSize: '16px'
      }} 
      type = "button"
      onClick={() => deleteCard(index)}
  > 
  X</button>
  </li>
}

  return (
    <>
    <div className="App" 
        style={{
          padding: '10%',
          heigth: '100vh',
          width: '15vw',
          justifyContent: 'center',
          alignItems: 'center'
          }}>
      <header className="App-header"
      style={{
        backgroundColor: '#999999',
        border: '1 px solid black',
        borderRadius: '5px 5px 0 0',
        textAlign: 'center'
      }}>
        Cards List  
      </header>
    <div className="List"
    style={{
      // border: '1px solid black',
      backgroundColor: '#71bbd1',
      borderRadius: '0 0 5px 5px',
      height: '25vh',
      maxHeight: '25vh',
      overflowY: 'auto'
    }}>
        <ul style={{
          margin: 0,
          padding: 0
        }}>
          {items.map((item, index) => listElement(item, index))}
        </ul>
    </div>
    <button 
      type = "button"
      style={{
        width: '15vw'
      }}
      onClick={addCard}
    >
    Add</button>   
    </div>
    
    
    </>
  );
}

export default App;
