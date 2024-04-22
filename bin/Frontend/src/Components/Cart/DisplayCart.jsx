import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayCart() {
  const [carts, setCarts] = useState([]);

  let cartTotal = 0;

  function getCart() {
    axios
      .get("http://localhost:8082/cart/get")
      .then((response) => {
        setCarts(response.data);

      })
      .catch(console.log);
  }

  const handleEditCart = (cartId, newCustomerName) => {
    axios
      .patch(`http://localhost:8082/cart/update/${cartId}`, { customer: newCustomerName })
      .then(() => {

        getCart();
      })
      .catch(console.log);
  };

  function RemoveFromCart(id) {
    axios
      .patch("http://localhost:8082/item/updateCartItem/" + id)
      .then((response) => {
        getCart();
      })

      .catch((err) => console.error(err));
  }

  function deleteCart(cartId) {
    axios
      .delete(`http://localhost:8082/cart/remove/${cartId}`)
      .then(() => {
        getCart();
      })
      .catch((err) => console.error(err));

  }

  function deleteButton(cartId, cartItems) {

    if (cartItems.length !== 0) {
      return (
        <button type="button" className="btn btn-danger" disabled> Delete Cart </button>
      )
    }
    else {
      return (
        <button class="btn btn-danger" onClick={() => { deleteCart(cartId) }} > Delete Cart</button>
      )
    }


  }



  const completeButton = (cartId, customer, items) => {


    const itemString = items.map(item => `${item.name}`).join(', ');


    axios.post("http://localhost:8082/pastorder/create", {
      customer: customer,
      purchased: itemString
    })
      .then((response) => {
        alert("Order completed successfully!");
        console.log("Order completed:", response.data);

        items.forEach(item => RemoveFromCart(item.id));

      })
      .catch((error) => {
        console.error("Error completing order:", error);
      });
  };


  const calculateTotal = (cart) => {
    let total = 0;
    cart.item.forEach((item) => {
      total += item.price * 1.0725;
    });
    return total;
  };

  useEffect(() => {
    getCart();
  }, [carts]);

  return (
    <div className="container mt-4" style={{ marginTop: "10px" }}>
      <div className="row">
        {carts.map((singleCart) => (
          <div key={singleCart.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{singleCart.id}: {singleCart.customer}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Items</b>
                  </li>
                  {singleCart.item.map((item) => (
                    <li key={item.id} className="list-group-item">
                      {item.id} - {item.name} - £{parseFloat(item.price).toFixed(2)}

                      <button type="button" class="btn btn-outline-danger btn-sm" style={{ marginLeft: "20px" }} onClick={() =>
                        RemoveFromCart(item.id)
                      }>Remove</button>
                    </li>

                  ))}

                  <li className="list-group-item">
                    <button
                      style={{ marginRight: "20px" }}
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        const newCustomerName = prompt("Enter new customer name:");
                        if (newCustomerName !== null) {
                          handleEditCart(singleCart.id, newCustomerName);
                        }
                      }}
                    >
                      Edit Customer
                    </button>

                    {deleteButton(singleCart.id, singleCart.item)}
                  </li>

                  <li className="list-group-item" >
                    <button
                      id="total"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        cartTotal = calculateTotal(singleCart);
                        alert(`Total for ${singleCart.customer}'s cart: £${cartTotal.toFixed(2)}`);
                      }}
                    >
                      Calculate Total (inc. service charge)
                    </button>
                  </li>
                  <li className="list-group-item">

                    <button id="completeorder" type="button" class="btn btn-success" onClick={() => completeButton(singleCart.id, singleCart.customer, singleCart.item)} >Complete Order</button>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayCart;
