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
    async function cadastraItem(event) {
      event.preventDefault()

      const formEl = event.target;
      
      formEl.submit.disabled = true;

      // criar o "body" da requisição
      const body = {
        name: formEl.nome.value,
        imageUrl: formEl.url.value,
        category: formEl.categoria.value,
      }; 

      const request = await API.item.create(body);
      console.log(request)
      formEl.submit.disabled = false;

      if (request.status == 201) {
        // deu certo
        alert("Item cadastrado com sucesso!!")
        formEl.nome.value = ""
        formEl.url.value = ""
      } else {
        // aconteceu algo!
        alert("Aconteceu algo, seu item NÃO foi cadastrado. :(")
      }

    }

    return (
      <form className="container" onSubmit={cadastraItem}>
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
                el => <option key={el._id} value={el._id}>{el.name}</option>
            )}
          </select>
        </div>
        <div className="form-group mt-3">
          <button type="submit" name="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </form>
    );
}

export default Cadastro