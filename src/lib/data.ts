export const githubRepoPattern =
  /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+$/

export const placeholders = { URLInput: 'Enter repo URL' } as const

export const validationMessages = {
  required: 'Repository URL is required',
  pattern:
    'Enter a valid GitHub repository URL (e.g., https://github.com/user/repo)'
} as const

export const buttonTitles = {
  URLSubmit: 'Load Issues'
} as const

export const BASE_URL = 'https://github.com'
export const GITHUB_API_BASE_URL = 'https://api.github.com'

export const MIN_REQUIRED_SEGMENTS = 2
