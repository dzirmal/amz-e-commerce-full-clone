import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { useStateValue } from '../stateProvider/StateProvider'
import Order from './Order'

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      // How to pull the data from the data base.
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <OrdersContainer>
      <h1>Your Orders</h1>
      <OrdersDiv>
        {orders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </OrdersDiv>
    </OrdersContainer>
  )
}

export default Orders

const OrdersContainer = styled.div`
  padding: 20px 80px;
  & > h1 {
    margin: 30px 0;
  }
`

const OrdersDiv = styled.div``
