import { scoreFullToString, scoreSetsToString } from '@/utils'

describe('scoreFullToString', () => {
  it('should return expected string for basketball score', () => {
    expect(
      scoreFullToString([
        ['1:1', '3:3'],
        ['5:3', '9:9']
      ])
    ).toBe('1:1,3:3,5:3,9:9')
  })
})

describe('scoreSetsToString', () => {
  it('should return expected string for tennis score', () => {
    expect(scoreSetsToString('1:2,4:6,6:0,6:7')).toBe(
      'Main score: 1:2 (set0 4:6, set1 6:0, set2 6:7)'
    )
  })
})
