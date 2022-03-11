import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Image, Button } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        const productService = new ProductService()
        productService.getProductsById(id).then(res => setProduct(res.data))
    }, [id])

    return (

        <Card>
            <Image src={product.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{product.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{product.price} $</span>
                </Card.Meta>
                <Card.Description>
                    {product.description}
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Sepete Ekle
                    </Button>
                    <Button basic color='red'>
                        Favori
                    </Button>
                </div>
            </Card.Content>
        </Card >

    )
}
