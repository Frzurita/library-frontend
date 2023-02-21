type EnvironmentVariable = string | undefined | boolean

export const config = {
  api: {
    base_url: parseString(import.meta.env.VITE_API_BASE_URL),
  },
}

export function parseString(value: EnvironmentVariable) {
  if (typeof value === 'boolean')
    throw new Error('this variable is not a string')
  if (!value) throw new Error('process env variable/s missing')

  return value
}
