import { lines } from "../utils.ts"

export function part1(input: string): string {
  const map = lines(input).map((line) => line.split(""))
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

export function part2(input: string): string {
  const map = lines(input).map((line) => line.split(""))
  const [startX, startY] = findStart(map)

  let loopCount = 0
  for (let obstacleX = 0; obstacleX < map.length; obstacleX++) {
    for (let obstacleY = 0; obstacleY < map[obstacleX].length; obstacleY++) {
      if (map[obstacleX][obstacleY] === "#") continue
      if (startX === obstacleX && startY === obstacleY) continue

      const marked = map.map((line) => line.map(() => ""))

      let [x, y] = [startX, startY]
      let [dX, dY] = [-1, 0]

      while (x >= 0 && x < map.length && y >= 0 && y < map[x].length) {
        const direction = directionToChar([dX, dY])

        if (marked[x][y].includes(direction)) {
          loopCount++
          break
        }

        marked[x][y] += direction

        const [nextX, nextY] = [x + dX, y + dY]
        const next = map[nextX]?.[nextY]

        if (next === "#" || (nextX === obstacleX && nextY === obstacleY)) {
          const [newDX, newDY] = [dY, -dX]
          dX = newDX
          dY = newDY
        } else {
          x += dX
          y += dY
        }
      }
    }
  }

  return loopCount.toString()
}

function directionToChar(direction: [number, number]) {
  if (direction[0] === 0 && direction[1] === 1) {
    return "1"
  }
  if (direction[0] === 1 && direction[1] === 0) {
    return "2"
  }
  if (direction[0] === 0 && direction[1] === -1) {
    return "3"
  }
  if (direction[0] === -1 && direction[1] === 0) {
    return "4"
  }
  throw new Error("Invalid direction")
}
