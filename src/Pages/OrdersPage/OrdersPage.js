import React, { useEffect, useState } from 'react'
import { Order } from '../../components'
import { db } from '../../Helpers/firebase'
import { useStateValue } from '../../stateProvider/StateProvider'
import { OrdersContainer, OrdersDiv, UsersOrders } from './OrdersPage.elements'

function OrdersPage() {
  const [{ user }] = useStateValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
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
      <UsersOrders>Your Orders</UsersOrders>
      <OrdersDiv>
        {orders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </OrdersDiv>
    </OrdersContainer>
  )
}

export default OrdersPage
