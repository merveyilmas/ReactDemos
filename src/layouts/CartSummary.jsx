import React from 'react'
import {Dropdown, Label} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function CartSummary() {

//burada mağazadaki statelere ulaşıyoruz, yani sepete ulaştık
const {cartItems} = useSelector(state => state.cart)

  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
          {
            cartItems.map((cartItem) => (
              <Dropdown.Item>
                {cartItem.product.model}
                <Label style={{marginLeft:'0.5em'}}>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
