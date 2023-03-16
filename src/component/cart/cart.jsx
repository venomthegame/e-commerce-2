import { useCallback, useContext ,useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay"



const Cart =()=>{
    const {cartData}=useContext(CartContext);
    const total=useRef();
    const razorpay=useRazorpay();
    const razorpayDisplay=useCallback( async (total)=>{
            const options={
                key: "rzp_test_HQBCUv7wEbVZxu",
                amount: total*100,
                currency:"INR",
                name:"10x-game-shop",
                description:"game transaction",
                handler: (res)=>{
                    console.log(res);
                },
                prefill :{
                    name:"abhinav kashyap",
                    email:"abhinavkashyap201@gmail.com",
                    contact:"4482613"
                },
                notes:{
                    address:"shivnagar",

                },
                theme:{
                    color:"#3399cc",
                }
            }
            const rzp1 = new razorpay(options);
            rzp1.open();
    },[razorpay])
    //total.current.price=0;
    return(
        <>
           <section>
                <section>
                {cartData.map((cartitem)=>{
                return(
                    <article>
                    <img src="" alt=""/>
                    <article>{cartitem.title}</article>
                    <article>{cartitem.price}</article>
                    <button>Remove from cart</button>
                    </article>
                )

            })}
                </section>
                <section>
                    <article>billing info</article> 
                    {cartData.map((cart)=>{
                        //total.current.price=total.current.price + cart.price;
                        return <article>
                        <span>{cart.title}</span>
                        <span>{cart.price}</span>
                        </article>
                    })}
                    <article>Total: 3000</article>
                    <button onClick={()=>{razorpayDisplay(6000)}}>checkout</button>
                </section>
           </section>
        </>
    )
}
export default Cart;