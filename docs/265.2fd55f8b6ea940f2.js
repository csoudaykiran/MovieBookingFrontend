(self.webpackChunkmovie=self.webpackChunkmovie||[]).push([[265],{7265:function(dt){dt.exports=function(){"use strict";function L(r){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(r)}function W(r,n){return(W=Object.setPrototypeOf||function(s,f){return s.__proto__=f,s})(r,n)}function vt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function K(r,n,o){return(K=vt()?Reflect.construct:function(f,O,M){var N=[null];N.push.apply(N,O);var Y=new(Function.bind.apply(f,N));return M&&W(Y,M.prototype),Y}).apply(null,arguments)}function g(r){return function ht(r){if(Array.isArray(r))return fe(r)}(r)||function Tt(r){if(typeof Symbol<"u"&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _t(r,n){if(r){if("string"==typeof r)return fe(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if("Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o)return Array.from(r);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return fe(r,n)}}(r)||function At(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(r,n){(null==n||n>r.length)&&(n=r.length);for(var o=0,s=new Array(n);o<n;o++)s[o]=r[o];return s}var Et=Object.hasOwnProperty,Ue=Object.setPrototypeOf,yt=Object.isFrozen,gt=Object.getPrototypeOf,bt=Object.getOwnPropertyDescriptor,_=Object.freeze,b=Object.seal,St=Object.create,He=typeof Reflect<"u"&&Reflect,Z=He.apply,ce=He.construct;Z||(Z=function(n,o,s){return n.apply(o,s)}),_||(_=function(n){return n}),b||(b=function(n){return n}),ce||(ce=function(n,o){return K(n,g(o))});var Rt=y(Array.prototype.forEach),ze=y(Array.prototype.pop),$=y(Array.prototype.push),J=y(String.prototype.toLowerCase),pe=y(String.prototype.toString),Ot=y(String.prototype.match),S=y(String.prototype.replace),Nt=y(String.prototype.indexOf),Dt=y(String.prototype.trim),A=y(RegExp.prototype.test),me=function Lt(r){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return ce(r,o)}}(TypeError);function y(r){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),f=1;f<o;f++)s[f-1]=arguments[f];return Z(r,n,s)}}function l(r,n,o){o=o||J,Ue&&Ue(r,null);for(var s=n.length;s--;){var f=n[s];if("string"==typeof f){var O=o(f);O!==f&&(yt(n)||(n[s]=O),f=O)}r[f]=!0}return r}function x(r){var o,n=St(null);for(o in r)!0===Z(Et,r,[o])&&(n[o]=r[o]);return n}function Q(r,n){for(;null!==r;){var o=bt(r,n);if(o){if(o.get)return y(o.get);if("function"==typeof o.value)return y(o.value)}r=gt(r)}return function s(f){return console.warn("fallback value for",f),null}}var Ge=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),de=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ve=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Mt=_(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),he=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),wt=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Be=_(["#text"]),We=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Te=_(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$e=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ct=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),It=b(/<%[\w\W]*|[\w\W]*%>/gm),xt=b(/\${[\w\W]*}/gm),kt=b(/^data-[\-\w.\u00B7-\uFFFF]/),Pt=b(/^aria-[\-\w]+$/),Ft=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ut=b(/^(?:\w+script|data):/i),Ht=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),zt=b(/^html$/i),Gt=function(){return typeof window>"u"?null:window},Bt=function(n,o){if("object"!==L(n)||"function"!=typeof n.createPolicy)return null;var s=null,f="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(f)&&(s=o.currentScript.getAttribute(f));var O="dompurify"+(s?"#"+s:"");try{return n.createPolicy(O,{createHTML:function(N){return N},createScriptURL:function(N){return N}})}catch{return console.warn("TrustedTypes policy "+O+" could not be created."),null}};return function je(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt(),n=function(e){return je(e)};if(n.version="2.4.3",n.removed=[],!r||!r.document||9!==r.document.nodeType)return n.isSupported=!1,n;var o=r.document,s=r.document,f=r.DocumentFragment,O=r.HTMLTemplateElement,M=r.Node,N=r.Element,j=r.NodeFilter,Y=r.NamedNodeMap,$t=void 0===Y?r.NamedNodeMap||r.MozNamedAttrMap:Y,jt=r.HTMLFormElement,Yt=r.DOMParser,te=r.trustedTypes,re=N.prototype,Vt=Q(re,"cloneNode"),Xt=Q(re,"nextSibling"),qt=Q(re,"childNodes"),_e=Q(re,"parentNode");if("function"==typeof O){var Ae=s.createElement("template");Ae.content&&Ae.content.ownerDocument&&(s=Ae.content.ownerDocument)}var R=Bt(te,o),Ee=R?R.createHTML(""):"",ye=s.implementation,Kt=s.createNodeIterator,Zt=s.createDocumentFragment,Jt=s.getElementsByTagName,Qt=o.importNode,Ye={};try{Ye=x(s).documentMode?s.documentMode:{}}catch{}var D={};n.isSupported="function"==typeof _e&&ye&&typeof ye.createHTMLDocument<"u"&&9!==Ye;var P,m,ge=Ct,be=It,Se=xt,er=kt,tr=Pt,rr=Ut,Ve=Ht,Re=Ft,p=null,Xe=l({},[].concat(g(Ge),g(de),g(ve),g(he),g(Be))),v=null,qe=l({},[].concat(g(We),g(Te),g($e),g(ee))),c=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,Oe=null,Ke=!0,Ne=!0,Ze=!1,F=!1,k=!1,De=!1,Le=!1,U=!1,ne=!1,ie=!1,Je=!0,Qe=!1,ar="user-content-",Me=!0,X=!1,H={},z=null,et=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,rt=l({},["audio","video","img","source","image","track"]),we=null,at=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),oe="http://www.w3.org/1998/Math/MathML",le="http://www.w3.org/2000/svg",w="http://www.w3.org/1999/xhtml",G=w,Ce=!1,Ie=null,nr=l({},[oe,le,w],pe),ir=["application/xhtml+xml","text/html"],or="text/html",B=null,lr=s.createElement("form"),nt=function(e){return e instanceof RegExp||e instanceof Function},xe=function(e){B&&B===e||((!e||"object"!==L(e))&&(e={}),e=x(e),P=P=-1===ir.indexOf(e.PARSER_MEDIA_TYPE)?or:e.PARSER_MEDIA_TYPE,m="application/xhtml+xml"===P?pe:J,p="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,m):Xe,v="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,m):qe,Ie="ALLOWED_NAMESPACES"in e?l({},e.ALLOWED_NAMESPACES,pe):nr,we="ADD_URI_SAFE_ATTR"in e?l(x(at),e.ADD_URI_SAFE_ATTR,m):at,tt="ADD_DATA_URI_TAGS"in e?l(x(rt),e.ADD_DATA_URI_TAGS,m):rt,z="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,m):et,V="FORBID_TAGS"in e?l({},e.FORBID_TAGS,m):{},Oe="FORBID_ATTR"in e?l({},e.FORBID_ATTR,m):{},H="USE_PROFILES"in e&&e.USE_PROFILES,Ke=!1!==e.ALLOW_ARIA_ATTR,Ne=!1!==e.ALLOW_DATA_ATTR,Ze=e.ALLOW_UNKNOWN_PROTOCOLS||!1,F=e.SAFE_FOR_TEMPLATES||!1,k=e.WHOLE_DOCUMENT||!1,U=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,Je=!1!==e.SANITIZE_DOM,Qe=e.SANITIZE_NAMED_PROPS||!1,Me=!1!==e.KEEP_CONTENT,X=e.IN_PLACE||!1,Re=e.ALLOWED_URI_REGEXP||Re,G=e.NAMESPACE||w,e.CUSTOM_ELEMENT_HANDLING&&nt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&nt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(Ne=!1),ne&&(U=!0),H&&(p=l({},g(Be)),v=[],!0===H.html&&(l(p,Ge),l(v,We)),!0===H.svg&&(l(p,de),l(v,Te),l(v,ee)),!0===H.svgFilters&&(l(p,ve),l(v,Te),l(v,ee)),!0===H.mathMl&&(l(p,he),l(v,$e),l(v,ee))),e.ADD_TAGS&&(p===Xe&&(p=x(p)),l(p,e.ADD_TAGS,m)),e.ADD_ATTR&&(v===qe&&(v=x(v)),l(v,e.ADD_ATTR,m)),e.ADD_URI_SAFE_ATTR&&l(we,e.ADD_URI_SAFE_ATTR,m),e.FORBID_CONTENTS&&(z===et&&(z=x(z)),l(z,e.FORBID_CONTENTS,m)),Me&&(p["#text"]=!0),k&&l(p,["html","head","body"]),p.table&&(l(p,["tbody"]),delete V.tbody),_&&_(e),B=e)},it=l({},["mi","mo","mn","ms","mtext"]),ot=l({},["foreignobject","desc","title","annotation-xml"]),sr=l({},["title","style","font","a","script"]),se=l({},de);l(se,ve),l(se,Mt);var ke=l({},he);l(ke,wt);var ur=function(e){var t=_e(e);(!t||!t.tagName)&&(t={namespaceURI:G,tagName:"template"});var a=J(e.tagName),u=J(t.tagName);return!!Ie[e.namespaceURI]&&(e.namespaceURI===le?t.namespaceURI===w?"svg"===a:t.namespaceURI===oe?"svg"===a&&("annotation-xml"===u||it[u]):Boolean(se[a]):e.namespaceURI===oe?t.namespaceURI===w?"math"===a:t.namespaceURI===le?"math"===a&&ot[u]:Boolean(ke[a]):e.namespaceURI===w?!(t.namespaceURI===le&&!ot[u]||t.namespaceURI===oe&&!it[u])&&!ke[a]&&(sr[a]||!se[a]):!("application/xhtml+xml"!==P||!Ie[e.namespaceURI]))},C=function(e){$(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Ee}catch{e.remove()}}},Pe=function(e,t){try{$(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{$(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!v[e])if(U||ne)try{C(t)}catch{}else try{t.setAttribute(e,"")}catch{}},lt=function(e){var t,a;if(Le)e="<remove></remove>"+e;else{var u=Ot(e,/^[\r\n\t ]+/);a=u&&u[0]}"application/xhtml+xml"===P&&G===w&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var E=R?R.createHTML(e):e;if(G===w)try{t=(new Yt).parseFromString(E,P)}catch{}if(!t||!t.documentElement){t=ye.createDocument(G,"template",null);try{t.documentElement.innerHTML=Ce?Ee:E}catch{}}var T=t.body||t.documentElement;return e&&a&&T.insertBefore(s.createTextNode(a),T.childNodes[0]||null),G===w?Jt.call(t,k?"html":"body")[0]:k?t.documentElement:T},st=function(e){return Kt.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT,null,!1)},fr=function(e){return e instanceof jt&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof $t)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},q=function(e){return"object"===L(M)?e instanceof M:e&&"object"===L(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},I=function(e,t,a){D[e]&&Rt(D[e],function(u){u.call(n,t,a,B)})},ut=function(e){var t;if(I("beforeSanitizeElements",e,null),fr(e)||A(/[\u0080-\uFFFF]/,e.nodeName))return C(e),!0;var a=m(e.nodeName);if(I("uponSanitizeElement",e,{tagName:a,allowedTags:p}),e.hasChildNodes()&&!q(e.firstElementChild)&&(!q(e.content)||!q(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||"select"===a&&A(/<template/i,e.innerHTML))return C(e),!0;if(!p[a]||V[a]){if(!V[a]&&ct(a)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a)))return!1;if(Me&&!z[a]){var u=_e(e)||e.parentNode,E=qt(e)||e.childNodes;if(E&&u)for(var h=E.length-1;h>=0;--h)u.insertBefore(Vt(E[h],!0),Xt(e))}return C(e),!0}return e instanceof N&&!ur(e)||("noscript"===a||"noembed"===a)&&A(/<\/no(script|embed)/i,e.innerHTML)?(C(e),!0):(F&&3===e.nodeType&&(t=S(t=e.textContent,ge," "),t=S(t,be," "),t=S(t,Se," "),e.textContent!==t&&($(n.removed,{element:e.cloneNode()}),e.textContent=t)),I("afterSanitizeElements",e,null),!1)},ft=function(e,t,a){if(Je&&("id"===t||"name"===t)&&(a in s||a in lr))return!1;if((!Ne||Oe[t]||!A(er,t))&&(!Ke||!A(tr,t)))if(!v[t]||Oe[t]){if(!(ct(e)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&A(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||"is"===t&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a))))return!1}else if(!we[t]&&!A(Re,S(a,Ve,""))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Nt(a,"data:")||!tt[e])&&(!Ze||A(rr,S(a,Ve,"")))&&a)return!1;return!0},ct=function(e){return e.indexOf("-")>0},pt=function(e){var t,a,u,E;I("beforeSanitizeAttributes",e,null);var T=e.attributes;if(T){var h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:v};for(E=T.length;E--;){var d=(t=T[E]).name,Fe=t.namespaceURI;if(a="value"===d?t.value:Dt(t.value),u=m(d),h.attrName=u,h.attrValue=a,h.keepAttr=!0,h.forceKeepAttr=void 0,I("uponSanitizeAttribute",e,h),a=h.attrValue,!h.forceKeepAttr&&(Pe(d,e),h.keepAttr)){if(A(/\/>/i,a)){Pe(d,e);continue}F&&(a=S(a,ge," "),a=S(a,be," "),a=S(a,Se," "));var mt=m(e.nodeName);if(ft(mt,u,a)){if(Qe&&("id"===u||"name"===u)&&(Pe(d,e),a=ar+a),R&&"object"===L(te)&&"function"==typeof te.getAttributeType&&!Fe)switch(te.getAttributeType(mt,u)){case"TrustedHTML":a=R.createHTML(a);break;case"TrustedScriptURL":a=R.createScriptURL(a)}try{Fe?e.setAttributeNS(Fe,d,a):e.setAttribute(d,a),ze(n.removed)}catch{}}}}I("afterSanitizeAttributes",e,null)}},cr=function i(e){var t,a=st(e);for(I("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)I("uponSanitizeShadowNode",t,null),!ut(t)&&(t.content instanceof f&&i(t.content),pt(t));I("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var t,a,u,E,T,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((Ce=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!q(i)){if("function"!=typeof i.toString)throw me("toString is not a function");if("string"!=typeof(i=i.toString()))throw me("dirty is not a string, aborting")}if(!n.isSupported){if("object"===L(r.toStaticHTML)||"function"==typeof r.toStaticHTML){if("string"==typeof i)return r.toStaticHTML(i);if(q(i))return r.toStaticHTML(i.outerHTML)}return i}if(De||xe(e),n.removed=[],"string"==typeof i&&(X=!1),X){if(i.nodeName){var h=m(i.nodeName);if(!p[h]||V[h])throw me("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof M)1===(a=(t=lt("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?t=a:t.appendChild(a);else{if(!U&&!F&&!k&&-1===i.indexOf("<"))return R&&ie?R.createHTML(i):i;if(!(t=lt(i)))return U?null:ie?Ee:""}t&&Le&&C(t.firstChild);for(var ue=st(X?i:t);u=ue.nextNode();)3===u.nodeType&&u===E||ut(u)||(u.content instanceof f&&cr(u.content),pt(u),E=u);if(E=null,X)return i;if(U){if(ne)for(T=Zt.call(t.ownerDocument);t.firstChild;)T.appendChild(t.firstChild);else T=t;return v.shadowroot&&(T=Qt.call(o,T,!0)),T}var d=k?t.outerHTML:t.innerHTML;return k&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&A(zt,t.ownerDocument.doctype.name)&&(d="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+d),F&&(d=S(d,ge," "),d=S(d,be," "),d=S(d,Se," ")),R&&ie?R.createHTML(d):d},n.setConfig=function(i){xe(i),De=!0},n.clearConfig=function(){B=null,De=!1},n.isValidAttribute=function(i,e,t){B||xe({});var a=m(i),u=m(e);return ft(a,u,t)},n.addHook=function(i,e){"function"==typeof e&&(D[i]=D[i]||[],$(D[i],e))},n.removeHook=function(i){if(D[i])return ze(D[i])},n.removeHooks=function(i){D[i]&&(D[i]=[])},n.removeAllHooks=function(){D={}},n}()}()}}]);