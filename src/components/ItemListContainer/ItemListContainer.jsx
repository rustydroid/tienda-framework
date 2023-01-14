import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../Item/ItemCard";
import { getAllItems } from "../../queries/Items";

const ItemListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // const fetchCharactersSW = async () => {
  //   const response = await fetch(
  //     "https://akabab.github.io/starwars-api/api/all.json"
  //   );
  //   const data = await response.json();
  //   setCharacters(data);
  //   localStorage.setItem('star_wars', JSON.stringify(data));
  // };

  // const fetchCharactersRM = async () => {
  //   const response = await fetch("https://rickandmortyapi.com/api/character");
  //   const data = await response.json();
  //   setCharacters(data.results);
  //   localStorage.setItem('rick_morty', JSON.stringify(data.results));
  // };

  useEffect(() => {
    if (categoryId === "rick_and_morty") {
      getAllItems().then((item) => {
        setCharacters(item);
        // console.log(item);
      });
    } else if (categoryId === "star_wars") {
      getAllItems().then((item) => {
        setCharacters(item);
      });
    } else {
      navigate("/not_found");
    }
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <div className="container-fluid text-center">
          <h1>
            {categoryId === "rick_and_morty" ? "Rick and Morty" : "Star Wars"}
          </h1>
          <div className="row mb-3 mt-2 m-auto justify-content-between">
            {characters.map((item) => {
              return (
                <ItemCard
                  key={item.uid}
                  id={item.uid}
                  name={item.name}
                  image={item.image}
                  category={categoryId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
