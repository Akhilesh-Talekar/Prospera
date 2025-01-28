import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-top mt-5" style={{ backgroundColor: "#FBFBFB"}}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-3 text-center text-lg-start">
            <img
            className="brand"
              src="media/Images/logo.svg"
              alt="Logo"
            />
            <p>© 2010 - 2024, Prospera Broking <br /> All rights reserved.</p>
            <div className="container d-flex flex-wrap fs-2 justify-content-center gap-3">
              <a href=""><i className="fa-brands fa-x-twitter text-muted"></i></a>
              <a href=""><i className="fa-brands fa-square-facebook text-muted"></i></a>
              <a href=""><i className="fa-brands fa-instagram text-muted"></i></a>
              <a href=""><i className="fa-brands fa-linkedin-in text-muted"></i></a>
              <a href=""><i className="fa-brands fa-youtube text-muted"></i></a>
              <a href=""><i className="fa-brands fa-whatsapp text-muted"></i></a>
              <a href=""><i className="fa-brands fa-telegram text-muted"></i></a>
            </div>
            <hr />
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center text-lg-start">
            <p className="mb-0 fs-5">Company</p>
            <a href="" className="text-decoration-none text-muted">
              About
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Products
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Pricing
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Referral programme
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Careers
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Prospera.tech
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Press & media
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Prospera Cares (CSR)
            </a>
            <br />
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center text-lg-start mt-5 mt-md-0">
            <p className="mb-0 fs-5">Support</p>
            <a href="" className="text-decoration-none text-muted">
              Contact us
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Support portal
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              P-Connect blog
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              List of charges
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Download & resources
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Videos
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Market overview
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Status of your complaints
            </a>
            <br />
          </div>
          <div className="col-12 col-lg-3 text-center text-lg-start mt-5 mt-lg-0">
            <p className="mb-0 fs-5">Account</p>
            <a href="" className="text-decoration-none text-muted">
              Open an account
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              Fund transfer
            </a>
            <br />
            <a href="" className="text-decoration-none text-muted">
              6- days challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted p-3 p-lg-0" style={{ fontSize: "0.7rem" }}>
          <p>
            Prospera Broking : Member of NSE, BSE & MCX - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Prospera
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Prospera Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            - SEBI Registration no.: INZ000038238 Registered Address: Prospera
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-decoration-none">
              complaints@prospera.com
            </Link>
            , for DP related to{" "}
            <Link to="https://mail.google.com/mail/u/0/#inbox" className="text-decoration-none">
              dp@prospera.com
            </Link>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
            <br />
            <br />
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a href=" " className="text-decoration-none">
              {" "}
              create a ticket here.
            </a>
          </p>
        </div>

        <div className="container d-flex justify-content-lg-between justify-content-center mt-2 flex-wrap">
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">NSE</p>
          </a>
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">BSE</p>
          </a>
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">MCX</p>
          </a>
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">Terms and conditions</p>
          </a>
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">Privacy policy</p>
          </a>
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">Disclosure</p>
          </a>
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">For investor's attention</p>
          </a>
          <a href="" className="text-decoration-none text-muted">
            <p className="mx-2 mx-lg-0">Invester charter</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
