# Node.js Express MySQL API

Este es un ejemplo de una API simple de Node.js construida con Express y MySQL. La API responde a solicitudes GET para realizar consultas básicas a una base de datos MySQL. Utiliza `dotenv` para gestionar las variables de entorno.

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar tus variables de entorno en un archivo `.env`. Debes incluir las siguientes variables:

- `MYSQL_HOST`: La dirección del servidor MySQL.
- `MYSQL_USER`: El nombre de usuario de MySQL.
- `MYSQL_ROOT_PASSWORD`: La contraseña de usuario de MySQL.
- `MYSQL_DOCKER_PORT`: El puerto en el que MySQL está escuchando.
- `NODE_DOCKER_PORT` (opcional): El puerto en el que deseas que se ejecute la aplicación Express.

Aquí hay un ejemplo de cómo podría verse un archivo `.env`:

```env
MYSQL_HOST= mysqldb
MYSQL_ROOT_PASSWORD= mipassword
MYSQL_DATABASE= nodemysql
MYSQL_USER= root

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
