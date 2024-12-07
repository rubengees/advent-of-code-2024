import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 2", () => {
  test("part 1 example", () => {
    const example = endent`
      7 6 4 2 1
      1 2 7 8 9
      9 7 6 2 1
      1 3 2 4 5
      8 6 4 4 1
      1 3 6 7 9
    `

    const result = part1(example)

    expect(result).toEqual("2")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day2/input.txt")).toString())

    expect(result).toEqual("371")
  })

  test("part 2 example", () => {
    const example = endent`
      7 6 4 2 1
      1 2 7 8 9
      9 7 6 2 1
      1 3 2 4 5
      8 6 4 4 1
      1 3 6 7 9
    `

    const result = part2(example)

    expect(result).toEqual("4")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day2/input.txt")).toString())

    expect(result).toEqual("426")
  })
})
