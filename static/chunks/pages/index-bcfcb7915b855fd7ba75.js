(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{35347:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(80318),a=n(9008),i=n(67294),s=n(88279),o=n(37627),c=n(30266);var l=n(809),u=n.n(l),f=n(19496),d=n(10495),p=n(33924),m=n(59917),h=n(82299),y=n(34155),v=Number(y.env.NEXT_MINT_PRICE_SOL),g=new f.rV.PublicKey("2jfUxNqhf2fPds5cPVPPXWyQjAu3dudXb8dNtX6a2ZD5"),b=new f.rV.PublicKey("4tjL7tBjp8QGNChJeAkWkbWe5XX4w7oNJFLiYPJ8GQ9T"),T=new f.rV.PublicKey("7vbWPbdPMPkf9B913RnKdQyEDWhZVtF89r1hQxn9Bfja"),x=new f.rV.Connection("https://explorer-api.devnet.solana.com");function S(){var e,t=(0,p.Z)(),n=(0,r.Z)(t,2)[1],a=(0,i.useState)(),l=(a[0],a[1]),f=(0,o.Os)(),y=(0,i.useState)((function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e={itemsRemaining:0,itemsRedeemed:0,itemsAvailable:0}),e)),S=y[0],O=y[1],P=(0,i.useState)(!1),D=P[0],w=P[1],j=(0,i.useState)(!1),M=j[0],k=j[1],C=(0,i.useState)(new Date(parseInt("1638199373",10))),E=C[0],A=C[1];return(0,i.useEffect)((function(){(0,c.Z)(u().mark((function e(){var t,n,r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f&&f.publicKey&&f.signAllTransactions&&f.signTransaction){e.next=2;break}return e.abrupt("return");case 2:return t={publicKey:f.publicKey,signAllTransactions:f.signAllTransactions,signTransaction:f.signTransaction},e.next=5,(0,d.Qk)(t,T,x);case 5:n=e.sent,r=n.candyMachine,a=n.goLiveDate,i=n.itemsRemaining,k(0===i),A(a),l(r);case 12:case"end":return e.stop()}}),e)})))()}),[f,T,x]),(0,i.useEffect)((function(){(0,c.Z)(u().mark((function e(){var t,n,r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D){e.next=9;break}return t={publicKey:f.publicKey,signAllTransactions:f.signAllTransactions,signTransaction:f.signTransaction},e.next=4,(0,d.Qk)(t,T,x);case 4:n=e.sent,r=n.itemsRemaining,a=n.itemsRedeemed,i=n.itemsAvailable,O({itemsRemaining:r,itemsRedeemed:a,itemsAvailable:i});case 9:case"end":return e.stop()}}),e)})))()}),[f,T,x,D]),{isSoldOut:M,mintStartDate:E,isMinting:D,nftsData:S,onMint:function(){var e=(0,c.Z)(u().mark((function e(){var t,r,a,i,o,c,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),t={publicKey:f.publicKey,signAllTransactions:f.signAllTransactions,signTransaction:f.signTransaction},e.next=5,(0,d.Qk)(t,T,x);case 5:if(r=e.sent,a=r.candyMachine,!(f.connected&&null!==a&&void 0!==a&&a.program&&f.publicKey)){e.next=15;break}return e.next=10,(0,d.CI)(a,b,f.publicKey,g);case 10:return i=e.sent,e.next=13,(0,d.Vg)(i,3e4,x,"singleGossip",!1);case 13:null!==(o=e.sent)&&void 0!==o&&o.err?s.ZP.error("Mint failed! Please try again!"):s.ZP.success("Congratulations! Mint succeeded! Check the 'My Arts' page :)");case 15:e.next=22;break;case 17:e.prev=17,e.t0=e.catch(0),c=e.t0.msg||"Minting failed! Please try again!",e.t0.msg?311===e.t0.code?(c="SOLD OUT!",k(!0)):312===e.t0.code&&(c="Minting period hasn't started yet."):e.t0.message.indexOf("0x138")||(e.t0.message.indexOf("0x137")?c="SOLD OUT!":e.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),s.ZP.error(c);case 22:if(e.prev=22,null===f||void 0===f||!f.publicKey){e.next=28;break}return e.next=26,x.getBalance(null===f||void 0===f?void 0:f.publicKey);case 26:l=e.sent,n(l/m.j5);case 28:return w(!1),e.finish(22);case 30:case"end":return e.stop()}}),e,null,[[0,17,22,30]])})));return function(){return e.apply(this,arguments)}}(),onMintMultiple:function(){var e=(0,c.Z)(u().mark((function e(t){var r,a,i,o,c,l,p,y,S,O,P,D,j,M,C,E,A;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),r={publicKey:f.publicKey,signAllTransactions:f.signAllTransactions,signTransaction:f.signTransaction},e.next=5,(0,d.Qk)(r,T,x);case 5:if(a=e.sent,i=a.candyMachine,!(f.connected&&null!==i&&void 0!==i&&i.program&&f.publicKey)){e.next=42;break}return e.next=10,x.getBalance(null===f||void 0===f?void 0:f.publicKey);case 10:return e.t0=e.sent,e.t1=m.j5,o=e.t0/e.t1,c=o-v*t,e.next=16,(0,d.SZ)(i,b,f.publicKey,g,t);case 16:for(l=e.sent,p=[],y=0;y<l.length;y++)S=l[y],p.push((0,d.Vg)(S,3e4,x,"singleGossip",!0));return e.next=21,Promise.all(p);case 21:for(O=e.sent,P=0,D=0,j=0;j<O.length;j++)null!==(M=O[j])&&void 0!==M&&M.err?D+=1:P+=1;return e.next=27,x.getBalance(null===f||void 0===f?void 0:f.publicKey);case 27:e.t2=e.sent,e.t3=m.j5,C=e.t2/e.t3;case 30:if(!(C>c)){e.next=40;break}return e.next=33,(0,h._v)(1e3);case 33:return e.next=35,x.getBalance(null===f||void 0===f?void 0:f.publicKey);case 35:e.t4=e.sent,e.t5=m.j5,C=e.t4/e.t5,e.next=30;break;case 40:P&&s.ZP.success("Congratulations! ".concat(P," mints succeeded! Your NFT's should appear in your wallet soon :)"),{duration:6e3,position:"bottom-center"}),D&&s.ZP.error("Some mints failed! ".concat(D," mints failed! Check on your wallet :("),{duration:6e3,position:"bottom-center"});case 42:e.next=49;break;case 44:e.prev=44,e.t6=e.catch(0),E=e.t6.msg||"Minting failed! Please try again!",e.t6.msg?311===e.t6.code?(E="SOLD OUT!",k(!0)):312===e.t6.code&&(E="Minting period hasn't started yet."):e.t6.message.indexOf("0x138")||(e.t6.message.indexOf("0x137")?E="SOLD OUT!":e.t6.message.indexOf("0x135")&&(E="Insufficient funds to mint. Please fund your wallet.")),s.ZP.error(E);case 49:if(e.prev=49,null===f||void 0===f||!f.publicKey){e.next=55;break}return e.next=53,x.getBalance(null===f||void 0===f?void 0:f.publicKey);case 53:A=e.sent,n(A/m.j5);case 55:return w(!1),e.finish(49);case 57:case"end":return e.stop()}}),e,null,[[0,44,49,57]])})));return function(t){return e.apply(this,arguments)}}()}}var O=n(71902),P=n(92394),D=n(45697);function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}function k(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return A(this,n)}}function R(e){return function(e){if(Array.isArray(e))return K(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),a=r?r[1]:"",i=r?r[3]:"",s=r?r[2]:n,o=s.length>=t?s:(R(Array(t)).map((function(){return"0"})).join("")+s).slice(-1*t);return"".concat(a).concat(o).concat(i)}var _={daysInHours:!1,zeroPadTime:2};function I(e,t){var n=e.days,r=e.hours,a=e.minutes,i=e.seconds,s=Object.assign(Object.assign({},_),t),o=s.daysInHours,c=s.zeroPadTime,l=s.zeroPadDays,u=void 0===l?c:l,f=Math.min(2,c),d=o?L(r+24*n,c):L(r,f);return{days:o?"":L(n,u),hours:d,minutes:L(a,f),seconds:L(i,f)}}var Z=function(e){k(n,e);var t=N(n);function n(){var e;return w(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return M(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,i.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(i.Component);Z.propTypes={count:D.number,children:D.element,onComplete:D.func};var U=function(e){k(n,e);var t=N(n);function n(e){var r;if(w(this,n),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,i.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(e){r.props.onComplete&&r.props.onComplete(e)},e.date){var a=r.calcTimeDelta();r.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return M(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,r=e.precision,a=e.controlled,i=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,a=void 0===r?Date.now:r,i=n.precision,s=void 0===i?0:i,o=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,o||(t+=l);var f=o?t:t-a(),d=Math.min(20,Math.max(0,s)),p=Math.round(1e3*parseFloat(((u?f:Math.max(0,f))/1e3).toFixed(d))),m=Math.abs(p)/1e3;return{total:p,days:Math.floor(m/86400),hours:Math.floor(m/3600%24),minutes:Math.floor(m/60%60),seconds:Math.floor(m%60),milliseconds:Number((m%1*1e3).toFixed()),completed:p<=0}}(t,{now:n,precision:r,controlled:a,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var r=this;if(this.mounted){var a;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),a=this.handleOnComplete);return this.setState((function(n){var a=t||n.status;return e.completed&&!r.props.overtime?a="COMPLETED":t||"COMPLETED"!==a||(a="STOPPED"),{timeDelta:e,status:a}}),(function(){n&&n(r.state.timeDelta),a&&a(r.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,r=e.zeroPadDays,a=this.state.timeDelta;return Object.assign(Object.assign({},a),{api:this.getApi(),props:this.props,formatted:I(a,{daysInHours:t,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,r=e.onComplete;return(0,i.createElement)(Z,{ref:this.legacyCountdownRef,count:t,onComplete:r},n)}var a=this.props,s=a.className,o=a.overtime,c=a.children,l=a.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!o)return(0,i.cloneElement)(c,{countdown:u});var f=u.formatted,d=f.days,p=f.hours,m=f.minutes,h=f.seconds;return(0,i.createElement)("span",{className:s},u.total<0?"-":"",d,d?":":"",p,":",m,":",h)}}]),n}(i.Component);U.defaultProps=Object.assign(Object.assign({},_),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),U.propTypes={date:(0,D.oneOfType)([(0,D.instanceOf)(Date),D.string,D.number]),daysInHours:D.bool,zeroPadTime:D.number,zeroPadDays:D.number,controlled:D.bool,intervalDelay:D.number,precision:D.number,autoStart:D.bool,overtime:D.bool,className:D.string,children:D.element,renderer:D.func,now:D.func,onMount:D.func,onStart:D.func,onPause:D.func,onStop:D.func,onTick:D.func,onComplete:D.func};var B=U,W=n(85893),X=function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;return(0,W.jsxs)("span",{className:"text-gray-200 font-bold text-2xl cursor-default",children:["Live in ",t," days, ",n," hours, ",r," minutes, ",a," seconds"]})},z=function(){var e,t=(0,p.Z)(),n=(0,r.Z)(t,1)[0],c=(0,i.useState)(!1),l=c[0],u=c[1],f=(0,o.Os)(),m=S(),h=m.isSoldOut,y=m.mintStartDate,v=m.isMinting,g=m.onMint,b=(m.onMintMultiple,m.nftsData);return(0,W.jsxs)("main",{className:"p-5",children:[(0,W.jsx)(s.x7,{}),(0,W.jsxs)(a.default,{children:[(0,W.jsx)("title",{children:"Galaxy Eyes"}),(0,W.jsx)("meta",{name:"description",content:"Solana blockchain candy machine app boilerplate on top of Metaplex Candy Machine. NextJS, Tailwind, Anchor, SolanaLabs.React, dev/mainnet automation scripts."}),(0,W.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,W.jsx)(O.Z,{}),(0,W.jsxs)("div",{className:"flex flex-col justify-center items-center flex-1 space-y-3 mt-20",children:[(0,W.jsx)("img",{className:"rounded-md shadow-lg justify-center",src:"/icon.png",height:200,width:200,alt:"Candy Image"}),(0,W.jsx)("span",{className:"text-gray-200 font-bold text-2xl cursor-default",children:"GET YOUR PERSONAL GALAXY NOW"}),!f.connected&&(0,W.jsx)("span",{className:"text-gray-200 font-bold text-2xl cursor-default",children:"NOT CONNECTED, PLEASE CLICK SELECT WALLET..."}),f.connected&&(0,W.jsxs)("p",{className:"text-gray-200 font-bold text-lg cursor-default",children:["Address: ",(0,d.Xn)((null===(e=f.publicKey)||void 0===e?void 0:e.toBase58())||"")]}),f.connected&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("p",{className:"text-gray-200 font-bold text-lg cursor-default",children:["Balance: ",(n||0).toLocaleString()," SOL"]}),(0,W.jsxs)("p",{className:"text-gray-200 font-bold text-lg cursor-default",children:["Available/Minted/Total: ",b.itemsRemaining,"/",b.itemsRedeemed,"/",b.itemsAvailable]})]}),(0,W.jsx)("div",{className:"flex flex-col justify-start items-start text-gray-200",children:f.connected&&(0,W.jsx)("button",{disabled:h||v||!l,onClick:g,className:"px-4 py-2 mx-auto font-bold text-gray-200 transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600",children:h?(0,W.jsx)("p",{className:"text-gray-200",children:"WE ARE SOLD OUT"}):l?(0,W.jsxs)("div",{className:"flex flex-col w-1/3",children:[(0,W.jsx)("h1",{className:"mb-1 text-3xl font-bold text-gray-200 text-center",children:"MINT"}),v&&"LOADING..."]}):(0,W.jsx)(B,{date:y,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:X})})}),(0,W.jsx)(P.Z,{})]})]})}},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(35347)}])}},function(e){e.O(0,[9774,4870,7735,7821,4689,9669,5199,2888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);