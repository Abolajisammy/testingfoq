let toggleNavStatus = false;

let slideProfileBar = ()=> {

    let sideBarWrapper = document.querySelector(".sidebar");
    let sideBarUl = document.querySelector(".sidebar ul");
    let sideBarTrigger = document.querySelector(".hamburger");
    let sideBarTriggerClose = document.querySelector(".close-button");


    if (toggleNavStatus == false) {
        sideBarWrapper.style.width = "100%";
        sideBarWrapper.style.visibility = "visible";
        sideBarWrapper.style.opacity = "1";
        sideBarUl.style.opacity = "1";
        sideBarTrigger.style.display = "none";
        sideBarTriggerClose.style.display = "block";


        toggleNavStatus = true;
        
    }
    
    else if (toggleNavStatus == true) {
        sideBarWrapper.style.width = "0%";
        sideBarWrapper.style.visibility = "hidden";
        sideBarWrapper.style.opacity = "0";
        sideBarUl.style.opacity = "0";
        sideBarTrigger.style.display = "block";
        sideBarTriggerClose.style.display = "none";


        toggleNavStatus = false;
    }

    }
