# 构建 VitePress 项目
pnpm docs:build

# 设置临时部署目录
$deployDir = "gh-pages-deploy"

# 如果存在旧的部署目录，则先删除
if (Test-Path $deployDir) {
    Remove-Item $deployDir -Recurse -Force
}

# 拷贝构建后的文件
Copy-Item -Path "docs/.vitepress/dist" -Destination $deployDir -Recurse

# 切换到部署目录
Set-Location $deployDir

# 初始化 Git 仓库并推送到 gh-pages 分支
git init
git remote add origin https://github.com/Chanxiansheng/obsidian-vitepress-docs.git
git checkout -b gh-pages

# 创建 .nojekyll 以禁用 Jekyll
New-Item -ItemType File -Name ".nojekyll" | Out-Null

git add .
git commit -m "deploy"
git push -f origin gh-pages

# 返回原目录
Set-Location ..

# 可选：清理部署目录
Remove-Item $deployDir -Recurse -Force
