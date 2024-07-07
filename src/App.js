import './App.css';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { FaShoppingCart, FaSyncAlt, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = { id: items.length, name: `Product ${items.length + 1}`, count: 0 };
    setItems([...items, newItem]);
    console.log('Item added. Total items:', items.length + 1);
  };

  const increase = (index) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, count: item.count + 1 } : item
    );
    setItems(newItems);
    console.log('Increased:', newItems[index].count);
  };

  const decrease = (index) => {
    const newItems = items.map((item, i) =>
      i === index && item.count > 0 ? { ...item, count: item.count - 1 } : item
    );
    setItems(newItems);
    console.log('Decreased:', newItems[index].count);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
    console.log('Deleted: Item at index', index);
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


// import './App.css';
// import { useState } from 'react';
// import { Button } from "react-bootstrap";
// import { FaShoppingCart, FaSyncAlt, FaPlus, FaMinus, FaTrash } from 'react-icons/fa'; // Importing icons from react-icons/fa


// function App() {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(prevCount => prevCount + 1);
//     console.log('Increased:', count + 1);
//   };

//   const decrease = () => {
//     if (count > 0) {
//       setCount(prevCount => prevCount - 1);
//       console.log('Decreased:', count - 1);
//     }
//   };

//   const reset = () => {
//     setCount(0);
//     console.log('Reset to:', 0);
//   };

//   const handleDelete = () => {
//     setCount(0);
//     console.log("Deleted: Count reset to 0");
//   };

//   return (
//     <div className="container">
//       <div className='header'>
//         <FaShoppingCart className='cart' />
//         <span className='totalitems'>0</span>
//         Items
//       </div>  
//       <div>
//         <Button className='reset' onClick={reset}>
//           <FaSyncAlt />
//         </Button>
//         <Button className='addItem' onClick={reset}>
//           Add item
//         </Button>
//       </div>

//       <div className='productList'>
//       <span className='product'>Product</span>
//         <Button variant="success" className='increase' onClick={increase}><FaPlus /></Button>
//         <span className='quantity'>{count}</span>
//         <Button variant="warning" className='decrease' onClick={decrease}><FaMinus /></Button>
//         <Button variant="danger" className='delete' onClick={handleDelete}><FaTrash /></Button>
//       </div>
//     </div>
//   );
// }

// export default App;
