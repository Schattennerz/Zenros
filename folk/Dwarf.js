const Dwarf = {
    race: "Zwerg",
    baseStats: {
        strength: 16,
        constitution: 18,
        dexterity: 10,
        intelligence: 12,
        wisdom: 14,
        charisma: 8
    },
    traits: {
        size: "mittel",
        speed: 25,
        darkvision: 60,
        resistances: ["Gift"],
        languages: ["Gemeinsprache", "Zwergisch"]
    },
    racialAbilities: [
        "Zwergische Widerstandskraft",
        "Zwergische Kampfausbildung",
        "Steinkenntnis",
        "Werkzeugkenntnis"
    ],
    appearance: {
        height: { min: 120, max: 150 },
        weight: { min: 70, max: 100 },
        hairColors: ["schwarz", "braun", "grau", "rot"],
        eyeColors: ["braun", "grau", "blau", "grün"],
        lifespan: 350
    },
    culturalTraits: {
        preferredWeapons: ["Axt", "Kriegshammer", "Wurfhammer"],
        preferredArmor: ["Schwere Rüstung", "Mittlere Rüstung"],
        crafts: ["Schmiedekunst", "Steinmetzkunst", "Brauen"],
        alignment: "Rechtschaffen"
    }
};

export default Dwarf;
