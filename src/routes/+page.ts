// export async function load() {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   const data = await response.json();
//   const countries = data.map((country: { name: { common: any; }; }) => country.name.common);
//   return { countries };
// }