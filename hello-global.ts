declare global {
    interface String {
        isEmpty(): boolean
    }
}

String.prototype.isEmpty = function () {
    return this.length === 0;
};

console.log(''.isEmpty());
console.log('abc'.isEmpty());

// This file MUST be a module to `declare global`,
// so we need to have a `export` (or `import`)
// if missing, we will get such error:
// TS2669: Augmentations for the global scope can only be directly nested in external modules or ambient module declarations
export default '';
