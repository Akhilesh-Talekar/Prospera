import React from "react";

const LeftSection = ({ detailsL }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6 p-5 d-flex justify-content-center">
          <img src={detailsL.imageURL} alt={detailsL.title} />
        </div>
        <div className="col-12 col-lg-6 p-5 d-flex flex-column justify-content-center text-center text-lg-start">
          <h1>{detailsL.productName}</h1>
          <p className="text-muted">{detailsL.productDescription}</p>
          <div>
          <a href={detailsL.tryDemo} style={{marginRight:"90px",textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
            <a href={detailsL.lernMore} style={{textDecoration:"none"}}>Lern More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <br />
          <div>
            <a href={detailsL.googlePlay} style={{marginRight:"20px"}}>
              <img src="./media/Images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={detailsL.appstore}>
              <img src="./media/Images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
