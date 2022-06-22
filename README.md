Imagine3D 💻
Proyecto React JS CoderHouse /Sebastian Cardozo


Imagine3D es un ecommerce de venta de Impresoras 3D e insumos. Puedes seleccionar en páginas que quieres comprar.

https://user-images.githubusercontent.com/99739645/175103912-0fb772ed-a27b-4df4-9267-2d1652320c67.mp4







📑 PÁGINAS 

✔️INICIO:
En la página de inicio del sitio se alojan los productos del e.commerce, además de los accesos al resto de las secciones.  Esta sección cuenta además con un filtro para seleccionar qué tipo de productos queremos visualizar.

✔️IMPRESORAS:
Sección dedicada a modelos de impresoras 3D.

✔️INSUMOS:
Sección dedicada a insumos para impresión 3D.




PROCESO PARA COMPRAR

✅ Detalle del producto:
Al clickear en alguno de los PRODUCTOS se ingresa al detalle del mismo. 
Contiene:
Imagen del producto
Detalle del producto.
Precio del producto.
Stock disponible. Luego de agregar al carrito el producto aparecen dos nuevos botones en reemplazo del contador: "finalizar compra" redirecciona al carrito; "seguir comprando" te dirije al INICIO.

✅ Carrito:
Luego de elegir los productos, la compra continúa en el carrito. En esta sección se muestran los ítems seleccionados con sus detalles: foto, nombre, cantidad, precio unitario y precio total, clickeando en la imagen del producto se puede acceder nuevamente al detalle del producto. Además, en el cuadro que muestra el precio total y se puede eliminar del carrito la selección. También se puede optar por vaciar el carrito con el botón que está bajo de los productos (en rojo).

✅ Formulario finalizar compra:
 En el se deben completar los datos personales . El formulario cuenta con una validación del email: el botón de pagar sólo se visualizará (debajo del detalle del carrito) si los mails coinciden y contienen "@".<img width="734" alt="orden de compra" src="https://user-images.githubusercontent.com/99739645/175105343-15759b1a-d63b-4803-92c3-f35e51335de8.png">

Una vez completados los datos, se finaliza con la compra haciendo click en el botón. En este paso suceden varias cosas: en pantalla se ofrece el número de orden de compra y detalles.
<img width="773" alt="Ejecucion de orden" src="https://user-images.githubusercontent.com/99739645/175105490-3c850df2-385f-43db-bd73-b05317ef65f9.png">


En la base de datos se guarda la orden con los datos correspondientes.
<img width="1089" alt="Orden en Firebase" src="https://user-images.githubusercontent.com/99739645/175105563-34a909e5-eec4-4e06-b32d-379eb8ab3560.png">


Por último se corrige el stock de los productos comprados en FIREBASE.
<img width="488" alt="Se actualiza stock" src="https://user-images.githubusercontent.com/99739645/175105586-127843de-2018-4cdd-bb0d-aa98600ff908.png">


📘Librerías:
React Router Dom.
FireBase.
Deploy

El deploy del sitio fue realizado en Netlify, se encuentra en este link => [imagine3d.netlify.app](https://imagine3d.netlify.app/)
