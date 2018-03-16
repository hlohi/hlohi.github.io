function SendMessage() {
    var Message = String;
    Message = document.getElementById("subject").value;
    if ((document.getElementById("fname").value === "")) || ((Message === "")); {
        //displays error msg
        alert("Enter user details");

    }
    else {
        Message = Message.replace(/\n\r?/g, '%0D%0A');
        location.href = "mailto:matlalahlohi@gmail.com?subject=Website%20User" + "&body=User:%0A" +
            document.getElementById("fname").value + "%0A%0AMessage:%0A" + Message;
        document.getElementById("fname").value = "";
        document.getElementById("subject").value = "";
    }
}
var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}