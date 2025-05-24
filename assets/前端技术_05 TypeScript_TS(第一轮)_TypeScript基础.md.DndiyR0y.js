import{_ as l,c as o,o as d,ae as n,j as t,a as r}from"./chunks/framework.CIivgcbp.js";const h=JSON.parse('{"title":"TypeScript 基础","description":"","frontmatter":{},"headers":[],"relativePath":"前端技术/05 TypeScript/TS(第一轮)/TypeScript基础.md","filePath":"前端技术/05 TypeScript/TS(第一轮)/TypeScript基础.md"}'),a={name:"前端技术/05 TypeScript/TS(第一轮)/TypeScript基础.md"};function i(u,e,s,c,p,b){return d(),o("div",null,e[0]||(e[0]=[n(`<h1 id="typescript-基础" tabindex="-1">TypeScript 基础 <a class="header-anchor" href="#typescript-基础" aria-label="Permalink to &quot;TypeScript 基础&quot;">​</a></h1><div class="note custom-block github-alert"><p class="custom-block-title">Title</p><p></p><ul><li><a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">TypeScript 官网</a></li><li><a href="https://www.bilibili.com/video/BV1Xy4y1v7S2/?spm=wolai.workspace.0.0.6c392baa8680ye&amp;p=1&amp;vd_source=090e83bb222c29671e06b8517288701c" target="_blank" rel="noreferrer">尚硅谷 TS 教程 - 李立超</a></li></ul></div><p>TypeScript 简化运行之 ts-node<br> 问题描述：每次修改代码后，都要重复执行两个命令（tsc 文件名，node 文件名），才能运行 TS 代码，太繁琐。<br> 简化方式：使用 ts-nodeb 包，直接在 Node. Js 中执行代码。<br> 安装命令：npm i -g ts-node (ts-node 包提供了 ts-node 命令)。<br> 使用方式：ts-node hello. Ts。<br> 解释：ts-node 命令在內部偷偷的将 TS-&gt;JS, 然后，再运行 JS 代码。</p><h2 id="一、简介" tabindex="-1">一、简介 <a class="header-anchor" href="#一、简介" aria-label="Permalink to &quot;一、简介&quot;">​</a></h2><h3 id="为什么需要-typescript" tabindex="-1">为什么需要 TypeScript? <a class="header-anchor" href="#为什么需要-typescript" aria-label="Permalink to &quot;为什么需要 TypeScript?&quot;">​</a></h3><ul><li>Javascript 的优缺点：①容易学习 ②易用，不容易报错 ③动态变量类型，难以维护 ④不适合开发大型项目。</li><li>前端需求愈来愈复杂</li></ul><h3 id="typescript-是什么" tabindex="-1">TypeScript 是什么？ <a class="header-anchor" href="#typescript-是什么" aria-label="Permalink to &quot;TypeScript 是什么？&quot;">​</a></h3><ul><li>以 Javascript 为基础构建的语言</li><li>一个 Javascript 的超集</li><li>扩展了 Javascript，并添加了类型</li><li>可以在任何支持 Javascript 的平台中执行，<strong>但不能被 JS 解析器直接执行，需要进行编译</strong></li></ul><h3 id="typescript-增加了什么" tabindex="-1">TypeScript 增加了什么？ <a class="header-anchor" href="#typescript-增加了什么" aria-label="Permalink to &quot;TypeScript 增加了什么？&quot;">​</a></h3><ul><li>类型定义</li><li>支持 ES 的新特性</li><li>添加 ES 不具备的新特性</li><li>丰富的配置选项</li><li>强大的开发工具</li></ul><h3 id="开发环境搭建" tabindex="-1">开发环境搭建 <a class="header-anchor" href="#开发环境搭建" aria-label="Permalink to &quot;开发环境搭建&quot;">​</a></h3><ol><li>安装 node.js</li><li>安装 typescript</li><li>创建 ts 文件</li><li>使用 tsc 对 ts 文件进行编译。终端执行命令：<code>tsc xxx.ts</code></li></ol><h2 id="二、基本类型" tabindex="-1">二、基本类型 <a class="header-anchor" href="#二、基本类型" aria-label="Permalink to &quot;二、基本类型&quot;">​</a></h2><h3 id="类型声明" tabindex="-1">类型声明 <a class="header-anchor" href="#类型声明" aria-label="Permalink to &quot;类型声明&quot;">​</a></h3><ul><li><p>类型声明是 TS 非常重要的一个特点，通过类型声明可以指定 TS 中变量（形参、实参、函数返回值）</p></li><li><p>指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，符合则赋值，否则报错</p></li><li><p>语法：</p><pre><code>  \`\`\`typescript
  let 变量: 类型;

  let 变量: 类型 = 值;

  function fn(参数: 类型, 参数: 类型): 类型{  
  		...  
  }

  \`\`\`
</code></pre></li><li><p>自动类型判断<br> - TS 拥有自动的类型判断机制，当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型，可以省略掉类型声明</p></li></ul><h3 id="类型种类" tabindex="-1">类型种类 <a class="header-anchor" href="#类型种类" aria-label="Permalink to &quot;类型种类&quot;">​</a></h3>`,16),t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"类型"),t("th",null,"例子"),t("th",null,"描述")])]),t("tbody",null,[t("tr",null,[t("td",null,"number"),t("td",null,"1, -33, 2.5"),t("td",null,"任意数字")]),t("tr",null,[t("td",null,"string"),t("td",null,[r(`'hi', "hi", `),t("code",null,"hi")]),t("td",null,"任意字符串")]),t("tr",null,[t("td",null,"boolean"),t("td",null,"true、false"),t("td",null,"布尔值 true 或 false")]),t("tr",null,[t("td",null,"字面量"),t("td",null,"其本身"),t("td",null,"限制变量的值就是该字面量的值")]),t("tr",null,[t("td",null,"any"),t("td",null,"*"),t("td",null,"任意类型")]),t("tr",null,[t("td",null,"unknown"),t("td",null,"*"),t("td",null,"类型安全的 any")]),t("tr",null,[t("td",null,"void"),t("td",null,"空值（undefined）"),t("td",null,"没有值（或 undefined）")]),t("tr",null,[t("td",null,"never"),t("td",null,"没有值"),t("td",null,"不能是任何值")]),t("tr",null,[t("td",null,"object"),t("td",{"name:":"",孙悟空:""}),t("td",null,"任意的 JS 对象")]),t("tr",null,[t("td",null,"array"),t("td",null,"[1,2,3]"),t("td",null,"任意 JS 数组")]),t("tr",null,[t("td",null,"tuple"),t("td",null,"[4,5]"),t("td",null,"元组，TS 新增类型，固定长度数组")]),t("tr",null,[t("td",null,"enum"),t("td",{"A,":"",B:""},"enum 枚举名"),t("td",null,"枚举，TS 中新增类型")])])],-1),n(`<h3 id="类型声明的其他语法" tabindex="-1">类型声明的其他语法： <a class="header-anchor" href="#类型声明的其他语法" aria-label="Permalink to &quot;类型声明的其他语法：&quot;">​</a></h3><ul><li><p>类型断言<br> 当一个 unknown 类型或者联合类型赋值予一个子类型变量时，TS 编译器不知道赋予变量的实际类型，因此需要指明。<br> 语法：<br><code>变量 as 类型</code><br><code>&lt;类型&gt;变量</code></p></li><li><p>类型别名<br> 当一个自定义类型被重复多次使用时使用<br> 语法：<br><code>type myType = 1 | 2 | 3 | 4 | 5</code></p></li><li><p>类型操作<br> 表示或，常用于字面量的限制或联合类型<br><code>let a = 1 | 2 | 3 | 4 | 5</code><br><code>let b = string|number</code></p></li><li><p>类型操作<br> 表示与，常用于对象属性的合并<br><code>let c: { name: string } &amp; { age: number }</code></p></li></ul><h2 id="三、编译选项" tabindex="-1">三、编译选项 <a class="header-anchor" href="#三、编译选项" aria-label="Permalink to &quot;三、编译选项&quot;">​</a></h2><h3 id="自动编译文件" tabindex="-1">自动编译文件 <a class="header-anchor" href="#自动编译文件" aria-label="Permalink to &quot;自动编译文件&quot;">​</a></h3><ul><li>编译文件时，使用 -w 指令后，TS 编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。（与 nodemon 监听类似）<br><code>tsc xxx.ts -w</code></li></ul><h3 id="自动编译整个项目" tabindex="-1">自动编译整个项目 <a class="header-anchor" href="#自动编译整个项目" aria-label="Permalink to &quot;自动编译整个项目&quot;">​</a></h3><ul><li><p>如果直接使用 tsc 指令，则可以自动将当前项目下的所有 ts 文件编译为 js 文件。</p></li><li><p>但是能直接使用 tsc 命令的前提时，要先在项目根目录下创建一个 ts 的配置文件 tsconfig.json。或添加 -init 命令<br><code>tsc -init</code></p></li><li><p>tsconfig.json 是一个 JSON 文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译</p></li><li><p>tsconfig.json 配置选项<br> 1. include<br> - 定义希望被编译文件所在的目录<br> - 默认值：[&quot;**/*&quot;] （** 表示任意目录，* 表示任意文件）</p><pre><code>  		\`\`\`typescript
  &quot;include&quot;:[&quot;src/ /*&quot;, &quot;tests/ /*&quot;]
  \`\`\`

  2. exclude
  		- 定义需要排除在外的目录
  		- 默认值：\\[&quot;node\\_modules&quot;, &quot;bower\\_components&quot;, &quot;jspm\\_packages&quot;]

  		\`\`\`typescript
  &quot;exclude&quot;: [&quot;./src/hello/**/*&quot;]
  \`\`\`

  3. extends
  		- 定义被继承的配置文件

  		\`\`\`typescript
  &quot;extends&quot;: &quot;./configs/base&quot;

  \`\`\`

  4. files
  		- 指定被编译文件的列表，**只有需要编译的文件少时才会用到**

  		\`\`\`typescript
  &quot;files&quot;: [
      &quot;core.ts&quot;,
      &quot;sys.ts&quot;,
      &quot;types.ts&quot;,
      &quot;scanner.ts&quot;,
      &quot;parser.ts&quot;,
      &quot;utilities.ts&quot;,
      &quot;binder.ts&quot;,
      &quot;checker.ts&quot;,
      &quot;tsc.ts&quot;
    ]

  \`\`\`

  5. **compilerOptions（重要）**
  		- 编译选项是配置文件中非常重要也比较复杂的配置选项
  		- 在 compilerOptions 中包含多个子选项，用来完成对编译的配置
  		- 配置选项
</code></pre></li></ul><table tabindex="0"><thead><tr><th>配置选项名</th><th>作用</th><th>可选值</th><th>实例</th></tr></thead><tbody><tr><td><strong>— 编译环境相关</strong></td><td></td><td></td><td></td></tr><tr><td>target</td><td>设置 ts 代码编译的目标版本</td><td>ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext</td><td><code>&quot;target&quot;: &quot;ES6&quot;</code></td></tr><tr><td>lib</td><td>指定代码运行时所包含的库（宿主环境）</td><td>ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......</td><td><code>&quot;lib&quot;: [&quot;ES6&quot;, &quot;DOM&quot;]</code></td></tr><tr><td>module</td><td>设置编译后代码使用的模块化系统</td><td>CommonJS、UMD、AMD、System、ES6、ES2020、ESNext、None......</td><td><code>&quot;module&quot;: &quot;CommonJS&quot;</code></td></tr><tr><td><strong>— 文件生成相关</strong></td><td></td><td></td><td></td></tr><tr><td>outDir</td><td>编译后文件的所在目录</td><td>默认情况下，编译后的 js 文件会和 ts 文件位于相同的目录，设置 outDir 后可以改变编译后文件的位置</td><td><code>&quot;outDir&quot;: &quot;dist&quot;</code></td></tr><tr><td>outFile</td><td>将所有的文件编译为一个 js 文件</td><td>默认会将所有的编写在全局作用域中的代码合并为一个 js 文件，如果 module 制定了 None、System 或 AMD 则会将模块一起合并到文件之中</td><td><code>&quot;outFile&quot;: &quot;dist/app.js&quot;</code></td></tr><tr><td>rootDir</td><td>指定代码的根目录</td><td>默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过 rootDir 可以手动指定根目录</td><td><code>&quot;rootDir&quot;: &quot;./src&quot;</code></td></tr><tr><td>allowJs</td><td>是否同时对 js 文件编译</td><td>默认是 false</td><td><code>&quot;allowJs&quot;: true</code></td></tr><tr><td>checkJs</td><td>是否对 js 文件进行检查</td><td>默认是 false</td><td><code>&quot;checkJs&quot;: true</code></td></tr><tr><td>removeComments</td><td>是否删除注释</td><td>默认是 false</td><td></td></tr><tr><td>noEmit</td><td>不对代码进行编译</td><td>默认是 false</td><td></td></tr><tr><td>noEmitOnError</td><td>当报错时不对代码进行编译</td><td>默认是 false</td><td></td></tr><tr><td><strong>— 严格检查相关</strong></td><td></td><td></td><td></td></tr><tr><td>strict</td><td>启用所有的严格检查</td><td>默认值为 true，设置后相当于开启了所有的严格检查</td><td></td></tr><tr><td>alwaysStrict</td><td>总是以严格模式对代码进行编译</td><td>默认是 false</td><td></td></tr><tr><td>noImplicitAny</td><td>禁止隐式的 any 类型</td><td>默认是 false</td><td></td></tr><tr><td>noImplicitThis</td><td>禁止类型不明确的 this</td><td>默认是 false</td><td></td></tr><tr><td>strictBindCallApply</td><td>严格检查 bind、call 和 apply 的参数列表</td><td>默认是 false</td><td></td></tr><tr><td>strictFunctionTypes</td><td>严格检查函数的类型</td><td>默认是 false</td><td></td></tr><tr><td>strictNullChecks</td><td>严格的空值检查</td><td>默认是 false</td><td></td></tr><tr><td>strictPropertyInitialization</td><td>严格检查属性是否初始化</td><td>默认是 false</td><td></td></tr></tbody></table><h2 id="四、webpack" tabindex="-1">四、Webpack <a class="header-anchor" href="#四、webpack" aria-label="Permalink to &quot;四、Webpack&quot;">​</a></h2><p>通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS 同样也可以结合构建工具一起使用，下边以 webpack 为例介绍一下如何结合构建工具使用 TS。</p><ol><li><p>初始化项目<br> 进入项目根目录，执行命令 <code>npm init -y</code>，创建 package.json 文件</p></li><li><p>安装依赖工具<br><code>npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin</code><br> 共安装了 7 个包<br> 1. webpack<br> - 构建工具 webpack<br> 2. webpack-cli<br> - webpack 的命令行工具<br> 3. webpack-dev-server<br> - webpack 的开发服务器<br> 4. typescript<br> - ts 编译器<br> 5. ts-loader<br> - ts 加载器，用于在 webpack 中编译 ts 文件<br> 6. html-webpack-plugin<br> - webpack 中 html 插件，用来自动创建 html 文件<br> 7. clean-webpack-plugin<br> - webpack 中的清除插件，每次构建都会先清除目录</p></li><li><p>根目录下创建 webpack 的配置文件 webpack.config.js</p><pre><code> \`\`\`javascript
 // 引入路径处理模块  
 const path = require(&#39;path&#39;)  
 // 引入 html 生成插件  
 const HTMLWebpackPlugin = require(&#39;html-webpack-plugin&#39;)

 // 对外暴露 webpack 配置  
 module.exports = {  
 	// 指定入口文件  
 	entry: &quot;./src/index.ts&quot;,

 	// 指定模式  
 	mode: &#39;production&#39;,

 	//指定打包文件所在目录  
 	output: {  
 		// 指定目录  
 		path: path.resolve(__dirname, &#39;dist&#39;),  
 		// 指定文件名  
 		filename: &#39;bundle.js&#39;,  
 		//webpack5 已集成 clean-webpack-plugin 功能  
 		clean: true,  
 		//禁止使用箭头函数  
 		environment: {  
 			arrowFunction: fales  
 		}  
 	},  
 	module: {  
 		// 指定要加载的规则  
 		rules: [  
 			{  
 				// 指定 ts 结尾的文件使用 ts-loader  
 				test: /\\.ts$/,  
 				use: &#39;ts-loader&#39;,  
 				// 排除依赖包目录  
 				exclude: /node-modules/  
 			}  
 		]  
 	},  
 	//插件  
 	plugins: [  
 		new HTMLWebpackPlugin({  
 			title: &#39; 自定义 title&#39;  
 		}),  
 	],  
 	// 用于设置引用模块  
 	resolve: {  
 		extensions: [&#39;.ts&#39;, &#39;.js&#39;]  
 	}  
 }

 \`\`\`
</code></pre></li><li><p>根目录下创建 tsconfig.json，配置可以根据自己需要</p><pre><code> \`\`\`json
 {  
 		&quot;compilerOptions&quot;: {  
 				&quot;target&quot;: &quot;ES2015&quot;,  
 				&quot;module&quot;: &quot;ES2015&quot;,  
 				&quot;strict&quot;: true  
 		}  
 }

 \`\`\`
</code></pre></li><li><p>修改 package.json 添加如下配置</p><pre><code> \`\`\`json
 {  
 	...略...  
 	&quot;scripts&quot;: {  
 		&quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,  
 		&quot;build&quot;: &quot;webpack&quot;,  
 		&quot;start&quot;: &quot;webpack serve --open chrome.exe&quot;  
 	},  
 	...略...  
 }

 \`\`\`
</code></pre></li><li><p>在 src 下创建 ts 文件，并在并命令行执行 <code>npm run build</code> 对代码进行编译，或者执行 <code>npm start</code> 来启动开发服务器</p></li></ol><h2 id="五、babel" tabindex="-1">五、Babel <a class="header-anchor" href="#五、babel" aria-label="Permalink to &quot;五、Babel&quot;">​</a></h2><p>经过一系列的配置，使得 TS 和 webpack 已经结合到了一起，除了 webpack，开发中还经常需要结合 babel 来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将 babel 引入到项目中。</p><ol><li><p>安装依赖包：<br><code>npm i -D @babel/core @babel/preset-env babel-loader core-js</code><br> 共安装了 4 个包，分别是：<br> 1. @babel/core<br> - babel 的核心工具<br> 2. @babel/preset-env<br> - babel 的预定义环境<br> 3. @babel-loader<br> - babel 在 webpack 中的加载器<br> 4. core-js<br> - core-js 用来使老版本的浏览器支持新版 ES 语法</p></li><li><p>修改 webpack.config.js 配置文件</p><pre><code> \`\`\`json
 ...略...  
 module: {  
 		// 指定要加载的规则  
 		rules: [  
 			{  
 				// 指定 ts 结尾的文件使用 ts-loader  
 				test: /\\.ts$/,  
 				use: [  
 					//配置 babel  
 					{  
 						loader: &#39;babel-loader&#39;,  
 						//设置  
 						options: {  
 							// 预定义环境  
 							presets: [  
 								[  
 									// 指定环境插件  
 									&quot;@babel/preset-env&quot;,  
 									{  
 										// 指定兼容的环境  
 										targets: {  
 											&quot;chrome&quot;: &quot;88&quot;  
 										},  
 										// 指定 corejs 版本  
 										&quot;corejs&quot;: &quot;3&quot;,  
 										// 使用 corejs 的方式  
 										&quot;useBuiltIns&quot;: &quot;usage&quot; //按需加载  
 									}  
 								]  
 							]  
 						}  
 					},  
 					&#39;ts-loader&#39;],  
 				// 排除依赖包目录  
 				exclude: /node-modules/  
 				}  
 		]  
 }  
 ...略...

 \`\`\`
</code></pre></li></ol>`,14)]))}const S=l(a,[["render",i]]);export{h as __pageData,S as default};
