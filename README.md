# Contador App

## 1. Datos del proyecto
- **Nombre:** Contador App
- **Autor:** Martín Oliver Pallarés
- **Fecha:** Octubre 2025
- **Expo SDK:** 51
- **React Native:** 0.74

## 2. Tecnología y justificación
Elegí Expo porque hace todo mucho más fácil. No tuve que configurar Android Studio ni nada complicado, solo instalar Node y listo. Además el hot reload es súper rápido y puedo probar la app en mi móvil con solo escanear un QR. Como es mi primera app móvil, quería algo sencillo para empezar.

## 3. Configuración y ejecución
Instalar:
```bash
npm install
npx expo start
```

Luego escaneas el QR con Expo Go o presionas `a` para abrir el emulador de Android.

## 4. Estructura del proyecto
```
contador-app/
  - App.js: aquí está todo el código de la app
  - app.json: configuración de Expo
  - package.json: dependencias
  - assets/: iconos e imágenes
```

En `App.js` está la lógica del contador con useState y los tres botones. Todo bastante simple.

## 5. Perfil de despliegue
- **Android:** 14 (API 34)
- **Probado en:** [tu dispositivo/emulador]
- **Resolución:** 1080x2400
- **Orientación:** vertical

## 6. Funcionamiento
Es un contador básico con tres botones:
- **Botón menos (-):** resta 1
- **Reset:** vuelve a 0
- **Botón más (+):** suma 1

Cuando llegas a 10 sale un emoji de celebración. El número se muestra en grande en el centro con efecto de brillo azul.

<img width="387" height="864" alt="image" src="https://github.com/user-attachments/assets/d88b2fbb-5e37-4ef9-b2c3-2aa63f0346ce" />
<img width="392" height="852" alt="image" src="https://github.com/user-attachments/assets/33a5eefa-86fe-4ed1-864a-4579076f72e0" />

## 7. Conclusión
Ha sido interesante aprender React Native. Lo más raro fue acostumbrarme a que los estilos no funcionan como CSS normal, y que en vez de divs y botones hay Views y TouchableOpacity. El emulador a veces va un poco lento pero funciona bien.

**Limitaciones:**
- El contador no se guarda si cierras la app
- No tiene límite de números
- Falta mejorar la accesibilidad

Me quedé con ganas de añadir animaciones cuando cambias el número y tal vez guardar un historial, pero para una primera app móvil creo que está bien.
