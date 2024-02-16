const fetch = require('node-fetch');

const getUUID = async () => {
  try {
    const response = await fetch('https://hello-world-odd-sky-fce7.bhowmickmrinank.workers.dev/uuid');
    if (response.ok) {
      const result = await response.json();
      console.log('UUID:', result.uuid);
    } else {
      console.error('Failed to get UUID:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

getUUID();
