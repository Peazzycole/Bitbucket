import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [product, setProduct] = useState([]);

  const [selected, setSelected] = useState({
    checkBox: [],
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProducts = product.filter(
      (item) => !selected.checkBox.includes(item.sku)
    );
    setProduct(newProducts);

    await axios.post(
      "https://peazzycoletest.000webhostapp.com/delete.php",
      selected
    );
    // await axios.post("http://localhost/Test/Bitbucket/delete.php", selected);
  };

  const toggleCheckbox = (e) => {
    if (e.target.checked) {
      let arr = selected.checkBox;
      arr.push(e.target.value);
      setSelected({
        checkBox: arr,
      });
    } else if (!e.target.checked) {
      let item = selected.checkBox;
      item.splice(selected.checkBox.indexOf(e.target.value), 1);

      setSelected({
        checkBox: item,
      });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div id="products" className="container">
      <div>
        <div className="d-flex justify-content-between  pt-5">
          <h2>Product List</h2>

          <div>
            <Link to="/addproduct" href="#">
              <button className="btn btn-dark mx-3 text-light">ADD</button>
            </Link>
            <button
              form="delete_product"
              type="submit"
              className="btn btn-danger"
              id="delete-product-btn"
              name="deleteMultipleBtn"
              value="Delete"
            >
              MASS DELETE
            </button>
          </div>
        </div>
        <hr />
      </div>
      <div id="grid">
        <div className="row">
          {product.map((res) => (
            <div
              className="col-3 border border-3 border-dark mb-3 mx-3 wdt"
              key={res.sku}
            >
              <form method="POST" id="delete_product" onSubmit={handleSubmit}>
                <input
                  className="delete-checkbox"
                  name="checkBox"
                  id="checkBox"
                  onChange={toggleCheckbox}
                  value={res.sku}
                  type="checkbox"
                />
              </form>
              <div className="text-center">
                <h5>#{res.sku}</h5>
                <h5>{res.name}</h5>
                <h5>{res.price}$</h5>
                {res.type === "dvd" && <h5>Size: {res.attribute}</h5>}
                {res.type === "book" && <h5>Weight: {res.attribute}</h5>}
                {res.type === "furniture" && (
                  <h5>Dimension: {res.attribute}</h5>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
