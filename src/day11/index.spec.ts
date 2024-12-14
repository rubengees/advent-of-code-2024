import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 11", () => {
  test("part 1 example", () => {
    const example = endent`
      125 17
    `

    const result = part1(example)

    expect(result).toEqual("55312")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day11/input.txt")).toString())

    expect(result).toEqual("185894")
  })

  test("part 2 example", () => {
    const example = endent`
      125 17
    `

    const result = part2(example)

    expect(result).toEqual("65601038650482")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day11/input.txt")).toString())

    expect(result).toEqual("221632504974231")
  })
})
