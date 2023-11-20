# E-Commerce 
## Distribuidora KHG

Realizamos un proyecto de ecommerce básico que se utiliza para el curso de React de Coderhouse. La aplicación permite ver una lista de productos que posee una distribuidora de bebidas, y permite realizar compras en línea. Los usuarios, productos y las órdenes de compra se almacenan en Firebase.


## Funcionabilidades

- Visualizar una lista de productos generales
- Visualizar una lista de productos filtrado por categoria
- Ver detalle del producto
- Añadir productos al carrito de compras
- Seleccionar cantidad de productos para añadir al carrito de compras
- Agregar diferentes productos al carrito de compras
- Remover un producto especifico dentro del carrito de compras
- Poder vaciar el carrito de compras
- Impedimento de carga al carrito sobre productos que no tienen stock
- Crear una orden de compra válida

# Tecnologias utilizadas

- Vite
- React
- React Router
- Firebase

## Instalación

Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:
- Clonar el repositorio en tu maquina.
- Abrir una terminal dentro del directorio del proyecto.
- Ejecuta el comando npm install para instalar las dependencias adecuadas.
- Ejecuta el comando npm run dev para iniciar la aplicación.
```sh
npm run dev
```
- Abre tu navegador y navega al localhost para ver la aplicación en acción.


## Configuración de Firebase

Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:
- Crea una cuenta en Firebase y crea un nuevo proyecto.
- Deshabilitar la opcion de google analytics.
- En la sección "Firestore" de Firebase, crea una nueva base de datos
- Copiar las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.
