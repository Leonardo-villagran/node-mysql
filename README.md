# Node.js Express MySQL API

Este es un ejemplo de una API simple de Node.js construida con Express y MySQL. La API responde a solicitudes GET para realizar consultas básicas a una base de datos MySQL. Utiliza `dotenv` para gestionar las variables de entorno.

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar tus variables de entorno en un archivo `.env`. Debes incluir las siguientes variables:

- `MYSQL_HOST`: La dirección del servidor MySQL.
- `MYSQL_ROOT_PASSWORD`: Corresponde a la contraseña de root de MySQL.
- `MYSQL_DATABASE`: El nombre de la base de datos MySQL.
- `MYSQL_USER`: El nombre de usuario de MySQL.
- `MYSQL_PASSWORD`: La contraseña de usuario de MySQL.
- `MYSQL_DOCKER_PORT`: El puerto en el que MySQL está escuchando dentro de un contenedor Docker.
- `MYSQL_LOCAL_PORT`: El puerto en el que MySQL está escuchando en tu máquina local.
- `NODE_DOCKER_PORT`: El puerto en el que deseas que se ejecute la aplicación Express dentro de un contenedor Docker.
- `NODE_LOCAL_PORT`: El puerto en el que deseas que se ejecute la aplicación Express en tu máquina local.

Aquí hay un ejemplo de cómo podría verse un archivo `.env`:

```env
MYSQL_HOST= my_host
MYSQL_ROOT_PASSWORD= mi_password
MYSQL_DATABASE= mi_basededatos

MYSQL_USER=mi_usuario
MYSQL_PASSWORD=mi_clave

MYSQL_DOCKER_PORT= 3306
MYSQL_LOCAL_PORT= 3307

NODE_LOCAL_PORT= 3000
NODE_DOCKER_PORT= 3000
```

## Ejecución

Sigue estos pasos para ejecutar la aplicación:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Leonardo-villagran/node-mysql
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd node-mysql
   ```

3. Instala las dependencias utilizando npm o yarn:

   ```bash
   npm install
   ```

4. Inicia la aplicación:

   ```bash
   npm run start
   ```
   O en modo desarrollo
      ```bash
   npm run dev
   ```

La aplicación se ejecutará en el puerto especificado en tu archivo `.env`, o en el puerto 3000 por defecto si no se proporciona ninguna variable `NODE_DOCKER_PORT`.

## Uso

Una vez que la aplicación esté en ejecución, puedes acceder a los siguientes puntos de acceso:

- `/`: Página de inicio que muestra un mensaje de bienvenida.
- `/ping`: Realiza una consulta simple a la base de datos MySQL y muestra la hora actual.

Puedes personalizar y expandir estos puntos de acceso según tus necesidades.

## Docker Compose

Este proyecto incluye un archivo `docker-compose.yml` que simplifica la configuración y ejecución de la aplicación junto con una base de datos MySQL en contenedores Docker. Docker Compose es una herramienta que permite definir y ejecutar aplicaciones multi-contenedor.

### Requisitos previos

Asegúrate de tener Docker y Docker Compose instalados en tu máquina antes de continuar.

### Configuración

Antes de ejecutar Docker Compose, asegúrate de crear un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias para la aplicación y la base de datos. Asegúrate de que el archivo `.env` se haya generado como se explica anteriormente. 

### Ejecución

Para iniciar la aplicación junto con la base de datos MySQL utilizando Docker Compose, sigue estos pasos:

1. Abre una terminal en la raíz de tu proyecto.

2. Ejecuta el siguiente comando para iniciar los contenedores:

   ```bash
   docker-compose up --build -d
   ```

   Esto creará y ejecutará dos contenedores: uno para la base de datos MySQL y otro para la aplicación Node.js.

3. La aplicación Node.js estará disponible en `http://localhost:$NODE_LOCAL_PORT`, donde `$NODE_LOCAL_PORT` es el puerto que has configurado en tu archivo `.env`.

4. Puedes acceder a la base de datos MySQL a través de la dirección `mysql://localhost:$MYSQL_LOCAL_PORT` utilizando las credenciales configuradas en tu archivo `.env`.

### Detener y eliminar los contenedores

Para detener y eliminar los contenedores creados por Docker Compose, ejecuta el siguiente comando:

```bash
docker-compose down
```

Esto detendrá y eliminará los contenedores, pero conservará los datos de la base de datos en el volumen `./mysql-db-data` para futuros reinicios.

---

Claro, aquí está la sección actualizada en el archivo `README.md` que explica cómo acceder a phpMyAdmin desde el puerto `8081` y cómo autenticarse utilizando el usuario configurado en el archivo `.env` o utilizando el usuario "root":

## Uso de phpMyAdmin

Este proyecto incluye phpMyAdmin, una interfaz de administración de bases de datos, que facilita la gestión de tu base de datos MySQL. A continuación, se explican los pasos para acceder a phpMyAdmin:

2. Abre un navegador web y navega a la siguiente dirección:

   ```
   http://localhost:8081
   ```

   **Nota:** phpMyAdmin está configurado para funcionar en el puerto `8081`. Asegúrate de utilizar este puerto al acceder a phpMyAdmin.

3. En la página de inicio de phpMyAdmin, verás un formulario de inicio de sesión. Puedes utilizar una de las siguientes opciones para autenticarte:

   - **Usuario configurado en el archivo `.env`**:
     - **Usuario**: Utiliza el nombre de usuario configurado en tu archivo `.env` en la variable `MYSQL_USER`.
     - **Contraseña**: Utiliza la contraseña configurada en tu archivo `.env` en la variable `MYSQL_PASSWORD`.

   - **Usuario "root"**:
     - **Usuario**: Utiliza "root" como nombre de usuario.
     - **Contraseña**: Puedes utilizar la contraseña configurada en tu archivo `.env` en la variable `MYSQL_ROOT_PASSWORD`.

4. Haz clic en "Iniciar sesión".

5. Desde aquí, puedes administrar y realizar tareas en tu base de datos MySQL, como crear tablas, ejecutar consultas SQL, importar/exportar datos y más.


