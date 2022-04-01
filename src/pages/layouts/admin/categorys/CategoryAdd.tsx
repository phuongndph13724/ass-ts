import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../../../types/category'

type Props = {
    onAddCates: (category: CategoryType) => void
}

type FormValues = {
    name: string,
    img: string
};

const CategoryAdd = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAddCates(data);
        navigate('/admin/category');
    }
    return (
        <div>
            <section className="py-5">
                <div className="container px-5">
                    {/* Contact form*/}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Thêm Danh Mục Sản Phẩm Mới</h1>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form onSubmit={handleSubmit(onSubmit)} action="" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input  {...register('name', { required: true })} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        {errors.name && errors.name.type === "required" && <span>Nhập vào tên danh mục sản phẩm</span>}
                                        <label htmlFor="name">Tên danh mục sản phẩm</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="img" type="file" placeholder="" data-sb-validations="required" />
                                        <label htmlFor="img">
                                            <img className="rounded mx-auto d-block" src='' alt="" />
                                        </label>
                                    </div>
                                    <div className="d-grid border border-solid-2 py-2 rounded bg-primary"><button className="" id="submitButton" type="submit">Thêm</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CategoryAdd