var addTwoNumbersArrayList = function(l1, l2) {
    let remainder = 0;
    return l1.map((eachValue, index) => {
        const total = l2[index] ? eachValue + l2[index] + remainder : eachValue + remainder;
        const totalString = total.toString();
        if(totalString.length > 1) {
            remainder = Number(totalString.slice(0, -1));
            return Number(totalString[totalString.length - 1]);
        } else {
          return total;
        }
    });
};


const l1 = [2,4,3], l2 = [5,6,4];
const a1 = [9,9,9,9,9,9,9], a2 = [9,9,9,9];

console.log(addTwoNumbersArrayList(l1, l2));
console.log(addTwoNumbersArrayList(a1, a2));