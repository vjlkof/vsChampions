(this.webpackJsonpvschampions=this.webpackJsonpvschampions||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),r=a(2),o=a.n(r),i=(a(17),a(4)),h=a(5),l=a(7),d=a(6);var j=function(e){var t=e.id,a=e.name,c=e.title,s=e.ready,r=e.energy;return Object(n.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 measure-narrow",children:[Object(n.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(t,"_0.jpg?")}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:a}),Object(n.jsx)("p",{children:c}),s?Object(n.jsxs)("h2",{children:[r,"%"]}):null]})]})};var m=function(e){var t=e.champs;return Object(n.jsx)("div",{children:t.map((function(e,a){return Object(n.jsx)(j,{id:t[a].id,name:t[a].name,title:t[a].title},t[a].key)}))})};var b=function(e){return Object(n.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})};a(9);var g=function(e){var t=e.ready1,a=e.ready2,c=e.figthing;return console.log("entro a figth"),console.log(t),console.log(a),t&&a?Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"b--white-40 br4 grow bw2 white-80 pa4 hover-bg-near-black bg-dark-red",disabled:!1,onClick:c,children:"Fight"})}):Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"b--gray bg-gray br4 white-80 pa4",disabled:!0,children:"Fight"})})};var p=function(e){var t=e.restart;return Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"b--white-40 br4 grow bw2 white-80 pa4 hover-bg-near-black bg-dark-red",disabled:!1,onClick:t,children:"PlayAgain"})})},u=a(11);var O=function(e){var t=e.champs,a=e.searchChange,c=e.message,s=e.ready1,r=e.ready2;console.log("Data de champs"),console.log(t);var o=!1;return s&&r&&(o=!0),console.log("data fighting:"+o),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:c}),Object(n.jsx)(u.a,{placeholder:c,isSearchable:!0,isDisabled:o,onChange:a,getOptionLabel:function(e){return e.id},options:t})]})},y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(h.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),a}(c.Component),v=(a(21),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSelectChamp1=function(t){e.setState({selectChamp1:t.id}),e.setState({champReady1:!0}),console.log("ChampReady1: "+e.state.champReady1),console.log("energy1: "+e.state.energy1)},e.onSelectChamp2=function(t){e.setState({selectChamp2:t.id}),e.setState({champReady2:!0}),console.log("ChampReady2: "+e.state.champReady2),console.log("energy2: "+e.state.energy2)},e.onFighting=function(){var t=10*Math.random(10);console.log(t),t>5?e.setState({energy1:e.state.energy1-10}):e.setState({energy2:e.state.energy2-10}),e.state.energy1<=0&&e.setState({champWon:e.state.selectChamp2}),e.state.energy2<=0&&e.setState({champWon:e.state.selectChamp1})},e.onRestart=function(){e.setState({champs:[]}),e.setState({selectChamp1:""}),e.setState({selectChamp2:""}),e.setState({champReady1:!1}),e.setState({champReady2:!1}),e.setState({energy1:100}),e.setState({energy2:100}),e.setState({champWon:""}),fetch("http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json").then((function(e){return e.json()})).then((function(t){return e.setState({champs:Object.values(t.data)})}))},e.state={champs:[],selectChamp1:"",selectChamp2:"",champReady1:!1,champReady2:!1,energy1:100,energy2:100,champWon:""},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json").then((function(e){return e.json()})).then((function(t){return e.setState({champs:Object.values(t.data)})}))}},{key:"render",value:function(){var e=this.state,t=e.champs,a=e.selectChamp1,c=e.selectChamp2,r=e.champReady1,o=e.champReady2,i=e.energy1,h=e.energy2,l=e.champWon,d=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})),u=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return 0===t.length?Object(n.jsx)("h1",{className:"f1",children:"Loading"}):""!==l?Object(n.jsxs)("div",{className:"tc",children:[Object(n.jsx)("h1",{className:"f1",children:"VsChampions"}),Object(n.jsxs)("h2",{className:"f1",children:[l.toUpperCase()," WON"]}),Object(n.jsx)(j,{id:l,name:l},l),Object(n.jsx)(p,{restart:this.onRestart})]}):Object(n.jsx)("div",{children:Object(n.jsxs)(s.a.StrictMode,{children:[Object(n.jsx)("h1",{className:"f1 tc",children:"VsChampions"}),Object(n.jsxs)("div",{className:"flex items-center",children:[Object(n.jsxs)("div",{className:"tc w-40 pa3 mr2",children:[Object(n.jsx)(O,{champs:t,searchChange:this.onSelectChamp1,message:"Select champion 1",ready1:r,ready2:o}),Object(n.jsx)(b,{className:"tc",children:Object(n.jsx)(y,{children:r?Object(n.jsx)(j,{id:a,name:a,ready:r,energy:i},a):Object(n.jsx)(m,{champs:d})})})]}),Object(n.jsx)("div",{className:"tc w-20 pa3 mr2",children:Object(n.jsx)(g,{ready1:r,ready2:o,figthing:this.onFighting})}),Object(n.jsxs)("div",{className:"tc w-40 pa3 mr2",children:[Object(n.jsx)(O,{champs:t,searchChange:this.onSelectChamp2,message:"Select champion 2",ready1:r,ready2:o}),Object(n.jsx)(b,{className:"tc",children:Object(n.jsx)(y,{children:o?Object(n.jsx)(j,{id:c,name:c,ready:o,energy:h},c):Object(n.jsx)(m,{champs:u})})})]})]})]})})}}]),a}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.73f70d5d.chunk.js.map