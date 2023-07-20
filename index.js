import { TROPHYFISHES } from "./trophyFishes"

//check for file
function load(){
    return FileLib.read("FishingHelper","obtainedTrophyFishes.json")
}

function saveData(){
    FileLib.write("FishingHelper","obtainedTrophyFishes.json", JSON.stringify(TROPHYFISHES))
}

function checkForMissingFishes(){
    TROPHYFISHES.forEach( tf =>{
        if(tf.bronze && tf.silver && tf.gold && tf.diamond) return

        let name = tf.type + "&l" + tf.name + "&f"
        if(!tf.bronze)
            name += " &8[❂]"
        if(!tf.silver)
            name += " &7[❂]"
        if(!tf.gold)
            name += " &6[❂]"
        if(!tf.diamond)
            name += " &b[❂]"
        const hoverText = new TextComponent(" > " + name).setHoverValue(tf.description)
            ChatLib.chat(hoverText)
    })
}

//check if the file not exist
if(!load()){
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
        let inventorySize = Player?.getContainer()?.getSize() - 36
        for (i = 10; i < 32; i++) {
            let item = Player?.getContainer()?.getStackInSlot(i)
            let itemName = ChatLib.removeFormatting(item?.getName()?.toString())
            if (itemName === "" || itemName === " ") continue
            if (TROPHYFISHES.find(fish => fish.name === itemName)) {
                let fish = TROPHYFISHES.find(fish => fish.name === itemName)
                item.getLore().forEach(lore => {
                    let nFLore = ChatLib.removeFormatting(lore)
                    if (nFLore.includes("Bronze ✔"))
                        fish.bronze = true
                    if (nFLore.includes("Silver ✔"))
                        fish.silver = true
                    if (nFLore.includes("Gold ✔"))
                        fish.gold = true
                    if (nFLore.includes("Diamond ✔"))
                        fish.diamond = true
                })
            }
        }
    }
    saveData()
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
        ChatLib.chat(ChatLib.getCenteredText(" &6&lMISSING TROPHY FISHES&f"))
        ChatLib.chat("")
        checkForMissingFishes()
    }
}).setName("trophyfishhelper").setAliases("tfh", "tf")

register("chat", (message) => {
    if (message.includes("TROPHY FISH! You caught a ")){
        const FISHnRARITY = message.slice(26)
        const FISH = FISHnRARITY.slice(0, FISHnRARITY.lastIndexOf(" "))
        const RARITY = FISHnRARITY.slice(FISHnRARITY.lastIndexOf(" ")+1, FISHnRARITY.indexOf("."))

        let fish = TROPHYFISHES.find(fish => fish.name === FISH)
        if(ChatLib.removeFormatting(RARITY).toLowerCase() == "bronze")
            if(!fish.bronze){
                fish.bronze = true
                saveData()
            }
        if(ChatLib.removeFormatting(RARITY).toLowerCase() == "silver")
            if(!fish.silver){
                fish.silver = true
                saveData()
            }
        if(ChatLib.removeFormatting(RARITY).toLowerCase() == "gold")
            if(!fish.gold){
                fish.gold = true
                saveData()
            }
        if(ChatLib.removeFormatting(RARITY).toLowerCase() == "diamond")
            if(!fish.diamond){
                fish.diamond = true
                saveData()
            }
    }
}).setCriteria("${message}")