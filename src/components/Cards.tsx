import { Repos } from "../types/types"
import { useFavouriteRepo } from '../store/reposList';

interface Card {
    repo: Repos,
    isFavorite: boolean
}

export const Cards = ({ repo, isFavorite }: Card) => {
    const {addFavoriteRepo,deleteFavoriteRepo} = useFavouriteRepo()

    return (
        <div>
            <h1>{repo.name}</h1>
            <button>{ isFavorite ? 'dislike' : 'like' }</button>
        </div>
    )
}
