(this["webpackJsonpjohto-app"]=this["webpackJsonpjohto-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),i=(a(12),a(13),a(14),a(3)),s=a(4),m=a(6),c=a(5),g=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={message:Array},n.state={bonfirelit:Array},n.state={expertchallenges:Array},n.state={beglevel:Array},n.state={easierChallenges:Array},n}return Object(s.a)(a,[{key:"startingClass",value:function(){var e=(e=Array("Warrior","Knight","Wanderer","Thief","Bandit","Hunter","Sorcerer","Pyromancer","Cleric","Deprived"))[Math.floor(Math.random()*e.length)];this.setState({message:e})}},{key:"litBonfire",value:function(){var e=(e=Array(10,11,12,13,14,15,16,17,18,19,20))[Math.floor(Math.random()*e.length)];this.setState({bonfirelit:e})}},{key:"challengeEXP",value:function(){var e=(e=Array("Fat Roll Only","Armorless","Max Level: 10","Only use Fireball Pyromancy to Damage Bosses","No Kindling Bonfires","No Healing","Fist Only","Broken Straight Sword Only","No Death Run"))[Math.floor(Math.random()*e.length)];this.setState({expertchallenges:e})}},{key:"easierOnes",value:function(){var e=(e=Array("Upgrade Weapon Max: Two Times","Stick with your Starting Weapon","Kill every Enemy in each Area Atleast Once","Shieldless & No double handing Weapon","No Rolling Against Bosses","No Weapon, Spells Only","Only Heal Yourself with Spells"))[Math.floor(Math.random()*e.length)],t=(t=Array(20,21,22,23,24,25,26,27,28,29,30))[Math.floor(Math.random()*t.length)];this.setState({easierChallenges:e}),this.setState({beglevel:t})}},{key:"render",value:function(){return r.a.createElement("h1",{style:{backgroundImage:"url('https://live.staticflickr.com/4510/37432686870_e2fbe88b90_b.jpg')",height:2e3}},r.a.createElement("span",null," "),r.a.createElement("d1",{style:{backgroundColor:"Gold",fontFamily:"Adobe Garamond Bold",fontSize:80,margin:450}}," ","Dark Souls 1 Randomizer"),r.a.createElement("br",null),r.a.createElement("note",{style:{backgroundColor:"Gold",margin:450}},"Havel's Shield is OFF LIMITS"),r.a.createElement("br",null),r.a.createElement("button",{style:{backgroundColor:"Lightgreen",fontSize:40,fontWeight:"bold",fontFamily:"Adobe Garamond Bold",margin:200,marginBottom:0,marginTop:100,marginRight:50},onClick:this.startingClass.bind(this)},"Randomize Starting Class",r.a.createElement("her",{style:{backgroundColor:"red"}})),r.a.createElement("hc",{style:{backgroundColor:"Gold",margin:30}},r.a.createElement("span",null,this.state.message)),r.a.createElement("br",null),r.a.createElement("button",{style:{backgroundColor:"Lightgreen",fontSize:40,fontWeight:"bold",fontFamily:"Adobe Garamond Bold",margin:200,marginBottom:200,marginTop:50,marginRight:50},onClick:this.litBonfire.bind(this)},"Bonfires"),r.a.createElement("hc",{style:{backgroundColor:"Gold",margin:100}},r.a.createElement("span",null,this.state.bonfirelit)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("d1",{style:{backgroundColor:"Pink",fontSize:80,fontFamily:"Adobe Garamond Bold",margin:450,marginBottom:50}},"Expert"),r.a.createElement("br",null),r.a.createElement("button",{style:{backgroundColor:"Lightgreen",fontSize:40,fontFamily:"Adobe Garamond Bold",margin:200,marginBottom:50,marginTop:100,fontWeight:"bold"},onClick:this.challengeEXP.bind(this)},"Generate Challenge"),r.a.createElement("hc",{style:{backgroundColor:"Pink",margin:30}}," ",this.state.expertchallenges),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("d1",{style:{backgroundColor:"Lightblue",fontFamily:"Adobe Garamond Bold",fontSize:80,margin:450,marginBottom:50,marginTop:100}},"Intermediate"," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{style:{backgroundColor:"Lightgreen",fontSize:40,fontFamily:"Adobe Garamond Bold",margin:200,marginBottom:50,marginTop:100,fontWeight:"bold"},onClick:this.easierOnes.bind(this)},"Generate Challenge"),r.a.createElement("br",null),r.a.createElement("d1",{style:{backgroundColor:"Lightblue",margin:200}},"Max Level:"," "),r.a.createElement("span",{style:{backgroundColor:"Lightblue",marginBottom:30}},this.state.beglevel),r.a.createElement("br",null),r.a.createElement("bu",{style:{backgroundColor:"Lightblue",margin:200},onCLick:this.easierOnes.bind(this)},"Challenge:"," "),r.a.createElement("span",{style:{backgroundColor:"Lightblue",marginBottom:30}},this.state.easierChallenges))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.feaffa0d.chunk.js.map