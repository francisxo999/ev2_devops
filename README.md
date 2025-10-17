# 🧩 Evaluación - DevOps y CI/CD con Node.js y Docker

Este repositorio contiene la aplicación Node.js/React y la configuración de infraestructura de DevOps, cumpliendo con la integración continua (GitHub Actions) y el despliegue local (Docker Compose).

---

## 🚀 1. Flujo de Integración Continua (CI/CD)

El workflow se define en **`.github/workflows/ci.yml`** y se ejecuta automáticamente en cada `push` o `pull request` a las ramas `main` y `develop`.

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

El archivo **`docker-compose.yml`** levanta los tres contenedores requeridos (`app`, `db`, `phpmyadmin`) sin usar volúmenes.

### Comandos de Ejecución

1.  Asegúrate de que Docker Desktop esté corriendo.
2.  Levanta el ambiente local:

    ```bash
    docker-compose up -d
    ```

### Validación de la Entrega

[cite_start]Tu entrega es correcta si al ejecutar el comando: `docker ps -a`, todos los contenedores aparecen con el estado: **`STATUS: Up`** [cite: 20-24].

### Acceso a los Servicios

| Servicio | URL de Acceso |
| :--- | :--- |
| **Aplicación (app)** | `http://localhost:3000` |
| **Administración DB (phpmyadmin)** | `http://localhost:8080` |
