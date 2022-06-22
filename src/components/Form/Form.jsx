import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import swal from "sweetalert";
import "../styles/Form.css"

export const Form =()  => {
  const[dataForm, setDataForm] = useState({email: "", emailConfirm: "", name: "", lastName:"", phone: ""})
  const { cartList, deleteCart} = useCartContext()

  async function generateOrder(e) {
      e.preventDefault()
      let order = {}
  
      if(dataForm.name && dataForm.lastName&& dataForm.phone && dataForm.email && (dataForm.email === dataForm.emailConfirm)) {
     order.buyer = dataForm
      order.date = new Date();
      order.products = cartList.map((product) => {
        const id = product.id;
        const name = product.name;
        const price = product.price;
        const qty = product.qty;

        return { id, name, price, qty };
          })
          console.log(order.buyer);
     
          const db = getFirestore()
          const queryCollection = collection(db, "orders")
          
          const buy =order.products = cartList.map((product) => {
          const name = product.name;
          const price = product.price;
          const qty = product.qty;
            return { name, price, qty };
          })
          addDoc(queryCollection, order)
          .then(resp =>
              swal({
                  title:`Gracias por tu compra, tu orden ha sido generada con el número ${resp.id}`,
                  text: `Compraste : ${JSON.stringify(buy)}`,
                  icon: "success"}))
          .catch(err => console.log(err))
          .finally(() => deleteCart())
      
          const queryCollectionStock = collection(db, "products")
          const queryUpdateStock = query (
              queryCollectionStock,
              where( documentId(), "in", cartList.map(it => it.id) ))
      
          const batch = writeBatch(db)
      
          await getDocs(queryUpdateStock)
          .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(product => product.id === res.id).qty
          })))
          .finally(()=> console.log("updated"))
      
          batch.commit()
      }
      else {swal({
          title:"Por favor, verifica que los datos sean correctos",
          icon: "warning"})}
  }

  const handlerChange = (e) => {
      setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
  }


  return (
    <div>
        <div className="form">
            <input name='name' type="text" placeholder='Nombre' value={dataForm.name} onChange={handlerChange}></input>
            <input name='lastName' type="text" placeholder='Apellido' value={dataForm.lastName} onChange={handlerChange}></input>
            <input name='phone' type="text" placeholder='Teléfono' value={dataForm.phone} onChange={handlerChange}></input>
            <input name='email' type="email" placeholder='Email' value={dataForm.email} onChange={handlerChange}></input>
             <input name='emailConfirm' type="email" placeholder='Re-ingresa tu email' value={dataForm.emailConfirm} onChange={handlerChange}></input>
       
        <button className="end-button" onClick={generateOrder}>Terminar compra</button>
        </div>
    </div>

  )
}