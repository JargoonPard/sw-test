var mybutton = document.querySelector("#SWListing");

mybutton.addEventListener("click", getServiceWorkerDetails);

function getServiceWorkerDetails() {
    debugger;

    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        document.querySelector('#status').textContent = 'ServiceWorkerRegistrations found.';
    });

}