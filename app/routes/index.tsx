import {
  useLoaderData,
  useActionData,
  useTransition,
  Link,
} from '@remix-run/react'

import type { MetaFunction, LoaderArgs, ActionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { RunnableApp } from '~/components/RunnableApp'

const meta: MetaFunction = () => {
  return {
    title: 'Index',
  }
}

const apps = [
  {
    id: 'app001',
    description: 'Simple CRUD',
    link: '/simple-crud',
  },
  {
    id: 'app002',
    description: 'App 2',
    link: '/app2',
  },
  {
    id: 'app003',
    description: 'App 3',
    link: '/app3',
  },
]

function Index() {
  return (
    <ul className="flex flex-col sm:flex-row items-center justify-center">
      {apps.map(({ id, description, link }) => {
        return (
          <li className="m-2 w-full sm:w-64" key={id}>
            <Link to={link}>
              <RunnableApp>{description}</RunnableApp>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export { meta }
export default Index
