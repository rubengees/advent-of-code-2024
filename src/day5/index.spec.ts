import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 5", () => {
  test("part 1 example", () => {
    const example = endent`
      47|53
      97|13
      97|61
      97|47
      75|29
      61|13
      75|53
      29|13
      97|29
      53|29
      61|53
      97|53
      61|29
      47|13
      75|47
      97|75
      47|61
      75|61
      47|29
      75|13
      53|13
      
      75,47,61,53,29
      97,61,53,29,13
      75,29,13
      75,97,47,61,53
      61,13,29
      97,13,75,29,47
    `

    const result = part1(example)

    expect(result).toEqual("143")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day5/input.txt")).toString())

    expect(result).toEqual("6034")
  })

  test("part 2 example", () => {
    const example = endent`
      47|53
      97|13
      97|61
      97|47
      75|29
      61|13
      75|53
      29|13
      97|29
      53|29
      61|53
      97|53
      61|29
      47|13
      75|47
      97|75
      47|61
      75|61
      47|29
      75|13
      53|13
      
      75,47,61,53,29
      97,61,53,29,13
      75,29,13
      75,97,47,61,53
      61,13,29
      97,13,75,29,47
      `

    const result = part2(example)

    expect(result).toEqual("123")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day5/input.txt")).toString())

    expect(result).toEqual("6305")
  })
})
