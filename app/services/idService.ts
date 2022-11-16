import { v4 as uuid } from 'uuid'

type Props = {
  forInputs: boolean
}

const defaultProps: Props = {
  forInputs: false,
}

function getNewId({ forInputs }: Props = defaultProps) {
  return forInputs ? 'i-' : '' + uuid()
}

export { getNewId }
