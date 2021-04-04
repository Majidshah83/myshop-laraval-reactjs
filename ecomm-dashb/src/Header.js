import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
function Header() {
  const history = useHistory();
  var user = JSON.parse(localStorage.getItem('user-info'));
  if (user != null) {
    user = JSON.parse(localStorage.getItem("user-info")).data.user;
  }
  console.warn("user header", user);
  function logout() {
    localStorage.clear();
    history.push('./login')
  }
  const navbart = {
    color: "blue",
    paddingRight: '20px'
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand hre="#home">Ecomm</Navbar.Brand>
        <Nav className="mr-auto Navbar-naverefer">
          {
            // localStorage.getItem('user-info')
            JSON.parse(localStorage.getItem("user-info")) ?
              <>
                <Link to="/"> Product List</Link>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
                <Link to="/search">Search Product</Link>

              </>
              :
              <>

                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
          }

        </Nav>
        {JSON.parse(localStorage.getItem("user-info")) ?
          <Nav style={navbart}>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item >Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          : null

        }-

      </Navbar>
    </div >
  )
}
export default Header