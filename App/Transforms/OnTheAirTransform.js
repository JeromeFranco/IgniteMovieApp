import Config from '../Config/MovieDBConfig';

export default (result) => {
  const { results } = result.data;
  if (results && results.length) {
    return results.filter((r, i) => i < 5)
      .map(r => ({
        ...r,
        type: 'tv',
        title: r.original_name,
        backdrop_path: `${Config.backdropUrl}${r.backdrop_path}`,
        poster_path: `${Config.posterUrl}${r.poster_path}`
      }));
  }
}
