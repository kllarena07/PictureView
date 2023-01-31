export const load = async () => {
  const fetchPictures = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_UNSPLASHED_ACCESS_KEY}`)
    const data = await res.json()
    return data
  }

  return {
    pictures: fetchPictures()
  }
}