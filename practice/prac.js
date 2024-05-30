const button = document.querySelector("#button");

const date =   document.querySelector("#date")
function get_date(){
    if (date.innerHTML == ""){
        date.innerHTML = Date()
    }
    else {
        date.innerHTML = ""
    }

}


button.addEventListener("click",get_date)

