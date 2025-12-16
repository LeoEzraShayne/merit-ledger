# 功过格应用官网

这是功过格应用的官方网站，包含应用介绍、功能说明、使用指南、下载链接等内容。

## 📁 文件结构

```
website/
├── index.html          # 首页
├── features.html       # 功能说明
├── guide.html         # 使用指南
├── download.html      # 下载页面
├── about.html         # 关于页面
├── vercel.json        # Vercel 部署配置
└── DEPLOY_GUIDE.md    # 部署指南
```

## 🚀 快速部署

### 使用 Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 https://vercel.com
3. 使用 GitHub 登录
4. 导入项目并部署

详细步骤请查看 [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)

## 📝 更新内容

### 更新应用市场链接

编辑 `download.html`，找到以下部分并更新：

```html
<!-- Android 下载链接 -->
<a href="https://play.google.com/store/apps/details?id=com.gongguoge.app">
    Google Play 下载链接
</a>

<!-- iOS 下载链接 -->
<a href="https://apps.apple.com/app/gongguoge/id...">
    App Store 下载链接
</a>
```

### 更新应用状态

编辑 `download.html`，修改状态标签：

```html
<!-- 从"即将上架"改为"已上架" -->
<div class="status-badge available">已上架</div>
```

## 🎨 自定义样式

所有样式都在每个 HTML 文件的 `<style>` 标签中，可以直接修改。

主要颜色变量：
- `--primary-color: #2D6A4F` - 主色调（绿色）
- `--primary-dark: #1e4a35` - 深绿色
- `--text-primary: #1a1a1a` - 主文字颜色
- `--text-secondary: #666` - 次要文字颜色

## 📱 响应式设计

网站已适配移动端，在手机、平板、电脑上都能正常显示。

## 🔗 链接说明

- 所有内部链接使用相对路径
- 外部链接（如应用市场）使用完整 URL
- 图标和资源文件使用相对路径指向 `../public/`

## 📄 许可证

© 2025 功过格 (GongGuoGe). 传承《了凡四训》智慧，命自我立，福自己求。

