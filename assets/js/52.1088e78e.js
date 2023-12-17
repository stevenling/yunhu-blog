(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{372:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_206-反转链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_206-反转链表"}},[s._v("#")]),s._v(" 206 反转链表")]),s._v(" "),t("p",[s._v("来源：力扣（LeetCode）")]),s._v(" "),t("p",[s._v("链接：https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof")]),s._v(" "),t("p",[s._v("著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。")]),s._v(" "),t("h2",{attrs:{id:"一、题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、题目描述"}},[s._v("#")]),s._v(" 一、题目描述")]),s._v(" "),t("p",[s._v("定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。")]),s._v(" "),t("p",[s._v("示例:")]),s._v(" "),t("p",[s._v("输入: 1->2->3->4->5->NULL")]),s._v(" "),t("p",[s._v("输出: 5->4->3->2->1->NULL\n \n限制：")]),s._v(" "),t("p",[s._v("0 <= 节点个数 <= 5000")]),s._v(" "),t("h2",{attrs:{id:"二、思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、思路"}},[s._v("#")]),s._v(" 二、思路")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("定义三个指针，分别指向当前结点的前一个结点，当前结点，当前结点的下一个结点。")])]),s._v(" "),t("li",[t("p",[s._v("先保存当前结点的下一个结点，防止断链，然后将当前结点的 next 指向它的前一个结点，这样就实现单个结点的反转，之后将当前结点和当前结点的前一个结点向后移动，注意顺序。")])]),s._v(" "),t("li",[t("p",[s._v("当前结点是尾结点的时候，将当前结点赋给新表头，实现链表反转。")])])]),s._v(" "),t("p",[s._v("代码实现：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReverseList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" pHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pHead "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" pNow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pPre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pNext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("newHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        pNow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pNow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            pNext "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pNow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            \n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pNext "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                newHead "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pNow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            pNow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pPre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            pPre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pNow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            pNow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pNext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" newHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);