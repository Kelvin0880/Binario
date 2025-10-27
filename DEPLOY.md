# 🚀 Guía Rápida de Despliegue

## Opción 1: GitHub Pages (RECOMENDADO - GRATIS)

### Pasos rápidos:

1. **Crear cuenta en GitHub**: https://github.com/signup
2. **Crear repositorio**: Click en "+" → "New repository"
   - Nombre: `convertidor-texto-binario`
   - Público
   - Con README
3. **Subir archivo**: "Add file" → "Upload files" → Subir `index.html`
4. **Activar Pages**: Settings → Pages → Source: "main" → Save
5. **Acceder**: https://TU_USUARIO.github.io/convertidor-texto-binario/

---

## Opción 2: Netlify (Alternativa - También GRATIS)

### Pasos rápidos:

1. **Crear cuenta**: https://www.netlify.com
2. **Nuevo sitio**: "Add new site" → "Deploy manually"
3. **Arrastrar**: Arrastra la carpeta con `index.html`
4. **Acceder**: Te da una URL como `https://random-name.netlify.app`
5. **Dominio custom** (opcional): Site settings → Domain management

---

## Opción 3: Vercel (Alternativa - También GRATIS)

### Pasos rápidos:

1. **Crear cuenta**: https://vercel.com/signup
2. **Nuevo proyecto**: "Add New" → "Project"
3. **Importar**: Sube tu carpeta o conecta con GitHub
4. **Deploy**: Click en "Deploy"
5. **Acceder**: Te da una URL como `https://tu-proyecto.vercel.app`

---

## Opción 4: Simplemente Abrir el Archivo

Si solo quieres usarlo localmente:

1. Haz doble clic en `index.html`
2. Se abre en tu navegador
3. ¡Funciona sin internet!

---

## ⚡ Comando Git Rápido (si usas GitHub)

```powershell
# Navega a la carpeta
cd "c:\Users\kelvi\Downloads\Binario"

# Configura Git (primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"

# Inicializa y sube
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/convertidor-texto-binario.git
git push -u origin main
```

Luego activa GitHub Pages en Settings → Pages.

---

## 🌐 Dominios Personalizados

### Proveedores económicos:
- **Namecheap**: ~$9/año
- **Hostinger**: ~$1/año (primer año)
- **Google Domains**: ~$12/año
- **Porkbun**: ~$8/año

### Configuración DNS:
```
CNAME: www → TU_USUARIO.github.io
```

---

## ✅ Verificar que Funciona

1. Abre la URL de tu sitio
2. Prueba convertir: "Hola 🌍" a binario
3. Copia el binario y reconviértelo a texto
4. ¡Debe salir exactamente "Hola 🌍"!

---

## 🆘 Problemas Comunes

**❌ Error 404**: Espera 2-5 minutos después de activar Pages.

**❌ No aparece el sitio**: Verifica que el archivo se llame exactamente `index.html` (minúsculas).

**❌ "No se puede acceder"**: Asegúrate de que el repositorio sea público.

**❌ Los cambios no aparecen**: Borra la caché del navegador (Ctrl + Shift + R).

---

## 📞 Soporte

- GitHub Pages Docs: https://docs.github.com/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
