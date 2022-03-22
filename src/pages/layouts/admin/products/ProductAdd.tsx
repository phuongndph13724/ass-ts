import React from 'react'
import {useForm,SubmitHandler} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../../../types/product';

type ProductAddProps = {
    onAdd :(product : ProductType) => void
}

type FormValues = {
    name: string,
    price: number,
    title: string,
    category: string
};


const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>()
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        navigate('/admin/product');
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} action="">
            <input type="text" {...register('name', {required: true, minLength: 5})} />
            {errors.name && errors.name.type === "required" && <span>Nhập vào name </span>}
            {errors.name && errors.name.type === "minLength" && <span>Không được dưới 5 ký tự</span>}
            <input type="text" {...register('price', {required: true, minLength: 3})} />
            {errors.price && errors.price.type === "required" && <span>Nhập vào giá sản phẩm</span>}
            {errors.price && errors.price.type === "minLength" && <span>Không được dưới 3 ký tự</span>}
            <input type="text" {...register('title', {required: true, minLength: 3})} />
            {errors.price && errors.price.type === "required" && <span>Nhập vào mô tả sản phẩm</span>}
            {errors.price && errors.price.type === "minLength" && <span>Không được dưới 3 ký tự</span>}
            <button>Thêm sản phẩm</button>
        </form>
    </div>
  )
}

export default ProductAdd