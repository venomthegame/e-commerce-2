import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const Item=({item})=>{
    const {addCartData}=useContext(CartContext)
    return (
        <>
        <section className="card">
            <img className="card-imgage" src={item?.Image} alt="game"/>
            <article className="card-title">{item.title}</article>
            <article className="card-description">{item.description}</article>
            <section className="card-footer">
                <article className="price">{item.price}</article>
                <button className="cart-button"onClick={()=>{addCartData(item)}}>Add to cart</button>
            </section>

        </section>
        </>
    )
}
export default Item;
