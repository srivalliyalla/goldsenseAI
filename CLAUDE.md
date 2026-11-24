# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

GoldSense AI is a gold-market intelligence platform: live and historical gold prices, currency and local-price conversion, factor analysis, next-day ML forecasts, and an LLM chat backed by RAG, agents and MCP tools. See [README.md](README.md) for goals, features and the phased roadmap.

## Current state

The project is still in planning. No application code, dependencies, or build/lint/test tooling exist yet, and `docker-compose.yml` is empty. The intended layout is:

- `react/`: frontend (React + TypeScript)
- `node/`: API and AI orchestration (Node.js + TypeScript + Express, SSE)
- `ml/`: forecasting service (Python)

Once a sub-project gets tooling, add its commands here or in a CLAUDE.md inside that directory. Until then, don't assume any commands exist.

Work follows the phases in the README, in order: Foundation (React/Node/Postgres) → SSE + market data → LLM + tool calling → RAG + pgvector → supervisor + specialized agents → Python ML forecasting → MCP → production (Docker, GitHub Actions, AWS, observability). Keep new code in scope for the current phase rather than building ahead.

## Design docs (source of truth)

- [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md): numbered functional requirements (FR-001 to FR-010) and non-functional requirements
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): component responsibilities and request flow
- [docs/DECISIONS.md](docs/DECISIONS.md): ADRs. Record new architectural decisions here in the same ADR format.

## Architectural rules that span components

- **The LLM never produces numerical forecasts.** Numbers come from the Python ML service. The LLM handles understanding, tool selection, explanation, summarization and agent orchestration, and calls the ML service as a tool.
- **Request flow:** React → Node API → AI supervisor / business services → specialized services (market, macro, news, RAG, prediction) → PostgreSQL / pgvector / ML service.
- **One database:** PostgreSQL with pgvector for both relational/time-series data and embeddings (ADR-001). Don't add a separate vector DB or MongoDB.
- **Real-time is SSE, not WebSocket** (ADR-002). It carries price updates, forecast updates and streamed AI responses.
- **Node vs Python split** (ADR-003): Node handles API, business logic, auth, orchestration and external integrations. Python handles feature engineering, training, forecasting and evaluation.
- **External providers** (market data, FX, news, LLM, economic data) sit behind abstracted interfaces so they can be swapped. A provider failure must degrade gracefully, never crash the app. Background jobs need retries.
- **API keys stay server-side only.** They are never sent to the frontend.
- Expensive AI operations must not block normal API requests.
- Frontend, API, ML service, workers and database should stay independently deployable and scalable.

## Domain rules

- Local gold prices are approximations: international price → FX conversion → purity → unit conversion → local adjustments. The UI and AI answers must not present them as retail prices, since taxes, premiums, spreads and making charges differ.
- Forecasts must include value/range, direction, horizon, model used, timestamp and key contributing factors. They must show uncertainty honestly and never be presented as guaranteed or as financial advice (see the README disclaimer).
