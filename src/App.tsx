import { useFetchRepos } from './hooks/useRepos';


function App() {

  const { data, isLoading } = useFetchRepos()

  if(isLoading) return <div>Loading...</div>
  

  return (
    
  )
}

export default App