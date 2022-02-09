import placeholder from "../../placeholder.png";

const imgDetails = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}

export default imgDetails
