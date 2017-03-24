var mybutton = document.querySelector("#SWListing");

mybutton.addEventListener("click", getServiceWorkerDetails);

function getServiceWorkerDetails() {
    debugger;

    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for ( let i = 0, j = registrations.length; i <j; i++){
            registration = registrations[i];
            console.log(`Registration ${i} retrieved`);
        }
    });

    sendMessage("test").then(function(data){
        console.log(data);
    });

}

function sendMessage(message) {
    return new Promise(function(resolve, reject) {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function(event) {
            if(event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };

        navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    });
}