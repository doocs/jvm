export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === '/') {
      path = '/index.html';
    }

    if (!path.includes('.') && !path.endsWith('/')) {
      path = path + '.html';
    }

    if (path.endsWith('/')) {
      path = path + 'index.html';
    }

    try {
      const asset = await env.ASSETS.fetch(new URL(path, request.url));

      if (asset.status === 404) {
        return await env.ASSETS.fetch(new URL('/index.html', request.url));
      }

      return asset;
    } catch {
      return new Response('Not Found', { status: 404 });
    }
  },
};
