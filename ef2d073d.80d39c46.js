(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),r=(a(0),a(151));const o={title:"useRecoilValueLoadable()",sidebar_label:"useRecoilValueLoadable()"},i={id:"api-reference/core/useRecoilValueLoadable",title:"useRecoilValueLoadable()",description:"```jsx",source:"@site/docs/api-reference/core/useRecoilValueLoadable.md",permalink:"/docs/api-reference/core/useRecoilValueLoadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilValueLoadable.md",sidebar_label:"useRecoilValueLoadable()",sidebar:"someSidebar",previous:{title:"useResetRecoilState()",permalink:"/docs/api-reference/core/useResetRecoilState"},next:{title:"useRecoilStateLoadable()",permalink:"/docs/api-reference/core/useRecoilStateLoadable"}},l=[{value:"Example",id:"example",children:[]}],c={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function useRecoilValueLoadable<T>(state: RecoilValue<T>): Loadable<T>\n")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Loadable"),"."),Object(r.b)("p",null,"This hook is intended to be used for reading the value of asynchronous selectors. This hook will implicitly subscribe the component to the given state."),Object(r.b)("p",null,"Unlike ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilValue()"),", this hook will not throw a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," when reading from a pending asynchronous selector (for the purpose of working alongside Suspense). Instead, this hook returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Loadable"),", which is an object with the following interface:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"state"),": indicates the status of the selector. Possible values are ",Object(r.b)("inlineCode",{parentName:"li"},"'hasValue'"),", ",Object(r.b)("inlineCode",{parentName:"li"},"'hasError'"),", ",Object(r.b)("inlineCode",{parentName:"li"},"'loading'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"contents"),": The value represented by this ",Object(r.b)("inlineCode",{parentName:"li"},"Loadable"),".  If the state is ",Object(r.b)("inlineCode",{parentName:"li"},"hasValue"),", it is the actual value, if the state is ",Object(r.b)("inlineCode",{parentName:"li"},"hasError")," it is the ",Object(r.b)("inlineCode",{parentName:"li"},"Error")," object that was thrown, and if the state is ",Object(r.b)("inlineCode",{parentName:"li"},"loading"),", then it is a ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," of the value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getValue()"),": if there is an error, this function throws the error. If selector is still loading, it throws a Promise. Otherwise it returns the value that the selector resolved to."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"toPromise()"),": returns a ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," that will resolve when the selector has resolved. If the selector is synchronous or has already resolved, it returns a ",Object(r.b)("inlineCode",{parentName:"li"},"Promise")," that resolves immediately.")),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"state"),": an ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api-reference/core/atom"}),Object(r.b)("inlineCode",{parentName:"a"},"atom"))," or ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api-reference/core/selector"}),Object(r.b)("inlineCode",{parentName:"a"},"selector"))," that ",Object(r.b)("em",{parentName:"li"},"may")," have some asynchronous operations. The status of the returned loadable will depend on the status of the provided state selector.")),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n\n")))}s.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(m,l({ref:t},s,{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);