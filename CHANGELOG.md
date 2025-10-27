# 📋 Registro de Cambios

## [2.0.0] - 2025-10-27

### 🎉 Refactorización Completa - Mejores Prácticas

#### ✅ Cambios Estructurales
- **Separación de archivos**: Se dividió el código en archivos separados siguiendo las mejores prácticas
  - `index.html`: Solo HTML semántico
  - `css/styles.css`: Todos los estilos
  - `js/app.js`: Toda la lógica JavaScript
  
- **Nueva estructura de carpetas**:
  ```
  Binario/
  ├── index.html
  ├── css/
  │   └── styles.css
  ├── js/
  │   └── app.js
  ├── assets/
  └── docs/
  ```

#### 🔧 Mejoras en el Código

**HTML**:
- ✅ Eliminados todos los estilos inline
- ✅ Eliminado todo el JavaScript inline
- ✅ Añadidos meta tags para SEO
- ✅ Añadidos meta tags Open Graph para redes sociales
- ✅ Mejorada la semántica HTML
- ✅ Añadido soporte para favicon

**CSS**:
- ✅ Archivo externo `css/styles.css`
- ✅ Código bien organizado por secciones
- ✅ Comentarios claros en cada sección
- ✅ Uso de la clase `.hidden` en lugar de manipular `display` directamente
- ✅ Añadido prefijo `-webkit-` para `backdrop-filter` (compatibilidad Safari)

**JavaScript**:
- ✅ Archivo externo `js/app.js`
- ✅ Código modular y bien comentado
- ✅ Uso de clases CSS en lugar de estilos inline
- ✅ Funciones puras y reutilizables
- ✅ Mejor manejo de eventos

#### 📚 Documentación
- ✅ Creado `PROJECT_STRUCTURE.md`: Explica la estructura del proyecto
- ✅ Actualizado `README.md`: Documentación completa
- ✅ Creado `DEPLOY.md`: Guía rápida de despliegue
- ✅ Creado `CHANGELOG.md`: Este archivo
- ✅ Creado `.gitignore`: Para control de versiones limpio

#### 🎨 Ventajas de la Nueva Estructura

1. **Mantenibilidad**: Fácil encontrar y modificar código
2. **Escalabilidad**: Preparado para crecer sin problemas
3. **Colaboración**: Múltiples desarrolladores pueden trabajar sin conflictos
4. **Rendimiento**: Navegadores pueden cachear CSS y JS por separado
5. **SEO**: Mejor indexación por buscadores
6. **Profesionalismo**: Sigue estándares de la industria

#### 🔄 Migración desde v1.0.0

Si tenías la versión anterior (todo en un solo archivo):
- ✅ Toda la funcionalidad se mantiene igual
- ✅ No hay cambios en la UI
- ✅ No hay cambios en las conversiones
- ✅ Solo cambió la organización del código

#### 📦 Archivos del Proyecto

```
Total de archivos: 8
├── index.html (110 líneas) - HTML limpio
├── css/styles.css (450 líneas) - Todos los estilos
├── js/app.js (260 líneas) - Toda la lógica
├── README.md - Documentación principal
├── DEPLOY.md - Guía de despliegue
├── PROJECT_STRUCTURE.md - Estructura del proyecto
├── CHANGELOG.md - Este archivo
└── .gitignore - Control de versiones
```

---

## [1.0.0] - 2025-10-27

### 🎉 Lanzamiento Inicial

#### Características Principales
- ✅ Conversión de texto a binario (UTF-8)
- ✅ Conversión de binario a texto (UTF-8)
- ✅ Soporte para emojis y caracteres especiales
- ✅ Validación de entrada binaria
- ✅ Tema claro/oscuro
- ✅ Diseño responsive
- ✅ Copiar al portapapeles
- ✅ Animaciones suaves
- ✅ Notificaciones visuales
- ✅ Atajos de teclado (Ctrl + Enter)

#### Tecnologías
- HTML5
- CSS3 (variables, animaciones, flexbox)
- JavaScript ES6+ (vanilla)
- TextEncoder/TextDecoder API

#### Navegadores Soportados
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

## Próximas Versiones (Roadmap)

### [2.1.0] - Planificado
- [ ] PWA (Progressive Web App)
- [ ] Instalable en dispositivos móviles
- [ ] Modo offline completo
- [ ] Historial de conversiones
- [ ] Exportar resultados a archivo

### [2.2.0] - Planificado
- [ ] Soporte para otros formatos (hexadecimal, octal)
- [ ] Conversión en tiempo real (sin botones)
- [ ] Selección de encoding (UTF-8, UTF-16, ASCII)
- [ ] API REST para conversiones

### [3.0.0] - Planificado
- [ ] Backend opcional (Node.js)
- [ ] Cuenta de usuario
- [ ] Guardar conversiones en la nube
- [ ] Compartir conversiones por link

---

## Formato de Versionado

Este proyecto usa [Semantic Versioning](https://semver.org/):
- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nuevas funcionalidades compatibles
- **PATCH**: Correcciones de bugs compatibles

Formato: `MAJOR.MINOR.PATCH` (ejemplo: 2.0.0)
