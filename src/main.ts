import * as core from '@actions/core'

/**
 * The main function for the action.
 *
 * Now it is fake version of @actions/core for test
 */
export async function run(): Promise<void> {
  try {
    const ciResult: string = core.getInput('ci-result')
    core.info(`Hello from ci-cd bot! CI result: ${ciResult}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
