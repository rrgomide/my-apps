import { useLoaderData, useActionData, useTransition } from '@remix-run/react'
import type { MetaFunction, LoaderArgs, ActionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getAllRecords } from '~/server/favorite-music-albums/favorite-music-albums.server'

const meta: MetaFunction = () => {
  return {
    title: 'SimpleCrud',
  }
}

async function loader({ request, params }: LoaderArgs) {
  const bestRecords = await getAllRecords()
  return json({ bestRecords })
}

async function action({ request, params }: ActionArgs) {
  return json({})
}

function FavoriteMusicAlbums() {
  const { bestRecords } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const transition = useTransition()

  return (
    <>
      <h1 className="text-center font-semibold text-xl">Best Records</h1>

      <table className="table table-zebra table-compact mt-8 w-full">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Rate</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bestRecords.map(({ id, band, album, rate }) => {
            return (
              <tr key={id}>
                <td>{band}</td>
                <td>{album}</td>
                <td>{rate}</td>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export { loader, action, meta }
export default FavoriteMusicAlbums
