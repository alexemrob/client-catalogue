import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function Search() {
 const [developerState,setDeveloperState] = useState({})

    useEffect(() => {
        API.getUsers().then(results => {
            console.log(results)
          setDeveloperState({
            ...developerState,
            users: results.data,
            filteredUsers: results.data
          });
        });
      }, []);

    return (
        <div class="search">
            <nav class="navbar justify-content-center">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
{JSON.stringify(developerState)}
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title"><b>Corie Saffron</b></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Phone:</b> (555)555-5555</li>
                    <li class="list-group-item"><b>Email:</b> CSaf1989@gmail.com</li>
                    <li class="list-group-item"><b>Formula:</b> 30mL 7BA to 40mL 10P + 10mL 8SB@PK</li>
                    <li class="list-group-item"><b>Reffered By:</b> Lauren Mooney</li>
                </ul>
                <div class="card-body card-links d-flex justify-content-end">
                    <a href="www.google.com" class="card-link"><b>Edit Client</b></a>
                    <a href="www.google.com" class="card-link"><b>Charge Card</b></a>
                </div>
            </div>
        </div>
    )
}

export default Search;