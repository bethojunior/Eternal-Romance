############################
# 1️⃣ DEPENDENCIES
############################
FROM node:current-alpine AS deps

WORKDIR /app

# Atualizando o caminho de acordo com a nova estrutura
COPY ../package.json ../yarn.lock ./

RUN yarn install --frozen-lockfile


############################
# 2️⃣ BUILD
############################
FROM node:current-alpine AS build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY ../ .

RUN yarn build


############################
# 3️⃣ PRODUCTION
############################
FROM node:current-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=1024"

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=deps /app/node_modules ./node_modules

USER node

EXPOSE 3333

CMD ["node", "dist/app.js"]
