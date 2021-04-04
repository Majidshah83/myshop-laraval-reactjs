import Header from './Header';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateProduct(props) {
    console.warn("props", props.match.params.id);
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        let result = axios.get("http://127.0.0.1:8000/api/getproduct/" + props.match.params.id, data)   //product list api
            .then(function (result) {
                console.log("measge", result.data.message);
                setData(result.data.data);
                setName(result.name);
                setPrice(result.price);
                setDescription(result.description);
                setSelectedFile(result.selectedFile);

            })
            .catch(function (error) {
                console.log(error);
                // history.push("/register");
            });


    }, [])
    function editProduct(id) {
        console.warn("majid");
        alert(id);
        const formdata = new FormData()
        formdata.append("file", selectedFile)
        formdata.append("name", name)
        formdata.append("price", price)
        formdata.append("description", description)
        axios.post('http://127.0.0.1:8000/api/updateproduct/' + id, formdata).then((response) => {
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
                <h1>Update Product</h1>
                <br></br>
                <input type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} /> <br></br>
                <br></br>
                <input type="text" defaultValue={data.price} onChange={(e) => setPrice(e.target.value)} /><br></br>
                <br></br>
                <input type="text" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} /><br></br>
                <br></br>
                <input type="file" defaultValue={data.file_path} onChange={(e) => setSelectedFile(e.target.files[0])} /><br></br>
                <br></br>
                <img style={{ width: 50 }} src={"http://localhost:8000/" + data.file_path} /><br></br>
                <br></br>
                <button onClick={() => editProduct(data.id)}>
                    Update Product
                </button>



            </div>

        </React.Fragment>
    )

}
export default withRouter(UpdateProduct);
