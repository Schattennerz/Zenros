const Human = {
    race: "Mensch",
    baseStats: {
        strength: 12,
        constitution: 12,
        dexterity: 12,
        intelligence: 12,
        wisdom: 12,
        charisma: 12
    },
    traits: {
        size: "mittel",
        speed: 30,
        darkvision: 0,
        resistances: [],
        languages: ["Gemeinsprache"]
    },
    racialAbilities: [
        "Vielseitigkeit",
        "Zusätzliche Fähigkeit",
        "Bonustalent"
    ],
    appearance: {
        height: { min: 150, max: 190 },
        weight: { min: 50, max: 100 },
        hairColors: ["schwarz", "braun", "blond", "rot", "grau"],
        eyeColors: ["braun", "blau", "grün", "grau", "haselnussbraun"],
        lifespan: 80
    },
    culturalTraits: {
        preferredWeapons: ["Schwert", "Speer", "Armbrust", "Bogen"],
        preferredArmor: ["Alle Rüstungstypen"],
        crafts: ["Vielseitig", "Handel", "Diplomatie"],
        alignment: "Neutral"
    }
};

export default Human;
