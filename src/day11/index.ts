export function part1(input: string): string {
  const stones = input.split(" ").map((it) => Number.parseInt(it))

  let stoneMap = new Map(stones.map((it) => [it, 1]))
  for (let i = 0; i < 25; i++) {
    stoneMap = blink(stoneMap)
  }

  return stoneMap
    .values()
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}

function blink(stones: Map<number, number>): Map<number, number> {
  const result = new Map<number, number>()

  function add(stone: number, count: number) {
    result.set(stone, (result.get(stone) ?? 0) + count)
  }

  for (const [stone, count] of stones) {
    if (stone === 0) {
      add(1, count)
      continue
    }

    const digits = stone.toString()

    if (digits.length % 2 === 0) {
      const left = Number.parseInt(digits.slice(0, digits.length / 2))
      const right = Number.parseInt(digits.slice(digits.length / 2))

      add(left, count)
      add(right, count)
    } else {
      add(stone * 2024, count)
    }
  }

  return result
}

export function part2(input: string): string {
  const stones = input.split(" ").map((it) => Number.parseInt(it))

  let stoneMap = new Map(stones.map((it) => [it, 1]))
  for (let i = 0; i < 75; i++) {
    stoneMap = blink(stoneMap)
  }

  return stoneMap
    .values()
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}
