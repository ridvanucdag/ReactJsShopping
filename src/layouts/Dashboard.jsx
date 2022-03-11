import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Grid } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import CartList from '../pages/CartList'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import ProductAdd from '../pages/ProductAdd'


export default function Dashboard() {
  return (
    <div>
      <ToastContainer />
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={13}>
            <Routes>
              <Route exact path='/' element={<CartList />} />
              <Route exact path='/products' element={<ProductList />} />
              <Route path='/products/:id' element={<ProductDetail />} />
              <Route exact path='/cart' element={<CartDetail />} />
              <Route path='/cartList' element={<CartList />} />
              <Route path='/product/Add' element={<ProductAdd />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}