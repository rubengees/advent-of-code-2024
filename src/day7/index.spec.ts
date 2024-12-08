import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 7", () => {
  test("part 1 example", () => {
    const example = endent`
      190: 10 19
      3267: 81 40 27
      83: 17 5
      156: 15 6
      7290: 6 8 6 15
      161011: 16 10 13
      192: 17 8 14
      21037: 9 7 18 13
      292: 11 6 16 20
    `

    const result = part1(example)

    expect(result).toEqual("3749")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day7/input.txt")).toString())

    expect(result).toEqual("1153997401072")
  })

  test("part 2 example", () => {
    const example = endent`
      190: 10 19
      3267: 81 40 27
      83: 17 5
      156: 15 6
      7290: 6 8 6 15
      161011: 16 10 13
      192: 17 8 14
      21037: 9 7 18 13
      292: 11 6 16 20
    `

    const result = part2(example)

    expect(result).toEqual("11387")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day7/input.txt")).toString())

    expect(result).toEqual("97902809384118")
  })
})
