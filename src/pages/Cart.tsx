import { useEffect } from "react"


const Cart = () =>{

    useEffect(()=>{
        fetch('https://fakestoreapi.com/carts/user/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])


    return (
        <div>cart page</div>
    )
}

export default Cart