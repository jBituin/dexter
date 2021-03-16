export default function(page) {
  // Display first 20 pokemons inside the Pokédex.
  // Fetch calls must be limit to 5 and offset starts at 1.
  const limit = 5;
  let offset = 1;

  if (page != 1) {
    // Calculate offset based on page with + 1 to ignore the initial offset
    offset = ((page - 1) * limit) + 1;
  }

  return `limit=${limit}&offset=${offset}`;
}
