const Elf = {
    race: "Elf",
    baseStats: {
        strength: 10,
        constitution: 10,
        dexterity: 18,
        intelligence: 14,
        wisdom: 16,
        charisma: 14
    },
    traits: {
        size: "mittel",
        speed: 30,
        darkvision: 60,
        resistances: ["Bezauberung"],
        languages: ["Gemeinsprache", "Elfisch"]
    },
    racialAbilities: [
        "Scharfe Sinne",
        "Feenabstammung",
        "Trance",
        "Elfische Waffenausbildung"
    ],
    appearance: {
        height: { min: 150, max: 180 },
        weight: { min: 45, max: 70 },
        hairColors: ["blond", "schwarz", "braun", "silber", "gold"],
        eyeColors: ["grün", "blau", "gold", "silber", "violett"],
        lifespan: 750
    },
    culturalTraits: {
        preferredWeapons: ["Langbogen", "Kurzschwert", "Langschwert", "Rapier"],
        preferredArmor: ["Leichte Rüstung", "Mittlere Rüstung"],
        crafts: ["Bogenbau", "Kunsthandwerk", "Magie"],
        alignment: "Chaotisch Gut"
    }
};

export default Elf;
