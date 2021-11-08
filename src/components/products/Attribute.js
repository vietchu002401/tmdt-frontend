import React, { useState, useEffect } from 'react';
import {  useHistory, useLocation } from "react-router-dom"
import qs from "query-string"

const Attribute = () => {

    let search = new URLSearchParams(useLocation().search)
    let genderSearch = search.get("gender")
    let statusSearch = search.get("status")
    let formSearch = search.get("form")
    let lineSearch = search.get("line")
    let costRangeSearch = search.get("costRange")
    let sizeSearch = search.get("size")
    let colorSearch = search.get("color")

    let [gender, setGender] = useState((genderSearch && genderSearch) || "")
    let [status, setStatus] = useState((statusSearch && statusSearch.split(",")) || [])
    let [form, setForm] = useState((formSearch && formSearch.split(",")) || [])
    let [line, setLine] = useState((lineSearch && lineSearch.split(",")) || [])
    let [costRange, setCostRange] = useState((costRangeSearch && costRangeSearch.split(",")) || [])
    let [size, setSize] = useState((sizeSearch && sizeSearch.split(",")) || [])
    let [color, setColor] = useState((colorSearch && colorSearch.split(",")) || [])



    let history = useHistory()


    useEffect(() => {
        if (gender.length !== 0 || status.length !== 0 || form.length !== 0 || line.length !== 0 || costRange.length !== 0 || size.length !== 0 || color.length !== 0) {
            let query = {
                gender: gender,
                status: status.join(","),
                form: form.join(","),
                line: line.join(","),
                costRange: costRange.join(","),
                size: size.join(","),
                color: color.join(",")
            }
            let searchString = qs.stringify(query);
            history.push({ pathname: "/product-list", search: "?" + searchString })
        }
    }, [gender, status, form, line, costRange, size, color, history])

    let updateState=(mood,value)=>{
        if(mood.includes(value)){
            let arr =  mood.filter(item=>{
                return item !== value
            })
            return arr.length > 0 ? arr : [""]
        }else{
            return [...mood, value]
        }
    }

    return (
        <div className="choose">
            <ul>
                <li onClick={() => setGender("all")} style={search.get("gender") === "all" ? { fontWeight: "bold" } : null} >TẤT CẢ</li>
                <li onClick={() => setGender("men")} style={search.get("gender") === "men" ? { fontWeight: "bold" } : null} >NAM</li>
                <li onClick={() => setGender("woman")} style={search.get("gender") === "woman" ? { fontWeight: "bold" } : null} >NỮ</li>
            </ul>
            <ul>
                <h3>TRẠNG THÁI</h3>
                <li className={status.includes("Limited Edition") ? "choose-li" : "choose-li-none"} onClick={() => setStatus(updateState(status,"Limited Edition"))}>Limited Edition</li>
                <li className={status.includes("Online Only") ? "choose-li" : "choose-li-none"} onClick={() => setStatus(updateState(status,"Online Only"))}>Online Only</li>
                <li className={status.includes("Sale Off") ? "choose-li" : "choose-li-none"} onClick={() => setStatus(updateState(status,"Sale Off"))}>Sale off</li>
                <li className={status.includes("New Arrivals") ? "choose-li" : "choose-li-none"} onClick={() => setStatus(updateState(status,"New Arrivals"))}>New Arrivals</li>
            </ul>
            <ul>
                <h3>KIỂU DÁNG</h3>
                <li className={form.includes("Low Top") ? "choose-li" : "choose-li-none"} onClick={() => setForm(updateState(form,"Low Top"))}>Low Top</li>
                <li className={form.includes("High Top") ? "choose-li" : "choose-li-none"} onClick={() => setForm(updateState(form,"High Top"))}>High Top</li>
                <li className={form.includes("Slip-on") ? "choose-li" : "choose-li-none"} onClick={() => setForm(updateState(form,"Slip-on"))}>Slip-on</li>
                <li className={form.includes("Mule") ? "choose-li" : "choose-li-none"} onClick={() => setForm(updateState(form,"Mule"))}>Mule</li>
            </ul>
            <ul>
                <h3>DÒNG SẢN PHẨM</h3>
                <li className={line.includes("Basas") ? "choose-li" : "choose-li-none"} onClick={() => setLine(updateState(line,"Basas"))}>Basas</li>
                <li className={line.includes("Vintas") ? "choose-li" : "choose-li-none"} onClick={() => setLine(updateState(line,"Vintas"))}>Vintas</li>
                <li className={line.includes("Urbas") ? "choose-li" : "choose-li-none"} onClick={() => setLine(updateState(line,"Urbas"))}>Urbas</li>
                <li className={line.includes("Pattas") ? "choose-li" : "choose-li-none"} onClick={() => setLine(updateState(line,"Pattas"))}>Pattas</li>
            </ul>
            <ul>
                <h3>GIÁ</h3>
                <li className={costRange.includes("500k - 599k") ? "choose-li" : "choose-li-none"} onClick={() => setCostRange(updateState(costRange,"500k - 599k"))}>500k - 599k</li>
                <li className={costRange.includes("> 600k") ? "choose-li" : "choose-li-none"} onClick={() => setCostRange(updateState(costRange,"> 600k"))}> &gt; 600k</li>
                <li className={costRange.includes("400k - 499k") ? "choose-li" : "choose-li-none"} onClick={() => setCostRange(updateState(costRange,"400k - 499k"))}>400k - 499k</li>
                <li className={costRange.includes("300k - 399k") ? "choose-li" : "choose-li-none"} onClick={() => setCostRange(updateState(costRange,"300k - 399k"))}>300k - 399k</li>
                <li className={costRange.includes("200k - 299k") ? "choose-li" : "choose-li-none"} onClick={() => setCostRange(updateState(costRange,"200k - 299k"))}>200k - 299k</li>
                <li className={costRange.includes("< 200k") ? "choose-li" : "choose-li-none"} onClick={() => setCostRange(updateState(costRange,"< 200k"))}> &lt; 200k</li>
            </ul>
            <ul>
                <h3>SIZE GIÀY</h3>
                <table>
                    <tbody>
                        <tr>
                            <th className={size.includes("35") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"35"))}>35</th>
                            <th className={size.includes("36") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"36"))}>36</th>
                            <th className={size.includes("37") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"37"))}>37</th>
                            <th className={size.includes("38") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"38"))}>38</th>
                        </tr>
                        <tr>
                            <th className={size.includes("39") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"39"))}>39</th>
                            <th className={size.includes("40") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"40"))}>40</th>
                            <th className={size.includes("41") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"41"))}>41</th>
                            <th className={size.includes("42") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"42"))}>42</th>
                        </tr>
                        <tr>
                            <th className={size.includes("43") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"43"))}>43</th>
                            <th className={size.includes("44") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"44"))}>44</th>
                            <th className={size.includes("45") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"45"))}>45</th>
                            <th className={size.includes("46") ? "choose-li" : "choose-li-none"} onClick={() => setSize(updateState(size,"46"))}>46</th>
                        </tr>
                    </tbody>
                </table>
            </ul>
            <ul>
                <h3>MÀU SẮC</h3>
                <table>
                    <tbody>
                        <tr>
                            <th className={color.includes("Red") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Red"))}><div className="color1"></div></th>
                            <th className={color.includes("Orange") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Orange"))}><div className="color2"></div></th>
                            <th className={color.includes("Yellow") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Yellow"))}><div className="color3"></div></th>
                            <th className={color.includes("Green") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Green"))}><div className="color4"></div></th>
                        </tr>
                        <tr>
                            <th className={color.includes("Blue") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Blue"))}><div className="color5"></div></th>
                            <th className={color.includes("Grey") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Grey"))}><div className="color6"></div></th>
                            <th className={color.includes("Purple") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Purple"))}><div className="color7"></div></th>
                            <th className={color.includes("Lightblue") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Lightblue"))}><div className="color8"></div></th>
                        </tr>
                        <tr>
                            <th className={color.includes("Black") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Black"))}><div className="color9"></div></th>
                            <th className={color.includes("Brown") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Brown"))}><div className="color10"></div></th>
                            <th className={color.includes("White") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"White"))}><div className="color11"></div></th>
                            <th className={color.includes("Lightpurple") ? "choose-li" : "choose-li-none"} onClick={() => setColor(updateState(color,"Lightpurple"))}><div className="color12"></div></th>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </div>
    );
};

export default Attribute;