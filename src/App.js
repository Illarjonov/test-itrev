import React from 'react';
import { useSelector} from "react-redux";
import ItemList from "./components/ItemList";
import "./App.css";



function App() {
  useSelector((state)=> state);//обновить стейт
  const items = useSelector((state)=> state.items); //получить массив

  return (
    <div className='App'>
         <ItemList items={items}/>

    </div>
  );
}

export default App;
