import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function AddProduct() {
    const [name, setName] = useState("");
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    function addProduct() {
        console.warn(name, price, selectedFile, description);
        const formdata = new FormData()
        formdata.append("file", selectedFile)
        formdata.append("name", name)
        formdata.append("price", price)
        formdata.append("description", description)
        axios.post('http://127.0.0.1:8000/api/addproduct', formdata).then((response) => {
            console.log("response", response.data);
            if (response.data.success == true) {
                history.push("/");
            }
        }).catch((err) => {
            console.warn(err);
            // history.push("/register");
        })

    }
    return (
        <React.Fragment>
            <Header />

            <div className="col-sm-5 offset-sm-3">

                <br></br>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your Name" />
                <br></br >
                <input type="file" required onChange={(e) => setSelectedFile(e.target.files[0])} className="form-control" />
                <br />
                <input type="text" required className="form-control" onChange={(e) => setPrice(e.target.value)} placeholder="price" />
                <br />
                <textarea name="w3review" required rows="6" cols="60" className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <br />
                <button onClick={addProduct} className="btn btn-primary">Add</button>
            </div>

        </React.Fragment>
    )
}
export default AddProduct