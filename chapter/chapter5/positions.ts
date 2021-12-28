type Color = 'Black' | 'White'
type Cow = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// 駒の位置(座標)
class Position {
  constructor(
    private cow: Cow,
    private rank: Rank,
  ) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      cow: Math.abs(position.cow.charCodeAt(0) - this.cow.charCodeAt(0)),
    }
  }
}