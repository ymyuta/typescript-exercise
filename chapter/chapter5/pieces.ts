// チェスの駒
abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    cow: Cow,
    rank: Rank,
  ) {
    this.position = new Position(cow, rank)
  }
  moveTo(position: Position) {
    this.position = position
  }
  abstract canMoveTo(position: Position): boolean
}

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.cow < 2
  }
}

// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}