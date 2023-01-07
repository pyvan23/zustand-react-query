import { Repos } from "../types/types"

interface Card {
    repo: Repos
}

export const Cards = ({ repo }: Card ) => {


    return (
        <div>
            <h1>{repo.name}</h1>
            <button>like</button>
        </div>
    )
}
