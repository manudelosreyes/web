# Manu de los Reyes — V5

## PORTADA

La portada se mantiene igual que en V4. No se ha modificado su estructura ni sus nombres de imágenes.

## PORTFOLIO — nuevo sistema

Ahora las fotografías están organizadas por carpetas:

```text
images/
└── portfolio/
    ├── bodas/
    │   ├── 01.jpg
    │   ├── 02.jpg
    │   └── ...
    ├── familias/
    │   ├── 01.jpg
    │   └── ...
    ├── sesiones/
    │   ├── 01.jpg
    │   └── ...
    ├── premama/
    │   ├── 01.jpg
    │   └── ...
    └── comuniones/
        ├── 01.jpg
        └── ...
```

### Cómo añadir fotografías

1. Coloca el JPG dentro de la carpeta correspondiente.
2. Abre `js/script.js`.
3. En la categoría correspondiente, añade solamente el nombre del archivo.

Ejemplo:

```javascript
bodas: [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg"
],
```

No tienes que tocar `portfolio.html`.

### Importante sobre los nombres

Puedes utilizar `01.jpg`, `02.jpg`, etc. **dentro de cada carpeta**.

Por ejemplo, esto es correcto:

```text
bodas/01.jpg
familias/01.jpg
sesiones/01.jpg
```

No chocan entre sí porque están en carpetas diferentes.

### Lightbox

Al hacer clic sobre una fotografía:

- se abre a pantalla completa;
- las flechas recorren las fotografías del filtro seleccionado;
- `←` y `→` funcionan con el teclado;
- `ESC` cierra la fotografía;
- hacer clic fuera de la imagen también la cierra;
- en móvil los controles se adaptan a la pantalla.

### Orden de las fotografías

El orden es el orden en que aparecen en las listas de `script.js`.

Si quieres que una foto sea la primera de bodas, ponla como `"01.jpg"` y colócala la primera en la lista.

### Fotografías

No se incluyen fotografías de prueba en esta V5. Las carpetas contienen únicamente `.gitkeep` para conservar su estructura.

La imagen `portfolio-hero.jpg` sigue siendo necesaria en:

`images/portfolio/portfolio-hero.jpg`

La portada sigue necesitando sus imágenes en `images/home/`.
