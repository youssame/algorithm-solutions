class _Node {
    /**
     * The node for the Linked list
     * @param {any} value 
     * @param {any | undefined} next 
     */
    constructor(value, next = undefined, prev = undefined) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class Queue {
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue(item) {
        const node = new _Node(item);
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    dequeue() {
        if (!this.head) return undefined;
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        return head.value;
    }
    peek() {
        return this.head ? this.head.value : undefined;
    }
}

class Stack {
    constructor() {
        this.head = undefined;
        this.length = 0;
    }
    push(item) {
        const node = new _Node(item);
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop() {
        this.length = Math.max(0, this.length--);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head.value;
        }
        const head = this.head;
        this.head = head.prev;
        return head.value;
    }
    peak() {
        return this.head.value;
    }
}