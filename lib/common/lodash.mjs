function T(r,n=1,e=[]){let t=[...r];if(n<=0)return e;for(;t.length;)e.push(t.splice(0,n));return e}function o(r,...n){return r.filter(e=>n.every(t=>t.includes(e)))}function f(r,...n){return r.filter(e=>n.every(t=>!t.includes(e)))}function l(r){return[...new Set(r)]}export{T as chunkArray,o as intersection,l as uniq,f as xor};
//# sourceMappingURL=lodash.mjs.map