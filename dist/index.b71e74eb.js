// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2oZg2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _renderer = require("./renderer");
var _world = require("./world");
const canvas = document.querySelector("canvas");
const debug = document.getElementById("debug") || undefined;
const score = document.getElementById("score") || undefined;
if (!canvas) throw new Error("canvas not found");
const world = new (0, _world.World)({
    blocksHigh: 20,
    blocksWide: 11,
    particlePerBlock: 4,
    onScoreChange: (val)=>{
        if (score) score.innerText = `Score: ${val}`;
    }
});
const renderer = new (0, _renderer.Renderer)({
    world,
    canvas,
    debug,
    pixelsPerParticle: 4
});
renderer.start();
world.start();

},{"./renderer":"g6IVn","./world":"1L67l"}],"g6IVn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Renderer", ()=>Renderer);
class Renderer {
    constructor(config){
        this.config = config;
        this.callback = ()=>{
            this.render();
            requestAnimationFrame(this.callback);
        };
        const multiplier = this.config.world.config.particlePerBlock * this.config.pixelsPerParticle;
        this.config.canvas.width = this.config.world.config.blocksWide * multiplier;
        this.config.canvas.height = this.config.world.config.blocksHigh * multiplier;
        this.obtainContext();
    }
    obtainContext() {
        const context = this.config.canvas.getContext("2d");
        if (!context) throw new Error("context not found");
        context.scale(this.config.pixelsPerParticle, this.config.pixelsPerParticle);
        this.context = context;
    }
    start() {
        requestAnimationFrame(this.callback);
    }
    render() {
        const { config: { canvas , debug , world: { block , particles , config: { particlePerBlock  }  }  } , context  } = this;
        if (debug) debug.innerText = particles.map((row)=>row.map((particle)=>particle.type === "empty" ? "0" : "1").join("")).join("\n");
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (block) {
            context.fillStyle = block.colour;
            for(let y = 0; y < block.shape.length; y++)for(let x = 0; x < block.shape[0].length; x++)if (block.shape[y][x]) context.fillRect((block.x + x) * particlePerBlock, (block.y + y) * particlePerBlock, particlePerBlock, particlePerBlock);
        }
        particles.forEach((row, y)=>{
            row.forEach((particle, x)=>{
                if (particle.type !== "empty") {
                    context.fillStyle = particle.colour || "white";
                    context.fillRect(x, y, 1, 1);
                }
            });
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1L67l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "World", ()=>World);
var _blocks = require("./blocks");
var _shapes = require("./shapes");
class World {
    constructor(config){
        this.config = config;
        this.particleStep = ()=>{
            this.progressParticles();
        };
        this.blockStep = ()=>{
            if (this.block) this.progressBlock();
        };
        this.handleInput = (ev)=>{
            switch(ev.key){
                case "ArrowLeft":
                    if (this.block.x > 0) this.block.x--;
                    ev.preventDefault();
                    break;
                case "ArrowRight":
                    if (this.block.x + this.block.width < this.config.blocksWide) this.block.x++;
                    ev.preventDefault();
                    break;
                case "ArrowUp":
                    this.block = (0, _blocks.rotateBlock)(this.block);
                    ev.preventDefault();
                    break;
                case "ArrowDown":
                    this.progressBlock();
                    ev.preventDefault();
                    break;
                case "r":
                    this.stop();
                    this.reset();
                    this.start();
                    ev.preventDefault();
                    break;
            }
        };
        this.particlesHigh = config.blocksHigh * config.particlePerBlock;
        this.particlesWide = config.blocksWide * config.particlePerBlock;
        this.blockInterval = null;
        this.reset();
    }
    start() {
        if (this.blockInterval || this.particleInterval) return;
        document.addEventListener("keydown", this.handleInput);
        const blockSpeed = 250;
        this.blockInterval = setInterval(this.blockStep, blockSpeed);
        this.particleInterval = setInterval(this.particleStep, blockSpeed / this.config.particlePerBlock / 4);
        this.newBlock();
    }
    stop() {
        if (!this.blockInterval || !this.particleInterval) return;
        clearInterval(this.blockInterval);
        clearInterval(this.particleInterval);
        this.blockInterval = null;
        this.particleInterval = null;
        document.removeEventListener("keydown", this.handleInput);
    }
    progressBlock() {
        this.block.y++;
        if (this.block.y + this.block.height >= this.config.blocksHigh) {
            // block at bottom
            this.placeBlock(this.block);
            this.newBlock();
        }
        this.checkCollision();
    }
    progressParticles() {
        for(let y = 0; y < this.particles.length; y++)// for (let y = this.particles.length - 1; y >= 0; y--) {
        for(let x = 0; x < this.particles[y].length; x++){
            const particle = this.particles[y][x];
            if (particle.type === "particle") {
                const below = this.particles[y + 1]?.[x];
                const belowLeft = this.particles[y + 1]?.[x - 1];
                const belowRight = this.particles[y + 1]?.[x + 1];
                const left = this.particles[y]?.[x - 1];
                const right = this.particles[y]?.[x + 1];
                if (below?.type === "empty") {
                    this.particles[y][x] = {
                        type: "empty"
                    };
                    this.particles[y + 1][x] = particle;
                } else if (below?.type === "particle") // see if it falls left/right
                {
                    if (belowLeft?.type === "empty" || belowRight?.type === "empty") {
                        if (belowLeft?.type === "empty" && left?.type === "empty") {
                            this.particles[y][x] = {
                                type: "empty"
                            };
                            this.particles[y + 1][x - 1] = particle;
                        } else if (belowRight?.type === "empty" && right?.type === "empty") {
                            this.particles[y][x] = {
                                type: "empty"
                            };
                            this.particles[y + 1][x + 1] = particle;
                        }
                    }
                }
            }
        }
        this.checkContiguous(this.particles);
    }
    checkCollision() {
        const { block , particles  } = this;
        const offset = this.transformBlockPosition({
            ...block,
            y: block.y + 1
        });
        const scaledShape = (0, _shapes.scaleMatrix)(block.shape, this.config.particlePerBlock);
        out: for(let y = 0; y < scaledShape.length; y++)for(let x = 0; x < scaledShape[0].length; x++)if (scaledShape[y][x]) {
            if (offset.y + y + 1 < particles.length - this.config.particlePerBlock - 1) {
                if (particles[offset.y + y]?.[offset.x + x].type === "particle") {
                    this.placeBlock(block);
                    this.newBlock();
                    break out;
                }
            }
        }
    }
    checkContiguous(particles) {
        // TODO: expand this to traverse over multiple rows
        const scoreBefore = this.score;
        const matchingNeighbours = (start, visited)=>{
            const startingParticle = particles[start.y][start.x];
            const directions = [
                {
                    y: 0,
                    x: -1
                },
                {
                    y: -1,
                    x: 0
                },
                {
                    y: 0,
                    x: 1
                },
                {
                    y: 1,
                    x: 0
                }
            ];
            const friends = [];
            for (const dir of directions){
                const coords = {
                    x: start.x + dir.x,
                    y: start.y + dir.y
                };
                const offsetParticle = particles?.[coords.y]?.[coords.x];
                if (!offsetParticle) continue;
                else if (visited[coords.y][coords.x] === true) continue;
                visited[coords.y][coords.x] = true;
                if (offsetParticle?.type === "particle" && offsetParticle.colour === startingParticle.colour) {
                    friends.push(coords);
                    friends.push(...matchingNeighbours(coords, visited));
                }
            }
            return friends;
        };
        for(let y = 0; y < particles.length; y++){
            if (particles[y - 1]?.[0].colour === particles[y][0].colour) continue;
            if (particles[y][0].type === "particle") {
                const visitedStore = Array.from({
                    length: particles.length
                }, ()=>Array.from({
                        length: particles[0].length
                    }, ()=>false));
                const friends = matchingNeighbours({
                    x: 0,
                    y
                }, visitedStore);
                if (friends.find((ent)=>ent.x === particles[0].length - 1)) {
                    // we have a coloured particle at x:0 and x:$width with contiguity
                    this.score += friends.length;
                    for (const coord of friends)particles[coord.y][coord.x] = {
                        type: "empty"
                    };
                }
            }
        }
        if (scoreBefore !== this.score) this.updateScore();
    }
    updateScore() {
        this.config.onScoreChange?.(this.score);
    }
    placeBlock(block) {
        if (block.y === 1) {
            // game over
            this.stop();
            return;
        }
        const scaledShape = (0, _shapes.scaleMatrix)(block.shape, this.config.particlePerBlock);
        const offset = this.transformBlockPosition(block);
        for(let y = 0; y < scaledShape.length; y++)for(let x = 0; x < scaledShape[0].length; x++)if (scaledShape[y][x]) this.particles[offset.y + y][offset.x + x] = {
            type: "particle",
            colour: block.colour
        };
    }
    transformBlockPosition(block) {
        const { x , y  } = block;
        return {
            x: x * this.config.particlePerBlock,
            y: (y - 1) * this.config.particlePerBlock
        };
    }
    newBlock() {
        const block = (0, _blocks.randomBlock)();
        block.x = Math.floor(this.config.blocksWide / 2) - Math.ceil(block.width / 2);
        // block.colour = "red";
        this.block = block;
    }
    reset() {
        this.score = 0;
        this.updateScore();
        this.particles = Array.from({
            length: this.particlesHigh
        }, ()=>Array.from({
                length: this.particlesWide
            }, ()=>({
                    type: "empty"
                })));
    }
}

},{"./blocks":"lHlp5","./shapes":"hctrZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHlp5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomBlock", ()=>randomBlock);
parcelHelpers.export(exports, "rotateBlock", ()=>rotateBlock);
var _shapes = require("./shapes");
const randomBlock = ()=>{
    const shapeIdx = (0, _shapes.randomShapeIndex)();
    const shape = (0, _shapes.shapes)[shapeIdx];
    const colour = (0, _shapes.shapeColours)[Math.floor(Math.random() * (0, _shapes.shapeColours).length)];
    return {
        x: 0,
        y: 0,
        shape,
        height: shape.length,
        width: shape[0].length,
        colour
    };
};
const rotateBlock = (block)=>{
    const shape = (0, _shapes.rotateMatrix)(block.shape);
    return {
        ...block,
        shape,
        height: shape.length,
        width: shape[0].length
    };
};

},{"./shapes":"hctrZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hctrZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rotation", ()=>Rotation);
parcelHelpers.export(exports, "shapeColours", ()=>shapeColours);
parcelHelpers.export(exports, "shapes", ()=>shapes);
parcelHelpers.export(exports, "randomShapeIndex", ()=>randomShapeIndex);
parcelHelpers.export(exports, "randomRotation", ()=>randomRotation);
parcelHelpers.export(exports, "rotateMatrix", ()=>rotateMatrix);
parcelHelpers.export(exports, "scaleMatrix", ()=>scaleMatrix);
var Rotation;
(function(Rotation) {
    Rotation[Rotation["A"] = 0] = "A";
    Rotation[Rotation["B"] = 90] = "B";
    Rotation[Rotation["C"] = 180] = "C";
    Rotation[Rotation["D"] = 270] = "D";
})(Rotation || (Rotation = {}));
const shapeColours = [
    "red",
    "green",
    "blue" /*, "purple", "orange"*/ 
];
const shapes = [
    [
        // T
        [
            1,
            1,
            1
        ],
        [
            0,
            1,
            0
        ]
    ],
    [
        // square
        [
            1,
            1
        ],
        [
            1,
            1
        ]
    ],
    [
        // line
        [
            1,
            1,
            1,
            1
        ]
    ],
    [
        // L
        [
            1,
            1,
            1
        ],
        [
            1,
            0,
            0
        ]
    ],
    // Z
    [
        [
            1,
            1,
            0
        ],
        [
            0,
            1,
            1
        ]
    ]
];
const randomShapeIndex = ()=>Math.floor(Math.random() * shapes.length);
const randomRotation = ()=>{
    const rotations = [
        0,
        90,
        180,
        270
    ];
    return rotations[Math.floor(Math.random() * rotations.length)];
};
const rotateMatrix = (matrix)=>{
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    // Create a new matrix with the same dimensions as the input matrix
    const rotatedMatrix = Array.from({
        length: numRows
    }, ()=>[]);
    for(let row = 0; row < numRows; row++)for(let col = 0; col < numCols; col++){
        // Rotate the matrix right
        rotatedMatrix[numCols - 1 - col] ??= [];
        rotatedMatrix[numCols - 1 - col][row] = matrix[row][col];
    }
    return rotatedMatrix;
};
function scaleMatrix(matrix, scale) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const scaledMatrix = [];
    for(let i = 0; i < numRows * scale; i++){
        const row = [];
        for(let j = 0; j < numCols * scale; j++){
            const originalRow = Math.floor(i / scale);
            const originalCol = Math.floor(j / scale);
            const originalValue = matrix[originalRow][originalCol];
            row.push(originalValue);
        }
        scaledMatrix.push(row);
    }
    return scaledMatrix;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2oZg2","h7u1C"], "h7u1C", "parcelRequirefb71")

//# sourceMappingURL=index.b71e74eb.js.map
