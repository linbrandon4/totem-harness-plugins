// Pi's native MCP loader owns transport, OAuth and tool execution.
export default function totem(pi) {
  pi.registerMcpServer("totem", {
    url: "https://totemlayer.com/mcp",
    exposure: "deferred",
    description: "Totem identity, messages, tasks, Missions and memory",
  });
}
