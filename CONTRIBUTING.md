# 🤝 Guía de Contribución

Este documento establece el flujo de trabajo y los estándares de código para la contribución al proyecto.

## 🌳 1. Flujo de Trabajo

* **Estrategia:** Todo el trabajo se basa en la rama **`main`**.
* **Tareas:** Las nuevas funcionalidades o correcciones se desarrollan en ramas temporales, creadas a partir de `main`, antes de ser fusionadas de nuevo a `main` mediante un Pull Request.

### Nomenclatura de Ramas:

Utiliza prefijos claros: `feat/`, `fix/`, `chore/`.

## 📝 2. Mensajes de Commit (Conventional Commits)

Es obligatorio seguir la convención de commits para mantener el historial limpio y legible (ej. `feat(api):`, `fix(ci):`, `docs:`).

## 💎 3. Estándares de Código

La calidad y el estilo son validados por **ESLint** y **SonarCloud** en el pipeline de CI/CD. Asegúrate de que no haya errores de linter antes de hacer un Pull Request.