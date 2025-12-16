# 💖 Eternal Romance — Node.js Framework

Ola meu amor, gostoso <3

**Eternal Romance** é um framework Node.js que fornece uma **stack moderna, profissional e pronta para produção**, utilizando:

* **Node.js (última versão – `node:current-alpine`)**
* **Docker + Docker Compose v2**
* **PostgreSQL com volume persistente**
* **Redis**
* **Makefile** para padronizar comandos

Tudo organizado com a infraestrutura isolada em `/infra`.

---

## 📁 Estrutura do projeto

```bash
project-root/
├─ infra/
│  ├─ Dockerfile
│  └─ docker-compose.yml
├─ src/
├─ dist/
├─ package.json
├─ yarn.lock
├─ Makefile
└─ README.md
```

---

## 🧱 Stack utilizada

| Tecnologia     | Versão             |
| -------------- | ------------------ |
| Node.js        | Última (`current`) |
| Docker         | >= 24              |
| Docker Compose | v2                 |
| PostgreSQL     | 15-alpine          |
| Redis          | alpine             |
| Yarn           | latest             |

---

## 🐳 Docker

### 🔹 Dockerfile

* Multi-stage build (deps / build / production)
* Imagem final **leve (Alpine)**
* Cache inteligente de dependências
* Não roda como root (mais seguro)

Localização:

```bash
infra/Dockerfile
```

---

### 🔹 Docker Compose

* App Node.js
* PostgreSQL com **volume persistente**
* Redis

Localização:

```bash
infra/docker-compose.yml
```

O volume do banco garante que os dados **não sejam perdidos** ao derrubar os containers.

---

## 🛠️ Makefile

O **Makefile fica na raiz do projeto** e centraliza todos os comandos Docker.

### Comandos disponíveis

```bash
make up         # Sobe toda a stack
make down       # Derruba containers (mantém volumes)
make destroy    # Derruba tudo (⚠️ apaga volumes)
make build      # Builda as imagens
make rebuild    # Build sem cache
make logs       # Logs da aplicação
make shell      # Shell no container da app
make db-shell   # Shell no PostgreSQL
make ps         # Lista containers
make prune      # Docker system prune
```

---

## 🚀 Como rodar o projeto

### 1️⃣ Subir a stack

```bash
make up
```

A aplicação ficará disponível em:

```text
http://localhost:3333
```

---

### 2️⃣ Ver logs

```bash
make logs
```

---

### 3️⃣ Entrar no container da aplicação

```bash
make shell
```

---

### 4️⃣ Acessar o PostgreSQL

```bash
make db-shell
```

---

### 5️⃣ Derrubar containers

```bash
make down
```

> Os dados do banco **não serão apagados**.

---

### 6️⃣ Resetar tudo (⚠️ cuidado)

```bash
make destroy
```

> ⚠️ Remove containers **e volumes** (apaga o banco).

---

## 🔐 Variáveis de ambiente

Principais variáveis usadas pela aplicação:

```env
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/mydatabase
REDIS_HOST=redis
REDIS_PORT=6379
```

---

## 🧠 Boas práticas adotadas

* Infra isolada em `/infra`
* Docker multi-stage
* Volume persistente para banco
* Serviços referenciados por nome (DNS do Docker)
* Makefile para evitar comandos longos

---

## 🔥 Próximos upgrades possíveis

* Modo **dev** com hot reload
* Migrações automáticas (Prisma / TypeORM / Knex)
* `.env` por ambiente
* CI/CD
* Imagem **distroless**

---

## 🧑‍💻 Framework

Criado para quem ama código limpo, infra organizada e deploy sem
