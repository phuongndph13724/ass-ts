import React from "react";

type ProductDetailPageProps = {};

const ProductDetailPage = (props: ProductDetailPageProps) => {
  return (
    <div>
      <section className="py-[117px]">
        <div className="container px-5">
          <div className="card-body">
            <div className="card-content">
              <div className="row">
                <div className="col-sm-4 col-12">
                  <div className="product-img d-flex align-items-center">
                    <div className="badge badge-success round">-50%</div>
                    <img
                      alt="Card image cap"
                      className="img-fluid mb-1"
                      src="https://cdn.tgdd.vn/Files/2018/12/15/1138288/photo-1534802046520-4f27db7f3ae5_800x450.jpg"
                    />
                  </div>
                </div>
                <div className="col-sm-8 col-12">
                  <div className="title-area clearfix">
                    <h2 className="product-title float-left text-3xl pb-4">
                      Fitbit Alta HR Special Edition
                    </h2>
                  </div>
                  <div className="price-reviews clearfix">
                    <span className="price-box float-left ml-4 pb-2">
                      <span className="price h4 pb-2 my-2 text-blue-600">
                        $250
                      </span>
                      <br />
                      <span className="old-price h4 my-4 text-black">$500</span>
                    </span>
                  </div>
                  {/* Product Information */}
                  <div className="product-info">
                    <p>
                      Chocolate cake croissant lollipop danish macaroon. Gummies
                      candy jelly-o chocolate tart jelly-o sesame snaps jelly-o.
                      Muffin cake dessert biscuit. Chupa chups jelly beans
                      powder chocolate cake lollipop cake donut toffee sugar
                      plum. Sweet roll liquorice halvah cupcake chocolate apple
                      pie cheesecake pastry wafer. Cheesecake cupcake sugar plum
                      apple pie.
                    </p>
                  </div>
                  {/* Product Information Ends*/}
                  {/* Color Options */}
                  <div className="row py-8">
                    <div className="col-lg-6 flex">
                      <div className="product-options color-options mb-2">
                        
                        <ul className="flex">
                            <li>Color :</li>
                          <li>
                            <i className="fas fa-square"></i>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-square"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-square"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-square"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-square"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* Size Options */}
                      <div className="product-options size-filter mb-3">
                        <ul className="flex">
                          <li className="option-title">Size :</li>
                          <li className="ml-2">
                            <a
                              className="p-1 border rounded bg-green-400"
                              href="#"
                            >
                              XL
                            </a>
                          </li>
                          <li className="ml-2">
                            <a
                              className="p-1 border rounded bg-gray-400"
                              href="#"
                            >
                              L
                            </a>
                          </li>
                          <li className="active ml-2">
                            <a
                              className="p-1 border rounded bg-red-400"
                              href="#"
                            >
                              M
                            </a>
                          </li>
                          <li className="ml-2">
                            <a className="p-1 border rounded" href="#">
                              S
                            </a>
                          </li>
                          <li className="ml-2">
                            <a
                              className="p-1 border rounded bg-pink-400"
                              href="#"
                            >
                              XS
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Color Options Ends*/}
                  {/* Size Options Ends*/}
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-1">
                      <div className="product-count pr-1">
                        <div className="input-group">
                          <input
                            className="text-center count touchspin border border-1 rounded"
                            type="text"
                            defaultValue={1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-1">
                      <div className="options text-center d-flex justify-content-around">
                        <a
                          data-placement="top"
                          data-toggle="tooltip"
                          href="#like"
                          title="Add To Wishlist"
                        >
                          <i
                            className="fas fa-heart px-2"
                            style={{ color: "red" }}
                          />
                        </a>
                        <span className="saperator">|</span>
                        <a
                          data-placement="top"
                          data-toggle="tooltip"
                          href="#view"
                          title="Quick View"
                        >
                          <i className="fas fa-eye px-2" />
                        </a>
                        <span className="saperator">|</span>
                        <a
                          data-placement="top"
                          data-toggle="tooltip"
                          href="#compare"
                          title="Compare"
                        >
                          <i
                            className="fas fa-cart-plus px-2"
                            style={{ color: "blue" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 mb-2">
                      <div className="product-buttons pl-2">
                        <a
                          className="btn btn-danger btn-sm"
                          href="ecommerce-shopping-cart.html"
                        >
                          <i className="la la-shopping-cart"></i>
                          Add to Cart
                        </a>
                        <a
                          className="btn btn-info btn-sm"
                          href="ecommerce-checkout.html"
                        >
                          <i className="la la-flash"></i>
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;