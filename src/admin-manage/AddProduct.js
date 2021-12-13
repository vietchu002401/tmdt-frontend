import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {

    let [name, setName] = useState("")
    let [image, setImage] = useState("")
    let [gender, setGender] = useState(0)
    let [status, setStatus] = useState("")
    let [form, setForm] = useState("")
    let [line, setLine] = useState("")
    let [cost, setCost] = useState("")
    let [costRange, setCostRange] = useState("")
    let [size, setSize] = useState("")
    let [color, setColor] = useState("")
    let [quantity, setQuantity] = useState(0)
    let [introduce, setIntroduce] = useState("")

    let uploadImage = (e) => {
        let data = e.target.files
        let file = data[0]
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result.length > 150000) {
                    alert("Kích thước ảnh quá lớn, vui lòng chọn ảnh dưới 100kB")
                } else {
                    setImage(reader.result)
                }
            }
            reader.readAsDataURL(file);
        }
    }

    let submitData = async() => {
        let data = {
            name: name,
            image: image,
            gender: Number(gender),
            status: status,
            form: form,
            line: line,
            cost: cost,
            costRange: costRange,
            size: size,
            color: color,
            quantity: Number(quantity),
            introduce : introduce
        }
        await axios.post(process.env.REACT_APP_SERVER_URL +"/create-product",data)
        .then(res=>{
            if(res.data.message === undefined){
                alert("Sản phẩm đã tồn tại")
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="login">
            <div>
                <p>Ảnh</p>
                <input onChange={uploadImage} type="file" id="img" />
            </div>
            <div>
                <p>Tên sản phẩm</p>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Tên" />
            </div>
            <div>
                <p>Size</p>
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value=""></option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                </select>
            </div>
            <div>
                <p>Số lượng</p>
                <input onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Số lượng" />
            </div>
            <div>
                <p>Giá</p>
                <input onChange={(e) => setCost(e.target.value)} type="text" placeholder="Nhập giá có dạng xxx.xxxx. Ví dụ 200.000, Nhập khác lỗi ráng chịu" />
            </div>
            <div>
                <p>Mô tả sản phẩm</p>
                <input onChange={(e) => setIntroduce(e.target.value)} type="text" placeholder="Mô tả" />
            </div>
            <div>
                <p>Giới tính</p>
                <select onChange={(e) => setGender(e.target.value)}>
                    <option value=""></option>
                    <option value={1}>Nam</option>
                    <option value={0}>Nữ</option>
                    <option value={2}>Nam/Nữ</option>
                </select>
            </div>
            <div>
                <p>Trạng thái</p>
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value=""></option>
                    <option value="Limited Edition">Limited Edition</option>
                    <option value="Online Only">Online Only</option>
                    <option value="Sale Off">Sale Off</option>
                    <option value="New Arrivals">New Arrivals</option>
                </select>
            </div>
            <div>
                <p>Kiểu dáng</p>
                <select onChange={(e) => setForm(e.target.value)}>
                    <option value=""></option>
                    <option value="Low Top">Low Top</option>
                    <option value="High Top">High Top</option>
                    <option value="Slip-on">Slip-on</option>
                    <option value="Mule">Mule</option>
                </select>
            </div>
            <div>
                <p>Dòng sản phẩm</p>
                <select onChange={(e) => setLine(e.target.value)}>
                    <option value=""></option>
                    <option value="Basas">Basas</option>
                    <option value="Vintas">Vintas</option>
                    <option value="Urbas">Urbas</option>
                    <option value="Pattas">Pattas</option>
                </select>
            </div>
            <div>
                <p>Khoảng giá</p>
                <select onChange={(e) => setCostRange(e.target.value)}>
                    <option value=""></option>
                    <option value="500k - 599k">500k - 599k</option>
                    <option value="> 600k">	&gt; 600k</option>
                    <option value="400k - 499k">400k - 499k</option>
                    <option value="300k - 399k">300k - 399k</option>
                    <option value="200k - 299k">200k - 299k</option>
                    <option value="< 200k">&lt; 200k</option>
                </select>
            </div>
            <div>
                <p>Màu sắc</p>
                <select onChange={(e) => setColor(e.target.value)}>
                    <option value=""></option>
                    <option value="Red">Red</option>
                    <option value="Orange">Orange</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Grey">Grey</option>
                    <option value="Purple">Purple</option>
                    <option value="Lightblue">Lightblue</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="White">White</option>
                    <option value="Lightpurple">Lightpurple</option>
                </select>
            </div>
            <button onClick={submitData}>
                Login
            </button>
        </div>
    );
};

export default AddProduct;