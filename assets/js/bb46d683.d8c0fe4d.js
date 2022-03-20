"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2352],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="MongoDb",p={unversionedId:"spark/configuration/source-plugins/MongoDB",id:"version-2.1.0/spark/configuration/source-plugins/MongoDB",title:"MongoDb",description:"Source plugin: MongoDb [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/MongoDB.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/MongoDB",permalink:"/docs/2.1.0/spark/configuration/source-plugins/MongoDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/MongoDB.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kudu",permalink:"/docs/2.1.0/spark/configuration/source-plugins/Kudu"},next:{title:"Phoenix",permalink:"/docs/2.1.0/spark/configuration/source-plugins/Phoenix"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"readconfig.uri string",id:"readconfiguri-string",level:3},{value:"readconfig.database string",id:"readconfigdatabase-string",level:3},{value:"readconfig.collection string",id:"readconfigcollection-string",level:3},{value:"readconfig.* string",id:"readconfig-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],g={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDb"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source plugin: MongoDb ","[Spark]")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Read data from MongoDB."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.uri"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.database"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.collection"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.*"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"readconfiguri-string"},"readconfig.uri ","[string]"),(0,o.kt)("p",null,"MongoDB uri"),(0,o.kt)("h3",{id:"readconfigdatabase-string"},"readconfig.database ","[string]"),(0,o.kt)("p",null,"MongoDB database"),(0,o.kt)("h3",{id:"readconfigcollection-string"},"readconfig.collection ","[string]"),(0,o.kt)("p",null,"MongoDB collection"),(0,o.kt)("h3",{id:"readconfig-string"},"readconfig.* ","[string]"),(0,o.kt)("p",null,"More other parameters can be configured here, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/spark-connector/current/configuration/"},"MongoDB Configuration")," for details, see the Input Configuration section. The way to specify parameters is to prefix the original parameter name ",(0,o.kt)("inlineCode",{parentName:"p"},"readconfig.")," For example, the way to set ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.mongodb.input.partitioner")," is ",(0,o.kt)("inlineCode",{parentName:"p"},'readconfig.spark.mongodb.input.partitioner="MongoPaginateBySizePartitioner"')," . If you do not specify these optional parameters, the default values of the official MongoDB documentation will be used."),(0,o.kt)("h3",{id:"schema-string"},"schema ","[string]"),(0,o.kt)("p",null,"Because ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")," does not have the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),", when spark reads ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")," , it will sample ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")," data and infer the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," . In fact, this process will be slow and may be inaccurate. This parameter can be manually specified. Avoid these problems. ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," string, such as ",(0,o.kt)("inlineCode",{parentName:"p"},'{\\"name\\":\\"string\\",\\"age\\":\\"integer\\",\\"addrs\\":{\\"country\\":\\"string\\ ",\\"city\\":\\"string\\"}}')),(0,o.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,o.kt)("p",null,"Source Plugin common parameters, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.1.0/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mongodb {\n    readconfig.uri = "mongodb://username:password@127.0.0.1:27017/mypost"\n    readconfig.database = "mydatabase"\n    readconfig.collection = "mycollection"\n    readconfig.spark.mongodb.input.partitioner = "MongoPaginateBySizePartitioner"\n    schema="{\\"name\\":\\"string\\",\\"age\\":\\"integer\\",\\"addrs\\":{\\"country\\":\\"string\\",\\"city\\":\\"string\\"}}"\n    result_table_name = "mongodb_result_table"\n}\n')))}d.isMDXComponent=!0}}]);