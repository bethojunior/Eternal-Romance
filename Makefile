# ==============================
# CONFIG
# ==============================
COMPOSE=docker compose
INFRA_DIR=infra

APP_SERVICE=app
DB_SERVICE=postgres

# ==============================
# DEFAULT
# ==============================
.DEFAULT_GOAL := help

# ==============================
# HELP
# ==============================
help:
	@echo ""
	@echo "🛠️  Comandos disponíveis:"
	@echo ""
	@echo "  make up            -> Sobe toda a stack"
	@echo "  make down          -> Derruba containers (mantém volumes)"
	@echo "  make destroy       -> Derruba tudo (⚠️ apaga volumes)"
	@echo "  make build         -> Builda as imagens"
	@echo "  make rebuild       -> Build sem cache"
	@echo "  make logs          -> Logs da aplicação"
	@echo "  make shell         -> Shell no container da app"
	@echo "  make db-shell      -> Shell no PostgreSQL"
	@echo "  make ps            -> Lista containers"
	@echo ""

# ==============================
# DOCKER COMPOSE
# ==============================
up:
	cd $(INFRA_DIR) && $(COMPOSE) up -d

down:
	cd $(INFRA_DIR) && $(COMPOSE) down

destroy:
	cd $(INFRA_DIR) && $(COMPOSE) down -v

build:
	cd $(INFRA_DIR) && $(COMPOSE) build

rebuild:
	cd $(INFRA_DIR) && $(COMPOSE) build --no-cache

ps:
	cd $(INFRA_DIR) && $(COMPOSE) ps

logs:
	cd $(INFRA_DIR) && $(COMPOSE) logs -f $(APP_SERVICE)

# ==============================
# SHELLS
# ==============================
shell:
	cd $(INFRA_DIR) && $(COMPOSE) exec $(APP_SERVICE) sh

db-shell:
	cd $(INFRA_DIR) && $(COMPOSE) exec $(DB_SERVICE) psql -U postgres -d mydatabase

# ==============================
# CLEAN
# ==============================
prune:
	docker system prune -f
