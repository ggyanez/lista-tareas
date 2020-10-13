# Webpack Template

Template para crear aplicaciones usando Webpack.

### Pasos

1. Reconstruir los módulos de Node (node_modules):
```
npm install
```

2. Construir el build (dist):
```
npm run build
```

3. Levantar el server (http://localhost:8085/):
```
npm start
```

### Notas

- Para cambiar el puerto modificar el package.json.
- El módulo webpack-dev-server tiene un issue y como workaround se está usando webpack serve.