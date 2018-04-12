export const getPokemon =  async () => {
  try {
    const response = await fetch('http://localhost:3001/types');
    const apiData = await response.json();
    
  } catch (error) {
    throw error
  }
}