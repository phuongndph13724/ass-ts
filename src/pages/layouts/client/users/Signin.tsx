import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserType } from '../../../../types/user';


type SigninProps = {
  signIn : (user: UserType) => void
};
type FormValues = {
  email : string,
  password:string
}

const Signin = (props: SigninProps) => {
  const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
  const navigate = useNavigate();
  
  const onSubmit : SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <section className="py-[117px]">
  <div className="container px-5">
    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bolder">Signup</h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="form-floating mb-3">
              <input  {...register('email',{required: true})}  className="form-control" id="email" type="email" placeholder="name@example.com" />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input  {...register('password',{required: true})}  className="form-control" id="password" type="password" placeholder="Enter your password..."/>
              <label htmlFor="name">Password</label>
            </div>
            <div>
              <Link className='pr-10' to={`/signup`}>Đăng ký tài khoản</Link>
              <button className='btn btn-primary'>Đăng Nhập</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
</div>
</section>
    </div>
  )
}

export default Signin