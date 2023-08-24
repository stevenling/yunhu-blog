(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{327:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"云胡的编程周报第-1-期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云胡的编程周报第-1-期"}},[s._v("#")]),s._v(" 云胡的编程周报第 1 期")]),s._v(" "),t("blockquote",[t("p",[s._v("时间：2023/8/14 - 2023/8/20")])]),s._v(" "),t("h2",{attrs:{id:"一、点滴记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、点滴记录"}},[s._v("#")]),s._v(" 一、点滴记录")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("数据插入到表的时候一定要判断数据重复问题。")])]),s._v(" "),t("li",[t("p",[s._v("对接口的方法进行实现或者对父类方法进行重写时都要加上 "),t("code",[s._v("@Override")]),s._v("来在"),t("strong",[s._v("编译时")]),s._v("检查参数或者函数名有没有写错。")])]),s._v(" "),t("li",[t("p",[s._v("实体类的日期类型不要用 "),t("code",[s._v("Date")]),s._v("，用 "),t("code",[s._v("LocalDateTime")]),s._v("，"),t("code",[s._v("Date")]),s._v(" 是可变类，线程不安全，"),t("code",[s._v("LocalDateTime")]),s._v("线程安全。")]),s._v(" "),t("p",[s._v("可以在实体类的日期类型上加上 "),t("code",[s._v('@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")')]),s._v(" 来自定义日期的格式。")]),s._v(" "),t("p",[s._v("一个完整的实体类日期数据：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@JsonFormat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pattern "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yyyy-MM-dd HH:mm:ss"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LocalDateTime")]),s._v(" createTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用 "),t("code",[s._v("validation")]),s._v(" 对 "),t("code",[s._v("dto")]),s._v(" 参数进行校验，常用注解有：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("@NotNull")]),s._v(" 被约束的元素不能为 "),t("code",[s._v("null")]),s._v("，常用来约束 "),t("code",[s._v("Integer")]),s._v(" 和 "),t("code",[s._v("Long")]),s._v(" 类型。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@NotEmpty")]),s._v(" 验证字符串、集合、字典或数组是否为 "),t("code",[s._v("null")]),s._v(" 或者空，常用来约束 "),t("code",[s._v("String")]),s._v("和 "),t("code",[s._v("List")]),s._v("类型。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@Min(0)")]),s._v("约束最小值")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@Max(99)")]),s._v("约束最大值")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("@Size")]),s._v("约束长度。")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("min "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"身份证必须在 15 位到 18 位之间"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ApiModelProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"身份证号"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" identityCard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("p",[t("code",[s._v("@Valid")]),s._v("校验嵌套对象。")]),s._v(" "),t("p",[s._v("这边需要对 "),t("code",[s._v("ProductInfo")]),s._v(" 的数据进行校验必须加上 "),t("code",[s._v("@Valid")]),s._v("，如果不加，只是在 "),t("code",[s._v("ProductInfo")]),s._v(" 实体类中对数据进行校验，那么检验不会生效。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Valid")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ApiModelProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"商品信息对象"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProductInfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" productInfoList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProductInfo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@NotNull")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"商品 id 不能为空"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ApiModelProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"商品 id "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" productId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@NotNull")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"商品佣金比例不能为空"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ApiModelProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"商品佣金比例"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" productCommissionRate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Linux Shell")]),s._v(":")]),s._v(" "),t("ul",[t("li",[s._v("复制："),t("code",[s._v("ctrl + insert")])]),s._v(" "),t("li",[s._v("粘贴："),t("code",[s._v("shift + insert")])])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Vim")]),s._v(" 的复制粘贴")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Vim")]),s._v(" 默认模式："),t("code",[s._v("yy")]),s._v(" 复制光标所在的那一行，"),t("code",[s._v("p")]),s._v(" 进行粘贴。")]),s._v(" "),t("li",[t("code",[s._v("Vim")]),s._v(" 可视模式：在普通模式下按入 "),t("code",[s._v("v")]),s._v("，进入可视模式。然后多选行，"),t("code",[s._v("y")]),s._v(" 复制多行，"),t("code",[s._v("p")]),s._v(" 进行粘贴。")])])]),s._v(" "),t("li",[t("p",[s._v("本地与 "),t("code",[s._v("Linux")]),s._v(" 服务器的文件传输:")]),s._v(" "),t("p",[s._v("安装 "),t("code",[s._v("lrzsz")])]),s._v(" "),t("ul",[t("li",[s._v("安装命令："),t("code",[s._v("sudo apt-get install lrzsz")])])]),s._v(" "),t("p",[s._v("使用：")]),s._v(" "),t("ul",[t("li",[s._v("本地上传文件到服务器："),t("code",[s._v("rz")]),s._v("，然后选择本地文件即可。")]),s._v(" "),t("li",[s._v("服务器文件下载到本地："),t("code",[s._v("sz filePath")]),s._v("，"),t("code",[s._v("filePath")]),s._v("是服务器的文件路径。")])])]),s._v(" "),t("li",[t("p",[s._v("使用 "),t("code",[s._v("Mybatis Plus")]),s._v("的"),t("code",[s._v("QueryWrapper")]),s._v("查询比较时，用 "),t("code",[s._v("lambda()")]),s._v("，这时候用 "),t("code",[s._v(".eq()")]),s._v(" 的第一个参数就可以用实体 "),t("code",[s._v("getColumnName")]),s._v(" 的方式，避免硬编码。")]),s._v(" "),t("ul",[t("li",[s._v("不规范的查询")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SysUserEntity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSysUserEntity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QueryWrapper")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SysUserEntity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" queryWrapper "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QueryWrapper")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   queryWrapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("eq")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "username" 硬编码，不规范，而且容易写错')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sysUserMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectOne")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queryWrapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("规范的查询，推荐")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SysUserEntity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSysUserEntity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QueryWrapper")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SysUserEntity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" queryWrapper "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("QueryWrapper")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   \n   queryWrapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lambda")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("eq")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SysUserEntity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUsername")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   \n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sysUserMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectOne")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("queryWrapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("服务器的 "),t("code",[s._v("nginx")]),s._v("默认路径在 "),t("code",[s._v("/etc/nginx")]),s._v("，配置文件在这个路径下的 "),t("code",[s._v("nginx.conf")]),s._v("，在进行前后端分离项目时，如果不是放在默认 "),t("code",[s._v("80")]),s._v("端口，需要在这里配置自定义端口与 "),t("code",[s._v("vue")]),s._v(" 生成的 "),t("code",[s._v("dist")]),s._v(" 文件的关联。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Linux")]),s._v(" 可以用 "),t("code",[s._v("unzip")]),s._v(" 解压 "),t("code",[s._v("zip")]),s._v(" 文件。")]),s._v(" "),t("p",[s._v("安装 "),t("code",[s._v("unzip")])]),s._v(" "),t("ul",[t("li",[s._v("安装命令："),t("code",[s._v("sudo apt install unzip")])])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("unzip")]),s._v(":")]),s._v(" "),t("ul",[t("li",[s._v("解压到当前目录： "),t("code",[s._v("unzip xxx.zip")])]),s._v(" "),t("li",[s._v("解压到指定目录："),t("code",[s._v("unzip -o xxx.zip -d tmp/")]),s._v("，"),t("code",[s._v("tmp/")]),s._v(" 是一个举例的路径，可以换成其他路径。")])])])]),s._v(" "),t("h2",{attrs:{id:"二、后记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、后记"}},[s._v("#")]),s._v(" 二、后记")]),s._v(" "),t("p",[s._v("编程世界博大精深，每天都能感受到技术的薄弱，感觉自己浑身全是破绽，因此打算多记录，用自己的话写下来，毕竟老话说得好，好记性不如烂笔头。")]),s._v(" "),t("p",[s._v("这是编程周报的第一期，今年开始决定把主要精力放在工作和学习技术上，希望自己能坚持下来。")]),s._v(" "),t("p",[s._v("加油。")])])}),[],!1,null,null,null);t.default=e.exports}}]);