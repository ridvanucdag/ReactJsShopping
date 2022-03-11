import { Formik, Form, } from 'formik'
import React from 'react'
//import validationSchema from "./ProductValidation"
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import TextInput from '../utilities/TextInput'






export default function ProductAdd() {

    const initialValues = {
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    }


    const schema = Yup.object({
        title: Yup.string()
            .required("Lütfen Ürün adı giriniz"),
        price: Yup.number("Lütfen sadece sayısal değerler giriniz")
            .required("Lütfen ürünün fiyatını giriniz"),
        description: Yup.string()
            .required("Lütfen ürün açıklaması giriniz"),
        category: Yup.string()
            .required("Lütfen ürünün kategorisini giriniz"),
        image: Yup.string()
            .required("Lütfen ürünün görsel linkini giriniz"),
    }
    )

    const handleSubmit = (values) => {
        console.log(values)
    }


    return (

        <Formik initialValues={initialValues} validationSchema={schema}
            onSubmit={handleSubmit} >
            <Form className='ui form'>
                <label>Ürün Adı : </label>
                <TextInput name='title' placeholder="Ürünün Adı" />
                <label>Ürün Fiyatı : </label>
                <TextInput name="price" placeholder="Ürünün fiyatı" />
                <label>Ürün Açıklaması : </label>
                <TextInput name="description" placeholder="Ürünün Açıklamas" />
                <label>Ürün Kategorisi : </label>
                <TextInput name="category" placeholder="Ürünün Kategorisi" />
                <label>Ürün Resmi (Link) : </label>
                <TextInput name="image" placeholder="Ürünün Resmi" />
                {/* <FormField>
                    
                    <Field name='title' placeholder="Ürünün Adı"></Field>
                    <ErrorMessage name='title' render={error =>
                        <Label pointing basic color='red' content={error}></Label>}></ErrorMessage>
                </FormField> */}
                {/* <FormField>
                    <label>Ürün Fiyatı : </label>
                    <Field name="price" type="number" ></Field>
                    <ErrorMessage name='price' render={error =>
                        <Label pointing basic color='red' content={error}></Label>}></ErrorMessage>
                </FormField> */}
                <Button color='green' type='submit'> Ürün Ekle</Button>
            </Form>
        </Formik>

    )
}
