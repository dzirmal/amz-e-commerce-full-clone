import React from 'react';
import styled from 'styled-components';

import MenuIcon from '@material-ui/icons/Menu';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <div className='menu'>
          <MenuIcon />
        </div>
        <Logo
          src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
          alt='Amazon Loge'
        />
        <div className='delivery__location'>
          <LocationOnOutlinedIcon style={{ alignItems: 'center' }} />
          <HeaderOption>
            <span className='header__option__lineOne'>Deliver to Maiwand</span>
            <span className='header__option__lineTwo'>Address...</span>
          </HeaderOption>
        </div>
      </HeaderLeft>

      <HeaderCenter>
        <select>
          <option>All</option>
          <option>Deals</option>
          <option>Audible Books</option>
          <option>Alexa Skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fresh</option>
          <option>& More....</option>
        </select>
        <input />
        <SearchOutlinedIcon
          style={{
            padding: '5px',
            height: '22px !important',
            backgroundColor: '#cd9042',
          }}
        />
      </HeaderCenter>

      <HeaderRight>
        <HeaderOption>
          <img
            src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-united-states_1f1fa-1f1f8.png'
            alt='United States'></img>

          <select>
            <option>English - EN</option>
            <option>Español - ES</option>
          </select>
        </HeaderOption>
        <HeaderOption>
          <span className='header__option__lineOne'>Hello Maiwand</span>
          <span className='header__option__lineTwo'>Sign In</span>
        </HeaderOption>
        <HeaderOption>
          <span className='header__option__lineOne'>Returns</span>
          <span className='header__option__lineTwo'>& Orders</span>
        </HeaderOption>
        <HeaderOption>
          <span className='header__option__cartCount'>0</span>
          <ShoppingCartOutlinedIcon />
        </HeaderOption>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    &.menu {
      align-items: center;
      height: 20px;
      width: 20px;
      border: 1px solid lightgray;
      margin: 10px 10px 10px 7px;
      padding: 10px 10px;
    }
  }
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  & > span {
    &.header__option__lineOne {
      font-size: 10px;
    }
    &.header__option__lineTwo {
      font-size: 13px;
      font-weight: 800;
    }
    &.header__option__cartCount {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  & > img {
    object-fit: contain;
    height: 30px;
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
  & > input {
    flex: 1;
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }
  & > select {
    align-items: center;
    height: 50px;
    width: 80px;
    border: 1px solid lightgray;
    margin: 10px 10px 10px 7px;
    padding: 10px 10px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
