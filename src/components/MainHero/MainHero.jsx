import React from "react";
import MyLogo from "../images/Framework_Computer_logo.svg";
import ExampleProduct from "../images/product-example.jpg";
import RickMorty from "../images/logos/RickMorty.svg";
import StarWars from "../images/logos/StarWars.svg";
import { Link } from "react-router-dom";

export default function MainHero() {
  return (
    <div className="container-fluid px-4 text-center">
      <img className="d-block mx-auto mb-4 img-fluid" src={MyLogo} alt="" />
      <h1 className="display-5">Cuadros para fanaticos</h1>
      <div className="col-lg-6 mx-auto">
        <hr />
        <p className="lead align-center mb-4">
          Nuestros cuadros esta realizados con madera de ebano, en un tamaño de
          53cms de alto por 43cms de ancho. Utilizamos laminas de ilustracion
          brillante de alto gramaje con calidad de afiche publicitario de
          peliculas. Como detalle, cada cuadro incluye una placa de bronce REAL
          grabada con al acido, reproduciendo el isologotipo de la serie o
          pelicula, incluyendo la fecha de estreno, presupuesto y datos
          especificos del film. Ademas, se reproduce el isologotipo de la
          empresa distribuidora.
        </p>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <img src={ExampleProduct} width="450" alt="" />
        </div>
      </div>
      <div className="col-lg-6 mx-auto">
        <hr />
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <h2>Algunas de nuestras Categorias</h2>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/category/rick_and_morty">
          <img src={RickMorty} width="400" alt="" />
        </Link>
        <Link to="/category/star_wars">
          <img src={StarWars} height="180" alt="" />
        </Link>
      </div>
    </div>
  );
}
