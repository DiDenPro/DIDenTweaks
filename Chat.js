export function debug(string) {
    // to not remove debug statements, only show them to me :)
    if (Player.getName() !== "hapyl") {
        return;
    }
    send("&8" + string);
}

export function info(string) {
    send("&7" + string);
}

export function error(string) {
    send("&c" + string);
}

export function success(string) {
    send("&a" + string);
}

function send(string) {
    ChatLib.chat(string);
}
