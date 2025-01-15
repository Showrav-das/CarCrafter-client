import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../../../components/CheckoutForm";
// import useAuth from '../../../../Hooks/useAuth';

const Payment = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = `https://car-server-ssgi.onrender.com/details/${id}`;
    // console.log("url0", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  console.log("products", products);
  return (
    <div>
      <h2>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  {/* <h2 className="text-xl font-semibold text-gray-800">
                    {products.serviceNAme}
                  </h2> */}
                  {/* <p className="text-gray-600 mt-1">{products.description}</p> */}
                </div>
                {/* <div className="text-2xl font-bold text-gray-900">
                  ${products.price}
                </div> */}
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* <CheckoutForm amount={products.amount} title={products.title} /> */}
            </div>
          </div>
        </div>
        <CheckoutForm amount={products.price} title={products.serviceNAme} />
      </h2>
    </div>
  );
};

export default Payment;
