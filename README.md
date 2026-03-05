# CineAtlas

Website sobre cine y películas.

## Descripción del Proyecto

CineAtlas es el primer proyecto colaborativo de la UNIR en el grado superior de DAW.

## Características Implementadas

### Estructura HTML
- ✅ Documento HTML5 con metaetiquetas SEO optimizadas
- ✅ Compatibilidad con navegadores antiguos (IE conditional comments)
- ✅ Navegación principal con 8 categorías de géneros:
  - Terror
  - Drama
  - Animación
  - Históricas
  - Ciencia Ficción
  - Fantasía
  - Románticas
  - Acción
- ✅ Sección hero de bienvenida
- ✅ Footer con copyright
- ✅ Scripts cargados de forma asíncrona

### Estilos CSS
- ✅ Sistema de variables CSS personalizadas (`:root`)
  - Paleta de colores definida (`--primary-color`, `--secondary-color`)
  - Tipografía consistente
  - Pesos de fuente configurables
- ✅ Tipografía Google Fonts: Montserrat
- ✅ Normalize.css para consistencia entre navegadores
- ✅ Estilos responsive y flexbox para el layout
- ✅ Componentes estilizados:
  - Botones con efectos hover
  - Navegación horizontal
  - Iconos SVG integrados
  - Logo responsivo

### Assets y Recursos
- ✅ Logo en versiones light y dark
- ✅ Sistema completo de favicons:
  - favicon.ico
  - favicon-16x16.png y favicon-32x32.png
  - apple-touch-icon.png (180x180)
  - android-chrome icons (192x192 y 512x512)
- ✅ Web manifest configurado
- ✅ Iconos SVG para secciones (ej: finn.svg en home)

### Estructura de Carpetas
```
CineAtlas/
├── index.html                 # Página principal
├── README.md                  # Documentación
├── site.webmanifest          # Configuración PWA
├── assets/
│   ├── icons/                # Favicons y iconos
│   │   └── pages/home/       # Iconos específicos por página
│   └── img/                  # Imágenes (logos, etc.)
├── pages/                    # Páginas de géneros (pendiente)
└── src/
    ├── css/
    │   ├── main.css         # Estilos principales
    │   └── normalize.css    # Reset CSS
    └── js/
        └── main.js          # Scripts personalizados
```

## Git - Flujo de Trabajo

### Iniciar repo en local + crear rama propia

```bash
git init                                                     # Inicializar el repo local  
git remote add origin https://github.com/VegaTF/CineAtlas.git  # Conectar con el repo
git pull origin main                                         # Descargar el repo  
git checkout -b [nombre]                                     # Crear nuestra rama (y entrar)  
git push origin [nombre]                                     # Subir rama  
```

### Cada vez que queramos trabajar

```bash
git checkout main
git pull origin main              # Traer últimos cambios
git checkout [nombre]
git merge main                    # Integrar cambios de main a tu rama
```

### Cada vez que queramos subirlo

```bash
# 3. Trabajar normalmente
# ... hacer cambios ...
git add .
git commit -m "Descripción clara"
git push origin [nombre]

# 4. Cuando termines tu parte (en GitHub)
# - Crear Pull Request desde tu rama a main
# - Pedir a alguien que revise
# - Aprobar y hacer merge

# 5. Avisar al equipo para que actualicen sus ramas
```

## Próximos Pasos

- [ ] Crear rama por cada compañero
- [ ] Añadir página en esa rama con sus estilos y scripts
- [ ] Mergear cada rama a main una vez terminada
- [ ] Revisar el código de cada página para unificar estilos y scripts
- [ ] Añadir contenido real (películas, descripciones, etc.)
- [ ] Push de la rama main al repositorio remoto.


## Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox)
- JavaScript (ES6+)
- Google Fonts (Montserrat)
- Normalize.css