# Ash Market 🛍️

Proyecto final de React: **Ash Market**  
Tienda online ficticia desarrollada con **Vite**, **React**, **React Router**, **CSS Modules**, **React Icons** y **Bootstrap**.  
Incluye panel de administración, integración con dos APIs, carrito persistente, búsqueda, paginación, formularios y diseño completamente responsivo.

---

## 🚀 Características Principales

- **Diseño 100% Responsivo**: Adaptado para móviles, tablets y escritorio.
- **Navbar**: Barra de navegación con íconos, enlaces, menú hamburguesa y cierre automático en mobile.
- **Home**: Página de inicio con presentación visual y CTA.
- **Tienda (Shop)**:
  - Productos de dos fuentes (FakeStoreAPI y MockAPI).
  - Búsqueda en tiempo real por nombre.
  - Paginación.
  - Botón para ver detalles y agregar al carrito.
  - Mensaje claro si no hay resultados.
- **Detalle de Producto**:
  - Imagen, descripción, precio y controles de cantidad.
  - Si el producto está en el carrito, muestra contador (+/-) para modificar cantidad o eliminar.
  - Botón "Agregar al carrito" si no está en el carrito.
  - Totalmente responsivo y accesible.
- **Carrito de Compras**:
  - Lista de productos agregados, con controles para aumentar/disminuir cantidad o eliminar.
  - Total actualizado en tiempo real.
  - Persistencia en **localStorage**.
  - Botón para vaciar carrito y para pagar (con feedback visual).
- **Panel de Administración**:
  - Listado de productos con búsqueda por nombre.
  - Paginación.
  - Agregar, editar y eliminar productos (con modales y toasts de confirmación).
  - Formularios validados.
  - Solo accesible para usuarios admin.
- **Sobre Nosotros**: Información institucional.
- **Contacto**: Formulario funcional con integración a [Formspree](https://formspree.io/).
- **Footer**: Pie de página con información básica.
- **Página 404 personalizada**: Para rutas no válidas.
- **Accesibilidad**: Uso de `aria-label`, roles y feedback visual en botones e íconos.
- **Toasts**: Notificaciones visuales para acciones importantes (agregar, editar, eliminar, pagar, etc).

---

## 🛠️ Tecnologías Utilizadas

- **Vite**: Empaquetador moderno para desarrollo rápido.
- **React**: Biblioteca para construir interfaces basadas en componentes.
- **React Router DOM**: Navegación multipágina.
- **Bootstrap**: Sistema de diseño rápido y responsivo.
- **React Icons**: Librería de íconos para React.
- **CSS Modules**: Estilos encapsulados por componente.
- **Formspree**: Envío de formularios sin backend.
- **React Toastify**: Notificaciones visuales.
- **APIs**: [FakeStoreAPI](https://fakestoreapi.com/) y [MockAPI](https://mockapi.io/).

---

## ▶️ Instalación y Uso Local

1. Cloná el repositorio:

```bash
git clone https://github.com/Ash19-88/react-TT
cd react-TT
```

2. Instalá las dependencias:
```bash
npm install
```

3. Iniciá el servidor de desarrollo:
```bash
npm run dev
```
La aplicación se abrirá en http://localhost:5173 (puede variar según tu configuración).

---

## 🌐 Deploy

Este proyecto está desplegado en Netlify:  
🔗 https://ashmarket-react.netlify.app

⚠️ **Nota:** En Netlify, si actualizás una ruta interna (por ejemplo, /contact), puede mostrar error 404.  
Para evitar esto, creá un archivo `_redirects` dentro de `public/` con el siguiente contenido:
```
/*    /index.html   200
```
Esto asegura que cualquier ruta se redirija correctamente a React Router.

---

¡Gracias por visitar Ash Market! 💕  
Trabajo final para el curso de React.