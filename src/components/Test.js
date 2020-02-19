// import React, {useState} from 'react'
// import Modal from 'react-modal';
// import {Button, Row, Col, Container, ButtonToolbar} from "react-bootstrap"

// function MydModalWithGrid(props) {
//     return (
//         <div>
//             <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
//                 <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Using Grid in Modal
//                 </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                 <Container>
//                     <Row className="show-grid">
//                     <Col xs={12} md={8}>
//                         <code>.col-xs-12 .col-md-8</code>
//                     </Col>
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     </Row>
        
//                     <Row className="show-grid">
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     </Row>
//                 </Container>
//                 </Modal.Body>
//                 <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//             </div>
//     );
//   }

//   export  default function Test() {
//     const [modalShow, setModalShow] = useState(false);
  
//     return (
//         <div className="services" style={{marginTop: 200}}>
//       <ButtonToolbar>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch modal with grid
//         </Button>
  
//         {/* <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} /> */}
//         <Modal aria-labelledby="contained-modal-title-vcenter">
//                 <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Using Grid in Modal
//                 </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                 <Container>
//                     <Row className="show-grid">
//                     <Col xs={12} md={8}>
//                         <code>.col-xs-12 .col-md-8</code>
//                     </Col>
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     </Row>
        
//                     <Row className="show-grid">
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     <Col xs={6} md={4}>
//                         <code>.col-xs-6 .col-md-4</code>
//                     </Col>
//                     </Row>
//                 </Container>
//                 </Modal.Body>
//                 <Modal.Footer>
//                 {/* <Button onClick={props.onHide}>Close</Button> */}
//                 </Modal.Footer>
//             </Modal>
//       </ButtonToolbar>
//       </div>
//     );
//   }

