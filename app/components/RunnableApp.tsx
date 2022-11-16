type Props = {
  children: string
}

function RunnableApp({ children = 'App name' }: Props) {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-base-200 hover:bg-base-300">
      {children}
    </div>
  )
}

export { RunnableApp }
