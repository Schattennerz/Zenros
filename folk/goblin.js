const Goblin = {
    race: "Goblin",
    baseStats: {
        strength: 8,
        constitution: 10,
        dexterity: 16,
        intelligence: 10,
        wisdom: 8,
        charisma: 8
    },
    traits: {
        size: "klein",
        speed: 30,
        darkvision: 60,
        resistances: [],
        languages: ["Gemeinsprache", "Goblinisch"]
    },
    racialAbilities: [
        "Flink entkommen",
        "Wut des Kleinen",
        "Heimlichkeit"
    ],
    appearance: {
        height: { min: 90, max: 120 },
        weight: { min: 20, max: 40 },
        hairColors: ["schwarz", "braun", "grau"],
        eyeColors: ["rot", "orange", "gelb", "grün"],
        lifespan: 60
    },
    culturalTraits: {
        preferredWeapons: ["Kurzbogen", "Dolch", "Speer", "Schleuder"],
        preferredArmor: ["Leichte Rüstung"],
        crafts: ["Fallen bauen", "Plündern", "Überlebenskunst"],
        alignment: "Neutral Böse"
    }
};

export default Goblin;
