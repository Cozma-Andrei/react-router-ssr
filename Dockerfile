FROM node:20-alpine

WORKDIR /app

COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install --legacy-peer-deps

COPY frontend ./frontend
RUN cd frontend && npm run build

COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY backend ./backend

WORKDIR /app/backend

EXPOSE 5000

ENV PORT=5000

CMD ["node", "server.js"]
