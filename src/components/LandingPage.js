import { useQuery } from "./hooks/useQuery";
import Movies from "./Movies";
import { useDebounce } from "./hooks/useDebounce";

const LandingPage = () => {
  const query = useQuery();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 500)

  return (
    <div>
      <Movies key={debouncedSearch} search={debouncedSearch}/>
    </div>
  )
}

export default LandingPage;
