type ScoreSet = string

type ScoreSets = string

type ScoreHalf = [ScoreSet, ScoreSet]

type ScoreFull = [ScoreHalf, ScoreHalf]

type Score = ScoreSet | ScoreFull

type Match = {
  sport: string
  participant1?: string
  participant2?: string
  score?: Score
}

export type { Match, Score, ScoreFull, ScoreSet, ScoreSets }
