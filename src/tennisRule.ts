class Counter {
  playerAScore = 0
  playerBScore = 0
  scoreTo(player:string) {
    if(player=="A"){
      this.playerAScore++
    }else{
      this.playerBScore++
    }
  }
}

class TennisRule {
  announce(counter:Counter): string {
    if(counter.playerAScore == counter.playerBScore){
      if(this.isGameStart(counter))
        return "Love-Love"
      if(this.isDeuce(counter))
        return "Deuce"
      return "15-All"
    }
    if(counter.playerAScore == 1)
      return "15-Love"
  }

  isGameStart(counter:Counter):boolean {
    return counter.playerAScore==0&&counter.playerBScore==0
  }
  isDeuce(counter:Counter):boolean {
    return counter.playerAScore==4&&counter.playerBScore==4
  }
}
