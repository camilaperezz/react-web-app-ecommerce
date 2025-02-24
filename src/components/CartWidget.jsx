import { useCart } from "../context/cartContext"
import { useNavigate } from "react-router"

export const CartWidget = () => {

    const { getQty } = useCart()
    const navigate = useNavigate()

    const total = getQty()

    const handleClick = () => {
        navigate('/cart')
    }

    return (
        <div onClick={handleClick} className="cart-widget">
            <svg className="cart-widget-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1_7" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="33"> 
                    <rect y="0.5" width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_7)"> 
                    <path 
                        d="M9.53833 29.2437C8.89056 29.2437 8.33978 29.0167 7.886 28.5627C7.43222 28.1089 7.20533 27.5581 7.20533 26.9103C7.20533 26.2623 7.43222 25.7114 7.886 25.2577C8.33978 24.8039 8.89056 24.577 9.53833 24.577C10.1863 24.577 10.7372 24.8039 11.191 25.2577C11.6448 25.7114 11.8717 26.2623 11.8717 26.9103C11.8717 27.5581 11.6448 28.1089 11.191 28.5627C10.7372 29.0167 10.1863 29.2437 9.53833 29.2437ZM22.4617 29.2437C21.8137 29.2437 21.2628 29.0167 20.809 28.5627C20.3552 28.1089 20.1283 27.5581 20.1283 26.9103C20.1283 26.2623 20.3552 25.7114 20.809 25.2577C21.2628 24.8039 21.8137 24.577 22.4617 24.577C23.1094 24.577 23.6602 24.8039 24.114 25.2577C24.5678 25.7114 24.7947 26.2623 24.7947 26.9103C24.7947 27.5581 24.5678 28.1089 24.114 28.5627C23.6602 29.0167 23.1094 29.2437 22.4617 29.2437ZM8.02033 8.16667L11.4 15.2437H20.4897C20.5666 15.2437 20.635 15.2244 20.695 15.186C20.7548 15.1476 20.806 15.0941 20.8487 15.0257L24.4257 8.52567C24.477 8.43167 24.4812 8.34833 24.4383 8.27567C24.3957 8.203 24.323 8.16667 24.2203 8.16667H8.02033ZM7.06167 6.16667H25.5743C26.1197 6.16667 26.532 6.39878 26.8113 6.863C27.0909 7.327 27.1042 7.80089 26.8513 8.28467L22.5793 16.023C22.3607 16.4077 22.0714 16.7072 21.7117 16.9217C21.3517 17.1363 20.9572 17.2437 20.5283 17.2437H10.8L9.25633 20.064C9.18789 20.1667 9.18578 20.2778 9.25 20.3973C9.314 20.5171 9.41011 20.577 9.53833 20.577H24.7947V22.577H9.53833C8.64944 22.577 7.98156 22.1937 7.53467 21.427C7.08756 20.6603 7.07178 19.8949 7.48733 19.1307L9.38967 15.7103L4.53867 5.5H2V3.5H5.795L7.06167 6.16667Z" 
                        fill="white" 
                    />
                </g>
            </svg>

            <span className="cart-widget-qty">{total}</span>
        </div>
    )
}
