enum ReactionType {
  HEART = 'HEART',
  LIKE = 'LIKE',
  FIRE = 'FIRE',
}

interface Reaction {
  reaction: ReactionType;
}

export default Reaction;
