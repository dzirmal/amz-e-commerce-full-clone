import React from 'react'
import { CheckoutProduct, Subtotal } from '../../components'
import { useStateValue } from '../../stateProvider/StateProvider'
import {
  CheckoutContainer,
  CheckoutImage,
  CheckoutLeft,
  CheckoutRight,
  UserCart,
  UserName,
  UserShoppingCart,
} from './CheckoutPage.elements'

function CheckoutPage() {
  const [{ cart, user }] = useStateValue()

  return (
    <CheckoutContainer>
      <CheckoutLeft>
        <CheckoutImage
          src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_ORIGIN_1270501_1388435_US_GH20_us_ce_egg_storefront_2_3416994_1500x90_en_US.jpg'
          alt=''
        />
        <UserShoppingCart>
          <UserName>Hello, {user?.email}</UserName>
          <UserCart>Your Shopping Cart</UserCart>
          {cart.map((item) => (
            <CheckoutProduct
              key={item.id}
              // id={item.id}
              // title={item.title}
              // image={item.image}
              // price={item.price}
              // rating={item.rating}
              // quantity={item.quantity}
              item={item}
            />
          ))}
        </UserShoppingCart>
      </CheckoutLeft>
      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </CheckoutContainer>
  )
}

export default CheckoutPage
