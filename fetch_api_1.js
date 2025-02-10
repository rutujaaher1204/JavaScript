
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',  
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'My First Post',
      body: 'Hello, world!',
      userId: 1
    })
  })
  .then(response => response.json())
  .then(data => console.log('Created Post:', data))
  .catch(error => console.error('Error:', error));
  