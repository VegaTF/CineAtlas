# CineAtlas

## Iniciar repo en local + crear rama propia

```
git init // inicializar el repo local  
git remote add origin https://github.com/VegaTF/CineAtlas.git // conectar con el repo y establecer origen  
git pull origin main // descargar el repo  
git checkout -b [nombre] // crear nuestra rama (y entrar)  
git push origin [nombre] // subir rama  
```

## Cada vez que queramos trabajar

```
git pull origin main
git checkout [nombre]
```

## Cada vez que queramos subirlo
```
git add .
git commit -m "MENSAJE COMMIT"
git push origin [nombre]
git checkout main
git merge [nombre] main
git push origin main
```