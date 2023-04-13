import { Score, ScoreSets } from '../src/types'
import { scoreFullToString, scoreSetsToString } from '../src/utils'

describe('scoreFullToString', () => {
  it('should return expected string for basketball score', () => {
    const score: Score = [
      ['1:1', '3:3'],
      ['5:3', '9:9']
    ]

    expect(scoreFullToString(score)).toBe('1:1,3:3,5:3,9:9')
  })
})

describe('scoreSetsToString', () => {
  it('should return expected string for tennis score', () => {
    const score: ScoreSets = '1:2,4:6,6:0,6:7'

    expect(scoreSetsToString(score)).toBe('Main score: 1:2 (set0 4:6, set1 6:0, set2 6:7)')
  })
})
