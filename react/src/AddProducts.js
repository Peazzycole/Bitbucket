import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from "react";


export default function AddProducts() {





    const [formData, setFormData] = useState({
        sku: "",
        name: "",
        price: "",
        size: "",
        height: "",
        width: "",
        length: "",
        weight: ""

    })
    const [formSelect, setFormSelect] = useState('selectAttribute')

    const navigate = useNavigate();

    const [type, setType] = useState(false);







    useEffect(() => {
        setType(formSelect);
    }, [formSelect]);


    const handleChange = (e) => {

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }




    const handleSubmit = (e) => {
        e.preventDefault()

        const productTypes = {
            'furniture': furniture,
            'dvd': dvd,
            'book': book
        }

        function book(args, type) {
            const { sku, name, price, weight } = args;
            const obj = { sku, name, price, weight, type }
            return obj;
        }

        function dvd(args, type) {
            const { sku, name, price, size } = args;
            const obj = { sku, name, price, size, type }
            return obj;
        }

        function furniture(args, type) {
            const { sku, name, price, width, length, height } = args;
            const obj = { sku, name, price, width, length, height, type }
            return obj;
        }

        const obj = productTypes[type](formData, type);


        axios.post('https://peazzycoletest.000webhostapp.com/insert.php', obj)
            // axios.post('http://localhost/Test/Bitbucket/index.php', obj)
            .then(res => console.log(res.data));
        navigate('/')
        console.log(obj)
        return
    }


    const handleOnChange = (e) => {
        setFormSelect(e.target.value);
    };





    return (
        <div className="container">
            <div>
                <div className="d-flex justify-content-between  pt-5">
                    <h2>Product ADD</h2>

                    <div>
                        <button className="btn btn-danger" type="submit" form="product_form">Save</button>
                        <button className="btn btn-dark mx-3"><Link to="/" href="#">Cancel</Link></button>

                    </div>
                </div>
                <hr />
            </div>

            <div>
                <form id="product_form" onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td htmlFor="SKU">SKU </td>
                            <td>
                                <input
                                    id="sku"
                                    type='text'
                                    name="sku"
                                    placeholder="#sku"
                                    value={formData.sku}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td htmlFor="name">Name</td>
                            <td>
                                <input
                                    id="name"
                                    type='text'
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
                                    type='number'
                                    name="price"

                                    placeholder='Enter a number'
                                    value={formData.price}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </td>
                        </tr>

                        <tr >
                            <td htmlFor="switcher">Type switcher</td>
                            <td>
                                <select required id="productType" value={formSelect} onChange={handleOnChange}>
                                    <option value="">Type switcher</option>
                                    <option value="book">Book</option>
                                    <option value="dvd">DVD</option>
                                    <option value="furniture">Furniture</option>
                                </select>
                            </td>
                        </tr>

                        {/* book option */}
                        {type === 'book' && <tr>
                            <td htmlFor="weight">Weight (KG)</td>
                            <td> <input
                                id="weight"
                                type='text'
                                name="weight"
                                placeholder='Enter a number'
                                value={formData.weight}
                                onChange={handleChange}
                                required={true}
                            />
                            </td>
                        </tr>
                        }




                        {/* dvd option */}
                        {type === 'dvd' && <tr>
                            <td htmlFor="size">Size (MB)</td>
                            <td> <input
                                id="size"
                                type='number'
                                name="size"
                                placeholder='Enter a number'
                                value={formData.size}
                                onChange={handleChange}
                                required={true}
                            />
                            </td>
                        </tr>}

                    </table>
                    {/* furniture option */}
                    {type === 'furniture' && <tr>

                        <td htmlFor="height">Height (CM)</td>
                        <td> <input
                            id="height"
                            type='number'
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            placeholder='Enter a number'
                            required={true}
                        />
                        </td>
                    </tr>
                    }

                    {type === 'furniture' && <tr>
                        <td htmlFor="height">Width (CM)</td>
                        <td> <input
                            id="width"
                            type='number'
                            name="width"
                            value={formData.width}
                            onChange={handleChange}
                            placeholder='Enter a number'
                            required={true}
                        />
                        </td>
                    </tr>}

                    {type === 'furniture' && <tr>
                        <td htmlFor="length">Length (CM)</td>
                        <td> <input
                            id="length"
                            type='number'
                            name="length"
                            value={formData.length}
                            onChange={handleChange}
                            placeholder='Enter a number'
                            required={true}
                        />
                        </td>
                    </tr>}






                </form>
                <div>
                    {type === 'book' && <p>Please, provide weight</p>}
                    {type === 'dvd' && <p>Please, provide size</p>}
                    {type === 'furniture' && <p>Please, provide dimensions</p>}
                </div>
            </div>
        </div >
    )
}