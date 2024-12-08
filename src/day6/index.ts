import { lines } from "../utils.ts"

export function part1(input: string): string {
  const map = lines(input).map((line) => line.split(""))
  const marked = simulate(map)

  return marked
    .flat()
    .filter((it) => it)
    .length.toString()
}

function findStart(map: string[][]) {
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === "^") {
        return [x, y]
      }
    }
  }

  throw new Error("No start found")
}

function simulate(map: string[][]) {
  const marked = map.map((line) => line.map(() => false))

  let [x, y] = findStart(map)
  let [dX, dY] = [-1, 0]

  while (x >= 0 && x < map.length && y >= 0 && y < map[x].length) {
    marked[x][y] = true

    const next = map[x + dX]?.[y + dY]

    if (next === "#") {
      const [newDX, newDY] = [dY, -dX]
      dX = newDX
      dY = newDY
    } else {
      x += dX
      y += dY
    }
  }

  return marked
}

export function part2(input: string): string {
  const map = lines(input).map((line) => line.split(""))
  const [startX, startY] = findStart(map)
  const path = simulate(map)

  let loopCount = 0

  for (let obstacleX = 0; obstacleX < path.length; obstacleX++) {
    for (let obstacleY = 0; obstacleY < path[obstacleX].length; obstacleY++) {
      if (!path[obstacleX][obstacleY]) continue

      loopCount += simulate2(map, startX, startY, obstacleX, obstacleY)
    }
  }

  return loopCount.toString()
}

function simulate2(map: string[][], startX: number, startY: number, obstacleX: number, obstacleY: number) {
  const visited = new Set<number>()

  let x = startX
  let y = startY
  let dX = -1
  let dY = 0

  while (true) {
    const nextX = x + dX
    const nextY = y + dY
    const next = map[nextX]?.[nextY]

    if (next === undefined) return 0

    if (next === "#" || (nextX === obstacleX && nextY === obstacleY)) {
      const key = ((x + 1) << 24) | ((y + 1) << 16) | ((dX + 1) << 8) | (dY + 1)

      if (visited.has(key)) return 1

      visited.add(key)

      const newDx = dY
      const newDy = -dX

      dX = newDx
      dY = newDy
    } else {
      x = nextX
      y = nextY
    }
  }
}
