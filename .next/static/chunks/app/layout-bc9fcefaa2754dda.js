(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4619:function(e,n,t){Promise.resolve().then(t.t.bind(t,6964,23)),Promise.resolve().then(t.t.bind(t,4724,23)),Promise.resolve().then(t.t.bind(t,8834,23)),Promise.resolve().then(t.bind(t,9281)),Promise.resolve().then(t.t.bind(t,6674,23)),Promise.resolve().then(t.t.bind(t,3054,23)),Promise.resolve().then(t.t.bind(t,6562,23))},9281:function(e,n,t){"use strict";t.r(n);var o=t(7437),r=t(2265),a=t(6674),s=t.n(a),i=t(1396),l=t.n(i),c=t(1691);n.default=()=>{let[e,n]=(0,r.useState)(!1);return(0,o.jsx)("nav",{className:s().navbar,children:(0,o.jsxs)("div",{className:e?"".concat(s().active):"",children:[(0,o.jsxs)("ul",{className:s().navbarList,children:[(0,o.jsxs)("li",{className:s().navbarItem,children:[" ",(0,o.jsx)(l(),{className:s().navbarLink,href:"/",onClick:()=>n(!1),children:"Home "})]}),(0,o.jsx)("li",{className:s().navbarItem,children:(0,o.jsx)(l(),{className:s().navbarLink,href:"/about",onClick:()=>n(!1),children:"About "})}),(0,o.jsxs)("li",{className:s().navbarItem,children:[" ",(0,o.jsx)(l(),{className:s().navbarLink,href:"/movie",onClick:()=>n(!1),children:" Movie "})]}),(0,o.jsxs)("li",{className:s().navbarItem,children:[" ",(0,o.jsx)(l(),{className:s().navbarLink,href:"/contact",onClick:()=>n(!1),children:" Contact "})]})]}),(0,o.jsxs)("div",{className:s()["mobile-navbar-btn"],children:[(0,o.jsx)(c.pLM,{name:"menu-outline",className:s()["mobile-nav-icon"],onClick:()=>n(!0)}),(0,o.jsx)(c.hhk,{name:"close-outline",className:"".concat(s()["mobile-nav-icon"]," ").concat(s()["close-outline"]),onClick:()=>n(!1)})]})]})})}},3054:function(){},6562:function(e){e.exports={footer:"footer_footer__17AzZ",content:"footer_content__YJIfy",top:"footer_top__p_3hq","logo-details":"footer_logo-details___rvAV","media-icons":"footer_media-icons__TCuCX","link-boxes":"footer_link-boxes__nW6zZ",box:"footer_box__ESgYh",link_name:"footer_link_name__J962z","input-box":"footer_input-box__aL2kz","bottom-details":"footer_bottom-details__EgyQO",bottom_text:"footer_bottom_text__EVnVJ"}},6674:function(e){e.exports={main_header:"navbar_main_header__bBSQk",navbar_brand:"navbar_navbar_brand__j5Wtg",navbarList:"navbar_navbarList__tmvN1",navbarItem:"navbar_navbarItem__ZnfyP",coolNavLine:"navbar_coolNavLine__3U1DW","mobile-navbar-btn":"navbar_mobile-navbar-btn__Ghqb6","mobile-nav-icon":"navbar_mobile-nav-icon__8WcUR","close-outline":"navbar_close-outline__EbTtn",active:"navbar_active__93cHx"}},8834:function(e){e.exports={style:{fontFamily:"'__Mulish_671a1c', '__Mulish_Fallback_671a1c'",fontStyle:"normal"},className:"__className_671a1c"}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=t(2265),r=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var o,l={},c=null,_=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(_=n.ref),n)a.call(n,o)&&!i.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:r,type:e,key:c,ref:_,props:l,_owner:s.current}}n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)},1396:function(e,n,t){e.exports=t(4724)},1172:function(e,n,t){"use strict";t.d(n,{w_:function(){return GenIcon}});var o=t(2265),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(r),__assign=function(){return(__assign=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},__rest=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};function GenIcon(e){return function(n){return o.createElement(IconBase,__assign({attr:__assign({},e.attr)},n),function Tree2Element(e){return e&&e.map(function(e,n){return o.createElement(e.tag,__assign({key:n},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(n){var t,r=e.attr,a=e.size,s=e.title,i=__rest(e,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),o.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:t,style:__assign(__assign({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return void 0!==a?o.createElement(a.Consumer,null,function(e){return elem(e)}):elem(r)}}},function(e){e.O(0,[636,724,964,971,864,744],function(){return e(e.s=4619)}),_N_E=e.O()}]);