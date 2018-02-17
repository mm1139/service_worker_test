function initialize() {
    switch (Notification.permission) {
//         case 'granted':
//             console.log("permission = granted");
//             break;
        case 'denied':
            console.log("permisson = denied");
            break;
        case 'default':
            console.log("来てる？");
            Notification.requestPermission(function (permission) {
                if (permission === 'granted') {
                  console.log("来てる？?");
                    ServiceWorkerRegistration.pushManager.subscribe({
                            userVisibleOnly: true
                        })
                        .then(subscription => {
                            
                            showEndpoint(subscription);
                        })
                        .catch(e => console.log(e));
                }

            });
            break;
        default:
            break;
    }
}

function showEndpoint(subscription) {
    console.log("endpoint :" + subscription.endpoint);
    console.log("token :" + getToken(subscription.endpoint));
}

function getToken(subscription) {
    let token = subscription.split("/");
    return token[token.length - 1];
}