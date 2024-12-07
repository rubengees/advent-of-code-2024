import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 1", () => {
  test("part 1 example", () => {
    const example = endent`
      3   4
      4   3
      2   5
      1   3
      3   9
      3   3
    `

    const result = part1(example)

    expect(result).toEqual("11")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day1/input.txt")).toString())

    expect(result).toEqual("1590491")
  })

  test("part 2 example", () => {
    const example = endent`
      3   4
      4   3
      2   5
      1   3
      3   9
      3   3
    `

    const result = part2(example)

    expect(result).toEqual("31")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day1/input.txt")).toString())

    expect(result).toEqual("22588371")
  })
})
