import React, {useState} from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import ShoppingCartSharp from "@material-ui/icons/ShoppingCartSharp"
import Modal from 'react-modal';
import {MdClose} from "react-icons/md"
import {useSelector} from 'react-redux'
import {Button} from "@material-ui/core"

const customStyles = {
    content : {
      top                   : '58%',
      left                  : '83%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height: 470,
      width: 420,
      backgroundColor: "white"
    //   overflow: "none"
    }
  };

export default function Navbar (){
    const [isNavbarOpen, handleNavbar] = useState(false); 
    const [isModalOpen, setModalState] = useState(false);

    const setNavbarOpen = () => {
        handleNavbar(true);
    }

    const setNavbarClose = () => {
        handleNavbar(false);
    }

    const setModalOpen = () => {
        setModalState(true);
    }

    const setModelClose = () => {
        setModalState(false);
    }
     

    //get the order details
    const finalOrder = useSelector(state => state.getNewBakeOrder.newBakeOrder);
    console.log(finalOrder);

     //get the total
     let [total] = useState(0);
     const getSubTotal = (recentOrder) => {
        for (var i = 0; i < recentOrder.length ; i++) {
            total += recentOrder[i].amount * recentOrder[i].price;
        }
        return total;
    }    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="mainlogo" style={{height: 65, width: 85}} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={setNavbarOpen}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isNavbarOpen ?  "show-nav" : "collapse navbar-collapse"}  id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/" onClick={setNavbarClose, setModelClose}>Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/about" onClick={setNavbarClose, setModelClose}>About</Link>
                    <Link className="nav-item nav-link" to="/products"  onClick={setNavbarClose, setModelClose}>Products</Link>
                    <Link className="nav-item nav-link" to="/shoppingcart"  onClick={setNavbarClose, setModelClose}>Shopping Cart</Link>
                    <Link className="nav-item nav-link" to="/contact"  onClick={setNavbarClose, setModelClose}>Contact</Link>
                    </div>
                </div>
                <div className="navbar-carticon">
                    <Link>
                        <ShoppingCartSharp onClick={setModalOpen}/>
                    </Link>
                    <Modal
                        isOpen={isModalOpen}
                        // onAfterOpen={this.afterOpenModal}
                        onRequestClose={setModelClose}
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                        {/* <button onClick={setModelClose} style={{borderRadius: 29, backgroundColor: "whitesmoke",color: "black"}}><MdClose /></button> */}
                        {finalOrder.length > 0
                        ?   <div className="services navbar-cart">
                                <div className="text">
                                    {finalOrder.map((item) => {
                                        return (
                                            <>
                                                <div className="navcart row">
                                                    <div className="col-md-3 navcart-image">
                                                        <img className="navcart-image-display" src={item.image} alt="bakeimage" />
                                                    </div>
                                                    <div className="col-md-7 navcart-details">
                                                        <h3 className="navcart-details-title">{item.title}</h3>
                                                        <h6 className="navcart-details-qty">Quantity: {item.amount}</h6>
                                                        <h5 className="navcart-details-price">${item.price}</h5>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div>
                                    <p className="subtotal">Sub Total: ${ Math.round(getSubTotal(finalOrder))}</p>
                                </div>
                                <div className="button-display row">
                                    <Link className="col-md-6 left-button" to = "/shoppingcart" onClick={setModelClose}>
                                        <Button className="viewcart-button" variant="contained" color="primary">View Cart</Button>
                                    </Link>
                                    <Link className="col-md-6 right-button" to="/checkout" onClick={setModelClose}>
                                        <Button className="checkout-button" variant="contained" color="secondary">Checkout</Button>
                                    </Link>
                                </div>
                            </div>
                        :   <div className="services navbar-cart">
                                    <div className="text-empty">
                                        <p className="text-display-empty"> Sorry, your cart is already empty</p>
                                    </div>
                                    <div className="button-display-empty row">
                                        <Link className="col-md-6 left-button" to = "/shoppingcart" onClick={setModelClose}>
                                            <Button className="viewcart-button" variant="contained" color="primary">View Cart</Button>
                                        </Link>
                                        <Link className="col-md-6 right-button" to="/checkout" onClick={setModelClose}>
                                            <Button className="checkout-button" variant="contained" color="secondary">Checkout</Button>
                                        </Link>
                                    </div>
                            </div>}
                    </Modal>
                </div>
            </nav>
        </div>
    )
}


