import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.CIivgcbp.js";const l="/obsidian-vitepress-docs/assets/npm%E5%8E%9F%E7%90%86-1.BEIeF3Oa.png",k=JSON.parse('{"title":"npm 原理","description":"","frontmatter":{},"headers":[],"relativePath":"服务端/NodeJS/npm/npm原理.md","filePath":"服务端/NodeJS/npm/npm原理.md"}'),i={name:"服务端/NodeJS/npm/npm原理.md"};function o(t,s,c,d,r,h){return p(),a("div",null,s[0]||(s[0]=[e('<h1 id="npm-原理" tabindex="-1">npm 原理 <a class="header-anchor" href="#npm-原理" aria-label="Permalink to &quot;npm 原理&quot;">​</a></h1><h2 id="npm-install" tabindex="-1">npm install <a class="header-anchor" href="#npm-install" aria-label="Permalink to &quot;npm install&quot;">​</a></h2><ul><li><p>在执行 npm install 的时候发生了什么？</p><ol><li>首先，安装的依赖都会存放在根目录的 <code>node_modules</code>，默认采用==扁平化==的方式安装。</li><li>依赖文件的排序规则是：第一个 <code>.bin</code>，然后 <code>@系列</code>，再然后按照首字母排序。</li><li>算法是广度优先遍历，在遍历依赖树时，npm 会首先处理项目根目录下的依赖，然后逐层处理每个依赖包的依赖，直到所有依赖都被处理完毕。</li><li>在处理每个依赖时，npm 会检查该依赖的版本号是否符合依赖树中其他依赖的版本要求，如果不符合，则会尝试安装适合的版本。</li></ol></li><li><p>npm install 流程<br><img src="'+l+`" alt="attachments/npm原理-1.png"></p></li><li><p>npmrc 配置项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>registry=http://registry.npmjs.org/</span></span>
<span class="line"><span># 定义npm的registry，即npm的包下载源</span></span>
<span class="line"><span></span></span>
<span class="line"><span>proxy=http://proxy.example.com:8080/</span></span>
<span class="line"><span># 定义npm的代理服务器，用于访问网络</span></span>
<span class="line"><span></span></span>
<span class="line"><span>https-proxy=http://proxy.example.com:8080/</span></span>
<span class="line"><span># 定义npm的https代理服务器，用于访问网络</span></span>
<span class="line"><span></span></span>
<span class="line"><span>strict-ssl=true</span></span>
<span class="line"><span># 是否在SSL证书验证错误时退出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cafile=/path/to/cafile.pem</span></span>
<span class="line"><span># 定义自定义CA证书文件的路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>user-agent=npm/{npm-version} node/{node-version} {platform}</span></span>
<span class="line"><span># 自定义请求头中的User-Agent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>save=true</span></span>
<span class="line"><span># 安装包时是否自动保存到package.json的dependencies中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>save-dev=true</span></span>
<span class="line"><span># 安装包时是否自动保存到package.json的devDependencies中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>save-exact=true</span></span>
<span class="line"><span># 安装包时是否精确保存版本号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>engine-strict=true</span></span>
<span class="line"><span># 是否在安装时检查依赖的node和npm版本是否符合要求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>scripts-prepend-node-path=true</span></span>
<span class="line"><span># 是否在运行脚本时自动将node的路径添加到PATH环境变量中</span></span></code></pre></div></li><li><p>package-lock.json 的作用</p></li></ul><p><code>package-lock.json</code> 它会<strong>在 npm 更改 node_modules 目录树 或者 package.json 时自动生成的</strong> ，它准确的描述了当前项目 npm 包的依赖树，并且在随后的安装中会根据 package-lock.json 来安装，保证是相同的一个依赖树，不考虑这个过程中是否有某个依赖有小版本的更新。<br> 它的产生就是来对整个依赖树进行版本固定的（锁死）。</p><p>当我们在一个项目中 <code>npm install</code> 时候，会自动生成一个 <code>package-lock.json</code> 文件，和 <code>package.json</code> 在同一级目录下。<code>package-lock.json</code> 记录了项目的一些信息和所依赖的模块。这样在每次安装都会出现相同的结果. 不管你在什么机器上面或什么时候安装。</p><p>当我们下次再 <code>npm install</code> 时候，npm 发现如果项目中有 <code>package-lock.json</code> 文件，会根据 <code>package-lock.json</code> 里的内容来处理和安装依赖而不再根据 <code>package.json</code>。</p><p><code>package-lock.json</code> 帮我们做了缓存，他会通过 <code>name + version + integrity</code> 信息生成一个唯一的 key，这个 key 能找到对应的 index-v5 下的缓存记录，也就是 <code>npm cache</code> 文件夹下的对应文件。 如果发现有缓存记录，就会找到 tar 包的 hash 值，然后将对应的二进制文件解压到 node_modeules。</p><ul><li>package-lock.json 解析： <ul><li>version 该参数指定了当前包的版本号</li><li>resolved 该参数指定了当前包的下载地址</li><li>integrity 用于验证包的完整性</li><li>dev 该参数指定了当前包是一个开发依赖包</li><li>bin 该参数指定了当前包中可执行文件的路径和名称</li><li>engines 该参数指定了当前包所依赖的 Node.js 版本范围</li></ul></li></ul><h2 id="npm-run" tabindex="-1">npm run <a class="header-anchor" href="#npm-run" aria-label="Permalink to &quot;npm run&quot;">​</a></h2><p>以运行 <code>npm run dev</code> 为例</p><ol><li><p>读取 <code>package.json</code> 的 scripts 对应的脚本命令 (<code>dev:vite</code> 为例)，vite 是个可执行脚本，他的查找规则是：</p><ul><li>先从当前项目的 node_modules/.bin 去查找可执行命令 vite</li><li>如果没找到就去全局的 node_modules 去找可执行命令 vite</li><li>如果还没找到就去环境变量查找</li><li>再找不到就进行报错</li></ul></li><li><p>如果成功找到会发现有三个文件（跨平台）</p><ul><li>.sh 文件是给 Linux unix MacOS 使用</li><li>.cmd 给 windows 的 cmd 使用</li><li>.ps1 给 windows 的 powerShell 使用</li></ul></li></ol><ul><li><p>npm 生命周期</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;predev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node prev.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;postdev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node post.js&quot;</span></span></code></pre></div></li></ul><p>执行 <code>npm run dev</code> 命令的时候，predev 会自动执行，他的生命周期是在 dev 之前执行，然后执行 dev 命令，再然后执行 postdev，也就是 dev 之后执行。</p>`,13)]))}const u=n(i,[["render",o]]);export{k as __pageData,u as default};
