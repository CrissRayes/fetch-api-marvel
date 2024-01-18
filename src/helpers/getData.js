// En la consulta a la API de marvel se han utilizado los siguientes parámetros:
// orderBy=-modified: ordena los resultados por fecha de modificación, de forma descendente
// limit=100: limita el número de resultados a 100
// ts=1: es un parámetro requerido por la API para el timestamp
// Se hizo de esta forma para luego aplicar el método sort() y ordenar los resultados por nombre


const getData = async () => {
  const url = 'https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=100&ts=1&apikey=9b47a875a6bc074de5b57f236d551413&hash=e7637815b05b0eb7de0568b7ff3e924f'
  const response = await fetch( url )
  const data = await response.json()
  const { results } = data.data
  const resultsAscending = results.sort( ( a, b ) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0 )

  const items = resultsAscending.map( item => (
    {
      id: item.id,
      name: item.name,
      description: item.description,
      src: `${item.thumbnail.path}.${item.thumbnail.extension}`
    } ) )

  console.log( items )
  return items

}

export default getData