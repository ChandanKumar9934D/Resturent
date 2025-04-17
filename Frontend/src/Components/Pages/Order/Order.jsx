import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const Order = () => {
  let response;
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: 1,
  });

  // const [name,setName]=useState('')
  const { userId, productId } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      if (
        !userId ||
        userId === "null" ||
        userId === "undefined" ||
        !productId ||
        productId === "null" ||
        productId === "undefined"
      ) {
        toast.error("First Create Account");
        nav("/menu");
        return;
      }
      try {
        response = await axios.get(
          `http://localhost:3000/api/findmenu/${productId}`
        );

        setFormData((prev) => ({
          ...prev,
          price: response.data.response.price,
          name: response.data.response.title,
        }));
      } catch (error) {
        toast.error("server error!!!");
      }
    };

    fetchData();
  }, [userId, productId, nav]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Price=Number(formData.price)*Number(formData.quantity)
      const data = {
        name: formData.name,
        price: Price,
        quantity: formData.quantity,
        userId: userId,
        productId: productId,
      };
      let result = await axios.post("http://localhost:3000/api/order", data);
      toast.success(result.data.message)
      nav('/menu')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-danger">Place Your Order</h2>
      <div className="row justify-content-center align-content-center my-4">
        <div className="col-10 col-lg-4 shadow ">
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Dish Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                readOnly
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="price">
                Price
              </label>
              <input
                readOnly
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
