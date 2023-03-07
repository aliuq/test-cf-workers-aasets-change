import DemoHtml from './demo.html';

// 1. pnpm run dev
// 2. Update demo.html content and save it

export default {
  async fetch(): Promise<Response> {
    return new Response(DemoHtml, {
      status: 200,
      headers: {
        'content-type': 'text/html',
        'content-length': DemoHtml.length.toString(),
      },
    });
  },
};
