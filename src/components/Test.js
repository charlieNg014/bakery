// import React from 'react'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const review = [
//   {detail: "test 1", name: " Charlie"},
//   {detail: "test 2", name: " Duke"},
//   {detail: "test 3", name: " Jess"}
// ]

// export default function Test() {
//   return (
//     <div className="services" style={{marginTop: 100, marginRight: 0}}>
//       <Carousel
//             additionalTransfrom={0}
//             arrows
//             autoPlaySpeed={10}
//             centerMode={false}
//             className=""
//             containerClass="container"
//             dotListClass=""
//             draggable
//             focusOnSelect={false}
//             infinite
//             itemClass=""
//             keyBoardControl
//             minimumTouchDrag={80}
//             renderButtonGroupOutside={false}
//             renderDotsOutside={false}
//             responsive={{
//               desktop: {
//                 breakpoint: {
//                   max: 3000,
//                   min: 1024
//                 },
//                 items: 1
//               },
//               mobile: {
//                 breakpoint: {
//                   max: 464,
//                   min: 0
//                 },
//                 items: 1
//               },
//               tablet: {
//                 breakpoint: {
//                   max: 1024,
//                   min: 464
//                 },
//                 items: 1
//               }
//             }}
//             showDots
//             sliderClass=""
//             slidesToSlide={1}
//             swipeable
//           >
//       {review.map((item) => {
//         return (
//             <div className="item row" style={{marginLeft: -30, height: 300}}>
//                 <div className="item-display col-md-12">
//                   <h3 className="review-detail">{item.detail}</h3>
//                   <hr className="filter-line" style={{width: "30%"}}/>
//                   <p className="review-name">{item.name}</p>
//                 </div>
//             </div>
//         )
//           })}
//     </Carousel>
//     </div>
//         )
// }

import React from 'react'
// import axios from "axios"

export default function Test() {
  const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/localhost:5000/findroom/')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log("done");
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return (
    <div className="services" style={{marginTop: 200}}> 
      testing 
    </div>
  )
}
