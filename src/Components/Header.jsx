import { Link } from "react-router-dom"

export const Header = () =>{
    return (
        <div className="header w-full">
            <div className="headerLeft bg-slate-200 pb-78 mb-10 border border-red-500">
                <Link style={{TextDecoder: 'none'}} to="/">
                    <h2 className=" flex justify-center text-5xl">Redux Shop</h2>
                </Link>
            </div>
        </div>
    );
}