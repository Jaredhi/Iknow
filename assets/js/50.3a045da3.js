(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{471:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("在导入 gradle 项目时候依赖一直下载不了，plugin 找不到。最终问题定位在  gradle 版本没有对应上。")]),s._v(" "),t("p",[s._v("在Mac OS 使用 brew install 默认是安装最新版本的，所以安装指定版本需要我们改一些配置。")]),s._v(" "),t("h2",{attrs:{id:"使用-brew-安装指定版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-brew-安装指定版本"}},[s._v("#")]),s._v(" 使用 brew 安装指定版本")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"%5B%E9%93%BE%E6%8E%A5%5D(https://www.zhihu.com/question/35928898)"}},[s._v("Mac 安装 homebrew 请参考")])])]),s._v(" "),t("h3",{attrs:{id:"一、先去⛳️官网下载指定版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、先去⛳️官网下载指定版本"}},[s._v("#")]),s._v(" 一、先去⛳️"),t("a",{attrs:{href:"https://gradle.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("下载指定版本")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jaredh.oss-cn-shenzhen.aliyuncs.com/23.%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/img/20.Gradle/image-20210412120531385.png",alt:"image-20210412120531385"}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("查看文件的 "),t("code",[s._v("sha256")]),s._v(" （待会需要使用）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" openssl dgst -sha256 /Users/youpath/gradle-4.10.2-all.zip  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定你刚刚的下载地址")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("6.8.3-sha256: 9af5c8e7e2cd1a3b0f694a4ac262b9f38c75262e74a9e8b5101af302a6beadd7")])])])]),s._v(" "),t("h3",{attrs:{id:"二、修改安装源信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、修改安装源信息"}},[s._v("#")]),s._v(" 二、修改安装源信息")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("下载 "),t("code",[s._v("gradle")]),s._v(" 的 "),t("code",[s._v("brew")]),s._v(" 安装源文件 ⛳️"),t("a",{attrs:{href:"https://github.com/Homebrew/homebrew-core/blob/master/Formula/gradle.rb",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),t("OutboundLink")],1),s._v(" 并保存（待会需要使用）。")]),s._v(" "),t("p",[s._v("::: detail 源文件内容")]),s._v(" "),t("div",{staticClass:"language-ruby line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ruby"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Gradle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Formula")]),s._v("\n  desc "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Open-source build automation tool based on the Groovy and Kotlin DSL"')]),s._v("\n  homepage "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.gradle.org/"')]),s._v("\n  url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://services.gradle.org/distributions/gradle-7.0-all.zip"')]),s._v("\n  sha256 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"81003f83b0056d20eedf48cddd4f52a9813163d4ba185bcf8abd34b8eeea4cbd"')]),s._v("\n  license "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Apache-2.0"')]),s._v("\n\n  livecheck "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://services.gradle.org/distributions/"')]),s._v("\n    regex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/href=.*?gradle[._-]v?(\\d+(?:\\.\\d+)+)-all\\.(?:[tz])/i")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n  bottle "),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":unneeded")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gradle currently does not support Java 16")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Hardware")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n    depends_on "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"openjdk@11"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    depends_on "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"openjdk"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token method-definition"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")])]),s._v("\n    rm_f "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/*.bat"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    libexec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("install "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("%w[bin docs lib src]")]),s._v("\n    env "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Hardware")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CPU")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Language")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Java")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("overridable_java_home_env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Language")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Java")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("overridable_java_home_env\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gradle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write_env_script libexec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/gradle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" env\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n  test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    assert_match version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" shell_output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v('/gradle --version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("testpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings.gradle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("testpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build.gradle"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EOS")]),s._v("\n      println "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gradle works!"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EOS")]),s._v("\n    gradle_output "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" shell_output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v('/gradle build --no-daemon"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    assert_includes gradle_output"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gradle works!"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("p",[s._v(":::")])]),s._v(" "),t("li",[t("p",[s._v("修改 "),t("code",[s._v("gradle.rb")]),s._v(" 的 "),t("code",[s._v("url")]),s._v(" 和 "),t("code",[s._v("sha256")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("url")]),s._v(" 修改对应版本数字")]),s._v(" "),t("li",[t("code",[s._v("sha256")]),s._v(" 为前面查到的")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jaredh.oss-cn-shenzhen.aliyuncs.com/23.%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86/img/20.Gradle/image-20210412121409812.png",alt:"image-20210412121409812"}})])])]),s._v(" "),t("h3",{attrs:{id:"三、安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、安装"}},[s._v("#")]),s._v(" 三、安装")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" /youpath/gradle.rb  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刚刚保存的路径")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("注意：如果出现以下错误")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Error: gradle "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.6")]),s._v(".1 is already installed\nTo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.10")]),s._v(".2, first run "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("brew unlink gradle"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("安装提示执行"),t("code",[s._v("brew unlink gradle")]),s._v("，然后再次执行安装命令"),t("code",[s._v("brew install /youpath/gradle.rb")]),s._v(",查看版本 "),t("code",[s._v("gradle -v")]),s._v("显示对应版本号即安装成功。")]),s._v(" "),t("h2",{attrs:{id:"切换版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换版本"}},[s._v("#")]),s._v(" 切换版本")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已有版本")]),s._v("\nbrew info gradle\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换")]),s._v("\nbrew switch gradle "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.6")]),s._v(".1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);