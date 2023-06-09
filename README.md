# Ejemplo de rutas

## Instalar Bootstrap

Instalar el paquete de NPM de Bootstrap: `npm install bootstrap`

Luego, editar el archivo `angular.json`, y agregar las siguientes lineas:
```json
    ...
        "styles": [
          "node_modules/bootstrap/dist/css/bootstrap.min.css", # <-- Agregar esta linea
          "src/styles.css"
        ],
    ...
        "scripts": [
          "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" # <-- Agregar esta linea
        ]
    ...
```

Con esto no es necesario referenciar el CDN de bootstrap, ademas de funcionar más estable.

Como este ejemplo esta basado en la documentacion de Bootstrap, copiando y pegando ejemplos, necesita incluir un archivo CSS extra desde su cdn.
Se debe agregar en el bloque `<head>` del HTML del template principal (`src/app/app.component.html`):
```html 
<head>
    ...
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    ...
</head>
```