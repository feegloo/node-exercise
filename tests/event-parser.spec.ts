import { EventParser } from '@/event-parser'
import { Exception } from '@/exception'

describe('EventParser', () => {
  describe('formatScore', () => {
    it('should throw for unsupported sport', () => {
      const eventParser = new EventParser()

      expect(() => eventParser.formatScore({ sport: 'football' })).toThrowError(Exception)
    })

    it('should return proper score for sport: "soccer"', () => {
      const eventParser = new EventParser()

      expect(eventParser.formatScore({ sport: 'soccer', score: '0:1' })).toBe('0:1')
    })

    it('should return score for sport: "tennis"', () => {
      const eventParser = new EventParser()

      expect(eventParser.formatScore({ sport: 'tennis', score: '3:0,7:2,6:1,6:1' })).toEqual(
        expect.any(String)
      )
    })
  })

  describe('makeEventName', () => {
    it('should throw for unsupported sport', () => {
      const eventParser = new EventParser()

      expect(() => eventParser.makeEventName({ sport: 'baseball' })).toThrowError(Exception)
    })

    it('should return score for sport: "tennis"', () => {
      const eventParser = new EventParser()

      expect(
        eventParser.makeEventName({
          sport: 'basketball',
          participant1: 'Chicago Bulls',
          participant2: 'Lakers'
        })
      ).toEqual('Chicago Bulls - Lakers')
    })
  })
})
