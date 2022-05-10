import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


export default function Products() {

    const [product, setProduct] = useState([]);

    const [selected, setSelected] = useState({
        checkBox: []
    })



    const navigate = useNavigate();

    const loadProducts = async () => {

        const result = await axios.get("https://peazzycoletest.000webhostapp.com/sendData.php");


        setProduct(result.data.productResult);
        // console.log(result.data.productResult);

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(obj.type)



        axios.post('https://peazzycoletest.000webhostapp.com/delete.php', selected)

            .then(res => console.log(res.data));
        navigate('/')
        // console.log(selected)
        return

    }




    const toggleCheckbox = (e) => {
        if (e.target.checked) {
            // console.log(e.target.value)
            let arr = selected.checkBox
            arr.push(e.target.value)
            setSelected({
                checkBox: arr
            })

        } else if (!e.target.checked) {
            let item = selected.checkBox
            item.splice(selected.checkBox.indexOf(e.target.value), 1);

            setSelected({
                checkBox: item
            })


            //console.log(this.state.checkedBoxes);
        }
    }




    useEffect(() => {
        loadProducts();
    }, []);

    return (

        <div id="products" className="container">

            <div>

                <div className="d-flex justify-content-between  pt-5">
                    <h2>Product List</h2>

                    <div>
                        <button className="btn btn-dark mx-3"><Link to="/addproduct" href="#">ADD</Link></button>
                        <button form="delete_product" type="submit" className="btn btn-danger" id="delete-product-btn" name="deleteMultipleBtn" value="Delete">MASS DELETE</button>
                    </div>
                </div>
                <hr />
            </div>
            <div id="grid">
                <div className="row">

                    {product.map((res) =>
                        <div className="col-3 border border-3 border-dark mb-3 mx-3 wdt">
                            <form method="POST" id="delete_product" onSubmit={handleSubmit} >
                                <input className="delete-checkbox"
                                    name="checkBox"
                                    id="checkBox"
                                    onChange={toggleCheckbox} value={res.sku} type="checkbox" />
                            </form>
                            <div className="text-center">
                                <h5>#{res.sku}</h5>
                                <h5>{res.name}</h5>
                                <h5>{res.price}$</h5>
                                {res.type == 1 && <h5>Size: {res.attribute}</h5>}
                                {res.type == 2 && <h5>Weight: {res.attribute}</h5>}
                                {res.type == 3 && <h5>Dimension: {res.attribute}</h5>}


                            </div>
                        </div>
                    )}




                </div>

            </div>

        </div>

    )
}