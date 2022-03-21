import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import { ProductType } from '../types/Product';
import {useNavigate} from 'react-router-dom';

type ProductAddProps = {
    onRemove: (product : ProductType) => void
}

type FormInputs ={
    name: string,
    price : number,
    title : string
}


const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState : {errors}} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit : SubmitHandler<FormInputs> = data => {
        props.onRemove(data);
        navigate("/admin/products");
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Tên sản phẩm' {...register('name')} />
        <input type="number" placeholder='Giá sản phẩm'  {...register('price')}/>
        <input type="text" placeholder='Mô tả sản phẩm' {...register('title')} />
        <button>Thêm sản phẩm mới</button>
    </form>
  )
}

export default ProductAdd