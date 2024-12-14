import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 9", () => {
  test("part 1 example", () => {
    const example = endent`
      2333133121414131402
    `

    const result = part1(example)

    expect(result).toEqual("1928")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day9/input.txt")).toString())

    expect(result).toEqual("6367087064415")
  })

  test("part 2 example", () => {
    const example = endent`
      2333133121414131402
    `

    const result = part2(example)

    expect(result).toEqual("2858")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day9/input.txt")).toString())

    expect(result).toEqual("6390781891880")
  })
})
