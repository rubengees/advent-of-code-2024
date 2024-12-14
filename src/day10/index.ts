import { lines } from "../utils.ts"

export function part1(input: string): string {
  const map = lines(input).map((line) => line.split("").map((it) => Number.parseInt(it)))

  let count = 0
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[0].length; y++) {
      if (map[x][y] !== 0) continue

      const trails = findTrails(map, [{ x, y }])

      count += new Set(trails.map(({ x, y }) => x * 1000 + y)).size
    }
  }

  return count.toString()
}

type Pos = { x: number; y: number }

function findTrails(map: number[][], trail: Pos[]): Pos[] {
  const { x, y } = trail[trail.length - 1]
  const current = map[x][y]

  if (current === 9) return [{ x, y }]

  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ]

  return directions.flatMap(({ x: dx, y: dy }) => {
    const next = map[x + dx]?.[y + dy]

    if (next === current + 1) {
      return findTrails(map, trail.concat({ x: x + dx, y: y + dy }))
    }

    return []
  })
}

export function part2(input: string): string {
  const map = lines(input).map((line) => line.split("").map((it) => Number.parseInt(it)))

  let count = 0
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[0].length; y++) {
      if (map[x][y] !== 0) continue

      const trails = findTrails(map, [{ x, y }])

      count += trails.length
    }
  }

  return count.toString()
}
