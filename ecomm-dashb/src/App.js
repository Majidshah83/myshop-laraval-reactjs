import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import UpdateProduct from './UpdateProduct'
import AddProduct from './AddProduct'
import Prot from './Protected'
import Productlist from './ProductList'
import searchproduct from './SearchProduct'
function App() {
  return (
    <div className="App">
      < BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <Prot Cmp={AddProduct} />
          </Route>
          <Route path="/update/:id">
            <Prot Cmp={UpdateProduct} />
          </Route>
          <Route path="/search">
            <Prot Cmp={searchproduct} />
          </Route>
          <Route path="/">
            <Prot Cmp={Productlist} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
