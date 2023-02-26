import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getConsumer = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/consumer.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
