```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image: "/images/snake-plant.jpg"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image: "/images/peace-lily.jpg"
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 20,
    image: "/images/spider-plant.jpg"
  },
  {
    id: 4,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image: "/images/zz-plant.jpg"
  },
  {
    id: 5,
    name: "Monstera",
    category: "Indoor Plants",
    price: 35,
    image: "/images/monstera.jpg"
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 32,
    image: "/images/rubber-plant.jpg"
  },

  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18,
    image: "/images/aloe-vera.jpg"
  },
  {
    id: 8,
    name: "Jade Plant",
    category: "Succulents",
    price: 22,
    image: "/images/jade-plant.jpg"
  },
  {
    id: 9,
    name: "Echeveria",
    category: "Succulents",
    price: 20,
    image: "/images/echeveria.jpg"
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 19,
    image: "/images/haworthia.jpg"
  },
  {
    id: 11,
    name: "Sedum",
    category: "Succulents",
    price: 17,
    image: "/images/sedum.jpg"
  },
  {
    id: 12,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 24,
    image: "/images/zebra-haworthia.jpg"
  },

  {
    id: 13,
    name: "Rose",
    category: "Flowering Plants",
    price: 28,
    image: "/images/rose.jpg"
  },
  {
    id: 14,
    name: "Orchid",
    category: "Flowering Plants",
    price: 40,
    image: "/images/orchid.jpg"
  },
  {
    id: 15,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 26,
    image: "/images/jasmine.jpg"
  },
  {
    id: 16,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 24,
    image: "/images/hibiscus.jpg"
  },
  {
    id: 17,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 38,
    image: "/images/anthurium.jpg"
  },
  {
    id: 18,
    name: "African Violet",
    category: "Flowering Plants",
    price: 27,
    image: "/images/african-violet.jpg"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>

      <div className="product-list">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded(plant.id)}
                    >
                      {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
```
