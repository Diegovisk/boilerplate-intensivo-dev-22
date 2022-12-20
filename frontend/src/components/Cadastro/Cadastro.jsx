import { useState, useEffect } from "react";
import API from "../../api/api";

function Cadastro(){
    const [categorias, setCategorias] = useState([
      { _id: 0, name: "Carregando Categorias..." },
    ]);

    async function loadCategories() {
        const categoriasDoBanco = await API.category.list()
        const categoriasCarregadas = await categoriasDoBanco.json()
        console.log("Carregou!!")
        setCategorias(categoriasCarregadas);
    }

    // Faz com que o código dentro dele seja executado apenas 1 vez, ao montar a tag.
    // Toda vez que a tag for atualizada, ele não executa mais.
    useEffect(function(){
        loadCategories();
    },[])


    // Pegar as categorias
    // Cadastrar na variável de estado

    return (
      <form className="container">
        <h1>Cadastro de Items</h1>
        <div className="form-group mt-2">
          <label>Nome:</label>
          <input className="form-control" name="nome" type="text" />
        </div>

        <div className="form-group mt-2">
          <label>URL da Imagem:</label>
          <input className="form-control" name="url" type="url" />
        </div>

        <div className="form-group mt-2">
          <label>Categoria:</label>
          <select className="form-control" name="categoria">
            {categorias.map(
                el => <option key={el._id}>{el.name}</option>
            )}
          </select>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </form>
    );
}

export default Cadastro