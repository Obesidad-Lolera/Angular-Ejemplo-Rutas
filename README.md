# Ejemplo de rutas

## Instalar Bootstrap

Instalar el paquete de NPM de Bootstrap: `npm install bootstrap`

Luego, editar el archivo `angular.json`, y agregar las siguientes lineas:
```
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