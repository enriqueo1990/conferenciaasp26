# Design System — Landing Page
## Por el Poder del Espíritu Santo · Conferencia Nacional

## 1. Objetivo

La landing tiene dos propósitos principales:

1. Presentar la información esencial de la conferencia.
2. Llevar al usuario al registro externo.

El botón de registro apunta al link externo de Entrada27.

---

## 2. Información base

| Campo | Información |
|---|---|
| Evento | Por el Poder del Espíritu Santo |
| Tipo | Conferencia Nacional |
| Año | 2026 |
| Fecha | 11 y 12 de septiembre |
| Lugar | Iglesia Bautista Misionera de la C.A.B.A. |
| Dirección | Lascano 2659, C1417, Ciudad Autónoma de Buenos Aires |
| Modalidad | Presencial |
| Audiencia | Abierta al público general |
| Costo | $40.000 ARS |
| Incluye | Almuerzo |
| Cupos | Cupos limitados |
| Registro | https://www.entrada27.com.ar/e/asp2026 |
| Contacto | contacto@antesupalabra.com |

---

## 3. Estilo visual

El diseño debe extender la identidad del carrusel:

- Fondo oscuro navy/charcoal.
- Paleta blanco + naranja/dorado.
- Tipografía sans-serif moderna.
- Llama dorada/naranja como elemento visual central.
- Estética sobria, minimalista, cálida, clara y premium.
- Alto contraste y buena legibilidad.

---

## 4. Paleta de color

| Uso | HEX | Nota |
|---|---:|---|
| Fondo principal | `#1B1C23` | Navy/charcoal oscuro |
| Fondo más oscuro | `#15161C` | Secciones alternas |
| Card | `#22232A` | Cards de oradores, cronograma e info |
| Blanco principal | `#F4F4F5` | Texto principal y logo |
| Gris claro | `#D9D9DD` | Texto secundario |
| Gris apagado | `#A7A7AD` | Meta info y descripciones |
| Naranja/dorado | `#F5A000` | Títulos, botones y acentos |
| Naranja hover | `#FFB000` | Hover de botón principal |
| Borde dorado sutil | `rgba(245,160,0,.18)` | Cards y divisores |

---

## 5. Tipografía

Usar una sola familia sans-serif.

Recomendadas:

- Montserrat
- Inter
- Avenir Next
- Helvetica Now
- Gotham

### Escala sugerida

| Uso | Desktop | Mobile | Peso |
|---|---:|---:|---:|
| Hero H1 | 80–96 px | 46–56 px | 700/800 |
| H2 sección | 48–56 px | 34–40 px | 700 |
| H3 | 26–32 px | 22–26 px | 600/700 |
| Cuerpo | 18–20 px | 16–18 px | 400 |
| Texto pequeño | 14–16 px | 13–14 px | 400/500 |
| Botones | 16–18 px | 16 px | 700 |

---

## 6. Grilla web

### Desktop

- Max-width: 1200 px.
- Grilla: 12 columnas.
- Gutter: 24 px.
- Padding lateral: 48–64 px.
- Padding vertical por sección: 96–120 px.

### Tablet

- Max-width: 900 px.
- Padding lateral: 40 px.

### Mobile

- Una columna.
- Padding lateral: 24 px.
- Padding vertical: 64–80 px.
- Botones a ancho completo si es necesario.

---

## 7. Uso de la llama

### Hero

- Llama grande, brillante, ubicada a la derecha.
- Puede estar parcialmente recortada.
- No debe tapar el texto.
- En mobile puede ir al fondo con opacidad reducida.

### Secciones internas

- Llama como marca de agua.
- Opacidad: 10–25%.
- Siempre a la derecha o como fondo sutil.
- No debe competir con la lectura.

### Footer

- Llama opcional, muy sutil o ausente.

---

## 8. Componentes

### Botón principal

- Texto: `Inscribirme`.
- Fondo: `#F5A000`.
- Texto: `#15161C`.
- Padding: 16 px 28 px.
- Border radius: 10–14 px.
- Hover: `#FFB000`.

### Botón secundario

- Texto: `Ver cronograma`.
- Fondo: transparente.
- Borde: 1 px solid `#F5A000`.
- Texto: `#F4F4F5`.
- Hover: fondo dorado con baja opacidad.

### Cards de oradores

- Foto 4:5 o cuadrada, con recorte consistente.
- Nombre en blanco, bold.
- Minibio en gris claro.
- Fondo: `#22232A`.
- Borde: 1 px solid `rgba(245,160,0,.18)`.
- Radio: 16 px.
- Hover: leve elevación + borde dorado más visible.

### Cards de cronograma

- Hora en dorado.
- Tipo de actividad en gris claro.
- Título de plenaria en blanco.
- Orador en gris claro.
- Fondo oscuro.
- Separadores finos con dorado al 20%.

### Cards de información práctica

- Icono opcional lineal en dorado.
- Título en dorado.
- Texto en blanco/gris.
- Mantener sobriedad; no sobrecargar con demasiados íconos.

---

## 9. Secciones de la landing

1. Header / navegación.
2. Hero.
3. Sobre la conferencia.
4. Oradores.
5. Cronograma.
6. Información práctica.
7. Registro.
8. FAQ.
9. Footer.

---

## 10. Reglas de consistencia

Mantener:

- Mismo fondo oscuro.
- Misma paleta.
- Misma tipografía.
- Títulos dorados.
- Texto blanco/gris.
- Cards oscuras con borde dorado sutil.
- Botones visibles.
- Logo blanco sobre fondo oscuro.
- Llama con el mismo estilo gráfico.

Evitar:

- Fondos blancos.
- Cambios de tipografía por sección.
- Uso excesivo de íconos.
- Degradados exagerados.
- Fotos con tratamientos inconsistentes.
- Ocultar el CTA.
- Saturar la página con demasiada llama.
