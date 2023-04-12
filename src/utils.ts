import { ScoreFull, ScoreSets } from './types'

function scoreSetsToString(score: ScoreSets) {
  const scoresRegExp = /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/

  const scores = scoresRegExp.exec(score)?.slice(1)
  const mainScore = scores?.shift()

  const setsString = scores?.map((score, index) => `set${index} ${score}`).join(', ')

  return `Main score: ${mainScore} (${setsString})`
}

function scoreFullToString(scoreFull: ScoreFull) {
  return scoreFull.map((scoreHalf) => scoreHalf.join(',')).join(',')
}

export { scoreSetsToString, scoreFullToString }
