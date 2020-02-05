import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {MdSlowMotionVideo, MdCheckCircle} from "react-icons/md"
import axios from "axios"
import Modal from 'react-modal';
import {MdClose} from "react-icons/md"
import ReactPlayer from 'react-player'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height: 800,
      width: 1500,
      backgroundColor: "black"
    }
  };

export default class Contact extends Component {
    //declare the state
    constructor(props) {
        super(props);

        //bind this to the method
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeNote = this.onChangeNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //bind to Modal only 
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "", 
            note: "",
            modalIsOpen: false
        }
    }

    //delcare functions/methods
    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    onChangeNote(e) {
        this.setState({
            note: e.target.value
        })
    }

    onSubmit() {
        const newRequest = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            note: this.state.note
        }

        console.log(newRequest);

        //API to MongoDB
        axios.post("http://localhost:8080/request/add", newRequest)
        .then(response => console.log(response.data))

        this.setState({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            note: ""
        })
        
        setTimeout(function() {
            window.location = "/";
        }, 6000)

        return newRequest;
        
    }

    //method for Modal 
    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
        return (
            <div className="services" style={{paddingTop: 0, paddingBottom: 0}}> 
                <div className="row contact">
                    <div className="col-md-6 video">
                    <h4 className="contact-title">Video Present</h4>
                        <h2  className="contact-banner-title">Any Design For Your Feast-day</h2>
                        <Link className="contact-icon">
                            <MdSlowMotionVideo onClick={this.openModal}/>
                        </Link>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                            >
                            <button ref={subtitle => this.subtitle = subtitle} onClick={this.closeModal} style={{borderRadius: 29, backgroundColor: "whitesmoke",color: "black"}}><MdClose /></button>
                            <div className="youtube">
                                <ReactPlayer url='https://www.youtube.com/watch?v=KVljbFCGuUE' />
                            </div>
                            
                        </Modal>
                    </div> 
                    <div className="col-md-6 contact-details">
                        <h4 className="detail-subtitle">Dan's Bakery</h4>
                        <h2 className="detail-title">Booking Request</h2>
                        <h3 className="detail-icon"><MdCheckCircle /></h3>
                        <p className="detail-desc">Please leave your details below. I will contact you shortly !</p>
                        <div className="row detail-form">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="First Name" onChange = {this.onChangeFirstname}/>
                            </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Last Name" onChange = {this.onChangeLastname}/>
                            </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email" onChange = {this.onChangeEmail}/>
                            </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Phone" onChange = {this.onChangePhone}/>
                            </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <textarea className="form-control" type="text" row="10" required placeholder="Request" onChange = {this.onChangeNote}/>
                            </div>
                            </div>
                        </div>
                        <div>
                           <button className="detail-btn" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
