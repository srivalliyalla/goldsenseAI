# Architecture Decision Records

## ADR-001: PostgreSQL instead of MongoDB

### Decision

Use PostgreSQL as the primary database.

### Why?

The system contains:

- Market data
- Time-series-like historical data
- Currency data
- Economic indicators
- Predictions
- Agent execution records
- Relational relationships

PostgreSQL provides strong relational capabilities and
supports pgvector for semantic retrieval.

### Alternatives

- MongoDB
- Separate SQL + vector database
- PostgreSQL + Pinecone

### Reason for rejection

Using multiple databases would increase operational complexity
for the initial version.

---

## ADR-002: SSE instead of WebSocket

### Decision

Use SSE for server-to-client real-time updates.

### Why?

GoldSense primarily requires server → client streaming:

- Gold price updates
- Forecast updates
- AI response streaming

SSE provides a simpler mechanism for this communication pattern.

WebSocket may be introduced later if bidirectional real-time
communication becomes necessary.

---

## ADR-003: Node.js + Python

### Decision

Use Node.js for the main API and Python for ML.

### Why?

Node.js matches the existing application/backend ecosystem
and is well suited for API and AI orchestration.

Python provides a mature ecosystem for machine learning,
statistics and forecasting.

This creates a clear separation between:

Business/API/AI orchestration
and
Numerical ML processing.