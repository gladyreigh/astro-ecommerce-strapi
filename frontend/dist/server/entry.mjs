import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BybxizCx.mjs';
import { manifest } from './manifest_DJkbVLUD.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/cart/_id_.astro.mjs');
const _page2 = () => import('./pages/api/cart.astro.mjs');
const _page3 = () => import('./pages/api/login.astro.mjs');
const _page4 = () => import('./pages/api/products.astro.mjs');
const _page5 = () => import('./pages/api/register.astro.mjs');
const _page6 = () => import('./pages/api/socket.astro.mjs');
const _page7 = () => import('./pages/cart.astro.mjs');
const _page8 = () => import('./pages/login.astro.mjs');
const _page9 = () => import('./pages/products.astro.mjs');
const _page10 = () => import('./pages/register.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/cart/[id].ts", _page1],
    ["src/pages/api/cart.ts", _page2],
    ["src/pages/api/login.ts", _page3],
    ["src/pages/api/products.ts", _page4],
    ["src/pages/api/register.ts", _page5],
    ["src/pages/api/socket.ts", _page6],
    ["src/pages/cart.astro", _page7],
    ["src/pages/login.astro", _page8],
    ["src/pages/products.astro", _page9],
    ["src/pages/register.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "mode": "standalone",
    "client": "file:///D:/University%20of%20London/Job/frontend/dist/client/",
    "server": "file:///D:/University%20of%20London/Job/frontend/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
