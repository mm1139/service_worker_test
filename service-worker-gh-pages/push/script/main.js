alert('test1');
if ('serviceWorker' in navigator) {
  alert('test2');
    document.addEventListener('DOMContentLoaded', () => {

        navigator.serviceWorker.register('./service-worker.js');
        navigator.serviceWorker.ready
            .then((registration) => {
          alert('test!!');
                initialize(registration);
                //return registration.pushManager.subscribe({userVisibleOnly: true});
            })
            /* .then((subscription) => {
                     var rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
                     key.value = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : '';
            
                     var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
                     auth.value = rawAuthSecret ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : '';
            
                     endpoint.value = subscription.endpoint;
                     console.log(`GCM EndPoint is: ${subscription.endpoint}`);
                 })*/
            .catch(console.error.bind(console));

        // navigator.serviceWorker.addEventListener('controllerchange', (e) => {
        //     console.log(e);
        //     console.log(navigator.serviceWorker.controller);
        // }, false);
    }, false);
}

