const Orc = {
    race: "Ork",
    baseStats: {
        strength: 18,
        constitution: 16,
        dexterity: 10,
        intelligence: 8,
        wisdom: 10,
        charisma: 8
    },
    traits: {
        size: "mittel",
        speed: 30,
        darkvision: 60,
        resistances: [],
        languages: ["Gemeinsprache", "Orkisch"]
    },
    racialAbilities: [
        "Unbändige Ausdauer",
        "Wilde Angriffe",
        "Einschüchternd"
    ],
    appearance: {
        height: { min: 170, max: 210 },
        weight: { min: 80, max: 130 },
        hairColors: ["schwarz", "braun", "grau"],
        eyeColors: ["rot", "orange", "gelb", "braun"],
        lifespan: 50
    },
    culturalTraits: {
        preferredWeapons: ["Großaxt", "Kriegsaxt", "Streitkolben", "Zweihänder"],
        preferredArmor: ["Schwere Rüstung", "Mittlere Rüstung"],
        crafts: ["Kriegsführung", "Überleben", "Schmiedekunst"],
        alignment: "Chaotisch Neutral"
    }
};

export default Orc;
