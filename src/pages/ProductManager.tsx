import React from 'react'
import { ProductType } from '../types/Product'

type ProductManagerProps = {
    products : ProductType[],
    onRemove: (id:number) => void
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.products?.map((product,index) => {
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.title}</td>
                        <td>
                            <button onClick={() => props.onRemove(product.id)}>Xóa</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductManager