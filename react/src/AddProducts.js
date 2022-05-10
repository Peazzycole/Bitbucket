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



    const [book, setBook] = useState(false);
    const [dvd, setDvd] = useState(false);
    const [furniture, setFurniture] = useState(false);







    useEffect(() => {
        formSelect === "book"
            ? setBook(true)
            : setBook(false);
        formSelect === "dvd" ? setDvd(true) : setDvd(false);
        formSelect === "furniture" ? setFurniture(true) : setFurniture(false);
    }, [formSelect]);


    const handleChange = (e) => {

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const typeUp = book ? 1 : dvd ? 2 : 3
    const attribute = book ? formData.weight + 'KG' : dvd ? formData.size + 'MB' : formData.height + 'x' + formData.width + 'x' + formData.length

    const handleSubmit = (e) => {
        e.preventDefault()
        // const book = formData.weight + 'KG';
        // const dvd = formData.size + 'MB';
        // const furniture = formData.height + 'x' + formData.width + 'x' + formData.length


        const obj = {
            sku: formData.sku,
            name: formData.name,
            price: formData.price,
            attribute: attribute,
            type: typeUp

        }
        console.log(obj.type)



        // axios.post('https://peazzycoletest.000webhostapp.com/insert.php', obj)
        axios.post('http://localhost/test/Bitbucket/index.php', obj)
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
                        {book && <tr>
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
                        {dvd && <tr>
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
                    {furniture && <tr>

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

                    {furniture && <tr>
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

                    {furniture && <tr>
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
                    {book && <p>Please, provide weight</p>}
                    {dvd && <p>Please, provide size</p>}
                    {furniture && <p>Please, provide dimensions</p>}
                </div>
            </div>
        </div >
    )
}