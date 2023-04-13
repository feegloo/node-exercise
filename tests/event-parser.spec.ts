import { EventParser } from '../src/event-parser'
import { Exception } from '../src/exception'
import type { Match } from '../src/types'

describe('EventParser', () => {
  describe('formatScore', () => {
    it('should throw for unsupported sport', () => {
      const eventParser = new EventParser()
      const match: Match = { sport: 'football' }

      expect(() => eventParser.formatScore(match)).toThrowError(Exception)
    })

    it('should return proper score for sport: "soccer"', () => {
      const eventParser = new EventParser()
      const match: Match = { sport: 'soccer', score: '0:1' }

      expect(eventParser.formatScore(match)).toBe('0:1')
    })

    it('should return score for sport: "tennis"', () => {
      const eventParser = new EventParser()
      const match: Match = { sport: 'tennis', score: '3:0,7:2,6:1,6:1' }

      expect(eventParser.formatScore(match)).toEqual(expect.any(String))
    })
  })

  describe('makeEventName', () => {
    it('should throw for unsupported sport', () => {
      const eventParser = new EventParser()
      const match: Match = { sport: 'baseball' }

      expect(() => eventParser.makeEventName(match)).toThrowError(Exception)
    })

    it('should return score for sport: "tennis"', () => {
      const eventParser = new EventParser()
      const match: Match = {
        sport: 'basketball',
        participant1: 'Chicago Bulls',
        participant2: 'Lakers'
      }

      expect(eventParser.makeEventName(match)).toEqual('Chicago Bulls - Lakers')
    })
  })
})
