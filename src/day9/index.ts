export function part1(input: string): string {
  const diskMap = input.split("").map((it) => Number.parseInt(it))
  const disk = renderDisk(diskMap)

  let next = disk.pop() ?? -1
  for (let i = 0; i < disk.length; i++) {
    if (disk[i] === -1) {
      disk[i] = next
      next = disk.pop() ?? -1

      while (next === -1) {
        next = disk.pop() ?? -1
      }
    }
  }

  disk.push(next)

  return disk.reduce((acc, curr, index) => acc + curr * index, 0).toString()
}

function renderDisk(diskMap: number[]) {
  return diskMap.reduce((acc: number[], curr: number, index: number) => {
    for (let i = 0; i < curr; i++) {
      if (index % 2 === 0) {
        acc.push(index / 2)
      } else {
        acc.push(-1)
      }
    }

    return acc
  }, [])
}

export function part2(input: string): string {
  const diskMap = input.split("").map((it) => Number.parseInt(it))
  const disk = renderDisk2(diskMap)

  for (let i = disk.length - 1; i >= 0; i -= 1) {
    const next = disk[i]

    if (next.id === -1) continue

    for (let j = 0; j < i; j++) {
      const current = disk[j]

      if (current.id === -1 && current.size >= next.size) {
        current.size -= next.size
        disk.splice(j, 0, next)
        disk[i + 1] = { id: -1, size: next.size }

        break
      }
    }
  }

  return disk
    .filter((it) => it.size > 0)
    .flatMap((it) => repeat(it.id === -1 ? 0 : it.id, it.size))
    .reduce((acc, curr, index) => acc + curr * index, 0)
    .toString()
}

type File = {
  id: number
  size: number
}

function renderDisk2(diskMap: number[]): File[] {
  return diskMap.reduce((acc: File[], curr: number, index: number) => {
    if (index % 2 === 0) {
      acc.push({ id: index / 2, size: curr })
    } else {
      acc.push({ id: -1, size: curr })
    }

    return acc
  }, [])
}

function repeat<T>(value: T, times: number): T[] {
  return Array(times).fill(value)
}
