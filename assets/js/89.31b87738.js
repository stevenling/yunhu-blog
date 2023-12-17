(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{410:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《redis-设计与实现》笔记之简单动态字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《redis-设计与实现》笔记之简单动态字符串"}},[s._v("#")]),s._v(" 《Redis 设计与实现》笔记之简单动态字符串")]),s._v(" "),t("h2",{attrs:{id:"一、sds-的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、sds-的定义"}},[s._v("#")]),s._v(" 一、SDS 的定义")]),s._v(" "),t("p",[t("code",[s._v("Redis")]),s._v(" 不使用 C 语言的字符数组来表示字符串，而是重写了一个 "),t("code",[s._v("SDS")]),s._v(" 结构体来表示字符串。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sdshdr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录 buf 数组中已使用字节的数量")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等于 SDS 所保存字符串的长度")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录 buf 数组中未使用字节的数量")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" free"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字节数组，用于保存字符串")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"二、sds-与字符串区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、sds-与字符串区别"}},[s._v("#")]),s._v(" 二、SDS 与字符串区别")]),s._v(" "),t("h3",{attrs:{id:"_2-1-常数空间获取字符串长度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-常数空间获取字符串长度"}},[s._v("#")]),s._v(" 2.1 常数空间获取字符串长度")]),s._v(" "),t("p",[s._v("C 字符串需要遍历才可以获取字符串长度，因此时间复杂度是 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",[s._v("(")]),t("mi",[s._v("n")]),t("mo",[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),t("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"base textstyle uncramped"},[t("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathit"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),t("p",[s._v("由于 SDS 中增加了一个成员变量 "),t("code",[s._v("len")]),s._v("，因此获取一个 SDS 长度的复杂度仅为 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",[s._v("(")]),t("mn",[s._v("1")]),t("mo",[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(1)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),t("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"base textstyle uncramped"},[t("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathrm"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_2-2-避免缓冲区溢出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-避免缓冲区溢出"}},[s._v("#")]),s._v(" 2.2 避免缓冲区溢出")]),s._v(" "),t("p",[s._v("C 语言的库函数 "),t("code",[s._v("**char *strcat(char *dest, const char *src)**")]),s._v(" 可以将 "),t("code",[s._v("src")]),s._v("所指向的字符串追加到 "),t("code",[s._v("dest")]),s._v(" 所指向的字符串的结尾。")]),s._v(" "),t("p",[s._v("C 字符串是不记录自身长度的，"),t("code",[s._v("strcat")]),s._v("函数默认 dest 有足够多的内存空间，但是一旦内存空间不满足就会发生"),t("strong",[s._v("缓冲区溢出")]),s._v("。")]),s._v(" "),t("p",[s._v("比如程序中有两个字符串 "),t("code",[s._v('s1 = "Hello"')]),s._v(", "),t("code",[s._v('s2 = "world"')]),s._v("，假设它们的内存空间是连在一块的，这时候我执行 "),t("code",[s._v('strcat(s1, "yunhu")')]),s._v("，那么 "),t("code",[s._v("s2")]),s._v(" 原本的值就被覆盖了，这就是缓冲区溢出。")]),s._v(" "),t("p",[s._v("而 SDS 在修改时会检查 SDS 的空间是否满足，如果不满足就扩容，之后才执行实际修改操作，因此没有缓冲区溢出问题。")]),s._v(" "),t("h3",{attrs:{id:"_2-3-减少内存分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-减少内存分配"}},[s._v("#")]),s._v(" 2.3 减少内存分配")]),s._v(" "),t("p",[s._v("如果字符串增长，比如 "),t("code",[s._v("append")]),s._v("，C 字符串需要内存重分配扩展底层数组大小，否则就会出现缓冲区溢出。")]),s._v(" "),t("p",[s._v("如果字符串缩短，那么需要重分配来释放那些没用使用的内存空间，如果忘记则会出现内存泄漏。")]),s._v(" "),t("p",[s._v("Redis 经常被用来频繁修改数据，这样每一次修改字符串长度都会进行一次内存重分配，对性能造成影响。")]),s._v(" "),t("p",[s._v("因此 Redis 在 SDS 中添加了一个成员变量 "),t("code",[s._v("free")]),s._v("，表示未使用的字节数量。")]),s._v(" "),t("p",[s._v("通过这个未使用的空间，SDS 就进行了优化。")]),s._v(" "),t("h4",{attrs:{id:"_2-3-1-空间预分配优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-空间预分配优化"}},[s._v("#")]),s._v(" 2.3.1 空间预分配优化")]),s._v(" "),t("p",[s._v("在对 SDS 进行空间扩展的时候，不仅本身的 len 会分配所需要的空间，free 也会有分配。")]),s._v(" "),t("ul",[t("li",[s._v("如果 len < 1 MB，free = len，len 增加到 10，那么 free 等于 10。")]),s._v(" "),t("li",[s._v("如果 len >= 1 MB, free = 1 MB。")])]),s._v(" "),t("p",[s._v("第二次扩展时，当 free 的空间大于 0 的时候，会先使用 free 的空间，如果 free 的空间够，就无须进行内存的重分配了，性能得到优化。")]),s._v(" "),t("h4",{attrs:{id:"_2-3-2-惰性空间释放优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-惰性空间释放优化"}},[s._v("#")]),s._v(" 2.3.2 惰性空间释放优化")]),s._v(" "),t("p",[s._v("当缩短字符串的时候，Redis 不直接进行内存的重分配，而是将 free 也就是未使用的空间大小增加。")]),s._v(" "),t("p",[s._v("之后如果有增加字符串的行为，如果 free 的空间够，那么只需将 free 中的空间用来使用，不必内存重分配。")]),s._v(" "),t("h3",{attrs:{id:"_2-4-二进制安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-二进制安全"}},[s._v("#")]),s._v(" 2.4 二进制安全")]),s._v(" "),t("p",[s._v("C 字符串中不能包含空字符，因此它只能保存文本数据，无法保存图片、音视频等二进制数据。")]),s._v(" "),t("p",[s._v("因为 SDS 使用 len 属性的值而不是空字符来判断字符串是否结束，因此数据在写入与读取时完全相同。")]),s._v(" "),t("h3",{attrs:{id:"_2-5-兼容部分-c-字符串函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-兼容部分-c-字符串函数"}},[s._v("#")]),s._v(" 2.5 兼容部分 C 字符串函数")]),s._v(" "),t("p",[s._v("SDS 也是空字符串结尾，因此也可以使用"),t("code",[s._v("<string.h>")]),s._v("函数库，从而避免了不必要的代码重复。")])])}),[],!1,null,null,null);t.default=n.exports}}]);