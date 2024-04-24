function Bug() {
    return ( 
        <div>
            <img src="bug.jpg" alt="bug" width= "25%"></img>
            <br/>
            <br/>
            <p><b>If you experience any issues using our web application please complete the following form and let us know!</b></p>
            <form>
                <label for="date">Date of issue</label>
                <br/>
                <input id="date" type="datetime-local"></input>
                <br/>
                <label for="bug">Description of issue</label>
                <br/>
                <input id="bug" type="text" style={{ width: "50%", height: "300px" }}></input>
                <br/>
                <br/>
                <button type="submit">Report Issue</button>
            </form>
        </div>
     );
}

export default Bug;