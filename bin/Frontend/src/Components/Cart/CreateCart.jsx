import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateCart() {
  const [customer, setCustomer] = useState("");
  const [carts, setCarts] = useState([]);
  const [selectedCartId, setSelectedCartId] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetchCartsAndItems();
  }, []); 

  const fetchCartsAndItems = () => {
    axios.get("http://localhost:8082/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get("http://localhost:8082/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const checkCart = () => {
    axios.get("http://localhost:8082/cart/get")
      .then((response) => {
        console.log(response);

        for (const cart of response.data) {
          if (
            cart.customer &&
            cart.customer.toLowerCase() === customer.toLowerCase()
          ) {
            alert("Cart already exists");
            return;
          }
        }

        createCart();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const createCart = () => {
    axios.post("http://localhost:8082/cart/create", {
      customer
    })
    .then((response) => {
      setCustomer("");
      alert("Cart created successfully");
      fetchCartsAndItems(); 
    })
    .catch((err) => console.error(err));
  };
  const capitalizeFirstLowercaseRest = str => {return (    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());};

  const addItemToCart = () => {
    if (!selectedCartId || !selectedItemId) {
      alert("Please select an item and a cart");
      return;
    }

    axios.patch(`http://localhost:8082/item/update/${selectedItemId}`, {
      selectedItemId,
      cart: {
        id: selectedCartId
      }
    })
      .then(() => {
        alert("Item added to cart successfully");
        fetchCartsAndItems(); 
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkCart();
        }}
      >
        <h1>Baskets</h1>
        <label>
          Customer
          <input
            type="text"
            value={capitalizeFirstLowercaseRest(customer)}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary">Create Cart</button>
      </form>

      <form>
        <h2>Add Item to Cart</h2>
        <label>
          Item Name
          <select
            value={selectedItemId}
            onChange={(e) => setSelectedItemId(e.target.value)}
          >
            <option value="">Select Item</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select Cart
          <select
            value={selectedCartId}
            onChange={(e) => setSelectedCartId(e.target.value)}
          >
            <option value="">Select Cart</option>
            {carts.map((cart) => (
              <option key={cart.id} value={cart.id}>
                {cart.customer}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="btn btn-success"
          onClick={addItemToCart}
        >
          Add Item to Cart
        </button>
      </form>
    </div>
  );
}

export default CreateCart;
