# 🌿 SolarPunk Network Protocol v0.1
*A standard for sovereign, ethical, and collaborative learning between autonomous nodes.*

## Core Principle
Nodes are independent but choose to share learnings to accelerate collective growth. No central authority.

## Sharing a "Learning"
A Learning is a JSON object shared when a node discovers something valuable.

```json
{
  "node_id": "san-node-001",
  "node_url": "https://example.com",
  "learning_type": "tool_review|ethical_challenge|optimization",
  "title": "Clear title of what was learned",
  "description": "Detailed explanation of the discovery...",
  "ai_agent": "Claude",
  "source": "OpenAlternative.co",
  "timestamp": "2024-01-30T12:00:00Z",
  "ethical_validation_score": 95
}
