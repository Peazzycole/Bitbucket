import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AddProducts.css";

export default function AddProducts() {
  // State for managing the form
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    size: "",
    height: "",
    width: "",
    length: "",
    weight: "",
  });

  const [formSelect, setFormSelect] = useState("selectAttribute");
  const [type, setType] = useState(false);
  const [product, setProduct] = useState([]);
  const [isUsed, setIsUSed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setType(formSelect);
  }, [formSelect]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const loadProducts = async () => {
      const result = await axios.get(
        "https://peazzycoletest.000webhostapp.com/display.php"
      );
      // const result = await axios.get(
      //   "http://localhost/Test/Bitbucket/display.php"
      // );
      const data = await result.data.productResult;
      setProduct(data);
    };
    loadProducts();
  }, []);

  // -----------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const productTypes = {
      furniture: furniture,
      dvd: dvd,
      book: book,
    };

    function book(args, type) {
      const { sku, name, price, weight } = args;
      const obj = { sku, name, price, weight, type };
      return obj;
    }

    function dvd(args, type) {
      const { sku, name, price, size } = args;
      const obj = { sku, name, price, size, type };
      return obj;
    }

    function furniture(args, type) {
      const { sku, name, price, width, length, height } = args;
      const obj = { sku, name, price, width, length, height, type };
      return obj;
    }

    const obj = productTypes[type](formData, type);

    for (let i = 0; i < product.length; i++) {
      if (product[i].sku === obj.sku) {
        setIsUSed(true);
        return;
      }
    }

    axios.post("https://peazzycoletest.000webhostapp.com/insert.php", obj);
    // axios.post("http://localhost/Test/Bitbucket/insert.php", obj);
    navigate("/");
  };

  const error = isUsed ? "1px solid red" : "";

  // -----------------------------------------------
  const handleOnChange = (e) => {
    setFormSelect(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-between  pt-5">
          <h2>Product ADD</h2>

          <div>
            <button
              className="btn btn-danger"
              type="submit"
              form="product_form"
            >
              Save
            </button>
            <Link to="/" href="#">
              <button className="btn btn-dark text-light mx-3">Cancel</button>
            </Link>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <form id="product_form" onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td htmlFor="SKU">SKU </td>
                <td>
                  <input
                    id="sku"
                    type="text"
                    name="sku"
                    placeholder="#sku"
                    value={formData.sku}
                    onChange={handleChange}
                    required={true}
                    style={{ border: error }}
                  />
                </td>
                <td>
                  {isUsed && (
                    <span
                      className="ms-3 mt-1"
                      style={{ color: "red", fontSize: "1rem" }}
                    >
                      SKU must be Unique. Try Again
                    </span>
                  )}
                </td>
              </tr>

              <tr>
                <td htmlFor="name">Name</td>
                <td>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="#name"
                    value={formData.name}
                    onChange={handleChange}
                    required={true}
                  />
                </td>
              </tr>

              <tr>
                <td htmlFor="price">Price ($)</td>
                <td>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Enter a number"
                    value={formData.price}
                    onChange={handleChange}
                    required={true}
                  />
                </td>
              </tr>

              {/* Type switcher */}
              <tr>
                <td htmlFor="switcher" className="pt-4">
                  Type switcher
                </td>
                <td>
                  <select
                    required
                    id="productType"
                    value={formSelect}
                    onChange={handleOnChange}
                    className="switcher"
                  >
                    <option value="">Type switcher</option>
                    <option value="book">Book</option>
                    <option value="dvd">DVD</option>
                    <option value="furniture">Furniture</option>
                  </select>
                </td>
              </tr>

              {/* book option */}
              {type === "book" && (
                <tr>
                  <td htmlFor="weight">Weight (KG)</td>
                  <td>
                    {" "}
                    <input
                      id="weight"
                      type="number"
                      name="weight"
                      placeholder="Enter a number"
                      value={formData.weight}
                      onChange={handleChange}
                      required={true}
                    />
                  </td>
                </tr>
              )}

              {/* dvd option */}
              {type === "dvd" && (
                <tr>
                  <td htmlFor="size">Size (MB)</td>
                  <td>
                    {" "}
                    <input
                      id="size"
                      type="number"
                      name="size"
                      placeholder="Enter a number"
                      value={formData.size}
                      onChange={handleChange}
                      required={true}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* furniture option */}
          {type === "furniture" && (
            <table>
              <tbody>
                <tr>
                  <td htmlFor="height">Height (CM)</td>
                  <td>
                    {" "}
                    <input
                      id="height"
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      placeholder="Enter a number"
                      required={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {type === "furniture" && (
            <table>
              <tbody>
                <tr>
                  <td htmlFor="height">Width (CM)</td>
                  <td>
                    {" "}
                    <input
                      id="width"
                      type="number"
                      name="width"
                      value={formData.width}
                      onChange={handleChange}
                      placeholder="Enter a number"
                      required={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {type === "furniture" && (
            <table>
              <tbody>
                <tr>
                  <td htmlFor="length">Length (CM)</td>
                  <td>
                    {" "}
                    <input
                      id="length"
                      type="number"
                      name="length"
                      value={formData.length}
                      onChange={handleChange}
                      placeholder="Enter a number"
                      required={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </form>
        <div>
          {type === "book" && <p className="last-p">Please, provide weight</p>}
          {type === "dvd" && <p className="last-p">Please, provide size</p>}
          {type === "furniture" && (
            <p className="last-p">Please, provide dimensions</p>
          )}
        </div>
      </div>
    </div>
  );
}
