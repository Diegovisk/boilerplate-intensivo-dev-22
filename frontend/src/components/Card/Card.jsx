function Card(prop){
    return (
      <div className="card mb-5">
        <img
          src="https://picsum.photos/300/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Nome Do Item</h5>
          <p className="card-text">Categoria</p>
          <a href="#" className="btn btn-danger">
            Remover
          </a>
        </div>
      </div>
    );
}

export default Card;