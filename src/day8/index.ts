import { lines } from "../utils.ts"

export function part1(input: string): string {
  const inputLines = lines(input)
  const antennas = inputLines.flatMap((line, x) =>
    line
      .split("")
      .map((it, y) => ({ freq: it, x, y }))
      .filter(({ freq }) => freq !== "."),
  )

  const antennaMap = Object.groupBy(antennas, (it) => it.freq)
  const antinodes = inputLines.map((line) => line.split("").map(() => false))

  for (const freqAntennas of Object.values(antennaMap)) {
    for (const antenna of freqAntennas ?? []) {
      for (const otherAntenna of freqAntennas ?? []) {
        if (antenna.x === otherAntenna.x && antenna.y === otherAntenna.y) continue

        const xDiff = otherAntenna.x - antenna.x
        const yDiff = otherAntenna.y - antenna.y

        const antinodeX = otherAntenna.x + xDiff
        const antinodeY = otherAntenna.y + yDiff

        if (antinodeX >= 0 && antinodeX < inputLines.length && antinodeY >= 0 && antinodeY < inputLines[0].length) {
          antinodes[antinodeX][antinodeY] = true
        }
      }
    }
  }

  return antinodes
    .flat()
    .filter((it) => it)
    .length.toString()
}

export function part2(input: string): string {
  const inputLines = lines(input)
  const antennas = inputLines.flatMap((line, x) =>
    line
      .split("")
      .map((it, y) => ({ freq: it, x, y }))
      .filter(({ freq }) => freq !== "."),
  )

  const antennaMap = Object.groupBy(antennas, (it) => it.freq)
  const antinodes = inputLines.map((line) => line.split("").map(() => false))

  for (const freqAntennas of Object.values(antennaMap)) {
    for (const antenna of freqAntennas ?? []) {
      for (const otherAntenna of freqAntennas ?? []) {
        if (antenna.x === otherAntenna.x && antenna.y === otherAntenna.y) continue

        const xDiff = otherAntenna.x - antenna.x
        const yDiff = otherAntenna.y - antenna.y

        for (let i = 0; ; i++) {
          const antinodeX = otherAntenna.x + xDiff * i
          const antinodeY = otherAntenna.y + yDiff * i

          if (antinodeX >= 0 && antinodeX < inputLines.length && antinodeY >= 0 && antinodeY < inputLines[0].length) {
            antinodes[antinodeX][antinodeY] = true
          } else {
            break
          }
        }
      }
    }
  }

  return antinodes
    .flat()
    .filter((it) => it)
    .length.toString()
}
