import { useSelector } from "react-redux"
import { useGetAllProductsQuery } from "../utils/productService";


const Home = () => {

    // const products = useSelector(state => state.product.cart)

    const { data,isLoading,error} = useGetAllProductsQuery()

    console.log(data,isLoading,error);

    return (
        <div className="p-5 flex flex-wrap gap-y-5 gap-x-2">
            {data?.map(product => (
                <div className="card w-[400px] h-[400px] bg-base-100 shadow-md flex flex-col justify-between">
                <figure><img className="w-[50%] h-[50%]" src={product?.image} alt={product?.title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {product?.title}
                    <div className="badge badge-secondary">{product?.rating?.rate}</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <p>{product?.price}</p>
                        <div className="badge badge-outline">{product?.category}</div> 
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <button className="btn btn-active btn-accent">Buy Now</button>
                        <button className="btn btn-active btn-info">Add To Cart</button>
                    </div>
                </div>
                </div>
            ))}
            
        </div>
    )

}
export default Home