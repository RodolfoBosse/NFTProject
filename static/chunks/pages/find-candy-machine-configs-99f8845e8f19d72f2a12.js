(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3083],{92394:function(e,n,t){"use strict";t(67294);var r=t(41664),s=t(85893);n.Z=function(){return(0,s.jsxs)("div",{className:"text-gray-200 font-bold space-x-2 flex justify-end items-end mt-10",children:[(0,s.jsx)("span",{children:"TOOLS:"}),(0,s.jsx)("div",{className:"text-blue-400 hover:text-blue-500 uppercase transition space-x-2 font-bold flex items-center",children:(0,s.jsx)(r.default,{href:"/hash-table",children:(0,s.jsx)("a",{children:"Hash Table"})})}),(0,s.jsx)("span",{children:"|"}),(0,s.jsx)("div",{className:"text-blue-400 hover:text-blue-500 uppercase transition space-x-2 font-bold flex items-center",children:(0,s.jsx)(r.default,{href:"/holder-list",children:(0,s.jsx)("a",{children:"Holder List"})})}),(0,s.jsx)("span",{children:"|"}),(0,s.jsx)("div",{className:"text-blue-400 hover:text-blue-500 uppercase transition space-x-2 font-bold flex items-center",children:(0,s.jsx)(r.default,{href:"/find-candy-machine-configs",children:(0,s.jsx)("a",{children:"Get Candy Machine Configs"})})})]})}},71902:function(e,n,t){"use strict";var r=t(14526),s=(t(67294),t(41664)),a=t(85893);n.Z=function(){return(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-x-0",children:[(0,a.jsxs)("div",{className:"text-gray-200 space-x-5 text-lg font-bold flex items-center",children:[(0,a.jsx)(s.default,{href:"/",children:(0,a.jsx)("a",{children:"Home"})}),(0,a.jsx)(s.default,{href:"/my-nfts",children:(0,a.jsx)("a",{children:"My NFTs"})}),(0,a.jsx)(s.default,{href:"/roadmap",children:(0,a.jsx)("a",{children:"Roadmap"})})]}),(0,a.jsxs)("div",{className:"flex space-x-5 items-center",children:[(0,a.jsx)(r.aD,{}),(0,a.jsx)(r.vg,{})]})]})}},71619:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(67294),s=t(9008),a=t(71902),c=t(88279),i=t(57064),l=t(92394),o=t(30266),u=t(809),d=t.n(u),f=t(19496),x=new f.rV.Connection("https://explorer-api.devnet.solana.com");function h(e){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)(d().mark((function e(n){var t,r,s,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getProgramAccounts(new f.rV.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),{filters:[{memcmp:{offset:8,bytes:new f.rV.PublicKey(n).toBase58()}}]});case 2:for(t=e.sent,r=[],s=0;s<t.length;s++)(a=t[s]).account.data.byteLength>529&&r.push({program:{uuid:a.pubkey.toString().substring(0,6),config:a.pubkey.toString()}});return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=t(85893),j=function(){var e=(0,r.useState)(""),n=e[0],t=e[1],u=function(e){var n=(0,r.useState)([]),t=n[0],s=n[1],a=(0,r.useState)(!1),i=a[0],l=a[1];return{candyMachineList:t,isLoading:i,getForgottenCandyMachines:function(){var n=(0,o.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&e.length){n.next=3;break}return c.ZP.error("Please type the Authority ID in the input box."),n.abrupt("return");case 3:return n.prev=3,l(!0),n.next=7,h(e);case 7:t=n.sent,s(t),0===t.length&&c.ZP.success("Zero Candy Machine Configs have been found so far for this candy machine."),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(3),console.error(n.t0),c.ZP.error("An error happened! Please try again later!");case 16:l(!1);case 17:case"end":return n.stop()}}),n,null,[[3,12]])})));return function(){return n.apply(this,arguments)}}()}}(n),f=u.candyMachineList,x=u.isLoading,p=u.getForgottenCandyMachines;return(0,m.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[(0,m.jsx)(c.x7,{}),(0,m.jsxs)("main",{className:"p-5",children:[(0,m.jsxs)(s.default,{children:[(0,m.jsx)("title",{children:"Solana Candy Factory: Find Candy Machine Configs"}),(0,m.jsx)("meta",{name:"description",content:"Find Candy Machine Configs"}),(0,m.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,m.jsx)(a.Z,{}),(0,m.jsxs)("div",{className:"flex flex-col items-center space-y-10",children:[(0,m.jsxs)("div",{className:"flex flex-col justify-center items-center flex-1 space-y-10 mt-20",children:[(0,m.jsx)("input",{className:"text-lg text-black font-bold uppercase \r w-96 text-center rounded-md shadow-md",onChange:function(e){return t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&!x&&p()},placeholder:"TYPE YOUR WALLET PUBLIC KEY"}),(0,m.jsx)("button",{type:"button",onClick:x?function(){return null}:p,className:"bg-purple-400 hover:bg-purple-500 \r transition p-1 text-gray-800 font-bold",children:x?"Loading...":"Get Candy Machine Configs"})]}),f.length>0&&!x&&(0,m.jsx)("div",{className:"w-full lg:w-1/2",children:(0,m.jsx)(i.Z1,{text:JSON.stringify(Array.from(f),null,4),language:"javascript",theme:i.cL,wrapLines:!0})})]})]}),(0,m.jsx)(l.Z,{})]})}},99603:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/find-candy-machine-configs",function(){return t(71619)}])}},function(e){e.O(0,[7821,7064,9774,2888,179],(function(){return n=99603,e(e.s=n);var n}));var n=e.O();_N_E=n}]);