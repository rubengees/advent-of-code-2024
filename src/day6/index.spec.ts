import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 6", () => {
  test("part 1 example", () => {
    const example = endent`
      ....#.....
      .........#
      ..........
      ..#.......
      .......#..
      ..........
      .#..^.....
      ........#.
      #.........
      ......#...
    `

    const result = part1(example)

    expect(result).toEqual("41")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day6/input.txt")).toString())

    expect(result).toEqual("4665")
  })

  test("part 2 example", () => {
    const example = endent`
      ....#.....
      .........#
      ..........
      ..#.......
      .......#..
      ..........
      .#..^.....
      ........#.
      #.........
      ......#...
    `

    const result = part2(example)

    expect(result).toEqual("6")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day6/input.txt")).toString())

    expect(result).toEqual("1688")
  })
})
