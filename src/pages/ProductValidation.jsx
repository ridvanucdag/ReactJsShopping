import * as Yup from "yup"

const schema = Yup.object({
    title: Yup.string()
        .required("Ürün adı giriniz"),
    price: Yup.number()
        .required("Lütfen ürünün fiyatını giriniz"),
    description: Yup.string()
        .required("Lütfen ürün açıklaması giriniz"),
    category: Yup.string()
        .required("Lütfen ürünün kategorisini giriniz"),
    image: Yup.string()
        .required("Lütfen ürünün görsel linkini giriniz"),
    rating: [{
        rate: Yup.number(),
        count: Yup.number()
            .required("Lütfen stok adedini giriniz")

    }]
}
) 
