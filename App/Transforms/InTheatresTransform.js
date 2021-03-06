import Config from '../Config/MovieDBConfig';

export default (result) => {
  const { results } = result.data;
  if (results && results.length) {
    return results.filter((r, i) => i < 5)
      .map(r => ({
        ...r,
        type: 'movie',
        title: r.original_title,
        backdrop_path: `${Config.backdropUrl}${r.backdrop_path}`
      }));
  }
}
