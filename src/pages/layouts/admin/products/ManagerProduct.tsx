import React from 'react'
import { ProductType } from '../../../../types/product'

type ManagerProductProps = {
    data: ProductType[]
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả sản phẩm</th>
                </tr>
            </thead>
            <tbody>
            {props.data && props.data.map((item, index) => {
                return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.title}</td>
                        {/* <td>
                        <button onClick={() => removeItem(item._id)}>Remove</button>
                        </td> */}
                    </tr>
            })}
            
            </tbody>
      </table>
    </div>
  )
}

export default ManagerProduct