import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayItem() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: ""
  });

function getItem() {
  axios
      .get("http://localhost:8082/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch(console.error);
};
   
 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8082/item/update/${editingItem.id}`, formData)
      .then((response) => {
        console.log("Item updated successfully:", response.data);
        getItem();
        setEditingItem(null);
        setFormData({
          name: "",
          price: "",
          quantity: "",
        });

      })
      .catch(console.error);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })
  };

  const handleCancel = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      price: "",
      quantity: "",

    });
  }

  function deleteItem(itemId) {
    axios
      .delete(`http://localhost:8082/item/remove/${itemId}`)
      .then(() => {
        getItem();
      })
      .catch(console.error);
  }

  const capitalizeFirstLowercaseRest = str => {return (    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());};

  useEffect(() => {
    getItem();
  }, [items]);

  return (
    <div className="container mt-4">
      <h1>Item List</h1>
      <div className="row">
        {items.map((singleItem) => (
          <div key={singleItem.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{singleItem.id}: {singleItem.name}</h5>
               
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                <p className="card-text">Price: £{parseFloat(singleItem.price).toFixed(2)}</p>
                <p className="card-text">Quantity: {singleItem.quantity}</p>
                </li>
                {editingItem && editingItem.id === singleItem.id ? (
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={capitalizeFirstLowercaseRest(formData.name)} onChange={handleChange} />
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                    <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
                    <button type="submit" >Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                  </form>
                ) : (
                  <>
                  <li className="list-group-item">
                    <button type="button" class="btn btn-warning" onClick={() => handleEdit(singleItem)}>Edit Item</button>
                    </li>
                    <li className="list-group-item">
                    <button type="button" class="btn btn-danger"  onClick={() => deleteItem(singleItem.id)}>Delete Item</button>
                    </li>
                  </>
                )}
                </ul>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayItem;
