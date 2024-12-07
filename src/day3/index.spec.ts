import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 3", () => {
  test("part 1 example", () => {
    const example = endent`
      xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
    `

    const result = part1(example)

    expect(result).toEqual("161")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day3/input.txt")).toString())

    expect(result).toEqual("173731097")
  })

  test("part 2 example", () => {
    const example = endent`
      xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
    `

    const result = part2(example)

    expect(result).toEqual("48")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day3/input.txt")).toString())

    expect(result).toEqual("93729253")
  })
})
