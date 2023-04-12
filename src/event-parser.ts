import { Exception } from './exception'
import { ScoreSet, Match, ScoreFull, ScoreSets } from './types'
import { scoreFullToString, scoreSetsToString } from './utils'

class EventParser {
  makeEventName(match: Match): string {
    const separator = ['soccer', 'volleyball', 'basketball'].includes(match.sport)
      ? ' - '
      : ['tennis', 'handball'].includes(match.sport)
      ? ' vs '
      : null

    if (separator) return match.participant1 + separator + match.participant2

    throw new Exception('invalid sport')
  }

  formatScore(match: Match): string {
    if (['soccer', 'handball'].includes(match.sport)) return match.score as ScoreSet

    if (['tennis', 'volleyball'].includes(match.sport))
      return scoreSetsToString(match.score as ScoreSets)

    if (match.sport === 'basketball') scoreFullToString(match.score as ScoreFull)

    throw new Exception('invalid sport')
  }
}

export { EventParser }
