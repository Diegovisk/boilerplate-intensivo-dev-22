import Card from "../Card/Card";
import {useEffect, useState} from "react";
import API from "../../api/api";

function ItemList() {
  const [items, setItems] = useState([]);
  
  async function getItems(){
    const itensDoBanco = await API.item.list()
    const itensJSON = await itensDoBanco.json()
    console.log("Itens Carregados.")
    setItems(itensJSON);
  }

  useEffect(function(){
    getItems();
  },[])

  return (
    <div className="content container mb-3 mt-3">
      <div className="row">
        {items.map((el) => (
          <div className="col-sm-4" key={el._id}>
            <Card 
              id={el._id} 
              name={el.name} 
              url={el.imageUrl} 
              category={el.category.name}
              refreshItems={getItems} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList
