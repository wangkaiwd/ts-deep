type BreadType = 'rye' | 'brown' | 'white'

type Filling = 'cheese' | 'ham' | 'salami'

// permutation
type Sandwich = `${BreadType} sandwich with ${Filling}`

type SandwichOrBaguette = `${BreadType} ${`sandwich` | `baguette`} with ${Filling}`
