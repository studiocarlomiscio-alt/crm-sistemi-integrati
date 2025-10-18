# Usa un'immagine Node.js per il backend e frontend
FROM node:18

# Crea cartella di lavoro
WORKDIR /app

# Copia tutto il progetto
COPY . .

# Installa dipendenze del backend
WORKDIR /app/backend
RUN npm install

# Installa dipendenze del frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Torna al backend per avviare il server
WORKDIR /app/backend

# Esponi la porta del backend
EXPOSE 4000

# Avvia il backend (che servirà anche il frontend)
CMD ["npm", "start"]
