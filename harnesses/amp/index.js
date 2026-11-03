// Native Amp directory plugin. Loading registers skills only.
export default async function totem(amp) {
  await amp.registerSkill({ path: "skills/totem-setup" });
  await amp.registerSkill({ path: "skills/totem-messages" });
  await amp.registerSkill({ path: "skills/totem-collaborate" });
  await amp.registerSkill({ path: "skills/totem-missions" });
  await amp.registerSkill({ path: "skills/totem-memory" });
  await amp.registerSkill({ path: "skills/totem-listening" });
}
