import create from "zustand";

type favoriteReposState = {
    favoritesReposId: number[],
    addFavoriteRepo: (id: number) => void,
    deleteFavoriteRepo: (id: number) => void,
}


export const useFavouriteRepo = create<favoriteReposState>((set) => ({
    favoritesReposId: [],
    addFavoriteRepo: (id: number) => set((state) => ({
        favoritesReposId: [...state.favoritesReposId, id]
    })),
    
    deleteFavoriteRepo: (id: number) => set(state => ({
        favoritesReposId: state.favoritesReposId.filter(repoId => repoId !== id)
    }))

}


}))

