"use strict";
class Counter {
    // constructor(Count: number){
    //     this.Count = Count
    // }
    static increment() {
        return Counter.Count = Counter.Count + 1;
    }
    static decrement() {
        return Counter.Count = Counter.Count - 1;
    }
}
Counter.Count = 0;
console.log(Counter.increment()); //0=>1
console.log(Counter.increment()); //1=>2
console.log(Counter.decrement()); //2=>1
