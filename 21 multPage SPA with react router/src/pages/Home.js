import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./products");
  };

  return (
    <>
      <h1>Home</h1>
      <p>
        We want to <Link to="products">go to our products list</Link>
      </p>
      <button onClick={handleClick}>produit</button>
    </>
  );
};

export default HomePage;
