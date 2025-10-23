
export default {
  basePath: 'https://trivikram-coder.github.io/todo-app-angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
