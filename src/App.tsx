import { Cards } from './components/Cards';
import { useFetchRepos } from './hooks/useRepos';
import { useFavouriteRepo } from './store/reposList';


function App() {

  const { data, isLoading } = useFetchRepos()
  const { addFavoriteRepo, deleteFavoriteRepo, favoritesReposId } = useFavouriteRepo()

  if (isLoading) return <div>Loading...</div>

  console.log(data)
  return (
    <div>
      {data?.map(repo => (
        <Cards key={repo.id} repo={repo} />
      ))}


    </div>

  )
}

export default App