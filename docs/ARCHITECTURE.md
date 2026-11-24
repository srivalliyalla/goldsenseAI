# GoldSense AI Architecture

## 1. Architecture Overview

GoldSense AI follows a modular architecture consisting of:

- React frontend
- Node.js API layer
- AI orchestration layer
- ML forecasting service
- PostgreSQL database
- pgvector retrieval layer
- External market-data providers
- SSE streaming layer
- MCP tool layer

## 2. High-Level Flow

User
↓
React Frontend
↓
Node.js API
↓
AI Supervisor / Business Services
↓
Specialized Services
├── Market Analysis
├── Macro Analysis
├── News Analysis
├── RAG
└── Prediction
↓
PostgreSQL / pgvector / ML Service

## 3. Responsibilities

### Frontend

Responsible for:

- Dashboard
- Charts
- Country price selection
- AI chat
- Forecast visualization
- Real-time SSE updates

### Node.js Backend

Responsible for:

- API endpoints
- Authentication
- Business logic
- Agent orchestration
- Tool calling
- SSE
- External API integration

### PostgreSQL

Responsible for:

- Market data
- Historical prices
- Currency data
- Macro indicators
- News
- Predictions
- Agent execution records

### pgvector

Responsible for:

- Embedding storage
- Semantic search
- RAG retrieval

### Python ML Service

Responsible for:

- Feature engineering
- Model training
- Forecasting
- Model evaluation

### LLM

Responsible for:

- Natural language understanding
- Reasoning
- Explanation
- Tool selection
- Conversational responses

The LLM will not be treated as the numerical forecasting engine.

## 4. Scalability

The architecture should allow independent scaling of:

- Frontend
- Node.js API
- ML service
- Background workers
- Database
- Cache

## 5. External Dependencies

The system may depend on:

- Market data providers
- FX providers
- News providers
- LLM providers
- Economic data providers

Provider interfaces should be abstracted so providers can
be replaced without major application changes.

## 6. Security

Sensitive credentials shall be stored in environment variables
or a secrets manager.

API keys shall never be committed to Git.

## 7. Architecture Decisions

Detailed architectural decisions are documented in:

`docs/DECISIONS.md`