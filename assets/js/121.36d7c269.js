(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{449:function(v,_,t){"use strict";t.r(_);var e=t(14),a=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"正则表达式笔记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式笔记"}},[v._v("#")]),v._v(" 正则表达式笔记")]),v._v(" "),_("h2",{attrs:{id:"一、介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[v._v("#")]),v._v(" 一、介绍")]),v._v(" "),_("p",[v._v("正则表达式就是记录文本规则的代码。")]),v._v(" "),_("p",[v._v("在编写处理字符串的程序或网页时，经常会有查找符合某些复杂规则的字符串的需要。比如找出一段文本中所有的数字。")]),v._v(" "),_("p",[v._v("如果你想查找某个目录下的所有的 "),_("code",[v._v("Word")]),v._v(" 文档的话，你会搜索 "),_("code",[v._v("*.docx")]),v._v(" 。在这里，"),_("code",[v._v("*")]),v._v(" 会被解释成任意的字符串。")]),v._v(" "),_("p",[v._v("和通配符类似，正则表达式也是用来进行文本匹配的工具，只不过比起通配符，它能更精确地描述你的需求——当然，代价就是更复杂。")]),v._v(" "),_("h2",{attrs:{id:"二、元字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、元字符"}},[v._v("#")]),v._v(" 二、元字符")]),v._v(" "),_("blockquote",[_("p",[v._v("hi")])]),v._v(" "),_("p",[v._v("匹配含有 "),_("code",[v._v("hi")]),v._v(" 的字符串，包括 "),_("code",[v._v("him")]),v._v("，"),_("code",[v._v("history")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("\\bhi\\b")])]),v._v(" "),_("p",[v._v("精确查找，只匹配 "),_("code",[v._v("hi")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("\\b")]),v._v(" 是一个元字符，代表单词的开始和结束，它匹配一个位置。")]),v._v(" "),_("p",[_("code",[v._v("\\d")]),v._v(" 匹配数字。")]),v._v(" "),_("blockquote",[_("p",[v._v("0\\d\\d-\\d\\d\\d\\d\\d\\d\\d\\d")])]),v._v(" "),_("p",[v._v("这个式子可以化简为")]),v._v(" "),_("blockquote",[_("p",[v._v("0\\d{2}-\\d{8}")])]),v._v(" "),_("p",[v._v("第一个表示数字重复两次，第二个表示重复八次。")]),v._v(" "),_("p",[_("code",[v._v("\\D [^\\d]")]),v._v(" 匹配非数字字符。")]),v._v(" "),_("p",[_("code",[v._v(".")]),v._v(" 匹配任意字符")]),v._v(" "),_("p",[_("code",[v._v("\\w")]),v._v(" 匹配字母数字下划线")]),v._v(" "),_("blockquote",[_("p",[v._v("\\ba\\w*\\b")])]),v._v(" "),_("p",[v._v("首先匹配 "),_("code",[v._v("a")]),v._v(" 开头，"),_("code",[v._v("\\w")]),v._v(" 匹配字母数字下划线或汉字，"),_("code",[v._v("*")]),v._v(" 表示  "),_("code",[v._v("*")]),v._v(" 之前的可以任意使用任意次（"),_("strong",[v._v("可以是0次")]),v._v("）。")]),v._v(" "),_("blockquote",[_("p",[v._v("\\d+")])]),v._v(" "),_("p",[v._v("匹配任意个数字 "),_("code",[v._v("+")]),v._v("表示匹配 1 次或任意次，注意至少要 1 次。")]),v._v(" "),_("blockquote",[_("p",[v._v("\\b\\w{6}\\b")])]),v._v(" "),_("p",[v._v("匹配 6 个字符的字符串。")]),v._v(" "),_("blockquote",[_("p",[v._v("\\d{4,10}")])]),v._v(" "),_("p",[v._v("匹配 4 到 10 个字符的字符串，包括 4 和 10。")]),v._v(" "),_("h2",{attrs:{id:"三、字符转义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、字符转义"}},[v._v("#")]),v._v(" 三、字符转义")]),v._v(" "),_("p",[v._v("如果你想查找元字符本身，比如 "),_("code",[v._v("*")]),v._v("，"),_("code",[v._v("-")]),v._v("，那么你可以用一个")]),v._v(" "),_("p",[v._v("反斜杠+查找的元字符，如果想查找 "),_("code",[v._v("\\")]),v._v(",那么就是 "),_("code",[v._v("\\\\")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"四、重复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、重复"}},[v._v("#")]),v._v(" 四、重复")]),v._v(" "),_("h2",{attrs:{id:"五、字符类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、字符类"}},[v._v("#")]),v._v(" 五、字符类")]),v._v(" "),_("p",[v._v("如果想要匹配没有预定义元字符的字符集合，比如 1 3 5，或者 "),_("code",[v._v("aeiou")]),v._v("，那么应该怎么办呢？")]),v._v(" "),_("blockquote",[_("p",[v._v("[aeiou] [135]")])]),v._v(" "),_("p",[v._v("使用中括号"),_("code",[v._v("[]")]),v._v("进行匹配。")]),v._v(" "),_("p",[v._v("试一下更复杂的表达式")]),v._v(" "),_("blockquote",[_("p",[v._v("\\(?0\\d{2}[) -]?\\d{8}")])]),v._v(" "),_("p",[v._v("拆除一部分一部分分析。")]),v._v(" "),_("blockquote",[_("p",[v._v("\\(?0\\d{2}")])]),v._v(" "),_("p",[v._v("表示  "),_("code",[v._v("(")]),v._v(" 出现 1 次或 0 次，然后是一个 0，再加 2 个数字，")]),v._v(" "),_("blockquote",[_("p",[v._v("[) -]?")])]),v._v(" "),_("p",[v._v("再加上右括号 空格 减号中的1个，这个出现的次数是 1 次或 0 次，")]),v._v(" "),_("blockquote",[_("p",[v._v("\\d{8}")])]),v._v(" "),_("p",[v._v("最后再加上 8 个数字。\n可以匹配")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("(012)12345678\n012)12345678\n(012 12345678\n(012-12345678\n01212345678\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("h2",{attrs:{id:"六、分枝条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、分枝条件"}},[v._v("#")]),v._v(" 六、分枝条件")]),v._v(" "),_("p",[v._v("有时候我们需要多种条件，比如有三位区号，但是我也要四位区号。类似 if ，else if。")]),v._v(" "),_("p",[v._v("分支条件指的是有几种规则，只要满足任意一个规则，那么就可以匹配。")]),v._v(" "),_("blockquote",[_("p",[v._v("\\(0\\d{3}\\)[- ]?\\d{8}|0\\d{3}[- ]?\\d{8}")])]),v._v(" "),_("p",[_("code",[v._v("|")]),v._v("将两个表达式隔开，一个一个分析。")]),v._v(" "),_("p",[v._v("有括号的以 0 开头四位区号，第二个没括号。")]),v._v(" "),_("p",[v._v("匹配分支时，从左到右，左边满足就不会管右边。")]),v._v(" "),_("h2",{attrs:{id:"七、分组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、分组"}},[v._v("#")]),v._v(" 七、分组")]),v._v(" "),_("p",[v._v("我们已经学过数字和字符的重复，比如 "),_("code",[v._v("\\d{3}")]),v._v(", 3 个数字，那么我们也可以对表达式进行重复。")]),v._v(" "),_("p",[v._v("通过小括号来指定子表达式，然后可以指定子表达式的重复次数。")]),v._v(" "),_("blockquote",[_("p",[v._v("(\\d{1,3}\\.){3}\\d{1,3}")])]),v._v(" "),_("p",[v._v("简单 ip 地址匹配表达式，"),_("code",[v._v("\\d{1,3}")]),v._v("匹配 1 到 3 位数字，\\.匹配符号 . ,被小括号包括，说明是个分组，后面的{3}表示分组重复的次数。")]),v._v(" "),_("p",[v._v("不过这个表达式不够严谨，会匹配到不存在的 ip 地址。\n比如666.666.666.666。")]),v._v(" "),_("p",[v._v("正确的匹配 ip 表达式")]),v._v(" "),_("blockquote",[_("p",[v._v("((2[0-4]\\d|25[1-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[1-5]|[01]?\\d\\d?)")])]),v._v(" "),_("p",[v._v("依然一个一个看，ip 地址的数字范围是[0, 255]。\n可划分为:")]),v._v(" "),_("ul",[_("li",[v._v("[0,9]")]),v._v(" "),_("li",[v._v("[10,99]")]),v._v(" "),_("li",[v._v("[100,199]")]),v._v(" "),_("li",[v._v("[200,249]")]),v._v(" "),_("li",[v._v("[250,255]")])]),v._v(" "),_("blockquote",[_("p",[v._v("[01]?\\d\\d?")])]),v._v(" "),_("p",[v._v("匹配 [0, 199]")]),v._v(" "),_("blockquote",[_("p",[v._v("2[0-4]\\d")])]),v._v(" "),_("p",[v._v("匹配 [200, 249]")]),v._v(" "),_("blockquote",[_("p",[v._v("25[1-5]")])]),v._v(" "),_("p",[v._v("匹配 [250,255]")]),v._v(" "),_("h3",{attrs:{id:"反义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反义"}},[v._v("#")]),v._v(" 反义")]),v._v(" "),_("h3",{attrs:{id:"后向引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后向引用"}},[v._v("#")]),v._v(" 后向引用")]),v._v(" "),_("p",[v._v("后向引用用于重复搜索")]),v._v(" "),_("blockquote",[_("p",[v._v("(\\d)\\d\\1")])]),v._v(" "),_("p",[v._v("第一个"),_("code",[v._v("\\d")]),v._v("是一个匹配数字捕获分组，第二个普通的匹配数字\n，\\1是匹配捕获分组中的字符。")]),v._v(" "),_("p",[v._v("结果就是匹配类似 303 575这种字符串。")]),v._v(" "),_("blockquote",[_("p",[v._v("\\b(\\w+)\\b\\s+\\1\\b")])]),v._v(" "),_("p",[v._v("(\\w+)是一个分组，匹配一个单词，\\1表示的前面出现过的分组1的内容。\\s+匹配一个或多个空格。")]),v._v(" "),_("p",[v._v("也可以自己给分组起个名称。")]),v._v(" "),_("blockquote",[_("p",[v._v("(?"),_("first",[v._v("\\w+)")])],1)]),v._v(" "),_("p",[v._v("那么first就是分组的名称了，反向引用就是")]),v._v(" "),_("blockquote",[_("p",[v._v("\\k"),_("first")],1)]),v._v(" "),_("h2",{attrs:{id:"零宽断言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#零宽断言"}},[v._v("#")]),v._v(" 零宽断言")]),v._v(" "),_("p",[v._v("零宽断言用于指定一个位置, 用于查找在某些内容(但并不包括这些内容)之前或之后的东西.")]),v._v(" "),_("blockquote",[_("p",[v._v("\\w+(?=ing)")])]),v._v(" "),_("p",[v._v("匹配以ing结尾的前面部分（不包括ing）。")]),v._v(" "),_("blockquote",[_("p",[v._v("(?<=sin)\\w+")])]),v._v(" "),_("p",[v._v("匹配sin开头的单词的后半部分，不包括 sin。")])])}),[],!1,null,null,null);_.default=a.exports}}]);