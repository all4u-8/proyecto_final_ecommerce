
# E-Commerce React App

Este es un proyecto de e-commerce para la venta de productos tecnológicos (smartphones, laptops, audio, etc.), desarrollado con React, Vite, Bootstrap y Firebase. La aplicación permite navegar por un catálogo de productos, ver detalles, agregar productos al carrito y realizar compras.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para crear aplicaciones con React.
- **Bootstrap 4.5.2**: Framework de CSS para el diseño responsivo.
- **Firebase**: Base de datos en tiempo real para el almacenamiento de productos y gestión de carritos.

## Características

- **Navbar**: Barra de navegación con un menú adaptable.
- **Catálogo de Productos**: Visualización de productos por categorías (Smartphones, Laptops, Audio).
- **Detalle del Producto**: Información completa del producto seleccionado.
- **Carrito de Compras**: Funcionalidad para añadir, eliminar y modificar la cantidad de productos en el carrito.
- **Checkout**: Proceso de compra para revisar y confirmar los pedidos.
- **Productos Recomendados**: Sugerencia de productos relacionados en la página de detalles.

## Instalación

Sigue los siguientes pasos para clonar y ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/all4u-8/proyecto_final_ecommerce.git](https://github.com/all4u-8/proyecto_final_ecommerce.git)
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd ecommerce-react
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y agrega tu configuración de Firebase:
   ```plaintext
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```

## Ejecución

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

Abre tu navegador y visita [http://localhost:5173/](http://localhost:5173/) para ver la aplicación en funcionamiento.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas:

```
ecommerce-react/
├── public/                 # Archivos públicos (favicon, index.html, etc.)
├── src/
│   ├── assets/             # Imágenes y archivos estáticos
│   ├── components/         # Componentes React reutilizables
│   │   ├── CartWidget/     # Ícono y funcionalidad del carrito
│   │   ├── ItemDetail/     # Detalle del producto
│   │   ├── ItemList/       # Listado de productos
│   │   ├── NavBar/         # Barra de navegación
│   ├── context/            # Contexto de React para el carrito de compras
│   ├── pages/              # Páginas principales de la aplicación
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── main.jsx            # Punto de entrada de la aplicación
├── .env                    # Archivo de configuración de Firebase
├── package.json            # Dependencias y scripts del proyecto
├── README.md               # Documentación del proyecto
```

## Funcionalidades Faltantes

- **Autenticación de Usuarios**: Implementar registro e inicio de sesión con Firebase Authentication.
- **Mejoras en el Diseño**: Estilizar las páginas y componentes para una mejor experiencia de usuario.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue los pasos para crear un `pull request` y sugerir mejoras.

## Licencia

Este proyecto es de código abierto y se distribuye bajo la licencia MIT.
