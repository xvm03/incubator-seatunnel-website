"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5134],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="Common Options",u={unversionedId:"spark/configuration/source-plugins/source-plugin",id:"version-2.1.0/spark/configuration/source-plugins/source-plugin",title:"Common Options",description:"Source Common Options [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/source-plugin.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/source-plugin",permalink:"/docs/2.1.0/spark/configuration/source-plugins/source-plugin",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/source-plugin.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neo4j",permalink:"/docs/2.1.0/spark/configuration/source-plugins/neo4j"},next:{title:"Json",permalink:"/docs/2.1.0/spark/configuration/transform-plugins/Json"}},p={},c=[{value:"Source Plugin common parameters",id:"source-plugin-common-parameters",level:2},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"table_name string",id:"table_name-string",level:3},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"common-options"},"Common Options"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Source Common Options ","[Spark]")),(0,l.kt)("h2",{id:"source-plugin-common-parameters"},"Source Plugin common parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plug-in will not be registered as a data set that can be directly accessed by other plugins, or called a temporary table (table);"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plug-in will be registered as a data set (dataset) that can be directly accessed by other plug-ins, or called a temporary table (table). The dataset registered here can be directly accessed by other plugins by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name"),"."),(0,l.kt)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.kt)("p",null,"[Deprecated since v1.4]"," The function is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," , this parameter will be deleted in subsequent Release versions, and ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name"),"  parameter is recommended."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'fake {\n    result_table_name = "view_table"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The result of the data source ",(0,l.kt)("inlineCode",{parentName:"p"},"fake")," will be registered as a temporary table named ",(0,l.kt)("inlineCode",{parentName:"p"},"view_table")," . This temporary table can be used by any Filter or Output plugin by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," .")))}d.isMDXComponent=!0}}]);