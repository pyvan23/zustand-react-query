import create from "zustand";

type favoriteReposState = {
    favoritesReposId: number[],
    addFavoriteRepo: (id: number) => void,
    deleteFavoriteRepo: (id: number) => void,
}


export const useFavouriteRepo = create<favoriteReposState>(() => ({
    favoritesReposId: [],
    addFavoriteRepo:(id:number)=>{},
    deleteFavoriteRepo:(id:number)=>{}


}))

