describe("Tennis rules", ()=>{
  var rules = ""
  var counter
  var tennisRule
  beforeEach(()=>{
    counter = new Counter()
    tennisRule = new TennisRule();
  })

  it("should announce Love-Love" ,()=>{
    expect(tennisRule.announce(counter)).toEqual("Love-Love")
  })

  it("should announce 15-Love", ()=>{
    counter.scoreTo("A")
    expect(tennisRule.announce(counter)).toEqual("15-Love")
  })

  it("should announce 15-All", ()=>{
    counter.scoreTo("A")
    counter.scoreTo("B")
    expect(tennisRule.announce(counter)).toEqual("15-All")
  })

  it("should announce Deuce", ()=>{
    counter.scoreTo("A")
    counter.scoreTo("A")
    counter.scoreTo("A")
    counter.scoreTo("A")
    counter.scoreTo("B")
    counter.scoreTo("B")
    counter.scoreTo("B")
    counter.scoreTo("B")

    expect(tennisRule.announce(counter)).toEqual("Deuce")
  })
})
