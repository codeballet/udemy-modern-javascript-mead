const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}


const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')

  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch the country')
  }
}


const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=ced116f8532b3e')
  
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch location')
  }
}


const getCurrentCountry = async () => {
  const location = await getLocation()
  const country = await getCountry(location.country)
  return country
}