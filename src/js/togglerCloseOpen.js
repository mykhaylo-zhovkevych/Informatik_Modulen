import '../css/content.css'

var t1 = new TimelineMax({paused: true});


t1.to(".one", 1.2, {
    y: 5,
    rotation: 45,
    ease: Power1.easeInOut 
    
});

t1.to(".two", 1.2, {
    y: -25,
    rotation: -45,
    ease: Power1.easeInOut, 
    delay: -1.5
});



t1.to(".hidden-window", 0.5, {

    top: "0%",
    ease: Power1.easeInOut,
    delay: -1.35
});


t1.reverse();

$(document).on("click", ".toggle-btn", function() {
    var hiddenWindow = $(".hidden-window");
    if (t1.reversed()) {
        hiddenWindow.addClass("visible");
        $("body").css("overflow", "hidden");
        t1.play();
    } else {
        t1.reverse().eventCallback("onReverseComplete", function() {
            hiddenWindow.removeClass("visible");
            $("body").css("overflow", "auto");
        });
    }
});

$(document).on("click", ".links-header-active a", function() {
    var hiddenWindow = $(".hidden-window");
    var targetClass;

    switch ($(this).text().trim()) {
        case "Einloggen":
            targetClass = ".page-login";
            break;
        case "Konto anfragen":
            targetClass = ".page-request-login";
            break;
        case "Einstellungen":
            targetClass = ".page-settings";
            break;
        default:
            targetClass = ".page-login";
    }

    $(".page-login, .page-request-login, .page-settings").removeClass("shown-content").addClass("hidden-content"); // Hide all
    $(targetClass).removeClass("hidden-content").addClass("shown-content"); // Show the target section

    if (t1.reversed()) {
        hiddenWindow.addClass("visible");
        $("body").css("overflow", "hidden");
        t1.play();
    } else {
        t1.reverse().eventCallback("onReverseComplete", function() {
            hiddenWindow.removeClass("visible");
            $("body").css("overflow", "auto");
        });
    }
});

/* code that is used by the sidebar */

document.querySelectorAll('.sidebar-list-item').forEach(item => {
    item.addEventListener('click', function(event) {
        // Only prevent default if the target is not a link
        if (!event.target.matches('.subclass-li a')) {
            event.preventDefault();
        }

        const targetId = this.getAttribute('data-target');
        const targetSubClasses = document.getElementById(targetId);

        // Hide all sub-class lists
        document.querySelectorAll('.subclass-list').forEach(subclass => {
            if (subclass !== targetSubClasses) {
                subclass.style.display = 'none';
            }
        });

        // Toggle the visibility of the clicked sub-class list
        if (targetSubClasses.style.display === 'grid') {
            targetSubClasses.style.display = 'none';
        } else {
            targetSubClasses.style.display = 'grid';
        }
    });
});

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}


/* end of code that is used by the sidebar */