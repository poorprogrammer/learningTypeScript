class Fizzbuzz{
    count(value:number){       
        if(this.isModulusByThree(value) && this.isModulusByFive(value))
            return "fizzbuzz"
        if(this.isModulusByThree(value))
            return "fizz"
         if(this.isModulusByFive(value))
             return "buzz"
        return String(value)      
    }
        
    isModulusByFive(value:number): boolean {
        return value % 5 == 0
    }
    
    isModulusByThree(value:number): boolean {
        return value % 3 == 0
    }
}