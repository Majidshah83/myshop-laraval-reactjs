import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
function SearchProduct() {
    const [data, setData] = useState([]);
    function search(key) {
        if (key.length > 0) {
            let result = axios.get("http://127.0.0.1:8000/api/search/" + key)   //product list api
                .then(function (result) {
                    console.log("measge", result.data);
                    setData(result.data);
                })
                .catch(function (error) {
                    console.log(error);
                    // history.push("/register");
                });
        }

    }
    return (
        <React.Fragment>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Compoent</h1>
                <br />
                <input type="text" onChange={(e) => search(e.target.value)} placeholder="Search Product" className="form-control" />
                <br />
                {
                    data.length > 0 ?
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Name</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map((item) =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><img style={{ width: 60 }} src={"http://localhost:8000/" + item.file_path} /></td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </Table> : null
                }
            </div>
        </React.Fragment>
    )
}
export default SearchProduct