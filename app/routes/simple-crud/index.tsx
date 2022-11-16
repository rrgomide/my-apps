import { useLoaderData, useActionData, useTransition } from '@remix-run/react'
import type { MetaFunction, LoaderArgs, ActionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'

const meta: MetaFunction = () => {
  return {
    title: 'SimpleCrud',
  }
}

async function loader({ request, params }: LoaderArgs) {
  return json({})
}

async function action({ request, params }: ActionArgs) {
  return json({})
}

function SimpleCrud() {
  const loaderData = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const transition = useTransition()

  return <>Simple Crud</>
}

export { loader, action, meta }
export default SimpleCrud
