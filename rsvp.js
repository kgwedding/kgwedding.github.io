function takeNameForURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("untuk");
    return name;
}

function changeText() {
    const name = takeNameForURL();
    if (name) {
        document.getElementById("name").textContent = name;
    }
}

window.addEventListener("load", changeText);

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true
});
document.addEventListener('DOMContentLoaded', function () {
    var http = new XMLHttpRequest();
    http.open("GET", "https://mycloud.devazy.iotflows.com/onload?reload=sukses", true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // alert(this.responseText);
            var data = JSON.parse(this.responseText);
            var len = data.length;
            for (var i = 0; i < len; i++) {
                $("#message_list").prepend('<li>\n' +
                    '                        <span class="from">' + data[i].name + '</span>\n' +
                    '                        <span class="guest_message">' + data[i].message + '</span>\n' +
                    '                    </li>');
            }
        }
    }
    var splide = new Splide('.splide',
        {
            type: 'loop',
            perPage: 3,
            pagination: true,
            arrows: true,
            lazyLoad: 'nearby',
            perMove: 1,
            breakpoints: {
                640: {
                    perPage: 2,
                },
                480: {
                    arrows: false,
                    perPage: 1,
                    focus: 'center',
                }
            }
        });
    splide.mount();
});

$(document).ready(function () {
    $("#btn_message").on("click", function (e) {
        e.preventDefault();
        if ($("#guest_name").val() === '') {
            return alert('Name is Required')
        }
        // if ($("#message").val() === '') {
        //     return alert('Pesan Harus Diisi');
        // }
        if ($("#guest_name").val() !== '' && $("#message").val() !== '') {
            $(this).html('Sending...');
            var btn = $(this);
            btn.attr("disabled", "disabled");
            setTimeout(function () {
                $('#form_message').submit();
            }, 1500);
        }
    });

    $('#form_message').on('submit', function (event) {
        event.preventDefault();
        var btn = $("#btn_message");
        if (true) {
            btn.html('<small>Thank you!</small>');
            setTimeout(function () {
                btn.html('Send');
            }, 3000);
            var http = new XMLHttpRequest();
            http.open("GET", "https://mycloud.devazy.iotflows.com/button?name=" + $('#guest_name').val() + "&message=" + $('#message').val(), true);
            http.send();
            $("#message_list").prepend('<li>\n' +
                '                        <span class="from">' + $('#guest_name').val() + '</span>\n' +
                '                        <span class="guest_message">' + $('#message').val() + '</span>\n' +
                '                    </li>');
            $('#guest_name').val('');
            $('#message').val('');
        } else {

        }
    })
});

function alert(msg) {
    alertify.alert().set(
        {
            title: 'Information',
            transition: 'slide',
            message: msg,
            movable: true,
            closable: false
        }).show();
}
