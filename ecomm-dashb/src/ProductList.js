import Header from './Header';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()    //class function 
    }, [])
    console.log("data", data);

    function deleteOpration(id) {
        const res = axios.delete('http://127.0.0.1:8000/api/delete/' + id,)
            .then(function (res) {
                console.log(res.data);
                getData() //class function 

            })
            .catch(function (error) {
                console.log(error);
                // history.push("/register");
            });
    }
    function getData() {
        let result = axios.get('http://127.0.0.1:8000/api/productlist', data)   //product list api
            .then(function (result) {
                console.log(result.data);
                setData(result.data);

            })
            .catch(function (error) {
                console.log(error);
                // history.push("/register");
            });


    }
    return (
        <div>
            <Header />
            {/* <div className="col-sm-8 offset-sm-2"> */}
            <h1>Product list</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Operation</th>
                        <th>Operation</th>
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
                                <td><span onClick={() => { deleteOpration(item.id) }} className="delte">Delete</span></td>
                                <td><Link to={"update/" + item.id}><span className="update">Update</span></Link></td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
        // </div >
    )
}
export default ProductList;