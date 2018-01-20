!function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=[];function n(t){return function(e){e.defaultPrevented||e.preventDefault(),fetchAndReplace(t).then(function(){window.scrollTo(0,0),history.pushState({path:location.href},"",t)}).catch(console.warn)}}function r(t){e&&e.forEach(function(t){t.link.removeEventListener("click",t.handler),t.link.removeEventListener("touchend",t.handler),t.link.removeEventListener("touchcancel",t.handler)});const r=t.getElementsByTagName("a"),o=[];for(var i=0;i<r.length;i++){const t=r[i],e=t.getAttribute("href"),c=n(e);isSameDomain(e)&&(t.addEventListener("click",c),t.addEventListener("touchend",c),t.addEventListener("touchcancel",c)),o.push({link:t,handler:c})}e=o}function o(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function i(t,e){return t(e={exports:{}},e.exports),e.exports}var c=i(function(t){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}}),s=i(function(e){try{var n=t;if("function"!=typeof n.inherits)throw"";e.exports=n.inherits}catch(t){e.exports=c}}).inherits,u=i(function(t,e){t.exports=function t(e,n,r){function i(s,u){if(!n[s]){if(!e[s]){var a=o;if(!u&&a)return a(s,!0);if(c)return c(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return i(n||t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var c=o,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){function r(){}function o(t,e,n,r,o){if("function"!=typeof n)throw new TypeError("The listener must be a function");var i=new function(t,e,n){this.fn=t,this.context=e,this.once=n||!1}(n,r||t,o),c=u?u+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],i]:t._events[c].push(i):(t._events[c]=i,t._eventsCount++),t}function i(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e]}function c(){this._events=new r,this._eventsCount=0}var s=Object.prototype.hasOwnProperty,u="~";Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(u=!1)),c.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)s.call(t,e)&&n.push(u?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},c.prototype.listeners=function(t){var e=u?u+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,o=n.length,i=new Array(o);r<o;r++)i[r]=n[r].fn;return i},c.prototype.listenerCount=function(t){var e=u?u+t:t,n=this._events[e];return n?n.fn?1:n.length:0},c.prototype.emit=function(t,e,n,r,o,i){var c=u?u+t:t;if(!this._events[c])return!1;var s,a,f=this._events[c],l=arguments.length;if(f.fn){switch(f.once&&this.removeListener(t,f.fn,void 0,!0),l){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,e),!0;case 3:return f.fn.call(f.context,e,n),!0;case 4:return f.fn.call(f.context,e,n,r),!0;case 5:return f.fn.call(f.context,e,n,r,o),!0;case 6:return f.fn.call(f.context,e,n,r,o,i),!0}for(a=1,s=new Array(l-1);a<l;a++)s[a-1]=arguments[a];f.fn.apply(f.context,s)}else{var h,p=f.length;for(a=0;a<p;a++)switch(f[a].once&&this.removeListener(t,f[a].fn,void 0,!0),l){case 1:f[a].fn.call(f[a].context);break;case 2:f[a].fn.call(f[a].context,e);break;case 3:f[a].fn.call(f[a].context,e,n);break;case 4:f[a].fn.call(f[a].context,e,n,r);break;default:if(!s)for(h=1,s=new Array(l-1);h<l;h++)s[h-1]=arguments[h];f[a].fn.apply(f[a].context,s)}}return!0},c.prototype.on=function(t,e,n){return o(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return o(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,n,r){var o=u?u+t:t;if(!this._events[o])return this;if(!e)return i(this,o),this;var c=this._events[o];if(c.fn)c.fn!==e||r&&!c.once||n&&c.context!==n||i(this,o);else{for(var s=0,a=[],f=c.length;s<f;s++)(c[s].fn!==e||r&&!c[s].once||n&&c[s].context!==n)&&a.push(c[s]);a.length?this._events[o]=1===a.length?a[0]:a:i(this,o)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=u?u+t:t,this._events[e]&&i(this,e)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=u,c.EventEmitter=c,void 0!==e&&(e.exports=c)},{}]},{},[1])(1)});const a="loadstart",f="loadend";class l{redirect(t,e){e=e||{},p(t).then(function(){history.replaceState({path:location.href},e.title,t)})}}s(l,u);const h=window.SiteRouter=new l;function p(t){return h.emit(a),fetch(t).then(function(e){if(200!==e.status)throw new Error("Could not get data at "+t);return e.text()}).then(function(t,e){document.title=function(t){const e=/(?:<title>)((.|\n)+)(?:(<\/title>))/m.exec(t);return e&&e[1]||""}(e),document.body.innerHTML=function(t){const e=/(<body>)((.|\s)+)(<\/body>)/.exec(t);return e&&e[2]||""}(e),h.emit(f),r.bind(this,document.body)()}.bind(this,t)).then(r.bind(this,document.body))}window.addEventListener("load",function(t){r(document.body)}),window.addEventListener("popstate",function(t){h.emit(a),p(location.href).catch(console.error)})}(util);
