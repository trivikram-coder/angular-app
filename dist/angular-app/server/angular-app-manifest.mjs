
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1174, hash: 'd8d25ce1b17825eb6fe334c528e40ca423b247584092415b2bdf9f62018cc70a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1576, hash: 'e99afea5bd0b83eadd61841d0a04a744dcd964364937aeb12abff66e7328d51a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4478, hash: '7b7c88d97bb37d15c3360564312ecde7cebc0ac282d710ed3540bbd782b9981f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-USLPTMVG.css': {size: 57, hash: 'APJ5sWkotCA', text: () => import('./assets-chunks/styles-USLPTMVG_css.mjs').then(m => m.default)}
  },
};
