/*! -- File: hammer.js ( Input 0 ) -- */
!function(h,ua,Ra,l){function ga(a,b,c){return setTimeout(ha(a,c),b)}function G(a,b,c){return Array.isArray(a)?(w(a,c[b],c),!0):!1}function w(a,b,c){var d;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==l)for(d=0;d<a.length;)b.call(c,a[d],d,a),d++;else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d,a)}function va(a,b,c){var d="DEPRECATED METHOD: "+b+"\n"+c+" AT \n";return function(){var b=Error("get-stack-trace"),b=b&&b.stack?b.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,
"{anonymous}()@"):"Unknown Stack Trace",c=h.console&&(h.console.warn||h.console.log);return c&&c.call(h.console,d,b),a.apply(this,arguments)}}function p(a,b,c){var d=b.prototype;b=a.prototype=Object.create(d);b.constructor=a;b._super=d;c&&x(b,c)}function ha(a,b){return function(){return a.apply(b,arguments)}}function ia(a,b){return typeof a==Sa?a.apply(b?b[0]||l:l,b):a}function R(a,b,c){w(S(b),function(b){a.addEventListener(b,c,!1)})}function T(a,b,c){w(S(b),function(b){a.removeEventListener(b,c,
!1)})}function wa(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function S(a){return a.trim().split(/\s+/g)}function H(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function U(a){return Array.prototype.slice.call(a,0)}function xa(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];0>H(e,g)&&d.push(a[f]);e[f]=g;f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function V(a,b){for(var c,
d,e=b[0].toUpperCase()+b.slice(1),f=0;f<ya.length;){if(c=ya[f],d=c?c+e:b,d in a)return d;f++}return l}function za(a){a=a.ownerDocument||a;return a.defaultView||a.parentWindow||h}function r(a,b){var c=this;this.manager=a;this.callback=b;this.element=a.element;this.target=a.options.inputTarget;this.domHandler=function(b){ia(a.options.enable,[a])&&c.handler(b)};this.init()}function Ta(a){var b=a.options.inputClass;return new (b?b:Ua?ja:Va?W:Aa?ka:X)(a,Wa)}function Wa(a,b,c){var d,e,f=c.pointers.length;
d=c.changedPointers.length;var g=b&m&&0===f-d,f=b&(k|n)&&0===f-d;c.isFirst=!!g;c.isFinal=!!f;g&&(a.session={});c.eventType=b;b=a.session;g=c.pointers;f=g.length;b.firstInput||(b.firstInput=Ba(c));1<f&&!b.firstMultiple?b.firstMultiple=Ba(c):1===f&&(b.firstMultiple=!1);d=b.firstInput;e=(f=b.firstMultiple)?f.center:d.center;var q=c.center=Ca(g);c.timeStamp=la();c.deltaTime=c.timeStamp-d.timeStamp;c.angle=ma(e,q);c.distance=Y(e,q);d=c.center;e=b.offsetDelta||{};var q=b.prevDelta||{},h=b.prevInput||{};
c.eventType!==m&&h.eventType!==k||(q=b.prevDelta={x:h.deltaX||0,y:h.deltaY||0},e=b.offsetDelta={x:d.x,y:d.y});c.deltaX=q.x+(d.x-e.x);c.deltaY=q.y+(d.y-e.y);c.offsetDirection=Da(c.deltaX,c.deltaY);e=c.deltaTime;d=c.deltaX/e||0;e=c.deltaY/e||0;c.overallVelocityX=d;c.overallVelocityY=e;c.overallVelocity=C(d)>C(e)?d:e;f?(d=f.pointers,d=Y(g[0],g[1],Z)/Y(d[0],d[1],Z)):d=1;c.scale=d;f?(f=f.pointers,g=ma(g[1],g[0],Z)+ma(f[1],f[0],Z)):g=0;c.rotation=g;c.maxPointers=b.prevInput?c.pointers.length>b.prevInput.maxPointers?
c.pointers.length:b.prevInput.maxPointers:c.pointers.length;e=b.lastInterval||c;g=c.timeStamp-e.timeStamp;c.eventType!=n&&(g>Xa||e.velocity===l)?(d=c.deltaX-e.deltaX,e=c.deltaY-e.deltaY,q=d/g||0,h=e/g||0,g=q,f=h,q=C(q)>C(h)?q:h,d=Da(d,e),b.lastInterval=c):(q=e.velocity,g=e.velocityX,f=e.velocityY,d=e.direction);c.velocity=q;c.velocityX=g;c.velocityY=f;c.direction=d;b=a.element;wa(c.srcEvent.target,b)&&(b=c.srcEvent.target);c.target=b;a.emit("hammer.input",c);a.recognize(c);a.session.prevInput=c}function Ba(a){for(var b=
[],c=0;c<a.pointers.length;)b[c]={clientX:I(a.pointers[c].clientX),clientY:I(a.pointers[c].clientY)},c++;return{timeStamp:la(),pointers:b,center:Ca(b),deltaX:a.deltaX,deltaY:a.deltaY}}function Ca(a){var b=a.length;if(1===b)return{x:I(a[0].clientX),y:I(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:I(c/b),y:I(d/b)}}function Da(a,b){return a===b?aa:C(a)>=C(b)?0>a?K:L:0>b?M:N}function Y(a,b,c){c||(c=Ea);var d=b[c[0]]-a[c[0]];a=b[c[1]]-a[c[1]];return Math.sqrt(d*
d+a*a)}function ma(a,b,c){c||(c=Ea);return 180*Math.atan2(b[c[1]]-a[c[1]],b[c[0]]-a[c[0]])/Math.PI}function X(){this.evEl=Ya;this.evWin=Za;this.pressed=!1;r.apply(this,arguments)}function ja(){this.evEl=Fa;this.evWin=Ga;r.apply(this,arguments);this.store=this.manager.session.pointerEvents=[]}function Ha(){this.evTarget=$a;this.evWin=ab;this.started=!1;r.apply(this,arguments)}function W(){this.evTarget=bb;this.targetIds={};r.apply(this,arguments)}function cb(a,b){var c=U(a.touches),d=this.targetIds;
if(b&(m|D)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e;a=U(a.changedTouches);var f=[],g=this.target;if(e=c.filter(function(a){return wa(a.target,g)}),b===m)for(c=0;c<e.length;)d[e[c].identifier]=!0,c++;for(c=0;c<a.length;)d[a[c].identifier]&&f.push(a[c]),b&(k|n)&&delete d[a[c].identifier],c++;return f.length?[xa(e.concat(f),"identifier",!0),f]:void 0}function ka(){r.apply(this,arguments);var a=ha(this.handler,this);this.touch=new W(this.manager,a);this.mouse=new X(this.manager,a);this.primaryTouch=
null;this.lastTouches=[]}function Ia(a){a=a.changedPointers[0];if(a.identifier===this.primaryTouch){var b={x:a.clientX,y:a.clientY};this.lastTouches.push(b);var c=this.lastTouches;setTimeout(function(){var a=c.indexOf(b);-1<a&&c.splice(a,1)},db)}}function na(a,b){this.manager=a;this.set(b)}function eb(a){if(-1<a.indexOf(E))return E;var b=-1<a.indexOf(O),c=-1<a.indexOf(P);return b&&c?E:b||c?b?O:P:-1<a.indexOf(oa)?oa:Ja}function y(a){this.options=x({},this.defaults,a||{});this.id=fb++;this.manager=
null;a=this.options.enable;this.options.enable=a===l?!0:a;this.state=ba;this.simultaneous={};this.requireFail=[]}function Ka(a){return a&Q?"cancel":a&B?"end":a&J?"move":a&t?"start":""}function La(a){return a==N?"down":a==M?"up":a==K?"left":a==L?"right":""}function ca(a,b){return(b=b.manager)?b.get(a):a}function u(){y.apply(this,arguments)}function da(){u.apply(this,arguments);this.pY=this.pX=null}function pa(){u.apply(this,arguments)}function qa(){y.apply(this,arguments);this._input=this._timer=null}
function ra(){u.apply(this,arguments)}function sa(){u.apply(this,arguments)}function ea(){y.apply(this,arguments);this.pCenter=this.pTime=!1;this._input=this._timer=null;this.count=0}function z(a,b){b=b||{};var c=b.recognizers;return b.recognizers=c===l?z.defaults.preset:c,new ta(a,b)}function ta(a,b){this.options=x({},z.defaults,b||{});this.options.inputTarget=this.options.inputTarget||a;this.handlers={};this.session={};this.recognizers=[];this.oldCssProps={};this.element=a;this.input=Ta(this);this.touchAction=
new na(this,this.options.touchAction);Ma(this,!0);w(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]);a[3]&&b.requireFailure(a[3])},this)}function Ma(a,b){var c=a.element;if(c.style){var d;w(a.options.cssProps,function(e,f){d=V(c.style,f);b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""});b||(a.oldCssProps={})}}function gb(a,b){var c=ua.createEvent("Event");c.initEvent(a,!0,!0);c.gesture=b;b.target.dispatchEvent(c)}var x,ya=
" webkit Moz MS ms o".split(" "),hb=ua.createElement("div"),Sa="function",I=Math.round,C=Math.abs,la=Date.now;x="function"!=typeof Object.assign?function(a){if(a===l||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(d!==l&&null!==d)for(var e in d)d.hasOwnProperty(e)&&(b[e]=d[e])}return b}:Object.assign;var Na=va(function(a,b,c){for(var d=Object.keys(b),e=0;e<d.length;)(!c||c&&a[d[e]]===l)&&(a[d[e]]=b[d[e]]),
e++;return a},"extend","Use `assign`."),ib=va(function(a,b){return Na(a,b,!0)},"merge","Use `assign`."),fb=1,jb=/mobile|tablet|ip(ad|hone|od)|android/i,Aa="ontouchstart"in h,Ua=V(h,"PointerEvent")!==l,Va=Aa&&jb.test(navigator.userAgent),Xa=25,m=1,D=2,k=4,n=8,aa=1,K=2,L=4,M=8,N=16,v=K|L,F=M|N,Oa=v|F,Ea=["x","y"],Z=["clientX","clientY"];r.prototype={handler:function(){},init:function(){this.evEl&&R(this.element,this.evEl,this.domHandler);this.evTarget&&R(this.target,this.evTarget,this.domHandler);this.evWin&&
R(za(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&T(this.element,this.evEl,this.domHandler);this.evTarget&&T(this.target,this.evTarget,this.domHandler);this.evWin&&T(za(this.element),this.evWin,this.domHandler)}};var kb={mousedown:m,mousemove:D,mouseup:k},Ya="mousedown",Za="mousemove mouseup";p(X,r,{handler:function(a){var b=kb[a.type];b&m&&0===a.button&&(this.pressed=!0);b&D&&1!==a.which&&(b=k);this.pressed&&(b&k&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],
changedPointers:[a],pointerType:"mouse",srcEvent:a}))}});var lb={pointerdown:m,pointermove:D,pointerup:k,pointercancel:n,pointerout:n},mb={2:"touch",3:"pen",4:"mouse",5:"kinect"},Fa="pointerdown",Ga="pointermove pointerup pointercancel";h.MSPointerEvent&&!h.PointerEvent&&(Fa="MSPointerDown",Ga="MSPointerMove MSPointerUp MSPointerCancel");p(ja,r,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),d=lb[d],e=mb[a.pointerType]||a.pointerType,f="touch"==e,g=H(b,a.pointerId,
"pointerId");d&m&&(0===a.button||f)?0>g&&(b.push(a),g=b.length-1):d&(k|n)&&(c=!0);0>g||(b[g]=a,this.callback(this.manager,d,{pointers:b,changedPointers:[a],pointerType:e,srcEvent:a}),c&&b.splice(g,1))}});var nb={touchstart:m,touchmove:D,touchend:k,touchcancel:n},$a="touchstart",ab="touchstart touchmove touchend touchcancel";p(Ha,r,{handler:function(a){var b=nb[a.type];if(b===m&&(this.started=!0),this.started){var c,d=U(a.touches);c=U(a.changedTouches);c=(b&(k|n)&&(d=xa(d.concat(c),"identifier",!0)),
[d,c]);b&(k|n)&&0===c[0].length-c[1].length&&(this.started=!1);this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:"touch",srcEvent:a})}}});var ob={touchstart:m,touchmove:D,touchend:k,touchcancel:n},bb="touchstart touchmove touchend touchcancel";p(W,r,{handler:function(a){var b=ob[a.type],c=cb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:"touch",srcEvent:a})}});var db=2500;p(ka,r,{handler:function(a,b,c){var d="touch"==c.pointerType,
e="mouse"==c.pointerType;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)b&m?(this.primaryTouch=c.changedPointers[0].identifier,Ia.call(this,c)):b&(k|n)&&Ia.call(this,c);else{if(d=e)a:{for(var d=c.srcEvent.clientX,e=c.srcEvent.clientY,f=0;f<this.lastTouches.length;f++){var g=this.lastTouches[f],h=Math.abs(e-g.y);if(25>=Math.abs(d-g.x)&&25>=h){d=!0;break a}}d=!1}if(d)return}this.callback(a,b,c)}},destroy:function(){this.touch.destroy();this.mouse.destroy()}});var Pa=V(hb.style,
"touchAction"),Qa=Pa!==l,Ja="auto",oa="manipulation",E="none",O="pan-x",P="pan-y",fa=function(){if(!Qa)return!1;var a={},b=h.CSS&&h.CSS.supports;return"auto;manipulation;pan-y;pan-x;pan-x pan-y;none".split(";").forEach(function(c){a[c]=b?h.CSS.supports("touch-action",c):!0}),a}();na.prototype={set:function(a){"compute"==a&&(a=this.compute());Qa&&this.manager.element.style&&fa[a]&&(this.manager.element.style[Pa]=a);this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},
compute:function(){var a=[];return w(this.manager.recognizers,function(b){ia(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),eb(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=-1<d.indexOf(E)&&!fa[E],f=-1<d.indexOf(P)&&!fa[P],d=-1<d.indexOf(O)&&!fa[O];if(e){var g=2>a.distance,h=250>a.deltaTime;if(1===a.pointers.length&&g&&h)return}return d&&f?void 0:e||f&&c&v||d&&c&F?this.preventSrc(b):
void 0},preventSrc:function(a){this.manager.session.prevented=!0;a.preventDefault()}};var ba=1,t=2,J=4,B=8,A=B,Q=16;y.prototype={defaults:{},set:function(a){return x(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(G(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=ca(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return G(a,"dropRecognizeWith",this)?this:(a=ca(a,this),delete this.simultaneous[a.id],
this)},requireFailure:function(a){if(G(a,"requireFailure",this))return this;var b=this.requireFail;return a=ca(a,this),-1===H(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(G(a,"dropRequireFailure",this))return this;a=ca(a,this);a=H(this.requireFail,a);return-1<a&&this.requireFail.splice(a,1),this},hasRequireFailures:function(){return 0<this.requireFail.length},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,
a)}var c=this,d=this.state;B>d&&b(c.options.event+Ka(d));b(c.options.event);a.additionalEvent&&b(a.additionalEvent);d>=B&&b(c.options.event+Ka(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=32)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(32|ba)))return!1;a++}return!0},recognize:function(a){a=x({},a);return ia(this.options.enable,[this,a])?(this.state&(A|Q|32)&&(this.state=ba),this.state=this.process(a),void(this.state&(t|
J|B|Q)&&this.tryEmit(a))):(this.reset(),void(this.state=32))},process:function(a){},getTouchAction:function(){},reset:function(){}};p(u,y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(t|J);a=this.attrTest(a);return d&&(c&n||!a)?b|Q:d||a?c&k?b|B:b&t?b|J:t:32}});p(da,u,{defaults:{event:"pan",threshold:10,pointers:1,direction:Oa},getTouchAction:function(){var a=this.options.direction,
b=[];return a&v&&b.push(P),a&F&&b.push(O),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&v?(e=0===f?aa:0>f?K:L,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?aa:0>g?M:N,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return u.prototype.attrTest.call(this,a)&&(this.state&t||!(this.state&t)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX;this.pY=a.deltaY;
var b=La(a.direction);b&&(a.additionalEvent=this.options.event+b);this._super.emit.call(this,a)}});p(pa,u,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[E]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&t)},emit:function(a){1!==a.scale&&(a.additionalEvent=this.options.event+(1>a.scale?"in":"out"));this._super.emit.call(this,a)}});p(qa,y,{defaults:{event:"press",pointers:1,time:251,threshold:9},
getTouchAction:function(){return[Ja]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(k|n)&&!e)this.reset();else if(a.eventType&m)this.reset(),this._timer=ga(function(){this.state=A;this.tryEmit()},b.time,this);else if(a.eventType&k)return A;return 32},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===A&&(a&&a.eventType&k?this.manager.emit(this.options.event+"up",a):
(this._input.timeStamp=la(),this.manager.emit(this.options.event,this._input)))}});p(ra,u,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[E]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&t)}});p(sa,u,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:v|F,pointers:1},getTouchAction:function(){return da.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;
return c&(v|F)?b=a.overallVelocity:c&v?b=a.overallVelocityX:c&F&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&C(b)>this.options.velocity&&a.eventType&k},emit:function(a){var b=La(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a);this.manager.emit(this.options.event,a)}});p(ea,y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[oa]},
process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&m&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=k)return this.failTimeout();c=this.pTime?a.timeStamp-this.pTime<b.interval:!0;d=!this.pCenter||Y(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp;this.pCenter=a.center;d&&c?this.count+=1:this.count=1;this._input=a;if(0===this.count%b.taps)return this.hasRequireFailures()?
(this._timer=ga(function(){this.state=A;this.tryEmit()},b.interval,this),t):A}return 32},failTimeout:function(){return this._timer=ga(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==A&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});z.VERSION="2.0.8";z.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[ra,{enable:!1}],[pa,{enable:!1},
["rotate"]],[sa,{direction:v}],[da,{direction:v},["swipe"]],[ea],[ea,{event:"doubletap",taps:2},["tap"]],[qa]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};ta.prototype={set:function(a){return x(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?2:1},recognize:function(a){var b=
this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&A)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],2===b.stopped||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(t|J|B)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(G(a,"add",this))return this;var b=this.get(a.options.event);
return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(G(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers;a=H(b,a);-1!==a&&(b.splice(a,1),this.touchAction.update())}return this},on:function(a,b){if(a!==l&&b!==l){var c=this.handlers;return w(S(a),function(a){c[a]=c[a]||[];c[a].push(b)}),this}},off:function(a,b){if(a!==l){var c=this.handlers;return w(S(a),function(a){b?c[a]&&c[a].splice(H(c[a],b),1):delete c[a]}),this}},
emit:function(a,b){this.options.domEvents&&gb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length)for(b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()},a=0;a<c.length;)c[a](b),a++},destroy:function(){this.element&&Ma(this,!1);this.handlers={};this.session={};this.input.destroy();this.element=null}};x(z,{INPUT_START:m,INPUT_MOVE:D,INPUT_END:k,INPUT_CANCEL:n,STATE_POSSIBLE:ba,STATE_BEGAN:t,STATE_CHANGED:J,STATE_ENDED:B,STATE_RECOGNIZED:A,STATE_CANCELLED:Q,STATE_FAILED:32,
DIRECTION_NONE:aa,DIRECTION_LEFT:K,DIRECTION_RIGHT:L,DIRECTION_UP:M,DIRECTION_DOWN:N,DIRECTION_HORIZONTAL:v,DIRECTION_VERTICAL:F,DIRECTION_ALL:Oa,Manager:ta,Input:r,TouchAction:na,TouchInput:W,MouseInput:X,PointerEventInput:ja,TouchMouseInput:ka,SingleTouchInput:Ha,Recognizer:y,AttrRecognizer:u,Tap:ea,Pan:da,Swipe:sa,Pinch:pa,Rotate:ra,Press:qa,on:R,off:T,each:w,merge:ib,extend:Na,assign:x,inherit:p,bindFn:ha,prefixed:V});("undefined"!=typeof h?h:"undefined"!=typeof self?self:{}).Hammer=z;"function"==
typeof define&&define.amd?define(function(){return z}):"undefined"!=typeof module&&module.exports?module.exports=z:h[Ra]=z}(window,document,"Hammer");