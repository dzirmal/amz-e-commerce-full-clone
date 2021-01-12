import React from 'react'
import { useStateValue } from '../../stateProvider/StateProvider'

import MenuIcon from '@material-ui/icons/Menu'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { auth } from '../../Helpers/firebase'
import { getQuantityInCart } from '../../stateProvider/reducer'
import { Links } from '../../Helpers/globalStyles'
import {
  DeliverLocation,
  HeaderCenter,
  HeaderContainer,
  HeaderLeft,
  HeaderOption,
  HeaderRight,
  Logo,
  Menu,
  HeaderOptionCartCount,
  HeaderOptionLineOne,
  HeaderOptionLineTwo,
  ImageLanguageFlag,
  Select,
  SelectLanguages,
  Option,
  Input,
  LocationIcon,
  Language,
} from './Header.elements'

function Header() {
  const [{ cart, user }, dispatch] = useStateValue()

  const signOut = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <Menu>
            <MenuIcon style={{ color: '#fff' }} />
          </Menu>
          <Links to='/'>
            <Logo
              src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
              alt='Amazon Loge'
            />
          </Links>
          <DeliverLocation>
            <LocationIcon>
              <LocationOnOutlinedIcon />
            </LocationIcon>
            <HeaderOption>
              <HeaderOptionLineOne>Deliver to Maiwand</HeaderOptionLineOne>
              <HeaderOptionLineTwo>Address...</HeaderOptionLineTwo>
            </HeaderOption>
          </DeliverLocation>
        </HeaderLeft>

        <HeaderCenter>
          <Select>
            <Option>All</Option>
            <Option>Deals</Option>
            <Option>Audible Books</Option>
            <Option>Alexa Skills</Option>
            <Option>Amazon Devices</Option>
            <Option>Amazon Fresh</Option>
            <Option>& More....</Option>
          </Select>
          <Input />
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
            <ImageLanguageFlag
              src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-united-states_1f1fa-1f1f8.png'
              alt='United States'
            />
            <SelectLanguages>
              <Language>EN</Language>
              <Language>ES</Language>
            </SelectLanguages>
          </HeaderOption>
          <Links to={!user && '/login'}>
            <HeaderOption onClick={signOut}>
              <HeaderOptionLineOne>
                Hello {!user ? 'Guest' : user?.email}
              </HeaderOptionLineOne>
              <HeaderOptionLineTwo>
                {user ? 'Sing Out' : 'Sign In'}
              </HeaderOptionLineTwo>
            </HeaderOption>
          </Links>
          <Links to='/orders'>
            <HeaderOption>
              <HeaderOptionLineOne>Returns</HeaderOptionLineOne>
              <HeaderOptionLineTwo>& Orders</HeaderOptionLineTwo>
            </HeaderOption>
          </Links>
          <Links to='/checkout'>
            <HeaderOption>
              <HeaderOptionCartCount>
                {getQuantityInCart(cart)}
              </HeaderOptionCartCount>
              {cart?.length > 0 ? (
                <ShoppingCartIcon />
              ) : (
                <ShoppingCartOutlinedIcon />
              )}
            </HeaderOption>
          </Links>
        </HeaderRight>
      </HeaderContainer>
    </>
  )
}

export default Header
