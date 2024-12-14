import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 10", () => {
  test("part 1 example", () => {
    const example = endent`
      89010123
      78121874
      87430965
      96549874
      45678903
      32019012
      01329801
      10456732
    `

    const result = part1(example)

    expect(result).toEqual("36")
  })

  test("part 1 example 2", () => {
    const example = endent`
      10..9..
      2...8..
      3...7..
      4567654
      ...8..3
      ...9..2
      .....01
    `

    const result = part1(example)

    expect(result).toEqual("3")
  })

  test("part 1 example 3", () => {
    const example = endent`
      ..90..9
      ...1.98
      ...2..7
      6543456
      765.987
      876....
      987....
    `

    const result = part1(example)

    expect(result).toEqual("4")
  })

  test("part 1 example 4", () => {
    const example = endent`
      ...0...
      ...1...
      ...2...
      6543456
      7.....7
      8.....8
      9.....9
    `

    const result = part1(example)

    expect(result).toEqual("2")
  })

  test("part 1 example 5", () => {
    const example = endent`
      0123
      1234
      8765
      9876
    `

    const result = part1(example)

    expect(result).toEqual("1")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day10/input.txt")).toString())

    expect(result).toEqual("794")
  })

  test("part 2 example", () => {
    const example = endent`
      89010123
      78121874
      87430965
      96549874
      45678903
      32019012
      01329801
      10456732
    `

    const result = part2(example)

    expect(result).toEqual("81")
  })

  test("part 2 example 2", () => {
    const example = endent`
      012345
      123456
      234567
      345678
      4.6789
      56789.
    `

    const result = part2(example)

    expect(result).toEqual("227")
  })

  test("part 2 example 3", () => {
    const example = endent`
      ..90..9
      ...1.98
      ...2..7
      6543456
      765.987
      876....
      987....
    `

    const result = part2(example)

    expect(result).toEqual("13")
  })

  test("part 2 example 4", () => {
    const example = endent`
      012345
      123456
      234567
      345678
      4.6789
      56789.
    `

    const result = part2(example)

    expect(result).toEqual("227")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day10/input.txt")).toString())

    expect(result).toEqual("1706")
  })
})
