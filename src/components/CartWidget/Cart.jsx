import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";


function Cart() {
  const {
    cart,
    totalPrice,
    clearCart,
    totalProducts,
    uniqueItems,
    updateAddQuantity,
    updateSubQuantity,
    removeItem,
  } = useCartContext();

  if ((totalProducts()) === 0) return (
    <div>
      <h5 className="text-center py-5">My Cart is empty</h5>
    </div>
  );
  
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <h4 className="text-center py-3 text-decoration-underline">
            My Cart
          </h4>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
            <div className="d-flex justify-content-center justify-content-evenly py-3">
              <p className="postion-relative fw-bolder text-title">
                Cart
                <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-2">
                  {uniqueItems()}
                </span>
              </p>
              <p className="fw-bolder text-title">
                Total Items
                <span className="position-absolute translate-middle rounded-pill badge bg-success mx-2">
                  {totalProducts()}
                </span>
              </p>
            </div>
            <div>
              <table className="table table-light table-hover ">
                <tbody>
                  {cart.map((item, index) => {
                    return (
                      <tr key={index} className="align-middle">
                        <td>
                          <img
                            src={item.image}
                            alt={item.image}
                            className="img-cart"
                            height="80"
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>$ 1500</td>
                        <td className="text-center">
                          Quantity: {item.quantity}
                        </td>
                        <td>
                          <div className="container">
                            <button
                              onClick={() =>
                                updateAddQuantity(item.uid, item.quantity + 1)
                              }
                              className="btn btn-outline-success ms-1"
                            >
                              <i
                                className="bi bi-file-plus"
                                style={{ fontSize: 25 }}
                              ></i>
                            </button>
                            <button
                              onClick={() =>
                                updateSubQuantity(item.uid, item.quantity - 1)
                              }
                              className="btn btn-outline-danger ms-1"
                            >
                              <i
                                className="bi bi-file-minus"
                                style={{ fontSize: 25 }}
                              ></i>
                            </button>

                            <button
                              onClick={() => removeItem(item.uid)}
                              className="btn btn-outline-danger ms-2"
                            >
                              <i
                                className="bi bi-file-x-fill"
                                style={{ fontSize: 25 }}
                              ></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between py-5">
              <div>
                <button
                  onClick={() => clearCart()}
                  className="btn btn-outline-danger"
                >
                  Clear All
                </button>
                <Link
                  className="btn btn-outline-success mx-2"
                  to="/cart/checkout"
                >
                  Checkout
                </Link>
              </div>
              <h3>Total Price: ${totalPrice()}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
