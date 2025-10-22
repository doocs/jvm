export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    // 处理根路径
    if (path === '/') {
      path = '/index.html';
    }

    // 如果路径没有扩展名，尝试添加 .html
    if (!path.includes('.') && !path.endsWith('/')) {
      path = path + '.html';
    }

    // 如果路径以 / 结尾，添加 index.html
    if (path.endsWith('/')) {
      path = path + 'index.html';
    }

    try {
      // 从 ASSETS 绑定中获取文件
      const asset = await env.ASSETS.fetch(new URL(path, request.url));
      
      if (asset.status === 404) {
        // 如果找不到文件，尝试返回 index.html（用于 SPA 路由）
        return await env.ASSETS.fetch(new URL('/index.html', request.url));
      }

      return asset;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
