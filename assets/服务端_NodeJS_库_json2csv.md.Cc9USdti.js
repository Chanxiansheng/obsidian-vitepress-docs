import{_ as a,c as i,o as n,ag as e}from"./chunks/framework.-ewJmwvT.js";const E=JSON.parse('{"title":"json2csv","description":"","frontmatter":{},"headers":[],"relativePath":"服务端/NodeJS/库/json2csv.md","filePath":"服务端/NodeJS/库/json2csv.md"}'),l={name:"服务端/NodeJS/库/json2csv.md"};function p(t,s,h,k,r,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="json2csv" tabindex="-1">json2csv <a class="header-anchor" href="#json2csv" aria-label="Permalink to &quot;json2csv&quot;">​</a></h1><p><a href="https://gitcode.com/gh_mirrors/js/json-2-csv/overview?utm_source=artical_gitcode&amp;index=bottom&amp;type=card&amp;webUrl" target="_blank" rel="noreferrer">https://gitcode.com/gh_mirrors/js/json-2-csv/overview?utm_source=artical_gitcode&amp;index=bottom&amp;type=card&amp;webUrl</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // arrayIndexesAsKeys: false,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //布尔值 - 是否应包含数组索引作为生成的键？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // checkSchemaDifferences: true,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //布尔值 - 所有文档是否具有相同的结构？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // delimiter:eol,// 对象 - 规定了各种分隔符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  emptyFieldValue: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//任意值 - 如果指定，将用于替换 undefined、null 或空字符串的字段值。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  escapeHeaderNestedDots: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// - 布尔值 - 是否应转义头文件中嵌套点的表示？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  excelBOM: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//布尔值 - 是否应该预加 Unicode 字符以允许 Excel 打开包含非 ASCII 字符的 UTF-8 编码文件。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  excludeKeys: [],   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//数组 - 指定应排除的 string 键或 RegExp 模式。提供的 string 键也将用作正则表达式来帮助排除指定前缀下的对象键，如当 expandArrayObjects 为 true 时排除数组中的所有对象键（例如提供 &#39;baz&#39; 将同时排除 &#39;baz.a&#39;）。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  expandNestedObjects: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//- 布尔值 - 是否应深转化为 CSV 的嵌套对象？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  expandArrayObjects: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//- 布尔值 - 是否应将数组值中的对象展开为 CSV</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  keys: [], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//- 数组 - 指定应转换的键；默认：这些默认会自动从数据检测。每个值是一个对象，包含 flield 必须，titile 可选，wildcrdMatch:false 可选</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // parseValue:,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //- 函数 - 指定如何将值转化为 CSV 格式。此函数接收单个字段值并应返回一个 String。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prependHeader: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//布尔值 - 是否应在 CSV 的第一行添加自动生成的头部？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // sortHeader:false,// - 布尔值或函数 - 是否按字母顺序对头部键进行排序？或者传入一个自定义排序函数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // trimFieldValues: false,//- 布尔值 - 是否修剪字段值？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // trimHeaderFields: false,// - 布尔值 - 是否修剪头部字段？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  unwindArrays: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 布尔值 - 是否应展开数组值，使得每个值占一行 CSV？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>语法：</p><p><code>const csv = await converter.json2csv(obj, options);</code></p>`,5)]))}const o=a(l,[["render",p]]);export{E as __pageData,o as default};
