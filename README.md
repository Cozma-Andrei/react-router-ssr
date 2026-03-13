# Kotlinlang.org Frontend Migration to React Router V7 with SSR

## Run with Docker

```bash
docker compose up --build
```

App URL:

```
http://localhost:5000
```

## Run locally

### Frontend

```bash
cd frontend
npm install --legacy-peer-deps
npm run build
```

### Backend

```bash
cd backend
npm install
npm start
```

App URL:

```
http://localhost:5000
```

## Notes

* The frontend is SSR and must be built before starting the backend.
* The project uses **@jetbrains/kotlin-web-site-ui 4.14.4**, while the legacy project used **@jetbrains/kotlin-web-site-ui 3.1.0**.
* During setup, dependency conflicts appeared between **@jetbrains/kotlin-web-site-ui**, **React / ReactDOM**, and the **@rescui** packages.
* Because of this, installation was done using:

```bash
npm install --legacy-peer-deps
```

* The **@rescui** package versions (major versions) were chosen based on the versions listed on the **JetBrains npm page** for `@jetbrains/kotlin-web-site-ui` to ensure compatibility.
