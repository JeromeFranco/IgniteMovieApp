import Config from '../Config/MovieDBConfig';

export default (detailResult, crewResult) => {

  if (detailResult) {
    const { id, name, title, backdrop_path, poster_path, first_air_date,
      release_date, overview, created_by, seasons } = detailResult;

    return {
      id,
      title: name || title,
      backdrop_path: `${Config.backdropUrl}${backdrop_path}`,
      poster_path: `${Config.posterUrl}${poster_path}`,
      first_air_date: first_air_date || release_date,
      overview,
      featuredCrew: created_by || crewResult,
      seasons
    };
  }
}
