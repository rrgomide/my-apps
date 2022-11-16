import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getFakeData } from '~/server/fake-data.server'

const loader: LoaderFunction = () => {
  const fakeData = getFakeData()
  return json(fakeData)
}

export default function Index() {
  const fakeData = useLoaderData()

  return (
    <>
      <h1 className="font-semibold">Hello, render.com!</h1>
      <br />
      <pre>{JSON.stringify(fakeData, null, 2)}</pre>
    </>
  )
}

export { loader }
