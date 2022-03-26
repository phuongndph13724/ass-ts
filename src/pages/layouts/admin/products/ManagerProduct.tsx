import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../../../../types/product'

type ManagerProductProps = {
  data: ProductType[];
  removeItem: (id: number) => void;
};

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <h2>
        <Link to={`/admin/product/add`}>Thêm sản phẩm mới</Link>
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th className=''>Ảnh  sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả sản phẩm</th>
            <th>Mô tả sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="rounded mx-auto d-block" src={item.img} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.title}</td>
                  <td>
                    <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                    <button className='' onClick={() => props.removeItem(item.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerProduct