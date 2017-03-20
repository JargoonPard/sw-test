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

}