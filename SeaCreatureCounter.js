import { info, success, error, debug } from "./Chat";
import * as Rarity from "./Rarity";

var SEA_CREATURES = {
    // Regular
    SQUID: {
        name: "Squid",
        message: "A Squid appeared.",
        rarity: Rarity.COMMON,
    },
    SEA_WALKER: {
        name: "Sea Walker",
        message: "You caught a Sea Walker.",
        rarity: Rarity.COMMON,
    },
    NIGHT_SQUID: {
        name: "Night Squid",
        message: "Pitch darkness reveals a Night Squid.",
        rarity: Rarity.COMMON,
    },
    SEA_GUARDIAN: {
        name: "Sea Guardian",
        message: "You stumbled upon a Sea Guardian.",
        rarity: Rarity.COMMON,
    },
    SEA_WITCH: {
        name: "Sea Witch",
        message:
            "It looks like you've disrupted the Sea Witch's brewing session. Watch out, she's furious!",
        rarity: Rarity.UNCOMMON,
    },
    SEA_ARCHER: {
        name: "Sea Archer",
        message: "You reeled in a Sea Archer.",
        rarity: Rarity.UNCOMMON,
    },
    RIDER_OF_THE_DEEP: {
        name: "Rider Of The Deep",
        message: "The Rider of the Deep has emerged.",
        rarity: Rarity.UNCOMMON,
    },
    CATFISH: {
        name: "Catfish",
        message: "Huh? A Catfish!",
        rarity: Rarity.RARE,
    },
    CARROT_KING: {
        name: "Carrot King",
        message: "Is this even a fish? It's the Carrot King!",
        rarity: Rarity.RARE,
    },
    SEA_LEECH: {
        name: "Sea Leech",
        message: "Gross! A Sea Leech",
        rarity: Rarity.RARE,
    },
    GUARDIAN_DEFENDER: {
        name: "Guardian Defender",
        message: "You've discovered a Guardian Defender of the sea.",
        rarity: Rarity.EPIC,
    },
    DEEP_SEA_PROTECTOR: {
        name: "Deep Sea Protector",
        message: "You have awoken the Deep Sea Protector, prepare for a battle!",
        rarity: Rarity.EPIC,
    },
    WATER_HYDRA: {
        name: "Water Hydra",
        message: "The Water Hydra has come to test your strength",
        rarity: Rarity.LEGENDARY,
    },
    THE_SEA_EMPEROR: {
        name: "The Sea Emperor",
        message: "Sea Emperor arises from the depths.",
        rarity: Rarity.LEGENDARY,
    },
    AGARIMOO: {
        name: "Agarimoo",
        message: "Your Chumcap Bucket trembles, it's an Agarimoo.",
        rarity: Rarity.RARE,
    },
    OASIS_RABBIT: {
        name: "Oasis Rabbit",
        message: "An Oasis Rabbit appears from the water",
        rarity: Rarity.UNCOMMON,
    },
    OASIS_SHEEP: {
        name: "Oasis Sheep",
        message: "An Oasis Sheep appears from the water",
        rarity: Rarity.UNCOMMON,
    },
    // Crystal Hollows
    WATER_WORM: {
        name: "Water Worm",
        message: "A Water Worm surfaces!",
        rarity: Rarity.RARE,
    },
    POISONED_WATER_WORM: {
        name: "Poisoned Water Worm",
        message: "A Poisoned Water Worm surfaces!",
        rarity: Rarity.RARE,
    },
    ZOMBIE_MINER: {
        name: "Zombie Miner",
        message: "A Zombie miner surfaces!",
        rarity: Rarity.LEGENDARY,
    },
    // Spooky
    SCARECROW: {
        name: "Scarecrow",
        message: "Phew! It's only a Scarecrow.",
        rarity: Rarity.COMMON,
    },
    NIGHTMARE: {
        name: "Nightmare",
        message: "You hear trotting from beneath the waves, you caught a Nightmare.",
        rarity: Rarity.RARE,
    },
    WEREWOLF: {
        name: "Werewolf",
        message: "It must be a full moon, a Werewolf appears.",
        rarity: Rarity.EPIC,
    },
    PHANTOM_FISHERMAN: {
        name: "Phantom Fisher",
        message: "The spirit of a long lost Phantom Fisher has come to haunt you.",
        rarity: Rarity.LEGENDARY,
    },
    GRIM_REAPER: {
        name: "Grim Reaper",
        message: "This can't be! The manifestation of death himself!",
        rarity: Rarity.LEGENDARY,
    },
    // Winter
    FROZEN_STEVE: {
        name: "Frozen Steve",
        message: "Frozen Steve fell into the pond long ago, never to resurface...until now!",
        rarity: Rarity.COMMON,
    },
    FROSTY_THE_SNOWMAN: {
        name: "Frosty The Snowman",
        message: "It's a snowman! He looks harmless",
        rarity: Rarity.COMMON,
    },
    GRINCH: {
        name: "Grinch",
        message: "The Grinch stole Jerry's Gifts...get them back!",
        rarity: Rarity.UNCOMMON,
    },
    YETI: {
        name: "Yeti",
        message: "What is this creature!?",
        rarity: Rarity.LEGENDARY,
    },
    NUTCRACKER: {
        name: "Nutcracker",
        message: "You found a forgotten Nutcracker laying beneath the ice.",
        rarity: Rarity.RARE,
    },
    REINDRAKE: {
        name: "Reindrake",
        message: "A Reindrake forms from the depths.",
        rarity: Rarity.LEGENDARY,
    },
    // Mammy (Marina)
    NURSE_SHARK: {
        name: "Nurse Shark",
        message: "A tiny fin emerges from the water, you've caught a Nurse Shark.",
        rarity: Rarity.UNCOMMON,
    },
    BLUE_SHARK: {
        name: "Blue Shark",
        message: "You spot a fin as blue as the water it came from, it's a Blue Shark.",
        rarity: Rarity.RARE,
    },
    TIGER_SHARK: {
        name: "Tiger Shark",
        message: "A striped beast bounds from the depths, the wild Tiger Shark!",
        rarity: Rarity.EPIC,
    },
    GREAT_WHITE_SHARK: {
        name: "Great White Shark",
        message:
            "Hide no longer, a Great White Shark has tracked your scent and thirsts for your blood!",
        rarity: Rarity.LEGENDARY,
    },
    // Crimson Isle
    PLHLEGBLAST: {
        name: "Plhlegblast",
        message: "WOAH! A Plhlegblast appeared.",
        rarity: Rarity.RARE,
    },
    MAGNA_SLUG: {
        name: "Magma Slug",
        message: "From Beneath the lava appears a Magma Slug.",
        rarity: Rarity.RARE,
    },
    MOOGMA: {
        name: "Moogma",
        message: "You hear a faint Moo from the lava... A Moogma appears.",
        rarity: Rarity.RARE,
    },
    LAVA_LEECH: {
        name: "Lava Leech",
        message: "A small but fearsome Lava Leech emerges.",
        rarity: Rarity.RARE,
    },
    PYROCLASTIC_WORM: {
        name: "Pyroclastic Worm",
        message: "You feel the heat radiating as a Pyroclastic Worm surfaces.",
        rarity: Rarity.RARE,
    },
    LAVA_FLAME: {
        name: "Lava Flame",
        message: "A Lava Flame flies out from beneath the lava.",
        rarity: Rarity.RARE,
    },
    FIRE_EEL: {
        name: "Fire Eel",
        message: "A Fire Eel slithers out from the depths.",
        rarity: Rarity.RARE,
    },
    TAURUS: {
        name: "Taurus",
        message: "Taurus and his steed emerge.",
        rarity: Rarity.RARE,
    },
    THUNDER: {
        name: "Thunder",
        message: "You hear a massive rumble as Thunder emerges.",
        rarity: Rarity.MYTHIC,
    },
    JAWBUS: {
        name: "Lord Jawbus",
        message: "You have angered a legendary creature... Lord Jawbus has arrived",
        rarity: Rarity.MYTHIC,
    },
    // Crystal Hollows Lava
    FLAMING_WORM: {
        name: "Flaming Worm",
        message: "A flaming worm surfaces from the depths!",
        rarity: Rarity.RARE,
    },
    LAVA_BLAZE: {
        name: "Lava Blaze",
        message: "A Lava Blaze has surfaced from the depths!",
        rarity: Rarity.EPIC,
    },
    LAVA_PIGMAN: {
        name: "Lava Pigman",
        message: "A Lava Pigman arose from the depths!",
        rarity: Rarity.EPIC,
    },
};

var caughtSeaCreatures = new Map();
var firstCatch = 0;

register("chat", (message) => {
    let creature = getSeaCreatureByMessage(message);

    if (creature == null) {
        return;
    }

    if (!isCaughtAnySeaCreatures()) {
        firstCatch = Date.now();
    }

    if (caughtSeaCreatures.has(creature)) {
        caughtSeaCreatures.set(creature, caughtSeaCreatures.get(creature) + 1);
    } else {
        caughtSeaCreatures.set(creature, 1);
    }
}).setCriteria("${message}");

register("command", (arg) => {
    // scc          - Show caught creatures
    // scc clear    - Clear caught creatures
    // scc timer    - Start a 5 minute timer.
    if (arg == undefined) {
        if (!isCaughtAnySeaCreatures()) {
            info("You haven't caught anything yet!");
            return;
        }

        let fishingTime = formatTimeFromMillis(Date.now() - firstCatch);

        success(`You caught ${countTotalSeaCreatures()} sea creatures! &8(${fishingTime})`);

        const array = Array.from(caughtSeaCreatures);
        array.sort((a, b) => b[1] - a[1]);

        let toDisplay = new Map(array);

        toDisplay.forEach((count, key) => {
            const creature = SEA_CREATURES[key];
            const rarity = creature.rarity;

            info(`  &7${count} x ${rarity.color}${creature.name}`);
        });

        success("Use &e/scc reset&a to reset the counter.");

        return;
    }

    if (arg === "reset") {
        caughtSeaCreatures = new Map();
        firstCatch = 0;
        success("Reset counter!");
        return;
    }

    error("Improper usage! /scc [reset, timer]");
})
    .setName("seaCreatureCounter")
    .setAliases("scc");

function countTotalSeaCreatures() {
    let caught = 0;
    if (!isCaughtAnySeaCreatures()) {
        return caught;
    }

    caughtSeaCreatures.forEach((count, creature) => {
        caught += count;
    });

    return caught;
}

function isCaughtAnySeaCreatures() {
    return caughtSeaCreatures.size > 0;
}

function getSeaCreatureByMessage(message) {
    for (var creatureKey in SEA_CREATURES) {
        if (SEA_CREATURES.hasOwnProperty(creatureKey)) {
            var creature = SEA_CREATURES[creatureKey];

            if (creature.message === message) {
                return creatureKey;
            }
        }
    }

    return null;
}

function formatTimeFromMillis(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / 1000 / 60) % 60;
    const hours = Math.floor(milliseconds / 1000 / 60 / 60);

    let formattedTime = "";

    if (hours > 0) {
        formattedTime += `${hours}h `;
    }

    if (minutes > 0 || hours > 0) {
        formattedTime += `${minutes}m `;
    }

    formattedTime += `${seconds}s`;
    return formattedTime;
}
