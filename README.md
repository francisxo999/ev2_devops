# 🧩 Evaluación - DevOps y CI/CD con Node.js y Docker

Este repositorio contiene la aplicación Node.js/React y la configuración de infraestructura de DevOps, cumpliendo con la integración continua (GitHub Actions) y el despliegue local (Docker Compose).

---

## 🚀 1. Flujo de Integración Continua (CI/CD)

El workflow se define en **`.github/workflows/ci.yml`** y se ejecuta automáticamente en cada `push` o `pull request` a la rama `main`.

El pipeline automatiza las siguientes tareas:
1.  **Instalación y Calidad:** Instala dependencias, ejecuta **Tests**, y revisa el código con **ESLint**.
2.  **Análisis:**
    * **Snyk:** Escanea dependencias en busca de **vulnerabilidades de seguridad**.
    * **SonarCloud:** Realiza un análisis estático para medir la **calidad** y complejidad del código.
3.  **Entrega Continua (CD):**
    * Construye la imagen Docker.
    * Sube la imagen etiquetada a **Docker Hub** (`secoweeedcodein/ev2_devops`).

---

## 🐳 2. Despliegue Local con Docker Compose

El archivo **`docker-compose.yml`** levanta los tres contenedores requeridos (`app`, `db`, `phpmyadmin`). No se utilizan volúmenes.

### Comandos de Ejecución

1.  Asegúrate de que Docker Desktop esté corriendo.
2.  Levanta el ambiente local:

    ```bash
    docker-compose up -d
    ```
3.  Verifica el estado de los contenedores:
    ```bash
    docker ps -a
    ```