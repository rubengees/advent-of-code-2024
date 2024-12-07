import { lines } from "../utils.ts"

export function part1(input: string): string {
  const left = lines(input).map((line) => Number.parseInt(line.split("   ")[0]))
  const right = lines(input).map((line) => Number.parseInt(line.split("   ")[1]))

  const sortedLeft = left.sort((a, b) => a - b)
  const sortedRight = right.sort((a, b) => a - b)

  const result = sortedLeft
    .map((value, index) => Math.abs(value - sortedRight[index]))
    .reduce((acc, curr) => acc + curr, 0)

  return result.toString()
}

export function part2(input: string): string {
  const left = lines(input).map((line) => Number.parseInt(line.split("   ")[0]))
  const right = lines(input).map((line) => Number.parseInt(line.split("   ")[1]))

  const rightGrouped = Object.groupBy(right, (value) => value)

  return left
    .map((value) => value * (rightGrouped[value]?.length ?? 0))
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}
