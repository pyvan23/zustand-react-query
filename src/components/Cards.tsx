import { Repos } from "../types/types"
import { useFavouriteRepo } from '../store/reposList';


interface Card {
    repo: Repos,
    isFavorite: boolean
}

export const Cards = ({ repo, isFavorite }: Card) => {

    const addFavoriteRepo = useFavouriteRepo(state => state.addFavoriteRepo)
    const deleteFavoriteRepo = useFavouriteRepo(state => state.deleteFavoriteRepo)

    const toggleFavorites = () => {
        if (isFavorite) {
            deleteFavoriteRepo(repo.id)
            return
        }
        addFavoriteRepo(repo.id)
    }


    return (
        <div>
            <h1>{repo.name}</h1>
            <button onClick={toggleFavorites}>{isFavorite ? 'dislike' : 'like'}</button>
        </div>
    )
}
