import Card from "../Card/Card";

function ItemList() {
  return (
    <div className="content container mb-3 mt-3">
      <div className="row">
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ItemList
