import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import swal from "sweetalert";
import withReactContent from "sweetalert2-react-content";
import "../styles/Form.css"

export const Form = () => {
  const db = getFirestore();
  const [userId, setUserId] = useState("");
  const [buy, setBuy] = useState(false);
  const { cartList, deleteCart } = useCartContext();
  const MySwal = withReactContent(Swal);
  const total = cartList.reduce((acc, product)=> acc = acc + ((product.price) * product.qty),0);


  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    lastName: "",
    adress: "",
    city: "",
  });

  function handleInputChange(e) {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  }

  function newOrder(e) {
    e.preventDefault();
    let order = {};
    if (buyer.email === buyer.emailConfirm) {
      order.buyer = buyer;
      order.date = new Date();
      order.items = cartList.map((item) => {
        const id = item.id;
        const name = item.name;
        const price = item.price;
        const qty = item.count;

        return { id, name, price, qty };
      });
      console.log(order);
      order.total = total;

      const queryCollectionOrders = collection(db, "orders");

      setTimeout(() => {
        addDoc(queryCollectionOrders, order)
          .then((resp) => setUserId(resp.id))
          .catch((err) => console.log(err))
          .finally(
            swal({
              title: "Gracias por su compra " + buyer.name + "!",
              text: "Su número de orden es " + userId,
              icon: "success",
            })
          );
      }, 2000);
    } else {
      alert("ingresa bien");
    }
  }

  return (
    <div className="cartInfo">
      <form onSubmit={(e) => newOrder(e)}>
        <input
          type="email"
          placeholder="Mail"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Confirme su mail"
          name="emailConfirm"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="lastName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Dirección"
          name="adress"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Localidad"
          name="city"
          onChange={handleInputChange}
        />
        <button type="submit">Terminar pedido</button>
      </form>
    </div>
  );
};