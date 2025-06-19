class Storage {
    #items;
    
    constructor(startArray) {
        this.#items = startArray;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        
    }
}