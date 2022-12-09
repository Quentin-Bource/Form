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

/* Ex 3 */




document.getElementById("pwd").onkeyup = function()
{
    let pass = document.getElementById("pwd")
    let word_pass = document.getElementById("pwd").value
    if (word_pass.length < 6)
        pass.style.backgroundColor = "red"
    else 
        pass.style.backgroundColor = "white"
}

document.getElementById("pwd-confirm").onkeyup = function()
{   
    let word_pass = document.getElementById("pwd").value
    let pass_confirm = document.getElementById("pwd-confirm").value
    let word_pass_confirm = document.getElementById("pwd-confirm")

    if (pass_confirm.length === word_pass.length)
        word_pass_confirm.style.backgroundColor = "white"
    else 
        word_pass_confirm.style.backgroundColor = "red"
}

document.getElementById("toggle-darkmode").onchange = function()
{
    let toggle = document.getElementById("toggle-darkmode")

    if (toggle.value == "dark")
    {
        document.body.style.backgroundColor = "black";
    document.body.style.color = "white";}
        
    else{
        document.body.style.backgroundColor = "white";
    document.body.style.color = "black";}
        
}