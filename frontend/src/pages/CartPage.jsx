import React, { useState, useEffect } from "react";
import { deleteCookie, getCookie, getPurchasedCookie, setPurchasedCookie } from "../utils/CookieFunction";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const currentCookie = getCookie("productid");
  const productIds = decodeURIComponent(currentCookie).split(";");
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch cart items based on product IDs from the API
    if (productIds.length > 0) {
      console.log(currentCookie);
      fetch(
        `https://fish-staging.onrender.com/query/item/${productIds.join(";")}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Update cartItems state with the fetched data and set default quantity to 1
          const cartItemsWithDefaultQuantity = data.map((item) => ({
            ...item,
            quantity: 1,
          }));
          setCartItems(cartItemsWithDefaultQuantity);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    }
  }, []);

  const incrementQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem._id === item._id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      )
    );
  };

  const decrementQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem._id === item._id
          ? { ...prevItem, quantity: Math.max(prevItem.quantity - 1, 1) }
          : prevItem
      )
    );
  };

  const removeItem = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem._id !== item._id)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    // Notify the user of a successful order
    alert("Order successfully!");

    //Set Purchase History
    const orderDetails = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    setPurchasedCookie("orderDetails", JSON.stringify(orderDetails), 1); // Adjust the expiration time as needed
    // Clear the cookies to empty the cart
    deleteCookie("productid");
    // Redirect to the home page
    navigate("/");
  };
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={item.image}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h2>
                    {/* <p className="mt-1 text-xs text-gray-700">{item.description}</p> */}
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        onClick={() => decrementQuantity(item)}
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        min="1"
                      />
                      <span
                        onClick={() => incrementQuantity(item)}
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover-bg-blue-500 hover-text-blue-50"
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">
                        {(item.price * item.quantity).toFixed(2)} $
                      </p>
                      <svg
                        onClick={() => removeItem(item)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover-text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${calculateTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  ${(calculateTotal() + 4.99).toFixed(2)} USD
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover-bg-blue-600"
            >
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
