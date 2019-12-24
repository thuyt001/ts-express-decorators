(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{384:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[t._v("#")]),t._v(" Property "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Property } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v5.36.0/packages/common/src/jsonschema/decorators/property.ts#L0-L0"}},[t._v("/packages/common/src/jsonschema/decorators/property.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[t._v("function "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/converters/interfaces/IPropertyOptions.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("IPropertyOptions")])]),t._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("div",{pre:!0},[a("p",[a("code",[t._v("@Property()")]),t._v(" let you decorate an attribute that can be serialized or deserialized. By default, no parameters are required to use it.\nBut in some cases, we need to configure explicitly the JSON attribute name mapped to the provide attribute.")]),t._v(" "),a("p",[t._v("Here an example of different use cases with "),a("code",[t._v("@Property()")]),t._v(":")]),t._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date-time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   startDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end-date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date-time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   endDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PropertyType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eq. @Property({use: Task})")]),t._v("\n   tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TaskModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TaskModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Minimum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Property or Property is not required when a JsonSchema decorator is used")]),t._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Maximum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Theses "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ES6")]),t._v(" collections can be used"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Map and Set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Map will be serialized "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" an object and Set "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" an array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nBy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map and Set have a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" custom Converter already embed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" But you can override "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("theses")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see next part"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nFor the "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" you must use the "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("@PropertyType")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" decorator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("TypeClass")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" will be used to deserialize each item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the collection stored on the attribute source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nAccording to the previous example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the JsonSchema generated will be "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" follow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("`typescript\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"startDate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date-time"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"endDate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date-time"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"items"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$ref"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#/definitions/Task"')]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"definitions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Task"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subject"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minimum"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v('\n            "maximum'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("14")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("15")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("16")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("17")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("18")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("19")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("20")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("21")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("22")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("23")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("24")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("25")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("26")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("27")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("28")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("29")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("30")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("31")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("32")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("33")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("34")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("35")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("36")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("37")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("38")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("39")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("40")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("41")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("42")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("43")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("44")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("45")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("46")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("47")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("48")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("49")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("50")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("51")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("52")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("53")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("54")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("55")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("56")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("57")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("58")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("59")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("60")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("61")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("62")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("63")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("64")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("65")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("66")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("67")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("68")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("69")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("70")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("71")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[t._v("72")]),a("br")])]),a("p",[t._v("@returns {Function}\n@param options\n@decorator\n@converters\n@jsonschema\n@property")])])])}),[],!1,null,null,null);s.default=r.exports}}]);