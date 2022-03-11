import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button, Search } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'

export default function CartList() {

    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.title} Sepete eklendi`)
    }

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')



    useEffect(() => {
        const productService = new ProductService()
        productService.getProducts().then(res => setProducts(res.data))
    }, [])

    return (
        <div className='ui form'>
            <input type="text" placeholder="Search.." onChange={e => setSearch(e.target.value)} />


            <div class="ui tree cards">



                {
                    products.filter((pro) => {
                        if (search == "") {
                            return pro
                        }
                        else if (
                            pro.title.toLowerCase().includes(search.toLowerCase()) || pro.category.toLowerCase().includes(search.toLowerCase())
                        ) {
                            return pro
                        }
                    }).map(pro => (
                        <div class="card" key={pro.id}>
                            <div class="image" >
                                <Link to={`/products/${pro.id}`}> <img src={pro.image} style={{ height: 300, width: 270 }} /></Link>
                            </div>
                            <div class="content">
                                <div class="header">{pro.title}</div>

                            </div>
                            <div class="extra content">
                                <span class="left floated">

                                    {pro.price} $
                                </span>
                                <span >
                                    Stok : {pro.rating.count}
                                </span>
                                <span class="right floated">
                                    {pro.category}
                                </span>

                            </div>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green' onClick={() => handleAddToCart(pro)}>
                                        Sepete Ekle
                                    </Button>
                                    <Button basic color='red'>
                                        Favoriler
                                    </Button>
                                </div>
                            </Card.Content>
                            {/* <div class="extra">
                            Rating:
                            <div class="ui star rating" data-rating="4"></div>
                        </div> */}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
