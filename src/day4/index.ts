import { lines } from "../utils.ts"

export function part1(input: string): string {
  const matrix = lines(input).map((line) => line.split(""))

  let sum = 0
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === "X") {
        const possibilities = directions.map(([dx, dy]) =>
          Array.from({ length: 3 }, (_, i) => matrix[x + (i + 1) * dx]?.[y + (i + 1) * dy]).join(""),
        )

        sum += possibilities.filter((it) => it === "MAS").length
      }
    }
  }

  return sum.toString()
}

const directions = [
  [1, 0], // right
  [1, 1], // bottom-right
  [0, 1], // bottom
  [-1, 1], // bottom-left
  [-1, 0], // left
  [-1, -1], // top-left
  [0, -1], // top
  [1, -1], // top-right
]

export function part2(input: string): string {
  const matrix = lines(input).map((line) => line.split(""))

  let sum = 0
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === "A") {
        const left = matrix[x - 1]?.[y - 1] + matrix[x + 1]?.[y + 1]
        const right = matrix[x + 1]?.[y - 1] + matrix[x - 1]?.[y + 1]

        if (["MS", "SM"].includes(left) && ["MS", "SM"].includes(right)) {
          sum++
        }
      }
    }
  }

  return sum.toString()
}
