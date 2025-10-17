# 🤝 Guía de Contribución

Este documento establece el flujo de trabajo y los estándares de código para la contribución al proyecto.

## 🌳 1. Flujo de Trabajo (Branching Strategy)

* **Estrategia:** Se utilizan las ramas **`main`** (producción) y **`develop`** (integración).
* **Tareas:** Las nuevas funcionalidades o correcciones deben implementarse en ramas de tarea creadas a partir de `develop`.

### Nomenclatura de Ramas:

Utiliza prefijos claros: `feat/`, `fix/`, `chore/`.

## 📝 2. Mensajes de Commit (Conventional Commits)

Utiliza la convención de commits para mantener un historial limpio (ej. `feat(api):`, `fix(ci):`, `docs:`).

## 💎 3. Estándares de Código

La calidad y el estilo son validados por **ESLint** y **SonarCloud** en el pipeline de CI/CD. Asegúrate de que no haya errores de linter antes de hacer un Pull Request.