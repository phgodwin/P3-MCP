import axios from "axios";
import { useState } from "react";

function Bug() {

const [date, setDate] = useState("");
const [description, setDescription] = useState("");
    function createReport(){
axios.post("http://localhost:8082/bugreporting/create", {date, description})
.then((response) => {
   setDate("");
   setDescription("");
   alert("Report created succesfully, thank you for your support!");
  })
  .catch((err) => console.error(err));   
    }
    return (
        <div>
            <img src="bug.jpg" alt="bug" width="25%"></img>
            <br />
            <br />
            <p><b>If you experience any issues using our web application please complete the following form and let us know!</b></p>
            <form  onSubmit={(e) => {
          e.preventDefault();
          createReport();
                  }}>
                <label for="date">Date of issue</label>
                <br />
                <input id="date" type="datetime-local" required value={date} onChange= {e => setDate(e.target.value)}></input>
                <br />
                <label for="bug">Description of issue</label>
                <br />
                <input id="bug" type="text" required style={{ width: "50%", height: "300px" }} value={description} onChange= {e => setDescription(e.target.value)}></input>
                <br />
                <br />
                <button type="submit">Report Issue</button>
            </form>
        </div>
    );
}

export default Bug;