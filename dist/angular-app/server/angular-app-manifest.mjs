
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://trivikram-coder.github.io/todo-app-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/todo-app-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 544, hash: 'b3e951b3706d1e0b2a4591c65429d3099fed2aa15734007a2311615f16e2a4bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '3fb9bbbaa3e36be74486ca1f1ebf064f043a8a34dca95419a58ec000862ae8a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1597, hash: '6e91d17556dcc7c69c879c7167116b1119ffcb0823ed5ed220374fdf42927ae0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
