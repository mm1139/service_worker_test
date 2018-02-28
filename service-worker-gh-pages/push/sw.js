let baseURL = '/';

self.addEventListener('push', event => {
  console.info('push', event);
   /* let json = event.data.json();

    baseURL = json.data.url;

    event.waitUntil(
        self.registration.showNotification(json.notification.title, {
            'body': json.notification.body,
            'tag': 'request',
            'actions': JSON.parse(json.data.action)
        })
    );*/
      const message = event.data ? event.data.text() : '(・∀・)';

    event.waitUntil(
        self.registration.showNotification('Push Notification Title', {
            body: message,
            icon: 'https://service_worker_test-mmichi1139592001.codeanyapp.com/service-worker-gh-pages/push/images/image.jpg',
            tag: 'push-notification-tag'
        })
    );
});

self.addEventListener('notificationclick', event => {
    if (event.action === 'select-a') {
       console.info('push', 'select-a');
        //self.clients.openWindow('https://www.mitsue.co.jp/knowledge/blog/');
    } else if (event.action === 'select-b') {
      console.info('push', 'select-b');
        //self.clients.openWindow('https://www.mitsue.co.jp/knowledge/blog/frontend/');
    } else {
        self.clients.openWindow(baseURL);
    }

    event.notification.close();
});