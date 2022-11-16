type Artist = {
  id: string
  name: string
}

type Album = {
  id: string
  albumName: string
}

type Ratings = {
  albumId: string
  rates: number[]
}

type MusicRecord = {
  id: string
  artist: Artist
  album: Album
  ratings: Ratings
}

export type { Artist, MusicRecord, Ratings }
