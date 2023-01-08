import { Cards } from './components/Cards';
import { useFetchRepos } from './hooks/useRepos';
import { useFavouriteRepo } from './store/reposList';


function App() {

  const { data, isLoading } = useFetchRepos()
  const { favoritesReposId } = useFavouriteRepo()

  if (isLoading) return <div>Loading...</div>

  console.log(data)
  return (
    <div>
      {data?.map(repo => (
        <Cards key={repo.id} repo={repo} isFavorite={favoritesReposId.includes(repo.id)} />
      ))}


    </div>

  )
}

export default App