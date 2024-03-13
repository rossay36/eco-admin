import { useState } from "react";
import "./NewProduct.css";
import { addProducts } from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setfile] = useState(null);
  const [cat, setcat] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setcat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file;
    const storage = getStorage(app);
    const StorageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(StorageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log({ Error: error });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProducts(product, dispatch);
        });
      }
    );
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setfile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="Description..."
            onChange={handleChange}
          />
          <div className="addProductItem">
            <label>Price</label>
            <input
              name="price"
              type="number"
              placeholder="Price: $100"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <input
              name="categories"
              type="text"
              placeholder="Jeans, Shirt"
              onChange={handleCat}
            />
          </div>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
