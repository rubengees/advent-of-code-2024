import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 4", () => {
  test("part 1 example", () => {
    const example = endent`
      MMMSXXMASM
      MSAMXMSMSA
      AMXSXMAAMM
      MSAMASMSMX
      XMASAMXAMM
      XXAMMXXAMA
      SMSMSASXSS
      SAXAMASAAA
      MAMMMXMMMM
      MXMXAXMASX
    `

    const result = part1(example)

    expect(result).toEqual("18")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day4/input.txt")).toString())

    expect(result).toEqual("2573")
  })

  test("part 2 example", () => {
    const example = endent`
      MMMSXXMASM
      MSAMXMSMSA
      AMXSXMAAMM
      MSAMASMSMX
      XMASAMXAMM
      XXAMMXXAMA
      SMSMSASXSS
      SAXAMASAAA
      MAMMMXMMMM
      MXMXAXMASX  
    `

    const result = part2(example)

    expect(result).toEqual("9")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day4/input.txt")).toString())

    expect(result).toEqual("1850")
  })
})
