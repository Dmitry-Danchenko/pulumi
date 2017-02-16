// This tests the code-generated expansion of a switch statement.

function sw(v: string): string {
    let result: string = "";
    switch (v) {
        case "a":
            result += "a";
            break;
        case "b":
            result += "b";
        default:
            result += "d";
            break;
    }
    return result;
}

let a = sw("a");
if (a !== "a") {
    throw "Expected 'a'; got '" + a + "'";
}

let b = sw("b");
if (b !== "bd") {
    throw "Expected 'bd'; got '" + b + "'";
}

let d = sw("d");
if (d !== "d") {
    throw "Expected 'd'; got '" + d + "'";
}

