import { getConnection } from '../db/db.server'

async function getAllRecords() {
  const connection = await getConnection()

  if (!connection) {
    return null
  }

  const { data, error } = connection.from('FavoriteMusicRecords').select()
  console.log(data)
  console.log(error)

  // const allRecords = await fs.readFile(
  //   'public/db/favorite-albums.json',
  //   'utf-8'
  // )
  // const allRecordsJson = JSON.parse(allRecords).favoriteRecords
  // return allRecordsJson
}

export { getAllRecords }
