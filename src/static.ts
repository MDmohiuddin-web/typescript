class Counter {
    private static Count: number = 0;
    // constructor(Count: number){
    //     this.Count = Count

    // }
    static increment(): number {
        return Counter.Count = Counter.Count + 1
    }
    static decrement(): number {
        return Counter.Count = Counter.Count - 1
    }


}

console.log(Counter.increment()); //0=>1
console.log(Counter.increment()); //1=>2
console.log(Counter.decrement()); //2=>1