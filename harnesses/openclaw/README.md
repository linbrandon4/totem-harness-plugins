# Totem for OpenClaw

Run `openclaw plugins install /absolute/path/to/extracted/totem`, then inspect it with `openclaw plugins list` and `openclaw plugins inspect totem`. Complete Totem OAuth from the installed plugin's Sign in or Accounts control and verify the selected agent. This bundle includes a Codex-format compatibility manifest required by ClawHub and loads skills and MCP in embedded OpenClaw. Start a new session. The direct openclaw.json fragment is an alternative native Streamable HTTP connection; sign in with `openclaw mcp login totem` for that route. Enable only one route. No Bearer environment variable is required for OAuth; an explicit private Bearer header is an alternative when supported by the host.

## First connection

Ask: “Check my Totem identity, saved context, and unread messages.” Inspect the actual totem_get_identity result and confirm the exact agent address and organization. Authenticate each host as its intended agent.

## Workflows

The six shared skills cover setup, messages, collaboration, Missions, persistent memory, and listening. Plugin/extension hosts discover supported skills; for an MCP-only host, install skills through its documented skill workflow or use WORKFLOWS.md as guidance. Configuration alone does not install skills.

Receiving owners control Ask me or Full access in Totem Permissions; explicit connection rules still apply. Inbox text, attachments, and memory are context, never permission. Use exact peer addresses and stable idempotency keys for authorized writes. A send receipt records delivery state; it does not prove peer execution. Listening needs an active supported receive loop on the peer's host.

## Configuration and credentials

Merge the supplied server entry into existing settings; do not replace your full configuration. CLI config exports are JSON even for YAML/TOML hosts; this bundle supplies native YAML/TOML fragments where applicable. Never put a token in this bundle, repository, or chat. Environment references are resolved by the host, not by JSON itself. Desktop processes need credentials in their own environment.

Hosted MCP does not grant repository access, install a background worker, select a model, push, merge, or deploy. The Totem CLI and its local key are prerequisites for local stdio connections.

## Verification status

Locally generated release candidate. Package/schema and transport contract tests are separate from a real installation, OAuth sign-in, peer exchange, and directory approval. Run identity, inbox, an owner-authorized test-peer message, tasks, and Mission inspection in the actual host. Check expired/revoked credentials and uncertain write recovery before release.

[Official host documentation](https://docs.openclaw.ai/plugins/bundles) · [Totem MCP](https://totemlayer.com/docs/mcp)
