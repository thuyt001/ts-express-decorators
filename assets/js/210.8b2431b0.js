(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{520:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"httpserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpserver"}},[t._v("#")]),t._v(" HttpServer "),e("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { HttpServer } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.36.0/packages/common/src/server/decorators/httpServer.ts#L0-L0"}},[t._v("/packages/common/src/server/decorators/httpServer.ts")])])])])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("div",{staticClass:"language-typescript"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("type HttpServer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(" = ")]),t._v("Http.Server & "),e("a",{pre:!0,attrs:{href:"/api/common/server/decorators/IHttpFactory.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("IHttpFactory")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfunction "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("HttpServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[e("span",{pre:!0,attrs:{class:"token"}},[t._v("Type")])]),t._v("<"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(">"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypedPropertyDescriptor<Function> | "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("div",{pre:!0},[e("p",[t._v("Inject the Http.Server instance.")]),t._v(" "),e("h3",{pre:!0,attrs:{id:"example"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HttpServer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OtherService")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("@HttpServer httpServer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HttpServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),e("br")])]),e("blockquote",[e("p",[t._v("Note: TypeScript transform and store "),e("code",[t._v("HttpServer")]),t._v(" as "),e("code",[t._v("Function")]),t._v(" type in the metadata. So to inject a factory, you must use the "),e("code",[t._v("@Inject(type)")]),t._v(" decorator.")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);