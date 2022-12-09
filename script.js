/* Ex 1
*/
document.getElementById("firstname").onkeyup = function() {
let firstname = document.getElementById("firstname");
let display_name = document.getElementById("display-firstname");
display_name.innerText = firstname.value };


/* Ex 2 */
document.getElementById("age").onkeyup = function() {
    let age = document.getElementById("age")
    let truth = document.getElementById("a-hard-truth")

        if (age.value >= 18)
            truth.style.visibility = "visible";
        else 
        truth.style.visibility = "hidden";
};

