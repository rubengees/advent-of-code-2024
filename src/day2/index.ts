import { lines } from "../utils.ts"

export function part1(input: string): string {
  const reports = lines(input)
  const safeReports = reports.filter(isSafe)

  return safeReports.length.toString()
}

function isSafe(report: string) {
  const numbers = report.split(" ").map((number) => Number.parseInt(number))

  for (let i = 1; i < numbers.length; i++) {
    const prevPrev = numbers[i - 2]
    const prev = numbers[i - 1]
    const current = numbers[i]
    const diff = Math.abs(prev - current)

    if (diff === 0 || diff > 3) return false
    if (prevPrev && prevPrev <= prev && prev >= current) return false
    if (prevPrev && prevPrev >= prev && prev <= current) return false
  }

  return true
}

export function part2(input: string): string {
  const reports = lines(input)

  const safeReports = reports.filter((it) => {
    const numbers = it.split(" ").map((number) => Number.parseInt(number))
    const variants = numbers.map((_, index) => numbers.toSpliced(index, 1))

    return variants.some((it) => isSafe(it.join(" ")))
  })

  return safeReports.length.toString()
}
