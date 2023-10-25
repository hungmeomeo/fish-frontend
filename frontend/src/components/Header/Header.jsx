import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
} from 'mdb-react-ui-kit';
import logoUrl from '../../assets/logo.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faUser,
//     faCartShopping,
//     faMagnifyingGlass
// } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to="/" className="title">
            <img src= {logoUrl} height= "50" alt="fishing-logo" />
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav color="light" className='mr-auto mb-2 mb-lg-0 d-flex justify-content-center fw-bold'>

            <MDBNavbarItem >
              <MDBDropdown className='shadow-0'>
                <MDBDropdownToggle color="light" className='fs-6 fw-bold'>
                  Shop
                </MDBDropdownToggle>

                <MDBDropdownMenu>

                  <MDBDropdownItem link  className='fs-6'>SALE ITEMS</MDBDropdownItem>
                  <MDBDropdownItem link  className='fs-6'>APPAREL</MDBDropdownItem>

                  
                  <MDBDropdown dropright group className='shadow-0'>
                    <MDBDropdownToggle color="light" className='fs-6'>
                      Rod and Reels
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem  link>Fly Rods</MDBDropdownItem>
                      <MDBDropdownItem  link>Fly Reels</MDBDropdownItem>
                      <MDBDropdownItem  link>Fly Fishing Combos</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  
                  

                  <MDBDropdown dropright group className='shadow-0'>
                    <MDBDropdownToggle color='light' className='fs-6'>
                      Flies
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem  link>Freshwater Flies</MDBDropdownItem>
                      <MDBDropdownItem  link>Saltwater Flies</MDBDropdownItem>  
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  

                  <MDBDropdownItem link className='fs-6'>FLY LINES</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink className='fs-6' to = "/about">ABOUT US</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink to="/user">
                <span>
                  <MDBIcon fas icon='user'></MDBIcon>
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink to="/cart">
                <span>
                  <MDBIcon fas icon='shopping-cart'></MDBIcon>
                </span>
                <MDBBadge pill color='danger'>1</MDBBadge>
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
                      
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
            <MDBBtn color='dark'>Search</MDBBtn>
          </form>
          
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )   
};
export default Header;