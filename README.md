


# Mi Servidor Web

## Jose Sttor

---

En este proyecto se utilizó el **framework NestJS** junto con la **ORM Prisma**, con el propósito de implementar una arquitectura modular, escalable y de fácil mantenimiento. La aplicación cuenta con **dos endpoints principales** que permiten la interacción con la base de datos.

El primero de ellos es un endpoint de tipo **POST (/create)**, que permite **registrar nuevos productos** en la base de datos. Para ello, se hace uso de las funciones provistas por Prisma, las cuales facilitan las operaciones mediante un enfoque orientado a objetos y un manejo seguro de las consultas.

El segundo endpoint es de tipo **GET**, encargado de **listar los productos existentes**, obteniendo la información directamente desde la base de datos y retornándola al cliente en formato JSON.

Gracias a la integración entre **NestJS y Prisma**, se logró una comunicación eficiente entre la capa de aplicación y la capa de datos, garantizando un desarrollo más estructurado, limpio y con tipado estático, lo que reduce errores y mejora la productividad durante el desarrollo del proyecto.

**Los pasos para la correcta ejecucion de este proyecto son:**
1. Descaragar las Libreriras NPM i
2. Luego sincronizar Prisma con la BAse de Datos (npx prisma generate)
3. Por ultimo, ejecutarlo(npm run start:dev)

**Nota: Se debe crear el fichero que contiene las variables de entorno**

**Ejemplo:** DATABASE_URL="postgresql://postgres:Salsadetomate1@localhost:5432/store"