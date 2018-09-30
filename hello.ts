declare interface String {
    isEmpty(): boolean
}

String.prototype.isEmpty = function () {
    return this.length === 0;
};

console.log(''.isEmpty());
console.log('abc'.isEmpty());

// This file must NOT be a module to `declare global`, so we comment the next line
// export default '';
