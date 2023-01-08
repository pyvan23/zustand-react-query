import { Repos } from "../types/types"

interface Card {
    repo: Repos,
    isFavorite: boolean
}

export const Cards = ({ repo, isFavorite }: Card) => {


    return (
        <div>
            <h1>{repo.name}</h1>
            <button>like</button>
        </div>
    )
}
