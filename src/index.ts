import DemoHtml from './demo.html';

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
