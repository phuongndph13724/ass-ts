import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../../../types/product";

type ProductPageProps = {
  data: ProductType[];
  removeItem: (id: number) => void;
};

const ProductPage = (props: ProductPageProps) => {
  return (
    <div className="h-auto py-10">
      <div className="shop-box-inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
              <div className="product-categori">
                <div className="search-product">
                  <form action="#">
                    <input
                      className="form-control"
                      placeholder="Search here..."
                      type="text"
                    />
                    <button type="submit" />
                  </form>
                </div>
                <div className="filter-sidebar-left">
                  <div className="title-left text-2xl pb-2">
                    <h3>Categories</h3>
                  </div>
                  <div
                    className="list-group list-group-collapse list-group-sm list-group-tree"
                    id="list-group-men"
                    data-children=".sub-men"
                  >
                    <div className="list-group-collapse sub-men">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#sub-men1"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-men1"
                      >
                        Clothing
                        <small className="text-muted">(100)</small>
                      </a>
                      <div
                        className="collapse show"
                        id="sub-men1"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action active"
                          >
                            T-Shirts
                            <small className="text-muted">(50)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Polo T-Shirts
                            <small className="text-muted">(10)</small>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-collapse sub-men">
                      <a
                        className="list-group-item list-group-item-action"
                        href="#sub-men2"
                        data-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="sub-men2"
                      >
                        Footwear
                        <small className="text-muted">(50)</small>
                      </a>
                      <div
                        className="collapse"
                        id="sub-men2"
                        data-parent="#list-group-men"
                      >
                        <div className="list-group">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Sports Shoes
                            <small className="text-muted">(10)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Sneakers <small className="text-muted">(20)</small>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Formal Shoes
                            <small className="text-muted">(20)</small>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      {" "}
                      Men <small className="text-muted">(150) </small>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      Accessories <small className="text-muted">(11)</small>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      Bags <small className="text-muted">(22)</small>
                    </a>
                  </div>
                </div>
                {/* <div class="filter-price-left">
                                <div class="title-left">
                                    <h3>Price</h3>
                                </div>
                                <div class="price-box-slider">
                                    <div id="slider-range"></div>
                                    <p>
                                        <input type="text" id="amount" readonly
                                            style="border:0; color:#fbb714; font-weight:bold;">
                                        <button class="btn hvr-hover" type="submit">Filter</button>
                                    </p>
                                </div>
                            </div> */}
                <div className="filter-brand-left">
                  <div className="title-left text-2xl pb-2 pt-4">
                    <h3>Brand</h3>
                  </div>
                  <div className="brand-box">
                    <ul className="list-unstyled">
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios1"
                            defaultValue="Yes"
                            type="radio"
                          />
                          <label htmlFor="Radios1"> Supreme </label>
                        </div>
                      </li>
                      <li>
                        <div className="radio radio-danger">
                          <input
                            name="survey"
                            id="Radios2"
                            defaultValue="No"
                            type="radio"
                          />
                          <label htmlFor="Radios2"> A Bathing Ape </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
              <div className="right-product-box">
                <div className="product-item-filter row">
                  <div className="col-12 col-sm-8 text-center text-sm-left">
                    <div className="toolbar-sorter-right">
                      <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                        data-placeholder="$ USD"
                      >
                        <option data-display="Select">Lọc Theo</option>
                        <option value={1}>Yêu Thích</option>
                        <option value={2}>Cao -&gt; Thấp</option>
                        <option value={3}>Thấp -&gt; Cao</option>
                        <option value={4}>Bán Nhiều Nhất</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 text-center text-sm-right">
                    <ul className="nav nav-tabs ml-auto">
                      <li>
                        <a
                          className="nav-link active"
                          href="#grid-view"
                          data-toggle="tab"
                        >
                          {" "}
                          <i className="text-black px-2  fa fa-th" />{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          href="#list-view"
                          data-toggle="tab"
                        >
                          {" "}
                          <i className="text-black px-2  fa fa-list-ul" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* code product */}
                <div tabIndex={0} className="focus:outline-none">
                  {/* Remove py-8 */}
                  <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                      {/* Card 1 */}
                      {props.data &&
                        props.data.map((product, index) => {
                          return (
                            <div
                              key={index}
                              tabIndex={0}
                              className="h-100 shadow border-0 px-[10px] mb-4 pt-2 focus:outline-none mx-2 w-72 xl:mb-0 mb-8"
                            >
                              <Link to={`:${product.id}`}>
                                <div>
                                  <img
                                    alt="person capturing an image"
                                    src={product.img}
                                    tabIndex={0}
                                    className="focus:outline-none w-full h-44"
                                  />
                                </div>
                              </Link>
                              <div className="bg-white dark:bg-gray-800">
                                <div className="p-4">
                                  <Link to={`:${product.id}`}>
                                    <div className="flex items-center">
                                      <h2
                                        tabIndex={0}
                                        className="focus:outline-none text-l dark:text-white font-semibold"
                                      >
                                        {product.name}
                                      </h2>
                                    </div>
                                    <p
                                      tabIndex={0}
                                      className="focus:outline-none text-xs text-gray-600 dark:text-gray-200 mt-2"
                                    >
                                      {product.title}
                                    </p>
                                  </Link>
                                  <div className="flex items-center justify-between pt-[2px]">
                                    <div className="product-action d-flex justify-content-around">
                                      <a
                                        href="#like"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Yêu thích sản phẩm"
                                      >
                                        <i
                                          className="fas fa-heart px-2"
                                          style={{ color: "red" }}
                                        />
                                      </a>
                                      <span className="saperator">|</span>
                                      <a
                                        href="#view"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Xem chi tiết"
                                      >
                                        <i className="fas fa-eye px-2" />
                                      </a>
                                      <span className="saperator">|</span>
                                      <a
                                        href="#cart"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Thêm vào giỏ hàng"
                                      >
                                        <i
                                          className="fas fa-cart-plus px-2"
                                          style={{ color: "blue" }}
                                        />
                                      </a>
                                    </div>
                                    <h3
                                      tabIndex={0}
                                      className="focus:outline-none text-indigo-700 text-xl font-semibold"
                                    >
                                      ${product.price}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
