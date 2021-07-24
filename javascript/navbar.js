const toggle = document.querySelector(".toggle");// Customized toggle from my dom
const menu = document.querySelector(".menu");
const special = document.querySelectorAll(".special");
const specialDropdowns = document.querySelectorAll(".special-dropdowns");
const button = document.querySelectorAll(".button");

menu.classList.add("active");
const toggleFunction = ()=>{
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>' //Add times icon
    }else{
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>'; //Add bars icon  
    }
};

const specialToggle = function(e){
    const subMenu = e.target.parentElement.getElementsByClassName("sub-menu")[0];
    if(subMenu.classList.contains(".sub-menu-active")){
                subMenu.classList.remove(".sub-menu-active");
                subMenu.style.display = "none";
    }else {
                subMenu.classList.add(".sub-menu-active"); 
                subMenu.style.display = "block";
    }
};

for(const specialDropdown of specialDropdowns){ //AddEventLIstener to the 'a' attribute using the special dropdown class
    specialDropdown.addEventListener('click', specialToggle);
    specialDropdown.addEventListener('keypress', specialToggle);
}

toggle.addEventListener('click', toggleFunction );

/* When the screen with  is > 760 */
if(screen.width > "760"){
    /*.Tags is created via javascript to add select styles to the buttons only */
    for(const buttoner of button){
        buttoner.classList.add("tags");
    }    
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target); //Target only the menu items here.
        /* Use a 'for' loop to try to select get the specialDropdown elements */
        for(const specialDropdown of specialDropdowns){
            const subMenuActiveChecker = specialDropdown.nextElementSibling.classList.contains('.sub-menu-active');
            /*subMenuActiveChecker Checks if the special dropdown contains the .sub-menu-active class.
            It returns the boolean value true */
            if(!isClickInside && subMenuActiveChecker){
                const anothersubMenuHandler = document.getElementsByClassName('sub-menu');//Collect the submenu nodelist
                /*Display the submenu item styles as none */
                for(const items of anothersubMenuHandler){
                    items.classList.remove(".sub-menu-active");
                    items.style.display = "none";
                }
            }   
        }
  }
   
  /* Event listener */

  document.addEventListener("click", closeSubmenu);





