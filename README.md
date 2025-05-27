# Ash Market 🛍️

Este es un proyecto integrador desarrollado con **Vite** y **React**, que representa una tienda online ficticia llamada **Ash Market**. El sitio es completamente responsivo y fue construido utilizando **React**, **React Router**, **CSS Modules**, **React Icons** y **Bootstrap** para lograr una interfaz moderna, clara y adaptable a distintos dispositivos.

## 🚀 Características

- **Diseño Responsivo**: Adaptado para funcionar correctamente en dispositivos móviles, tablets y pantallas de escritorio.
- **React + Vite**: Estructura basada en componentes reutilizables, navegación mediante React Router y rendimiento optimizado con Vite.
- **CSS Modules**: Estilos locales y organizados por componente.
- **React Icons**: Iconografía moderna y personalizable directamente desde React.
- **Bootstrap**: Utilizado para estructura base y componentes visuales.
- **Formulario de Contacto**: Funciona a través de [Formspree](https://formspree.io/) para enviar mensajes fácilmente desde el frontend.
- **Página 404 personalizada**: Sección visualmente atractiva para rutas no válidas.

## 🧱 Estructura del Proyecto

- **Navbar**: Barra de navegación con íconos, enlaces y responsiva.
- **Home**: Página de inicio con contenido destacado.
- **Tienda**: Lista de productos ficticios con imagen, precio y botón para agregar al carrito.
- **Carrito de Compras**: Página que muestra los productos agregados, con opción para eliminarlos. El estado del carrito se guarda en **localStorage**, lo que permite conservar los productos al recargar la página o cerrar el navegador.
- **Sobre Nosotros**: Información institucional de la tienda.
- **Contacto**: Formulario funcional con integración a Formspree.
- **Footer**: Pie de página con información básica.
- **Página 404**: Vista para rutas no encontradas.

## 🛠️ Tecnologías Utilizadas

- **Vite**: Empaquetador moderno para desarrollo rápido.
- **React**: Biblioteca para construir interfaces basadas en componentes.
- **React Router DOM**: Para navegación de múltiples páginas.
- **Bootstrap**: Sistema de diseño rápido y responsivo.
- **React Icons**: Librería de íconos para React.
- **CSS Modules**: Estilos encapsulados por componente.
- **Formspree**: Herramienta externa para enviar formularios sin backend.

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

🌐 Deploy
Este proyecto está desplegado en Netlify:
🔗 https://ashmarket-react.netlify.app

⚠️ Nota: En Netlify, si actualizás una ruta interna (por ejemplo, /contact), puede mostrar error 404. Para evitar esto, creá un archivo _redirects dentro de public/ con el siguiente contenido:
```bash
/*    /index.html   200
```
Esto asegura que cualquier ruta se redirija correctamente a React Router.

¡Gracias por visitar Ash Market! 💕