import { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartProvider";
import { useParams } from "react-router-dom";
import { getItemById } from "../../queries/Items";

export default function ItemDetails() {
  const [itemDetail, setItemDetail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useCartContext();
  const { category, id } = useParams();

  const handleChange = (event) => {
    setQuantity(event.target.value);
    console.log("Nueva Cantidad: ", event.target.value);
  };

  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const addToCart = () => {
    addProduct(itemDetail, quantity)
  }

  useEffect(() => {
    if (category === "rick_and_morty") {
      getItemById(id).then((item) => {
        setItemDetail(item);
      });
    }
  }, [category, id, quantity]);

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={itemDetail.image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: {itemDetail.uid}</div>
              <h1 className="display-5 fw-bolder">{itemDetail.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$2000.00</span>
                <span>$1500.00</span>
              </div>
              <p className="lead">Especie: {itemDetail.species}</p>
              <p className="lead">Especie: {itemDetail.gender}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  name="quantity"
                  type="num"
                  onChange={handleChange}
                  value={quantity}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-success flex-shrink-0 mx-2"
                  onClick={increaseQuantity}
                >
                  <i className="bi bi-file-plus" style={{ fontSize: 25 }}></i>
                </button>
                <button
                  className="btn btn-outline-danger flex-shrink-0 mx-2"
                  onClick={decreaseQuantity}
                >
                  <i className="bi bi-file-minus" style={{ fontSize: 25 }}></i>
                </button>

                <button
                  className="btn btn-outline-dark flex-shrink-0 mx-2"
                  type="button"
                  onClick={addToCart}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
