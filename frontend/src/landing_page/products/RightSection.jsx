import React from "react";

const RightSection = ({detailsR}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6 p-5 d-flex flex-column justify-content-center text-center text-lg-start">
          <h1>{detailsR.productName}</h1>
          <p className="text-muted">{detailsR.productDescription}</p>
          <a className="text-decoration-none" href={detailsR.anchorURL}>{detailsR.anchorName} <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-12 col-lg-6 p-5">
          <img src={detailsR.imageURL} alt={detailsR.title}/>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
