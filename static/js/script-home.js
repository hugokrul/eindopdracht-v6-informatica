var guy = document.getElementById('guy');
var removed = false;
var pauzeOpMovement = true;

var guyLeft = window.scrollX + document.querySelector('#guy').getBoundingClientRect().left;
var guyTop = window.scrollY + document.querySelector('#guy').getBoundingClientRect().top;

var bottomBorderY = window.scrollY + document.querySelector('.line-bottom').getBoundingClientRect().top - guy.clientHeight;
var topBorderY = window.scrollY + document.querySelector('.line-top').getBoundingClientRect().bottom;


// borders gaan van links boven naar rechts boven, van links beneden naar rechts beneden en zijn de witte strepen
var border1 = window.scrollX + document.querySelector('.top-left1-border').getBoundingClientRect().left;
var border2 = window.scrollX + document.querySelector('.top-left2-border').getBoundingClientRect().left;
var border3 = window.scrollX + document.querySelector('.top-left3-border').getBoundingClientRect().left;

var border4 = window.scrollX + document.querySelector('.top-right1-border').getBoundingClientRect().left - guy.clientWidth;
var border5 = window.scrollX + document.querySelector('.top-right2-border').getBoundingClientRect().left;
var border6 = window.scrollX + document.querySelector('.top-right3-border').getBoundingClientRect().left;

var border7 = window.scrollX + document.querySelector('.bottom-left1-border').getBoundingClientRect().left;
var border8 = window.scrollX + document.querySelector('.bottom-left2-border').getBoundingClientRect().left;
var border9 = window.scrollX + document.querySelector('.bottom-left3-border').getBoundingClientRect().left;

var border10 = window.scrollX + document.querySelector('.bottom-right1-border').getBoundingClientRect().left - guy.clientWidth;
var border11 = window.scrollX + document.querySelector('.bottom-right2-border').getBoundingClientRect().left;
var border12 = window.scrollX + document.querySelector('.bottom-right3-border').getBoundingClientRect().left;

function anim(e) {
    if (pauzeOpMovement) {
        // rechts
        if (e.keyCode == 39) {
            guyLeft += 20;
            guy.style.left = guyLeft + 'px';
            if (guyLeft >= window.innerWidth - 100) {
                guyLeft -= 20;
            }
            // De laagste border rechts
            else if (guyLeft >= border10 && guyTop >= bottomBorderY) {
                guyLeft -= 20;
            }
            // De laagste border rechts
            else if (guyLeft >= border4 && guyTop <= topBorderY) {
                guyLeft -= 20;
            };
        }

        // links
        if (e.keyCode == 37) {
            guyLeft -= 20;
            guy.style.left = guyLeft + 'px';
            if (guyLeft <= 0) {
                guyLeft += 20;
            }
            // De laagste border links
            else if (guyLeft <= border9 && guyTop >= bottomBorderY) {
                guyLeft += 20;
            }
            // De hoogste border links
            else if (guyLeft <= border3 && guyTop <= topBorderY) {
                guyLeft += 20;
            };
        }

        // beneden
        if (e.keyCode == 40) {
            guyTop += 20;
            guy.style.top = guyTop + 'px';
            if (guyTop >= window.innerHeight - 100) {
                guyTop -= 20;
            } else if (guyTop >= bottomBorderY && guyLeft <= border7 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div7')
                guyTop -= 20;
            } else if (guyTop >= bottomBorderY && guyLeft <= border8 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div8')
                guyTop -= 20;
            } else if (guyTop >= bottomBorderY && guyLeft <= border9) {
                showDiv('#pop-up-div9')
                guyTop -= 20;
            } else if (guyTop >= bottomBorderY && guyLeft >= border12 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div12')
                guyTop -= 20;
            } else if (guyTop >= bottomBorderY && guyLeft >= border11 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div11')
                guyTop -= 20;
            } else if (guyTop >= bottomBorderY && guyLeft >= border10) {
                showDiv('#pop-up-div10')
                guyTop -= 20;
            };
        }

        // boven
        if (e.keyCode == 38) {
            guyTop -= 20;
            guy.style.top = guyTop + 'px';
            if (guyTop <= 45) {
                window.location.href = "../index_eerste-verdieping.html"
                guyTop += 20;
            } else if (guyTop <= topBorderY && guyLeft <= border1 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div1');  
                pauzeOpMovement = false;
                guyTop += 20;
            } else if (guyTop <= topBorderY && guyLeft <= border2 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div2')
                guyTop += 20;
            } else if (guyTop <= topBorderY && guyLeft <= border3) {
                showDiv('#pop-up-div3')
                guyTop += 20;
            } else if (guyTop <= topBorderY && guyLeft >= border6 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div6')
                guyTop += 20;
            } else if (guyTop <= topBorderY && guyLeft >= border5 - (0.5 * guy.clientWidth)) {
                showDiv('#pop-up-div5')
                guyTop += 20;
            } else if (guyTop <= topBorderY && guyLeft >= border4) {
                showDiv('#pop-up-div4')
                guyTop += 20;
            };
        };
    }
};

function deleteGuy() {
    var guy = document.getElementById('guy');
    if (window.innerWidth <= 800) {
        if (!(removed)) {
            guy.remove();
            removed = true;
        };
    } else if (window.innerHeight <= 500) {
        if (!(removed)) {
            guy.remove();
            removed = true;
        };
    } else if (window.innerWidth > 800 || window.innerHeight > 500) {
        removed = false;
        document.body.innerHTML += "<div id='guy'></div>";
        location.reload();
    };
};

function showWindow(genre) {
    alert(genre);
};

$(window).load(function() {
    $('.popupCloseButton').click(function() {
        $('.pop-ups').hide();
        pauzeOpMovement = true;
    });
});

function showDiv(genre) {
    $(genre).show();
}

// Koekjes
$(function() {
    function setCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";

        document.cookie = name + "=" + value + expires + "; path=/"
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // validate cookie
    var myCookie = getCookie("MyCookie")
    if (myCookie == null) {
        // Er is geen cookie
        $('#pop-up-div-welkom').show();
        setCookie("MyCookie", "foo", 7);
    }
    else {
        // Er is een cookie
        $('#pop-up-div-welkom').hide();
    }
});

function eersteVerdieping() {
    window.location.href = "../index_eerste-verdieping.html"
};

document.onkeydown = anim;
window.addEventListener('resize', deleteGuy);
