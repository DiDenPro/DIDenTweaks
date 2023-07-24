import { TROPHYFISHES } from "./trophyFishes"

//check for file
function loadTrophyFishes(){
    return FileLib.read("FishingHelper","obtainedTrophyFishes.json")
}

function saveData(){
    FileLib.write("FishingHelper","obtainedTrophyFishes.json", JSON.stringify(TROPHYFISHES))
}

function checkForMissingFishes(){
    for (var fishKey in TROPHYFISHES) {
        var fish = TROPHYFISHES[fishKey];
        if (!fish.bronze.caught || !fish.silver.caught || !fish.gold.caught || !fish.diamond.caught) {
            let name = `&l${fish.name}&f`;
            if (!fish.bronze.caught) name += " &8[❂]";
            if (!fish.silver.caught) name += " &7[❂]";
            if (!fish.gold.caught) name += " &6[❂]";
            if (!fish.diamond.caught) name += " &b[❂]";
            var hoverText = new TextComponent(` > ${name}`).setHoverValue(fish.description);
            ChatLib.chat(hoverText);
        }
      }
}

function getFishByName(itemName){
    for (var fishName in TROPHYFISHES) {
        if (TROPHYFISHES[fishName].name === itemName) return TROPHYFISHES[fishName]
    }
    return null
}

//check if the file not exist
if(!loadTrophyFishes()){
    saveData()
}
else{
    TROPHYFISHES = JSON.parse(FileLib.read("FishingHelper","obtainedTrophyFishes.json"))
}

//REGISTERS
//Take information about players TrophyFishes
register("step", () => {
    let openedInventory = Player?.getContainer()?.getName()?.toString()
    if (openedInventory === "Trophy Fishing") {
        //let inventorySize = Player?.getContainer()?.getSize() - 36
        for (i = 10; i < 32; i++) {
            let item = Player?.getContainer()?.getStackInSlot(i)
            let itemName = ChatLib.removeFormatting(item?.getName()?.toString())
            if (itemName === "" || itemName === " ") continue
            
            let fish = getFishByName(itemName)
            item.getLore().forEach(lore => {
                let nFLore = ChatLib.removeFormatting(lore)
                if (nFLore.includes("Bronze ✔"))
                    fish.bronze.caught = true
                if (nFLore.includes("Silver ✔"))
                    fish.silver.caught = true
                if (nFLore.includes("Gold ✔"))
                    fish.gold.caught = true
                if (nFLore.includes("Diamond ✔"))
                    fish.diamond.caught = true
            })
        }
        saveData()
    }
}).setFps(3)

//Module commands
register("command", (arg0) => {
    //help menu
    if (arg0.toLowerCase() === "help") {
        ChatLib.chat(ChatLib.getChatBreak("&b&m "))
        ChatLib.chat(ChatLib.getCenteredText(" &6&lFISHING HELPER&f"))
        ChatLib.chat(ChatLib.getCenteredText(" &6&lv1.0.0&f\n"))
        ChatLib.chat("&c/tf help - &7&oshow this menu")
        ChatLib.chat("&c/tf missing - &7&oshows missing TrophyFish (don't forget to talk with Odger before using this command)")
        ChatLib.chat("&c/tf creator - &7&oinfo about the creator...")
        ChatLib.chat(ChatLib.getChatBreak("&b&m-"))
    }

    //Cretor info
    if (arg0.toLowerCase() === "creator") {
        ChatLib.chat("&c&lCreator: &b[MVP&e+&b] DiDenPro")
    }

    //write missing trophyFishes to chat
    if (arg0.toLowerCase() === "missing") {
        ChatLib.chat("\n")
        ChatLib.chat(ChatLib.getCenteredText(" &6&lMISSING TROPHY FISH&f"))
        ChatLib.chat("")
        checkForMissingFishes()
    }

    //Show obtained TrophyFish count
    if(arg0.toLowerCase() === "count"){
        ChatLib.chat("\n")
        ChatLib.chat(ChatLib.getCenteredText(" &6&lOBTAINED TROPHY FISH COUNTER&f"))
        for (var fishKey in TROPHYFISHES){
            let count = ` >${TROPHYFISHES[fishKey].name} &8[${TROPHYFISHES[fishKey].bronze.count}] &7[${TROPHYFISHES[fishKey].silver.count}] &6[${TROPHYFISHES[fishKey].gold.count}] &b[${TROPHYFISHES[fishKey].diamond.count}]`
            ChatLib.chat(count)
        }
    }
}).setName("trophyfishhelper").setAliases("tfh", "tf")

register("chat", (message) => {
    if (message.includes("TROPHY FISH! You caught a ")){
        const FISHnRARITY = message.slice(26)
        const FISHNAME = FISHnRARITY.slice(0, FISHnRARITY.lastIndexOf(" "))
        const RARITY = FISHnRARITY.slice(FISHnRARITY.lastIndexOf(" ")+1, FISHnRARITY.indexOf("."))
        var updatedRarity = ChatLib.removeFormatting(RARITY).toLowerCase()

        var fish = getFishByName(FISHNAME)
        fish[updatedRarity].count += 1
        if (!fish[updatedRarity].caught) 
        {
            fish[updatedRarity].caught = true
        }      
        saveData()
    }
}).setCriteria("${message}")

// TODO: add GUI