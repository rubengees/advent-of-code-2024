import { lines } from "../utils.ts"

export function part1(input: string): string {
  const equations = lines(input).map((line) => {
    const [result, operands] = line.split(": ")

    return { result: Number.parseInt(result), operands: operands.split(" ").map((it) => Number.parseInt(it)) }
  })

  const validEquations = equations.filter(({ result, operands }) => {
    let currentResults = new Set<number>(operands.slice(0, 1))

    for (const operand of operands.slice(1)) {
      const newResults = new Set<number>()

      for (const currentResult of currentResults) {
        newResults.add(currentResult + operand)
        newResults.add(currentResult * operand)
      }

      currentResults = newResults
    }

    return currentResults.has(result)
  })

  return validEquations.reduce((acc, { result }) => acc + result, 0).toString()
}

export function part2(input: string): string {
  const equations = lines(input).map((line) => {
    const [result, operands] = line.split(": ")

    return { result: Number.parseInt(result), operands: operands.split(" ").map((it) => Number.parseInt(it)) }
  })

  const validEquations = equations.filter(({ result, operands }) => {
    let currentResults = new Set<number>(operands.slice(0, 1))

    for (const operand of operands.slice(1)) {
      const newResults = new Set<number>()

      for (const currentResult of currentResults) {
        newResults.add(currentResult + operand)
        newResults.add(currentResult * operand)
        newResults.add(append(currentResult, operand))
      }

      currentResults = newResults
    }

    return currentResults.has(result)
  })

  return validEquations.reduce((acc, { result }) => acc + result, 0).toString()
}

function append(a: number, b: number) {
  return a * 10 ** Math.floor(Math.log10(b) + 1) + b
}
