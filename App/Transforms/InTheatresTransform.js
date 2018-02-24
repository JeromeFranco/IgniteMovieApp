import Config from '../Config/MovieDBConfig';

export default (result) => {
  console.log(result);
  const { results } = result.data;
  if (results && results.length) {
    return results.filter((r, i) => i < 5)
      .map(r => ({
        ...r,
        title: r.original_title,
        backdrop_path: `${Config.backdropUrl}${r.backdrop_path}`
      }));
  }
}
