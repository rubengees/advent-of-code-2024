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
    for (let obstacleY = 0; obstacleY < map[0].length; obstacleY++) {
      const visited = new Set<string>()

      let [x, y] = [startX, startY]
      let [dX, dY] = [-1, 0]

      while (true) {
        const key = `${x}|${y}|${dX}|${dY}`

        if (visited.has(key)) {
          loopCount++
          break
        }

        visited.add(key)

        const [nextX, nextY] = [x + dX, y + dY]
        const next = map[nextX]?.[nextY]

        if (next === undefined) {
          break
        }

        if (next === "#" || (nextX === obstacleX && nextY === obstacleY)) {
          ;[dX, dY] = [dY, -dX]
        } else {
          x = nextX
          y = nextY
        }
      }
    }
  }

  return loopCount.toString()
}
