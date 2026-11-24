# GoldSense AI Requirements

## 1. Functional Requirements

### FR-001 — Gold Price

The system shall display the current gold price.

### FR-002 — Historical Data

The system shall provide historical gold price data.

### FR-003 — Currency Conversion

The system shall convert international gold prices
into supported currencies.

### FR-004 — Factor Analysis

The system shall analyze factors associated with gold price movements.

### FR-005 — Forecasting

The system shall generate a next-day gold price forecast.

### FR-006 — AI Chat

Users shall be able to ask natural-language questions
about gold markets.

### FR-007 — RAG

The system shall retrieve relevant knowledge before
generating answers to knowledge-based questions.

### FR-008 — AI Agents

The system shall use specialized agents for different
types of market analysis.

### FR-009 — MCP

The system shall expose selected domain capabilities
through MCP-compatible tools.

### FR-010 — Real-Time Updates

The system shall provide real-time market updates
using Server-Sent Events.

## 2. Non-Functional Requirements

### Performance

- API responses should be optimized for normal dashboard usage.
- Historical queries should use appropriate indexes.
- Expensive AI operations should not block normal API requests.

### Scalability

Frontend, API, ML and database layers should be independently scalable.

### Security

- API keys must never be exposed to the frontend.
- Authentication and authorization should be implemented before production.
- Rate limiting should be applied to public APIs.
- Input validation should be applied to API requests.

### Reliability

- External market-data failures should not crash the application.
- Provider failures should be handled gracefully.
- Background processing should support retry mechanisms.

### Observability

The system should provide:

- Application logs
- API error logs
- AI/agent execution logs
- Prediction logs
- Data freshness monitoring

### Cost

The architecture should support local/free development where practical
and allow production providers to be substituted later.

## 3. AI Requirements

The LLM should not directly act as the numerical forecasting engine.

The ML forecasting service shall be responsible for numerical predictions.

The LLM shall primarily handle:

- Natural-language understanding
- Tool selection
- Explanation
- Summarization
- Conversational interaction
- Agent orchestration

## 4. Forecast Requirements

The system should provide:

- Forecast value/range
- Forecast direction
- Forecast horizon
- Model used
- Prediction timestamp
- Important contributing factors

Forecast uncertainty should be represented honestly and should not
be presented as a guaranteed prediction.

## 5. Local Gold Price Requirements

Country-specific prices should be derived approximately from:

International gold price
→ currency conversion
→ purity
→ unit conversion
→ local adjustments where available

Actual retail/jewellery prices may differ because of taxes,
premiums, dealer spreads, making charges and other costs.