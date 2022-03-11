import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label, Image } from 'semantic-ui-react'

export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)
    return (
        <div>
            <Dropdown item text='Basket'>
                <Dropdown.Menu>
                    {
                        cartItems.map(cartItems => (
                            <Dropdown.Item key={cartItems.product.id}>
                                <Image src={cartItems.product.image} avatar />
                                {cartItems.product.title}
                                <Label>
                                    {cartItems.quantity}
                                </Label>
                                <br />
                                <Label>
                                    {cartItems.product.price} $
                                </Label>
                            </Dropdown.Item>

                        ))
                    }

                    <Dropdown.Divider />
                    {cartItems ? <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item> : <Dropdown.Item>Sepetiniz Boş</Dropdown.Item>}

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
