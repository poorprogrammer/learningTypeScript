describe("fizzbuzz", function(){
  it("should count 1", ()=>{
      var fizzbuzz = new Fizzbuzz()
      expect(fizzbuzz.count(1)).toEqual("1")
  })
})
