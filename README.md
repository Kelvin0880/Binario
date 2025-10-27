# 🔢 Convertidor Texto-Binario

Una aplicación web moderna y responsive para convertir texto a binario y viceversa, con soporte completo para UTF-8, emojis y caracteres especiales.

**🌐 Demo en vivo:** [https://kelvin0880.github.io/Binario/](https://kelvin0880.github.io/Binario/)  
**📦 Repositorio:** [https://github.com/Kelvin0880/Binario](https://github.com/Kelvin0880/Binario)  
**👤 Desarrollado por:** Kelvin Piña Gomez  
**📅 Fecha:** Octubre 2025  
**📄 Licencia:** MIT

## ✨ Características

- ✅ Conversión bidireccional: texto ↔ binario
- ✅ Soporte UTF-8 completo (emojis, acentos, caracteres especiales)
- ✅ Validación de binario con mensajes de error amigables
- ✅ Interfaz moderna con tema claro/oscuro
- ✅ Totalmente responsive (móviles, tablets, desktops)
- ✅ Copiar al portapapeles con un clic
- ✅ Animaciones suaves y transiciones
- ✅ Sin dependencias externas (vanilla JavaScript)
- ✅ 100% client-side (no requiere servidor)

## 🚀 Despliegue Gratis en GitHub Pages

Sigue estos pasos para tener tu aplicación online en minutos:

### Paso 1: Crear una cuenta de GitHub (si no tienes)

1. Ve a [github.com](https://github.com)
2. Haz clic en "Sign up" (Registrarse)
3. Completa el registro con tu email, contraseña y nombre de usuario
4. Verifica tu email

### Paso 2: Crear un nuevo repositorio

1. Una vez en tu cuenta, haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
2. Configura tu repositorio:
   - **Repository name**: `convertidor-texto-binario` (o el nombre que prefieras)
   - **Description**: "Aplicación web para convertir texto a binario"
   - **Public**: Marca esta opción (necesaria para GitHub Pages gratuito)
   - ✅ **Add a README file**: Marca esta casilla
3. Haz clic en **"Create repository"**

### Paso 3: Subir tu archivo

Opción A: **Usando la interfaz web (más fácil)**

1. En tu repositorio recién creado, haz clic en **"Add file"** → **"Upload files"**
2. Arrastra el archivo `index.html` o haz clic para seleccionarlo
3. Escribe un mensaje de commit (ej: "Añadir convertidor")
4. Haz clic en **"Commit changes"**

Opción B: **Usando Git en tu computadora**

```bash
# Abre PowerShell en la carpeta de tu proyecto
cd "c:\Users\kelvi\Downloads\Binario"

# Inicializa Git (si no lo has hecho)
git init

# Añade todos los archivos
git add .

# Haz un commit
git commit -m "Añadir convertidor texto-binario"

# Conecta con tu repositorio (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Sube los archivos
git branch -M main
git push -u origin main
```

### Paso 4: Activar GitHub Pages

1. En tu repositorio, ve a **"Settings"** (Configuración)
2. En el menú lateral izquierdo, busca **"Pages"** (en la sección "Code and automation")
3. En **"Source"**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
4. Haz clic en **"Save"**
5. ¡Espera 1-2 minutos! GitHub generará tu sitio

### Paso 5: ¡Acceder a tu aplicación!

Tu aplicación estará disponible en:
```
https://TU_USUARIO.github.io/convertidor-texto-binario/
```

Ejemplo: Si tu usuario es `kelvin123` y tu repo es `convertidor-texto-binario`:
```
https://kelvin123.github.io/convertidor-texto-binario/
```

## 🎨 Personalización

### Cambiar colores

Edita las variables CSS en la sección `:root` del archivo `index.html`:

```css
:root {
    --primary-color: #6366f1;    /* Color principal */
    --secondary-color: #ec4899;   /* Color secundario */
    --success: #10b981;          /* Color de éxito */
    /* ... más colores */
}
```

### Cambiar textos

Busca y reemplaza los textos directamente en el HTML dentro de `index.html`.

## 🌐 Usar un Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio (ej: `www.miconvertidor.com`):

### Paso 1: Comprar un dominio

Opciones económicas:
- **Namecheap** (desde $8.88/año)
- **Google Domains** (desde $12/año)
- **Hostinger** (desde $0.99/año primer año)
- **GoDaddy** (desde $11.99/año)

### Paso 2: Configurar DNS

1. En tu proveedor de dominio, ve a la configuración DNS
2. Añade estos registros:

**Para usar `www.tudominio.com`:**
```
Tipo: CNAME
Host: www
Valor: TU_USUARIO.github.io
TTL: 3600
```

**Para usar el dominio raíz `tudominio.com`:**
```
Tipo: A
Host: @
Valor: 185.199.108.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Host: @
Valor: 185.199.111.153
TTL: 3600
```

### Paso 3: Configurar en GitHub

1. En tu repositorio, crea un archivo llamado `CNAME` (sin extensión)
2. Dentro, escribe solo tu dominio: `www.tudominio.com`
3. Guarda y haz commit
4. Ve a Settings → Pages
5. En "Custom domain", escribe tu dominio
6. Marca "Enforce HTTPS" (espera unos minutos)

¡Listo! En 24-48 horas tu dominio estará funcionando.

## 📱 Uso de la Aplicación

### Texto a Binario
1. Escribe tu texto en el primer campo
2. Haz clic en "Convertir a Binario"
3. Copia el resultado con el botón "Copiar Binario"

### Binario a Texto
1. Pega tu código binario en el segundo campo (8 bits por carácter, separados por espacios)
2. Haz clic en "Convertir a Texto"
3. Copia el resultado con el botón "Copiar Texto"

### Atajos de Teclado
- **Ctrl + Enter** en cualquier campo: Ejecuta la conversión correspondiente

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript Vanilla (ES6+)
- TextEncoder/TextDecoder API (para UTF-8)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

Copyright (c) 2025 Kelvin Piña Gomez

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún bug o tienes sugerencias:

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feature/nueva-caracteristica`
3. Haz commit: `git commit -m 'Añadir nueva característica'`
4. Push: `git push origin feature/nueva-caracteristica`
5. Abre un Pull Request

## 💡 Autor

**Kelvin Piña Gomez**

Desarrollado con ❤️ usando tecnologías web modernas.

---

¿Preguntas o sugerencias? Abre un issue en GitHub.
