// let chessPiece;

function chessMoves(chessPiece) {
  switch (chessPiece.toLowerCase()) {
    case "rei":
    console.log("Todas as direções");
    break;
    case "rainha":
    console.log("Todas as direções");
    break;
    case "bisbo":
    console.log("Diagonais");
    break;
    case "cavalo":
    console.log("Em L");
    break;
    case "torre":
    console.log("Frente / Trás / Lados");
    break;
    case "peão":
    console.log("Frente");
    break;
    default:
    console.log("Entrada inválida");
    break;
  }
}

chessMoves("Peão");