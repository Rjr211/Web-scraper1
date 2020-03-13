const buttonFunction = () => {
    
    //Select all signup buttons and store in variable "buttons"
    let buttons = document.querySelectorAll("a[href='/signup']");

    //Loops through all buttons
    for (let i = 0; i < buttons.length; i++) {

        //Stores array of buttons in "signup" variable
        let signup = buttons[i];

        //Adds click event listener to all buttons 
        signup.addEventListener('click', function(e) {

            // alert user of what button they clicked by the counter
            alert("You clicked button " + i);

        }, false);

    }
};
buttonFunction();
