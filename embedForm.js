function embedGoogleForm(formUrl, containerId) {
    var container = document.getElementById(containerId);
    if (container) {
        var iframe = document.createElement('iframe');
        iframe.src = formUrl;
        iframe.width = '640';
        iframe.height = '480';
        iframe.frameBorder = '0';
        iframe.marginHeight = '0';
        iframe.marginWidth = '0';
        iframe.style.border = '0';
        container.appendChild(iframe);
    } else {
        console.error('Container with id ' + containerId + ' not found.');
    }
}
