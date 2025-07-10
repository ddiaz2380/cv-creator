# CVCraft Pro - Creador de CV Profesional

![CVCraft Pro](https://img.shields.io/badge/CVCraft%20Pro-v1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6.svg)
![Vite](https://img.shields.io/badge/Vite-7.0.3-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-38B2AC.svg)

## 📋 Descripción

CVCraft Pro es una aplicación web moderna y profesional para crear currículums vitae de alta calidad. Diseñada con React, TypeScript y Tailwind CSS, ofrece una experiencia de usuario intuitiva con funcionalidades avanzadas como editor drag & drop, múltiples plantillas profesionales, y exportación en varios formatos.

## ✨ Características Principales

### 🎨 **Editor Avanzado**
- **Editor Drag & Drop**: Reorganiza secciones con facilidad
- **Vista en tiempo real**: Previsualización instantánea de cambios
- **Interfaz intuitiva**: Diseño moderno y fácil de usar
- **Guardado automático**: Borradores guardados automáticamente

### 📄 **Plantillas Profesionales**
- **6 categorías de plantillas**:
  - **Modern Professional**: Diseño moderno con colores vibrantes
  - **Classic Elegance**: Estilo clásico y elegante
  - **Executive Pro**: Diseño sofisticado para altos cargos
  - **Tech Innovator**: Especializado para profesionales de tecnología
  - **Creative Bold**: Para profesionales creativos y artísticos
  - **Minimal Clean**: Diseño minimalista y limpio

### 🎯 **Secciones Completas**
- **Información Personal**: Datos de contacto, redes sociales, foto de perfil
- **Experiencia Profesional**: Historial laboral con logros y tecnologías
- **Educación**: Formación académica y certificaciones
- **Habilidades**: Skills técnicos y blandos con niveles
- **Idiomas**: Competencias lingüísticas con certificaciones
- **Proyectos**: Portfolio de proyectos con enlaces
- **Certificaciones**: Credenciales profesionales
- **Premios y Reconocimientos**: Logros destacados
- **Voluntariado**: Experiencia en organizaciones
- **Publicaciones**: Artículos y papers académicos
- **Referencias**: Contactos profesionales

### 📤 **Exportación Múltiple**
- **PDF de alta calidad**: Optimizado para impresión
- **Formato Word**: Compatible con sistemas ATS
- **Vista web**: Enlace compartible online
- **Múltiples formatos de fecha**: DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD

### 🎨 **Personalización Avanzada**
- **Esquemas de colores**: Múltiples paletas profesionales
- **Tipografías**: Selección de fuentes modernas
- **Espaciado ajustable**: Control fino del layout
- **Secciones personalizables**: Orden y visibilidad configurable

### 🔒 **Seguridad y Privacidad**
- **Datos locales**: Información almacenada en el navegador
- **Sin registro requerido**: Uso inmediato sin cuentas
- **Privacidad garantizada**: Tus datos no salen de tu dispositivo

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18.3.1**: Biblioteca principal para la interfaz
- **TypeScript 5.5.3**: Tipado estático para mayor robustez
- **Vite 7.0.3**: Build tool moderno y rápido
- **Tailwind CSS 3.4.11**: Framework de CSS utilitario

### UI/UX
- **Radix UI**: Componentes accesibles y modernos
- **Lucide React**: Iconografía consistente
- **Shadcn/ui**: Sistema de diseño profesional
- **Embla Carousel**: Carrusel de plantillas

### Gestión de Estado
- **React Hook Form**: Manejo eficiente de formularios
- **TanStack Query**: Gestión de estado del servidor
- **Zod**: Validación de esquemas

### Utilidades
- **date-fns**: Manipulación de fechas
- **clsx**: Gestión condicional de clases CSS
- **class-variance-authority**: Variantes de componentes

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/cv-creator.git
cd cv-creator
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:8080
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Build para producción
npm run build:dev    # Build para desarrollo

# Calidad de código
npm run lint         # Ejecuta ESLint

# Vista previa
npm run preview      # Previsualiza build de producción
```

## 📁 Estructura del Proyecto

```
cv-creator/
├── public/                 # Archivos estáticos
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes base de UI
│   │   ├── templates/     # Plantillas de CV
│   │   ├── personal-info/ # Formularios de información
│   │   ├── AdvancedSectionsManager.tsx
│   │   ├── AdvancedSettings.tsx
│   │   ├── CVPreview.tsx
│   │   ├── HeroCarousel.tsx
│   │   ├── PersonalInfoForm.tsx
│   │   └── TemplateGallery.tsx
│   ├── hooks/             # Custom hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/               # Utilidades y configuración
│   │   └── utils.ts
│   ├── pages/             # Páginas principales
│   │   ├── Editor.tsx     # Editor principal
│   │   ├── FullPreview.tsx # Vista completa
│   │   ├── Index.tsx      # Página de inicio
│   │   └── NotFound.tsx   # Página 404
│   ├── types/             # Definiciones TypeScript
│   │   └── cv.ts
│   ├── utils/             # Funciones utilitarias
│   │   ├── draftUtils.ts  # Gestión de borradores
│   │   └── pdfUtils.ts    # Exportación PDF
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── package.json           # Dependencias y scripts
├── tailwind.config.ts     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
├── vite.config.ts         # Configuración Vite
└── README.md              # Este archivo
```

## 🎯 Uso de la Aplicación

### 1. **Página de Inicio**
- Presenta las características principales
- Galería de plantillas
- Testimonios de usuarios
- Planes de precios

### 2. **Editor de CV**
- **Pestaña Datos**: Formularios para información personal y profesional
- **Pestaña Secciones**: Gestión avanzada de secciones del CV
- **Pestaña Plantillas**: Selección y personalización de plantillas
- **Pestaña Ajustes**: Configuración de colores, fuentes y formato

### 3. **Vista Previa**
- Previsualización en tiempo real
- Vista completa en pantalla completa
- Exportación a PDF
- Guardado de borradores

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Configuración de la aplicación
VITE_APP_NAME="CVCraft Pro"
VITE_APP_VERSION="1.0.0"

# URLs de API (si aplica)
VITE_API_URL="https://api.cvcraft.com"

# Configuración de analytics (opcional)
VITE_GA_TRACKING_ID="GA_TRACKING_ID"
```

### Personalización de Temas
Modifica `tailwind.config.ts` para personalizar colores y estilos:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify
```bash
# Build
npm run build

# Subir carpeta dist/ a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
```

## 🤝 Contribución

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución
- Sigue las convenciones de código existentes
- Añade tests para nuevas funcionalidades
- Actualiza la documentación cuando sea necesario
- Usa commits descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/)

## 📝 Roadmap

### Versión 1.1
- [ ] Integración con APIs de empleo (LinkedIn, Indeed)
- [ ] Sugerencias de IA para contenido
- [ ] Más plantillas especializadas
- [ ] Modo colaborativo

### Versión 1.2
- [ ] Aplicación móvil (React Native)
- [ ] Integración con sistemas ATS
- [ ] Analytics de CV
- [ ] Plantillas personalizadas

### Versión 2.0
- [ ] Backend completo con autenticación
- [ ] Almacenamiento en la nube
- [ ] Colaboración en tiempo real
- [ ] API pública

## 🐛 Reporte de Bugs

Si encuentras un bug, por favor:

1. Verifica que no esté ya reportado en [Issues](https://github.com/tu-usuario/cv-creator/issues)
2. Crea un nuevo issue con:
   - Descripción detallada del problema
   - Pasos para reproducir
   - Capturas de pantalla (si aplica)
   - Información del navegador y sistema operativo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [TuGitHub](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- [Radix UI](https://www.radix-ui.com/) por los componentes accesibles
- [Tailwind CSS](https://tailwindcss.com/) por el framework de CSS
- [Lucide](https://lucide.dev/) por los iconos
- [Vite](https://vitejs.dev/) por la herramienta de build
- Comunidad de React por el ecosistema

## 📞 Soporte

- **Email**: soporte@cvcraft.com
- **Discord**: [Servidor de la comunidad](https://discord.gg/cvcraft)
- **Documentación**: [docs.cvcraft.com](https://docs.cvcraft.com)

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐

**CVCraft Pro** - Creando CVs profesionales desde 2024 🚀