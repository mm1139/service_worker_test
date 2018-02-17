'use strict';

let push = require('web-push');

const GCM_API_KEY = '660304697367';
push.setGCMAPIKey(GCM_API_KEY);

const data = {
    'endpoint': '********',
    'userAuth': '********',
    'userPublicKey': 'AIzaSyA0sEv0fsZN0QX7IGyPAa__tGTZMDI_Kao'
};

push.sendNotification(data.endpoint, {
    payload:       'push test for service worker',
    userAuth:      data.userAuth,
    userPublicKey: data.userPublicKey,
})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error('fail', err);
    });
