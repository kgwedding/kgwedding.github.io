// function embedGoogleForm(formUrl, containerId) {
//     var container = document.getElementById(containerId);
//     if (container) {
//         var iframe = document.createElement('iframe');
//         iframe.src = formUrl;
//         iframe.width = '640';
//         iframe.height = '480';
//         iframe.frameBorder = '0';
//         iframe.marginHeight = '0';
//         iframe.marginWidth = '0';
//         iframe.style.border = '0';
//         container.appendChild(iframe);
//     } else {
//         console.error('Container with id ' + containerId + ' not found.');
//     }
// }

function embedGoogleForm(formUrl, containerId) {
    var container = document.getElementById(containerId);
    if (container) {
        // Create a div with class 'responsive-iframe-container'
        var iframeContainer = document.createElement('div');
        iframeContainer.className = 'responsive-iframe-container';

        // Create the iframe
        var iframe = document.createElement('iframe');
        iframe.src = formUrl;
        iframe.frameBorder = '0';
        iframe.marginHeight = '0';
        iframe.marginWidth = '0';
        iframe.style.border = '0';

        // Append the iframe to the container div
        iframeContainer.appendChild(iframe);

        // Append the container div to the provided container
        container.appendChild(iframeContainer);
    } else {
        console.error('Container with id ' + containerId + ' not found.');
    }
}

