import "./ProductList.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProducts } from "../../redux/apiCalls";

const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProducts(id, dispatch);
  };

  return (
    <div className="productList">
      <div className="productList__top">
        <div className="productList__top-name">
          <p className="productList__headerName">ID</p>
        </div>
        <div className="productList__top-product">
          <p className="productList__headerName">Products</p>
        </div>
        <div className="productList__top-stock">
          <p className="productList__headerS">Stock</p>
        </div>
        <div className="productList__top-price">
          <p className="productList__headerP">price</p>
        </div>
        <div className="productList__top-action">
          <p className="productList__headerName">Action</p>
        </div>
      </div>
      {product.map((item) => (
        <ul className="productListUser" key={item._id}>
          <div className="productList__input">
            <input type="checkbox" />
          </div>
          <div className="productList__id">
            <p className="">{item._id}</p>
          </div>
          <div className="productList__image ">
            <img className="productListImg" src={item?.img} alt="user image" />
            <p>{item.title}</p>
          </div>
          <div className="productList__instock">
            <p className="productList__items">
              {item.inStock === true ? <span>true</span> : <span>false</span>}
            </p>
          </div>
          <div className="productList__mPrice">
            <p className="productList__items">${item.price}</p>
          </div>
          <div className="productList__edited">
            <Link to={"/product/" + item._id}>
              <button className="productList__edit">Edit</button>
            </Link>
            <MdOutlineDeleteOutline
              className="productList__btn"
              onClick={() => handleDelete(item._id)}
            />
          </div>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
