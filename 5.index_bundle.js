(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{446:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Contact=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(19),l=function(e){return e&&e.__esModule?e:{default:e}}(r),o=(n(392),n(383));function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=t.Contact=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={name:"",email:"",text:"",errors:{},msg:null,sending:!1},a.onChange=function(e){a.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.setState({sending:!0}),o.api.mail.send(a.state).then(function(e){400===e.status?(a.setState({sending:!1}),setTimeout(function(){a.setState({errors:e.data})})):(a.setState({msg:e.msg}),setTimeout(function(){a.setState({msg:null})},4e3),a.setState({name:"",email:"",text:"",errors:{}}),a.setState({sending:!1}))})},i(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.text,r=e.errors,o=e.msg,i=e.sending;return l.default.createElement("section",{className:"section section__contact fade-in"},l.default.createElement("br",null),l.default.createElement("div",{className:"container  flex-col"},l.default.createElement("div",{className:"heading center"},l.default.createElement("h1",{className:"heading-1 color-white move-in-left-2"},"Contact"),l.default.createElement("div",{className:"heading__border heading__border--white  heading__border--left move-in-right-2"})),l.default.createElement("br",null),o?l.default.createElement("h4",{className:"heading-4 color-dark-blue move-in-left-2"},o):l.default.createElement("h4",{className:"heading-4 color-dark-blue fade-in"},"Send me email"),l.default.createElement("br",null),l.default.createElement("form",{onSubmit:this.onSubmit,action:"",className:"form"},l.default.createElement("div",{className:"form__control"},l.default.createElement("input",{name:"name",value:t,onChange:this.onChange,type:"text",placeholder:"Your name here",className:"form__input move-in-left-1 "+(r.name?"inValid":"")}),l.default.createElement("small",{style:{color:"#fff"}},r.name&&r.name)),l.default.createElement("div",{className:"form__control"},l.default.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Your email here",className:"form__input move-in-right-1 "+(r.email?"inValid":"")}),l.default.createElement("small",{style:{color:"#fff"}},r.email&&r.email)),l.default.createElement("div",{className:"form__control"},l.default.createElement("textarea",{name:"text",value:a,onChange:this.onChange,placeholder:"Your message here",className:"form__input move-in-left-1 "+(r.text?"inValid":""),rows:"7"}),l.default.createElement("small",{style:{color:"#fff"}},r.text&&r.text)),l.default.createElement("br",null),l.default.createElement("button",{className:"btn move-in-right-1"}," ",i?"Sending...":"Send :)"))))}}]),t}();t.default=c}}]);