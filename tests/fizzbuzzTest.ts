describe("fizzbuzz", function(){
  var fizzbuzz
  beforeEach(()=>{
      fizzbuzz = new Fizzbuzz()
  })
  
  it("should count 1", ()=>{      
      expect(fizzbuzz.count(1)).toEqual("1")
  })
  
  it("should count 2", ()=>{
      expect(fizzbuzz.count(2)).toEqual("2")
  })
  
  it("should count fizz", ()=>{
      expect(fizzbuzz.count(3)).toEqual("fizz")
  })
  
  it("should count buzz", ()=>{
      expect(fizzbuzz.count(5)).toEqual("buzz")
  })
  
    it("should count fizzbuzz", ()=>{
      expect(fizzbuzz.count(15)).toEqual("fizzbuzz")
  })
})
