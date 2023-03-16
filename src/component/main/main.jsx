import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import Item from "../item/item";
const Main=()=>{
    const [oldSchool,setOldSchool]=useState([]);
    const [bestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1337/api/old-schools").then((oldschool)=>{
                setOldSchool(oldschool.data.data);
        }).catch(()=>{

        }).finally(()=>{

        })
        axios.get("http://localhost:1337/api/best-sellers").then((bestseller)=>{
            setBestSeller(bestseller.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })
    },[])
    return(
    <>
    <Header/>
    <section>
        <article>Best Seller</article>
        {bestSeller.map((item,key)=>{
            return <Item item={item.attributes}/>
        })}
        <article>Best Seller</article>
        {oldSchool.map((item,key)=>{
            return <Item item={item.attributes}/>
        })}
    </section>
    </>
    )
}
export default Main;