export function part1(input: string): string {
  const regexResult = input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)

  return regexResult
    .map((it) => Number.parseInt(it[1]) * Number.parseInt(it[2]))
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}

export function part2(input: string): string {
  const regexResult = input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g)

  let sum = 0
  let enabled = true

  for (const part of regexResult) {
    if (part[0] === "do()") {
      enabled = true
    } else if (part[0] === "don't()") {
      enabled = false
    } else if (enabled) {
      sum += Number.parseInt(part[1]) * Number.parseInt(part[2])
    }
  }

  return sum.toString()
}
