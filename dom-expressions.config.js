module.exports = {
  output: 'src/dom/index.js',
  includeTypes: true,
  variables: {
    imports: [ `import {
      createEffect as wrap, sample, createRoot as root,
      onCleanup as cleanup, setContext, registerSuspense,
      getContextOwner as currentContext
    } from '../solid.js'` ],
    includeContext: true
  }
}