import React, { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import { createOrder } from "../../queries/Items";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();
  const [quantity, setQuantity] = useState();
  const [id, setId] = useState();
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const [email2, setEmail2] = useState("");

  const handleChangeName = (event) => {
    // const { name, value } = event.target.value;
    setContact((prev) => {
      return { ...prev, name: event.target.value };
    });
  };
  const handleChangeLast = (event) => {
    setContact((prev) => {
      return { ...prev, lastname: event.target.value };
    });
  };

  const handleChangePhone = (event) => {
    setContact((prev) => {
      return { ...prev, phone: event.target.value };
    });
  };

  const handleChangeEmail1 = (event) => {
    setContact((prev) => {
      return { ...prev, email: event.target.value };
    });
  };

  const handleChangeEmail2 = (event) => {
    let email = event.target.value;
    if (contact.email === email) {
      setEmail2(event.target.value);
      console.log("Email1: ", event.target.value);
    } else {
      console.log("email no coincide");
    }
  };

  const newOrder = (event) => {
    event.preventDefault();
    const priceTotal = totalPrice();
    const newCart = { ...cart, ...contact, totalPrice: priceTotal };
    console.log(newCart);
    createOrder(newCart)
      .then((response) =>
        console.log("Orden confirmada ID: ", response._key.path.segments[1])
      )
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Checkout</h1>
        <form
          className="needs-validation"
          id="form1"
          noValidate
          onSubmit={newOrder}
        >
          <div className="row g-3">
            <article className="row g-3" id="credentialSection">
              <div className="col-sm-4">
                <label htmlFor="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="name"
                  value={contact.name}
                  onChange={handleChangeName}
                  required
                />
                <div className="invalid-feedback">
                  Nombre valido es mandatorio.
                </div>
              </div>

              <div className="col-sm-4">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastname"
                  placeholder=""
                  onChange={handleChangeLast}
                  value={contact.lastname}
                  required
                />
                <div className="invalid-feedback">Apellido es mandatorio.</div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="phonenumber" className="form-label">
                  Telefono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phonenumber"
                  name="phonenumber"
                  placeholder=""
                  onChange={handleChangePhone}
                  value={contact.phonenumber}
                  required
                />
                <div className="invalid-feedback">Numero de telefono es mandatorio</div>
              </div>
              <div className="col-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={contact.email}
                  onChange={handleChangeEmail1}
                  placeholder="email@example.com"
                  required
                />
                <div className="invalid-feedback">Ingrese su email.</div>
              </div>
              <div className="col-6">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Verificacion)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email1"
                  onChange={handleChangeEmail2}
                  placeholder="email@example.com"
                />
                <div className="invalid-feedback">
                  Ingrese su email nuevamente.
                </div>
              </div>
              <div className="col-lg-4 mt-4 text-center">
                <button
                  className="w-100 btn btn-outline-primary btn-lg"
                  id="validate"
                  type="submit"
                >
                  Completar Pedido
                </button>
              </div>
            </article>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
