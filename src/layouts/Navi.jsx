import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Container, Menu, Search } from 'semantic-ui-react'
import SingnedOut from './SingnedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Navi() {

    const [isAuthendicated, setIsAuthendicated] = useState(true)

    const { cartItems } = useSelector(state => state.cart)

    const { search, setSearch } = useState('')

    const navigate = useNavigate()

    function handleSignOut() {

        setIsAuthendicated(false)
        navigate('/')
    }

    function handleSingIn() {
        setIsAuthendicated(true)
    }

    return (
        <div>
            <Menu fixed="top" size='huge'>
                <Container>
                    <Menu.Item name='Home' />
                    <Menu.Item name='Project' />
                    <Menu.Item name='About' />
                    <Menu.Item name='Contact' />
                    {/* <Search onChange={this.props.cartSearchButton} /> */}
                    {/* e => { setSearch(e.target.value) } */}
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {
                            isAuthendicated ? <SignedIn signOut={handleSignOut} /> : <SingnedOut signIn={handleSingIn} />
                        }
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
