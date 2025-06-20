class StringBuilder {
    #value;

    constructor(mainStr) {
        this.#value = mainStr;
    }

    getValue() {
        return this.#value;
    }

    padEnd(suffix) {
        this.#value = this.#value + suffix;
    }
    
    padStart(prefix) {
        this.#value = prefix + this.#value;
    }
    
    padBoth(wrap) {
        this.padEnd(wrap);
        this.padStart(wrap);
    }

}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
