import './App.css';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { FaShoppingCart, FaSyncAlt, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(prevItems => [
      ...prevItems,
      { id: prevItems.length, name: `Product ${prevItems.length + 1}`, count: 0 }
    ]);
    console.log('Item added');
  };

  const increase = (index) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], count: newItems[index].count + 1 };
      return newItems;
    });
    console.log('Increased');
  };
  

  const decrease = (index) => {
    setItems(prevItems =>
      prevItems.map((item, i) =>
        i === index && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
    console.log('Decreased');
  };

  const handleDelete = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
    console.log('Deleted: Item at index');
  };

  const reset = () => {
    setItems([]);
    console.log('Reset: All items removed');
  };

  return (
    <div className="container">
      <div className='header'>
        <FaShoppingCart className='cart' />
        <span className='totalitems'>{items.length}</span>
        Items
      </div>  
      <div>
        <Button className='reset' onClick={reset}>
          <FaSyncAlt />
        </Button>
        <Button className='addItem' onClick={addItem}>
          Add item
        </Button>
      </div>

      <div>
        {items.map((item, index) => (
          <div key={item.id} className='productList'>
            <span className='product'>{item.name}</span>
            <Button variant="success" className='increase' onClick={() => increase(index)}>
              <FaPlus />
            </Button>
            <span className='quantity'>{item.count}</span>
            <Button variant="warning" className='decrease' onClick={() => decrease(index)}>
              <FaMinus />
            </Button>
            <Button variant="danger" className='delete' onClick={() => handleDelete(index)}>
              <FaTrash />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
