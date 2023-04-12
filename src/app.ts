import { matches } from './data'
import { EventParser } from './event-parser'
import { Exception } from './exception'

const matchesParsed = []
const parser = new EventParser()

for (const match of matches) {
  try {
    const name = parser.makeEventName(match)
    const score = parser.formatScore(match)

    matchesParsed.push({
      name,
      score
    })
  } catch (err: unknown) {
    if (!(err instanceof Exception)) throw err
  }
}

console.log(matchesParsed)
