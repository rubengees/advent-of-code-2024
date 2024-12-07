import { lines } from "../utils.ts"

export function part1(input: string): string {
  const [rules, updates] = input.split("\n\n")

  const rulesMap = new Map(lines(rules).map((it) => [it, true]))
  const updateLists = lines(updates).map((it) => it.split(",").map((it) => Number.parseInt(it)))

  const validUpdates = updateLists.filter((update) => isValid(update, rulesMap))

  return validUpdates
    .map((it) => it[Math.floor(it.length / 2)])
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}

function isValid(update: number[], rulesMap: Map<string, boolean>) {
  for (let i = 0; i < update.length; i++) {
    const current = update[i]

    for (let j = 0; j < i; j++) {
      if (rulesMap.has(`${current}|${update[j]}`)) {
        return false
      }
    }

    for (let j = i + 1; j < update.length; j++) {
      if (rulesMap.has(`${update[j]}|${current}`)) {
        return false
      }
    }
  }

  return true
}

export function part2(input: string): string {
  const [rules, updates] = input.split("\n\n")

  const rulesMap = new Map(lines(rules).map((it) => [it, true]))
  const updateLists = lines(updates).map((it) => it.split(",").map((it) => Number.parseInt(it)))

  const invalidUpdates = updateLists.filter((update) => !isValid(update, rulesMap))
  const fixedUpdates = invalidUpdates.map((it) => it.toSorted((a, b) => (isValid([a, b], rulesMap) ? -1 : 1)))

  return fixedUpdates
    .map((it) => it[Math.floor(it.length / 2)])
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}
