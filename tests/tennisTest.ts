describe("Tennis rules", ()=>{
  var rules = ""
  var counter
  var tennisRule
  beforeEach(()=>{
    counter = new Counter()
    tennisRule = new TennisRule();
  })

  function scoreTo(player:string, score:Number, counter:Counter) {
      for(var i = 0; i < score; i++){
        counter.scoreTo(player)
      }
  }

  it("should announce Love-Love" ,()=>{
    expect(tennisRule.announce(counter)).toEqual("Love-Love")
  })

  it("should announce 15-Love", ()=>{
    scoreTo("A", 1, counter)
    expect(tennisRule.announce(counter)).toEqual("15-Love")
  })

  it("should announce 15-All", ()=>{
    scoreTo("A", 1, counter)
    scoreTo("B", 1, counter)
    expect(tennisRule.announce(counter)).toEqual("15-All")
  })

  it("should announce Deuce", ()=>{
    scoreTo("A", 4, counter)
    scoreTo("B", 4, counter)

    expect(tennisRule.announce(counter)).toEqual("Deuce")
  })
})
