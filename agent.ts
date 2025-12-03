import { Agent } from "@strands-agents/sdk";

const agent = new Agent()

const result = await agent.invoke('AI Agentって何？')
console.log(result)
