var code = document.getElementById("code");
var showCode = document.getElementById("code_");
var i = 0;
var types = ["Void", "Int8", "Int16" ,"Int32", "Int64"];
var words = ["const", "let", "if", "union", "else", "return",
    "fun", "struct", "enum", "typedef", "goto", "while",
    "for", "do", "elif", "endif", "import", "define",
    "ifdef", "not", "equals", "Macro", "pragma", "volatil",
    "switch", "match", "case", "break", "loop", "continue",
    "stop", "default", "sizeof", "typeof", "assert", "extern",
    "pub", "asm", "static", "CLang", "true", "false",
    "then", "unreachable", "global", "in", "of", "at",
    "to", "from", "LG"];

const rows = code.innerHTML.split("<d></d>").map((_, i) => {
    return i % 2 == 0 && _.trim().startsWith("<span") ? new String() : _.split("\x0a")[0]
}).slice(1)

for (i; i < rows.length; i++) {
    var showLine = document.createElement("span");
    showLine.textContent = i + 1; //textContent para inserir o texto
    showCode.appendChild(showLine);
    if (rows[i].trim() == new String()) {
        showCode.appendChild(document.createElement("br"))
        continue
    }

    let buffer = new String();

    const chars = rows[i].split(new String());

    for (let j = 0; j < chars.length; j++) {
        const c = chars[j];

        if (!c.match(/[a-zA-Z0-9_]/)) {
            if (c == '"') {
                buffer += c;
                while (chars[++j] != '"') {
                    buffer += chars[j]
                }
                buffer += chars[j];
                var strSpan = document.createElement("span");
                strSpan.id = "str";
                strSpan.textContent = buffer; //textContent para inserir o texto
                strSpan.classList.add("string");
                showCode.appendChild(strSpan);
                buffer = new String();
                
                continue
            }

            if (buffer == new String()) {
                continue
            }

            if (words.includes(buffer)) {
                //span diretamente com a palavra dentro
                var keySpan = document.createElement("span");
                keySpan.id = buffer;
                keySpan.textContent = buffer; //textContent para inserir o texto
                keySpan.classList.add("keyword");
                showCode.appendChild(keySpan);
                j--;
            } else if (buffer.match(/[a-zA-Z_][a-zA-Z0-9_]*/)) {
                var idSpan = document.createElement("span");
                idSpan.id = buffer;
                idSpan.textContent = buffer; //textContent para inserir o texto
                idSpan.classList.add(types.includes(buffer)? "type": "identifier");
                showCode.appendChild(idSpan);
                j--;
            } else {
                var symbleSpan = document.createElement("span");
                symbleSpan.id = c == ':'?'collon': c == ' '? 'space': c == '#'? 'hashtag': 'symble';
                symbleSpan.textContent = c; //textContent para inserir o texto
                symbleSpan.classList.add("symble");
                showCode.appendChild(symbleSpan);
            }

            buffer = new String();
        } else {
            buffer += c
        }
    }

    showCode.appendChild(document.createElement("br"))


}

showCode.innerHTML = showCode.innerHTML.replaceAll((`
<span id="symble" class="symble">&amp;</span><span id="lt" class="identifier">lt</span><span id="symble" class="symble">;</span>
`).trim(), (`<span class="operator"><</span>`))