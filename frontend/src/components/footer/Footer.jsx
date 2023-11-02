import React from 'react';
// import './Footer.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logoUrl from '../../assets/logo.jpg';
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <footer className="bg-[#222222] px-4">
      <div className="max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[48px] pb-[32px]">
          <div className="flex flex-col items-start">
            <img
              className="w-[196px] h-[98px] mb-[32px] text-white"
              src={LOGO}
              alt="logo"
            />
            <p className="text-white font-bold text-lg mb-[8px]">
              Follow AnglerVN
            </p>
            <ul className="flex">
              <li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-[52px] h-[52px] mr-[16px] p-[2px] text-[#FF8997]"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end">

            <MDBRow className='d-flex justify-content-center'>
              STAY CONNECTED
            </MDBRow>
            <section className='mb-4'>
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='google' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='instagram' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </section>
          </MDBContainer>
        </MDBFooter>
        )
};
        export default Footer;