class Solution {
    constructor(name) {
        this.name = name;
    }

    A = () => {
        console.log("Hello from function A.");
        console.log(`Printing ${this.name} from function A.`);
    }

    B = () => {
        console.log("Hello from function B.");
        console.log(`Printing ${this.name} from function B.`);
    }

    C = () => {
        console.log("Hello from function C.");
        console.log(`Printing ${this.name} from function C.`);
    }

    D = () => {
        console.log("Hello from function D.");
        console.log(`Printing ${this.name} from function D.`);
    }
}
let obj = new Solution("Mani");
obj.A();
obj.B();
obj.C();
obj.D();
