(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{202:function(t,e,n){"use strict";n.d(e,"a",(function(){return ie}));var r=n(9),a=n.n(r),o=n(203),i=n(0),l=n.n(i),c=n(3),s=n(1),u=n(29),h=n(4),f=n(321),p=n(5),d=n.n(p),m=n(6),g=n.n(m),y=n(318),v=n(319),b=n(137);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){g()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C=n(171),O=n(169),w=n(67),x=n(316),k=n(36);function T(t){var e=t.navigation;return i.createElement(c.a,{style:R.container},i.createElement(u.a,{style:R.title},"This screen doesn't exist."),i.createElement(k.a,{onPress:function(){return e.replace("Root")},style:R.link},i.createElement(u.a,{style:R.linkText},"Go to home screen!")))}var R=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}}),P=n(18),j=n.n(P),D=n(317),I={light:{text:"#000",background:"#fff",tint:"#2f80ed",tabIconDefault:"#ccc",tabIconSelected:"#2f80ed",borderColor:"#ccc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff",borderColor:"#ccc"}},z=n(14),W=n.n(z),N=n(17),B=n.n(N),H=n(15),L=n.n(H),F=n(16),V=n.n(F),A=n(7),M=n.n(A),$=n(43),q=n(10),G=n.n(q),J=n(40),U=n(33),_=n(95),K=n(204);function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(n),!0).forEach((function(e){g()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Y(t,e){var n=t.light;return n||I.light[e]}function Z(t){var e=t.barStyle,n=t.lightColor,r=t.darkColor,a=G()(t,["barStyle","lightColor","darkColor"]);Y({light:n,dark:r},"text");return l.a.createElement(U.a,j()({barStyle:e},a))}function tt(t){var e=t.style,n=t.lightColor,r=t.darkColor,a=G()(t,["style","lightColor","darkColor"]),o=Y({light:n,dark:r},"text");return l.a.createElement(u.a,j()({style:[{color:o},e]},a))}function et(t){var e=t.style,n=t.lightColor,r=t.darkColor,a=G()(t,["style","lightColor","darkColor"]),o=Y({light:n,dark:r},"background");return l.a.createElement(c.a,j()({style:[{backgroundColor:o},e]},a))}function nt(t){var e=t.style,n=t.lightColor,r=t.darkColor,a=G()(t,["style","lightColor","darkColor"]),o=Y({light:n,dark:r},"background");return l.a.createElement(J.a,j()({style:[{backgroundColor:o},e]},a))}function rt(t){var e=t.style,n=t.lightColor,r=t.darkColor,a=G()(t,["style","lightColor","darkColor"]),o=Y({light:n,dark:r},"background"),i=Y({light:n,dark:r},"text");return l.a.createElement(K.a,j()({style:X({inputAndroid:{backgroundColor:o,color:i},inputIOS:{backgroundColor:o,color:i},inputWeb:{backgroundColor:o,color:i}},e)},a))}function at(t){var e=t.style,n=t.lightColor,r=t.darkColor,a=G()(t,["style","lightColor","darkColor"]),o=Y({light:n,dark:r},"tint"),i=Y({light:n,dark:r},"background");return l.a.createElement(_.a,j()({trackColor:{false:i,true:o},style:[e]},a))}function ot(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var it=function(t){L()(n,t);var e=ot(n);function n(){return W()(this,n),e.apply(this,arguments)}return B()(n,[{key:"render",value:function(){return l.a.createElement(et,{style:[lt.container,this.props.styleContainer]},l.a.createElement(tt,{lightColor:I.light.tint,darkColor:I.dark.tint,style:[lt.textTitlePrimary]},l.a.createElement(tt,{lightColor:I.light.text,darkColor:I.dark.text,style:[lt.textTitle]},this.props.title),this.props.titlePrimary?this.props.titlePrimary:""),this.props.description&&l.a.createElement(tt,{lightColor:I.light.text,darkColor:I.dark.text,style:[lt.textDescription]},this.props.description))}}]),n}(i.Component),lt=s.a.create({container:{flex:1},textTitle:{fontSize:32,fontFamily:"OpenSans-Regular"},textTitlePrimary:{fontSize:32,fontFamily:"OpenSans-Regular"},textDescription:{paddingTop:8,fontSize:18,fontFamily:"OpenSans-Regular"}}),ct=n(47);function st(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var ut=function(t){L()(n,t);var e=st(n);function n(t){var r;return W()(this,n),(r=e.call(this,t)).state={width:0,height:0},r}return B()(n,[{key:"render",value:function(){var t=this;return l.a.createElement(ct.a,{onPress:function(){"function"===typeof t.props.handleOnPress&&t.props.handleOnPress()}},l.a.createElement(et,{darkColor:I.dark.tint,lightColor:I.light.tint,style:[ht.container,{paddingHorizontal:this.state.width?.35*this.state.width:void 0},this.props.styleContainer],onLayout:function(e){var n=e.nativeEvent.layout,r=n.width,a=n.height;t.state.width||t.setState({width:r,height:a})}},l.a.createElement(tt,{darkColor:I.light.text,lightColor:I.dark.text,style:ht.text},this.props.title)))}}]),n}(i.Component),ht=s.a.create({container:{height:56,justifyContent:"center",alignContent:"center",textAlign:"center",borderRadius:4},text:{fontSize:12,fontFamily:"OpenSans-Bold"}});function ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ft(Object(n),!0).forEach((function(e){g()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function dt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var mt=function(t){L()(n,t);var e=dt(n);function n(t){var r;return W()(this,n),(r=e.call(this,t)).state={width:0,height:0},r}return B()(n,[{key:"render",value:function(){var t=this;return l.a.createElement(et,{darkColor:I.dark.background,lightColor:I.light.background,style:[gt.container,{paddingHorizontal:this.state.width?.05*this.state.width:void 0},this.props.styleContainer],onLayout:function(e){var n=e.nativeEvent.layout,r=n.width,a=n.height;t.state.width||t.setState({width:r,height:a})}},l.a.createElement(rt,{onValueChange:function(e){"function"===typeof t.props.handleOnValueChange&&t.props.handleOnValueChange(e)},value:this.props.value,items:this.props.items,darkColor:I.dark.background,lightColor:I.light.background,style:{inputAndroidContainer:{height:this.state.height?.9*this.state.height:void 0,width:this.state.width?.9*this.state.width:void 0,justifyContent:"center",alignContent:"center"},inputAndroid:pt({height:this.state.height?.9*this.state.height:void 0,width:this.state.width?.9*this.state.width:void 0},gt.text),inputIOSContainer:{height:this.state.height?.9*this.state.height:void 0,width:this.state.width?.9*this.state.width:void 0,justifyContent:"center",alignContent:"center"},inputIOS:pt({height:this.state.height?.9*this.state.height:void 0,width:this.state.width?.9*this.state.width:void 0},gt.text),inputWeb:pt({height:this.state.height?.9*this.state.height:void 0,width:this.state.width?.9*this.state.width:void 0,borderWidth:0},gt.text)}}))}}]),n}(i.Component),gt=s.a.create({container:{height:56,justifyContent:"center",alignContent:"center",borderWidth:1,borderRadius:4,borderColor:I.light.borderColor},text:{fontSize:18,fontFamily:"OpenSans-Regular"}});function yt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var vt=function(t){L()(n,t);var e=yt(n);function n(t){var r;return W()(this,n),(r=e.call(this,t)).state={width:0,height:0},r}return B()(n,[{key:"render",value:function(){var t=this;return l.a.createElement(et,{darkColor:I.dark.background,lightColor:I.light.background,style:[bt.container,this.props.styleContainer],onLayout:function(e){var n=e.nativeEvent.layout,r=n.width,a=n.height;t.state.width||t.setState({width:r,height:a})}},l.a.createElement(nt,{placeholder:this.props.placeholder,keyboardType:this.props.keyboardType||"default",value:this.props.value,style:{flex:1,position:"relative",paddingHorizontal:this.state.width?.05*this.state.width:void 0},onChangeText:function(e){"function"===typeof t.props.handleOnChangeText&&t.props.handleOnChangeText(e)}}),this.props.value?l.a.createElement(tt,{style:[bt.text,{paddingHorizontal:this.state.width?.05*this.state.width:void 0}]},this.props.placeholder):l.a.createElement(et,null))}}]),n}(i.Component),bt=s.a.create({container:{flex:1,height:56,justifyContent:"center",alignContent:"center",borderWidth:1,borderRadius:4,borderColor:I.light.borderColor},text:{position:"absolute",fontSize:12,fontFamily:"OpenSans-Regular",top:0,left:0}});function St(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var Et=function(t){L()(n,t);var e=St(n);function n(){return W()(this,n),e.apply(this,arguments)}return B()(n,[{key:"render",value:function(){return l.a.createElement(et,{style:Ct.container},l.a.createElement(tt,{style:Ct.textTitle},this.props.title))}}]),n}(i.Component),Ct=s.a.create({container:{flex:1},textTitle:{fontSize:24,fontFamily:"OpenSans-Regular"}});function Ot(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var wt=function(t){L()(n,t);var e=Ot(n);function n(){return W()(this,n),e.apply(this,arguments)}return B()(n,[{key:"render",value:function(){var t=this;return l.a.createElement(et,{style:[xt.container,this.props.styleContainer]},l.a.createElement(ct.a,{onPress:function(){"function"===typeof t.props.handleOnPress&&t.props.handleOnPress()}},l.a.createElement(et,{style:[xt.radioButton,{borderColor:I.light.tint}]},l.a.createElement(et,{style:this.props.value?[xt.radioButtonActive,{backgroundColor:I.light.tint}]:void 0}))),l.a.createElement(tt,{style:xt.text},this.props.title))}}]),n}(i.Component),xt=s.a.create({container:{flex:1,flexDirection:"row",height:56},radioButton:{width:20,height:20,borderWidth:1,borderRadius:20,justifyContent:"center",alignContent:"center",alignItems:"center"},radioButtonActive:{width:15,height:15,borderRadius:15},text:{marginLeft:10,fontSize:12,fontFamily:"OpenSans-Regular"},textLink:{fontSize:12,fontFamily:"OpenSans-Regular",textDecorationLine:"underline"}});function kt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var Tt=function(t){L()(n,t);var e=kt(n);function n(t){var r;return W()(this,n),(r=e.call(this,t)).state={width:0,height:0,form:{type:2,document:void 0,firstName:void 0,lastName:void 0,thirdName:void 0,date:void 0,gender:void 0,secure:void 0}},r}return B()(n,[{key:"render",value:function(){var t,e=this;return l.a.createElement(et,{style:[Rt.container],onLayout:function(t){var n=t.nativeEvent.layout,r=n.width,a=n.height;e.state.width||e.setState({width:r,height:a})}},l.a.createElement($.a,{style:{paddingHorizontal:this.state.width?.05*this.state.width:0,paddingVertical:40}},l.a.createElement(it,{title:"Hola, ",titlePrimary:"Pepito",description:"Valida que los datos sean correctos"}),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(Et,{title:"Datos personales del titular"})),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(mt,{key:"type",styleContainer:{width:100},handleOnValueChange:function(t){var n=e.state.form;n.type=t,e.setState({form:n})},value:this.state.form.type,items:[{label:"DNI",value:2}]}),l.a.createElement(vt,{key:"document",placeholder:"Nro de Documento",keyboardType:"numeric",value:null==(t=this.state.form.document)?void 0:t.toString(),handleOnChangeText:function(t){var n=e.state.form,r=t.toString().match(/^[0-9]{0,8}/);r&&(n.document=r,e.setState({form:n}))}})),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(vt,{placeholder:"Nombres",value:this.state.form.firstName,handleOnChangeText:function(t){var n=e.state.form;n.firstName=t,e.setState({form:n})}})),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(vt,{placeholder:"Apellido Paterno",value:this.state.form.lastName,handleOnChangeText:function(t){var n=e.state.form;n.lastName=t,e.setState({form:n})}})),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(vt,{placeholder:"Apellido Materno",value:this.state.form.thirdName,handleOnChangeText:function(t){var n=e.state.form;n.thirdName=t,e.setState({form:n})}})),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(vt,{key:"date",placeholder:"Fecha de nacimiento",value:this.state.form.date,handleOnChangeText:function(t){var n=e.state.form;t.length<=10&&(/^[0-9]{4}/.test(t)?(n.date=t.replace(/(\d)(?=(\d{2})+(?!\d))/g,"$1/"),e.setState({form:n})):/^[0-9]{2}\/[0-9]{6}/.test(t)?(n.date=t.replace(/(\d)(?=(\d{4})+(?!\d))/g,"$1/"),e.setState({form:n})):(n.date=t,e.setState({form:n})))}})),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(Et,{title:"G\xe9nero"})),l.a.createElement(et,{style:Rt.columnWrapper},l.a.createElement(wt,{title:"Masculino",value:0===this.state.form.gender,handleOnPress:function(){var t=e.state.form;t.gender=0,e.setState({form:t})}}),l.a.createElement(wt,{title:"Femenino",value:1===this.state.form.gender,handleOnPress:function(){var t=e.state.form;t.gender=1,e.setState({form:t})}})),l.a.createElement(et,{style:Rt.rowWrapper},l.a.createElement(Et,{title:"\xbfA qui\xe9n vamos a asegurar?"})),l.a.createElement(et,{style:Rt.columnWrapper},l.a.createElement(et,null,l.a.createElement(wt,{title:"Solo a m\xed",value:0===this.state.form.secure,handleOnPress:function(){var t=e.state.form;t.secure=0,e.setState({form:t})}})),l.a.createElement(et,null,l.a.createElement(wt,{title:"A m\xed y a mi familia",value:1===this.state.form.secure,handleOnPress:function(){var t=e.state.form;t.secure=1,e.setState({form:t})}})))),l.a.createElement(et,{style:[Rt.ButtonComponentWrapper,{paddingHorizontal:this.state.width?.05*this.state.width:void 0}]},l.a.createElement(ut,{title:"CONTINUAR",handleOnPress:function(){e.props.navigation.navigate("TabTwo")}})))}}]),n}(i.Component),Rt=s.a.create({container:{flex:1,alignItems:"flex-start",justifyContent:"flex-start"},ButtonComponentWrapper:{alignSelf:"flex-start"},rowWrapper:{flex:1,flexDirection:"row",paddingTop:16},columnWrapper:{flexDirection:"column",paddingTop:16}}),Pt=n(206);function jt(t){return i.createElement(tt,j()({},t,{style:[t.style,{fontFamily:"OpenSans-Regular"}]}))}function Dt(t){var e=t.path;return l.a.createElement(et,null,l.a.createElement(et,{style:zt.getStartedContainer},l.a.createElement(tt,{style:zt.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)"},"Open up the code for this screen:"),l.a.createElement(et,{style:[zt.codeHighlightContainer,zt.homeScreenFilename],darkColor:"rgba(255,255,255,0.05)",lightColor:"rgba(0,0,0,0.05)"},l.a.createElement(jt,null,e)),l.a.createElement(tt,{style:zt.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)"},"Change any of the text, save the file, and your app will automatically update.")),l.a.createElement(et,{style:zt.helpContainer},l.a.createElement(k.a,{onPress:It,style:zt.helpLink},l.a.createElement(tt,{style:zt.helpLinkText,lightColor:I.light.tint},"Tap here if your app doesn't automatically update after making changes"))))}function It(){Pt.a("https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet")}var zt=s.a.create({container:{flex:1,backgroundColor:"#fff"},developmentModeText:{marginBottom:20,fontSize:14,lineHeight:19,textAlign:"center"},contentContainer:{paddingTop:30},welcomeContainer:{alignItems:"center",marginTop:10,marginBottom:20},welcomeImage:{width:100,height:80,resizeMode:"contain",marginTop:3,marginLeft:-10},getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,lineHeight:24,textAlign:"center"},helpContainer:{marginTop:15,marginHorizontal:20,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{textAlign:"center"}});function Wt(){return i.createElement(et,{style:Nt.container},i.createElement(tt,{style:Nt.title},"Tab Two"),i.createElement(et,{style:Nt.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),i.createElement(Dt,{path:"/screens/TabTwoScreen.tsx"}))}var Nt=s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function Bt(){return i.createElement(et,{style:Ht.container},i.createElement(tt,{style:Ht.title},"Tab Success"),i.createElement(et,{style:Ht.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),i.createElement(Dt,{path:"/screens/TabSuccessScreen.tsx"}))}var Ht=s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}}),Lt=n(62);function Ft(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var Vt=function(t){L()(n,t);var e=Ft(n);function n(){return W()(this,n),e.apply(this,arguments)}return B()(n,[{key:"render",value:function(){var t=this;return l.a.createElement(et,{style:[At.container,this.props.styleContainer]},l.a.createElement(at,{style:At.switch,value:this.props.value,onValueChange:function(e){"function"===typeof t.props.handleOnValueChange&&t.props.handleOnValueChange(e)}}),l.a.createElement(tt,{style:At.text},this.props.title,this.props.data?this.props.data.map((function(t,e){return t.link?l.a.createElement(ct.a,{key:"data_"+e,onPress:function(){return Lt.a.openURL(t.link||"")}},l.a.createElement(tt,{style:At.textLink},t.title)):l.a.createElement(tt,{key:"data_"+e,style:At.text},t.title)})):null))}}]),n}(i.Component),At=s.a.create({container:{flex:1,flexDirection:"row",height:56},switch:{},text:{marginLeft:10,fontSize:12,fontFamily:"OpenSans-Regular"},textLink:{fontSize:12,fontFamily:"OpenSans-Regular",textDecorationLine:"underline"}});function Mt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M()(t);if(e){var a=M()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return V()(this,n)}}var $t=function(t){L()(n,t);var e=Mt(n);function n(t){var r;return W()(this,n),(r=e.call(this,t)).state={width:0,height:0,form:{type:2,document:void 0,date:"",phone:void 0,politic:!1,message:!1}},r}return B()(n,[{key:"render",value:function(){var t,e,n=this;return l.a.createElement(et,{style:[qt.container],onLayout:function(t){var e=t.nativeEvent.layout,r=e.width,a=e.height;n.state.width||n.setState({width:r,height:a})}},l.a.createElement(Z,{translucent:!0}),l.a.createElement($.a,{style:{flex:1,paddingHorizontal:this.state.width?.05*this.state.width:void 0,paddingVertical:40}},l.a.createElement(it,{title:"Obt\xe9n tu ",titlePrimary:"seguro ahora",description:"Ingresa los datos para comenzar"}),l.a.createElement(et,{style:qt.rowWrapper},l.a.createElement(mt,{key:"type",styleContainer:{width:100},handleOnValueChange:function(t){var e=n.state.form;e.type=t,n.setState({form:e})},value:this.state.form.type,items:[{label:"DNI",value:2}]}),l.a.createElement(vt,{key:"document",placeholder:"Nro de Documento",keyboardType:"numeric",value:null==(t=this.state.form.document)?void 0:t.toString(),handleOnChangeText:function(t){var e=n.state.form,r=t.toString().match(/^[0-9]{0,8}/);r&&(e.document=r,n.setState({form:e}))}})),l.a.createElement(et,{style:qt.rowWrapper},l.a.createElement(vt,{key:"date",placeholder:"Fecha de nacimiento",value:this.state.form.date,handleOnChangeText:function(t){var e=n.state.form;t.length<=10&&(/^[0-9]{4}/.test(t)?(e.date=t.replace(/(\d)(?=(\d{2})+(?!\d))/g,"$1/"),n.setState({form:e})):/^[0-9]{2}\/[0-9]{6}/.test(t)?(e.date=t.replace(/(\d)(?=(\d{4})+(?!\d))/g,"$1/"),n.setState({form:e})):(e.date=t,n.setState({form:e})))}})),l.a.createElement(et,{style:qt.rowWrapper},l.a.createElement(vt,{placeholder:"Celular",value:null==(e=this.state.form.phone)?void 0:e.toString(),handleOnChangeText:function(t){var e=n.state.form,r=t.toString().match(/^[0-9]{0,9}/);r&&(e.phone=r,n.setState({form:e}))}})),l.a.createElement(et,{style:qt.rowWrapper},l.a.createElement(Vt,{title:"Acepto la ",data:[{link:"https://www.linkedin.com/in/binni-zenobio-cordova-leandro-a77000175/",title:"Pol\xedtica de Protecci\xf3n de Datos Personales y los T\xe9rminos y Condiciones."}],value:this.state.form.politic,handleOnValueChange:function(t){var e=n.state.form;e.politic=t,n.setState({form:e})}})),l.a.createElement(et,{style:qt.rowWrapper},l.a.createElement(Vt,{title:"Acepto la ",data:[{link:"https://www.linkedin.com/in/binni-zenobio-cordova-leandro-a77000175/",title:"Pol\xedtica de Env\xedo de Comunicaciones Comerciales."}],value:this.state.form.message,handleOnValueChange:function(t){var e=n.state.form;e.message=t,n.setState({form:e})}}))),l.a.createElement(et,{style:[qt.ButtonComponentWrapper,{paddingHorizontal:this.state.width?.05*this.state.width:void 0}]},l.a.createElement(ut,{title:"COMENCEMOS",handleOnPress:function(){n.props.navigation.navigate("TabOne")}})))}}]),n}(i.Component),qt=s.a.create({container:{flex:1,alignItems:"flex-start",justifyContent:"flex-start"},ButtonComponentWrapper:{alignSelf:"flex-start"},rowWrapper:{flexDirection:"row",paddingTop:16}}),Gt=Object(D.a)();function Jt(){return i.createElement(Gt.Navigator,{initialRouteName:"TabHome",tabBarOptions:{activeTintColor:I.light.tint}},i.createElement(Gt.Screen,{name:"TabHome",component:Kt,options:{tabBarIcon:function(t){var e=t.color;return i.createElement(Ut,{name:"ios-code",color:e})}}}),i.createElement(Gt.Screen,{name:"TabOne",component:Xt,options:{tabBarIcon:function(t){var e=t.color;return i.createElement(Ut,{name:"ios-code",color:e})}}}),i.createElement(Gt.Screen,{name:"TabTwo",component:Zt,options:{tabBarIcon:function(t){var e=t.color;return i.createElement(Ut,{name:"ios-code",color:e})}}}),i.createElement(Gt.Screen,{name:"TabSuccess",component:ee,options:{tabBarIcon:function(t){var e=t.color;return i.createElement(Ut,{name:"ios-code",color:e})}}}))}function Ut(t){return i.createElement(y.a,j()({size:30,style:{marginBottom:-3}},t))}var _t=Object(x.a)();function Kt(){return i.createElement(_t.Navigator,{screenOptions:{headerShown:!1,headerTransparent:!0}},i.createElement(_t.Screen,{name:"TabHomeScreen",component:$t,options:{headerTitle:"Tab Home Title"}}))}var Qt=Object(x.a)();function Xt(){return i.createElement(Qt.Navigator,{screenOptions:{headerShown:!1,headerTransparent:!0}},i.createElement(Qt.Screen,{name:"TabOneScreen",component:Tt,options:{headerTitle:"Tab One Title"}}))}var Yt=Object(x.a)();function Zt(){return i.createElement(Yt.Navigator,{screenOptions:{headerShown:!1,headerTransparent:!0}},i.createElement(Yt.Screen,{name:"TabTwoScreen",component:Wt,options:{headerTitle:"Tab Two Title"}}))}var te=Object(x.a)();function ee(){return i.createElement(te.Navigator,{screenOptions:{headerShown:!1,headerTransparent:!0}},i.createElement(te.Screen,{name:"TabSuccessScreen",component:Bt,options:{headerTitle:"Tab Success Title"}}))}var ne={prefixes:[n(205).a("/")],config:{screens:{Root:{screens:{TabHome:{screens:{TabHomeScreen:"home"}},TabOne:{screens:{TabOneScreen:"one"}},TabTwo:{screens:{TabTwoScreen:"two"}},TabSuccess:{screens:{TabSuccessScreen:"success"}}}},NotFound:"*"}}};function re(t){var e=t.colorScheme;return i.createElement(C.a,{linking:ne,theme:"dark"===e?O.a:w.a},i.createElement(oe,null))}var ae=Object(x.a)();function oe(){return i.createElement(ae.Navigator,{screenOptions:{headerShown:!1}},i.createElement(ae.Screen,{name:"Root",component:Jt}),i.createElement(ae.Screen,{name:"NotFound",component:T,options:{title:"Oops!"}}))}function ie(){var t=function(){var t=i.useState(!1),e=a()(t,2),r=e[0],o=e[1];return i.useEffect((function(){d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b.b(),t.next=4,d.a.awrap(v.b(E(E({},y.a.font),{},{"OpenSans-Bold":n(266),"OpenSans-BoldItalic":n(267),"OpenSans-ExtraBold":n(268),"OpenSans-ExtraBoldItalic":n(269),"OpenSans-Italic":n(270),"OpenSans-Light":n(271),"OpenSans-LightItalic":n(272),"OpenSans-Regular":n(273),"OpenSans-Semibold":n(274),"OpenSans-SemiboldItalic":n(275)})));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.warn(t.t0);case 9:return t.prev=9,o(!0),b.a(),t.finish(9);case 13:case"end":return t.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}(),e=Object(i.useState)(0),r=a()(e,2),s=r[0],p=r[1];return t?l.a.createElement(c.a,{style:le.container,onLayout:function(t){var e=t.nativeEvent.layout.width;s||p(e)}},"android"!==h.a.OS&&"ios"!==h.a.OS?l.a.createElement(c.a,{style:{flex:1,backgroundColor:"blue"}},l.a.createElement(u.a,null,"hellow")):null,l.a.createElement(f.b,{style:"android"===h.a.OS||"ios"===h.a.OS?{flex:1}:{maxWidth:640}},l.a.createElement(re,{colorScheme:"light"}),l.a.createElement(o.a,null))):null}var le=s.a.create({container:{flex:1,flexDirection:"row"}})},245:function(t,e,n){t.exports=n(311)},266:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-Bold.ttf"},267:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-BoldItalic.ttf"},268:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-ExtraBold.ttf"},269:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-ExtraBoldItalic.ttf"},270:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-Italic.ttf"},271:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-Light.ttf"},272:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-LightItalic.ttf"},273:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-Regular.ttf"},274:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-Semibold.ttf"},275:function(t,e,n){t.exports=n.p+"./fonts/OpenSans-SemiboldItalic.ttf"}},[[245,1,2]]]);
//# sourceMappingURL=app.e586aead.chunk.js.map