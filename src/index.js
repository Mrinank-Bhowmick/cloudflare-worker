addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
  }) 
  
  async function handleRequest(request) {
	const url = new URL(request.url)
	if (url.pathname === '/') {
	  return new Response('up and running', { status: 200 })
	} else if (url.pathname === '/uuid' && request.method === 'GET') {
	  return generateUUID()
	} else {
	  return new Response('Not found.', { status: 404 })
	}
  }
  
  async function generateUUID() {
	try {
	  const uuid = crypto.randomUUID();
	  return new Response(JSON.stringify({ uuid }), { status: 200, headers: { 'Content-Type': 'application/json' } });
	} catch (err) {
	  return new Response('Failed to generate UUID', { status: 500 });
	}
  }
  