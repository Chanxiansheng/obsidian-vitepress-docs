import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


const vitePressOptions = {
  base: '/obsidian-vitepress-docs/',
  title: 'CHun先生的文档笔记',
  description: "一个自用的文档和笔记记录网站",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端技术', link: '/前端技术/' },
      { text: '服务端', link: '/服务端/' },
      { text: '计算机基础', link: '/计算机基础课程/' },
      { text: '语言学习', link: '/语言学习/' },
      { text: '工具说明书', link: '/工具说明书/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chanxiansheng' }
    ],
    sidebar: generateSidebar({
      documentRootPath: '/docs',
      // scanStartPath: '/',
      // resolvePath: '../',
      // basePath: '../',
      collapsed: true,
      // debugPrint: true,
    })
  },
  vite: {
    resolve: {
      preserveSymlinks: true // 允许软链接
    },
    // 屏蔽使用md文档中的vue解析器
    build: {
      rollupOptions: {
        // 屏蔽使用md文档中的vue解析器
        // external: ['vue', 'vue/server-renderer'],
        // 排除 .pdf 文件被打包
        external: (id) => {
          return ['.pdf', '.zip', '.mp4'].some(ext => id.endsWith(ext))
        },
      }
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'], // 忽略图片解析
  },
};


// export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
export default defineConfig(vitePressOptions)
