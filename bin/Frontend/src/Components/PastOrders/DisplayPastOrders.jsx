import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState } from "react";

function DisplayPastOrders(){
    const [pastOrders, setPastOrders] = useState([]);


    function getPastOrders() {
        axios
          .get("http://localhost:8082/pastorder/get")
          .then((response) => {
            setPastOrders(response.data);
          })
          .catch(console.log);
      };

      useEffect(() => {
        getPastOrders();
      }, [pastOrders]);

      return (
        <div className="container mt-4">
          <h1>Order History</h1>
          <div className="row">
            {pastOrders.map((singlePastOrder) => (
              <div key={singlePastOrder.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{singlePastOrder.id}: {singlePastOrder.customer}</h5>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    <p className="card-text">Purchased: {singlePastOrder.purchased}</p>
                
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
export default DisplayPastOrders;