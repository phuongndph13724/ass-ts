import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../../../types/product";

type ManagerProductProps = {
  data: ProductType[];
  onRemoveItem: (_id: number) => void;
};

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
      <h2 className=" my-4 mx-4 text-left">
        <Link className="text-2xl" to={`/admin/product/add`}>
          Thêm sản phẩm mới
        </Link>
      </h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th className="">Ảnh sản phẩm</th>
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
                    <Link to={`/product/${item._id}`}>
                      <img
                        className="w-60 rounded mx-auto d-block"
                        src={item.img}
                        alt=""
                      />
                    </Link>
                  </td>

                  <td>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.title}</td>
                  <td>
                    <Link to={`/admin/product/${item._id}/edit`}>Edit</Link>
                    <button className="" onClick={() => props.onRemoveItem(item._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerProduct;
