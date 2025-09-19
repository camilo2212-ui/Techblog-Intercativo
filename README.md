Etapas principales

Ingreso de la URL

El usuario escribe la dirección en la barra del navegador o hace clic en un enlace.

Resolución DNS

El navegador consulta al servidor DNS para traducir el nombre de dominio (misitio.com) a una dirección IP (192.168.x.x).

Establecimiento de la conexión (TCP/HTTPS)

El navegador abre una conexión con el servidor usando TCP y negocia seguridad mediante TLS/SSL si es HTTPS.

Envío de la petición HTTP

El navegador envía una solicitud HTTP (ejemplo: GET /index.html) al servidor web.

Procesamiento en el servidor

El servidor recibe la petición.

Puede:

Buscar un archivo estático (index.html).

Ejecutar código en el backend (PHP, Python, Node.js, etc.).

Consultar una base de datos.

Finalmente genera una respuesta HTTP.

Respuesta del servidor

El servidor envía al navegador una respuesta con:

Código de estado (ejemplo: 200 OK).

Cabeceras (ejemplo: tipo de contenido, longitud).

Cuerpo de la respuesta (HTML, JSON, imagen, etc.).

Renderizado en el navegador

El navegador interpreta el HTML.

Descarga recursos adicionales (CSS, JS, imágenes).

Aplica estilos y ejecuta scripts.

Muestra el resultado al usuario.

Interacción continua

El usuario puede interactuar (clics, formularios, AJAX, fetch).

Esto genera nuevas peticiones al servidor → se repite el ciclo.
