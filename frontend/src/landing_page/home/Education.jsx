import React from "react";

const Education = () => {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col">
          <img src="media/Images/education.svg" alt="" />
        </div>


        <div className="col">
          <h1 className="mb-3"><span style={{color:"#0d6efd"}}>Free</span> and open market education</h1>
          <p>Our education section is designed to help you learn about trading and investing. We provide resources that can help you learn the basics of trading and investing, as well as more advanced topics. Whether you're new to trading or an experienced investor, our education section has something for you.</p>
          <a href="" className="text-decoration-none">Learn more <i className="fa-solid fa-arrow-right"></i></a>
          
          <p className="mt-5">If you have any questions about trading, our Q&A section is here to help. We have a comprehensive list of frequently asked questions and answers that cover a wide range of topics. Whether you need help with the basics or have more advanced questions, our Q&A section is a great resource.</p>
          <a href="" className="text-decoration-none">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Education;
