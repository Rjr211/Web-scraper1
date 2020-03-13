
const cookieFunction = () => {
    
 let navBar = Array.from(document.querySelectorAll('.nav>ol>li>a'));

 for (let i = 0; i < navBar.length; i++) {
 
     //Stores array of nav items in "navBarItems" variable
     let navBarItems = navBar[i];
 
     //Adds click event listener to all nav items 
     navBarItems.addEventListener('click', function(e) {
 
         //if cookie does not exist
         if (document.cookie.indexOf('browserClick=' + navBarItems.textContent) == -1) {
 
             // doesn't exist, create it now
             document.cookie = 'browserClick=' + navBarItems.textContent;
             console.log(document.cookie)
         } else {
 
            // retrieves cookie name and returns value
             const getCookie = (cname) => {
                 var name = cname + "=";
                 var decodedCookie = decodeURIComponent(document.cookie);
                 var ca = decodedCookie.split(';');
                 for (var i = 0; i < ca.length; i++) {
                     var c = ca[i];
                     while (c.charAt(0) == ' ') {
                         c = c.substring(1);
                     }
                     if (c.indexOf(name) == 0) {
                         return c.substring(name.length, c.length);
                     }
                 }
                 return "";
             }
 
             // alert that cookie exists and displays cookie value that was set
             alert('cookie value ' + getCookie('browserClick') + ' exists')
         }
 
     }, false);
 }
}
cookieFunction();