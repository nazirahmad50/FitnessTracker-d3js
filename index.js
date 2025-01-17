const btns = document.querySelectorAll("button");
const form = document.querySelector("form");
const formAct = document.querySelector("form span");
const input = document.querySelector("input");
const error = document.querySelector("error");

var activity = "cycling";

btns.forEach(btn =>{
    btn.addEventListener("click", e =>{

        // get data-activity field data
        activity = e.target.dataset.activity;

        // remove and add active class
        btns.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        // set id of input field
        input.setAttribute("id", activity);

        // set text for form span
        formAct.textContent = activity;

        // call update funciton
        update(data);

    });
});

form.addEventListener("submit", e =>{

    e.preventDefault();

    const distance = parseInt(input.value);

    if (distance){

        db.collection("activities").add({
            distance: distance,
            activity: activity,
            data: new Date().toString()
        }).then(() =>{

            //error.textContent = "";
            input.value = "";
        });
    }else{

        error.textContent = "Please enter a valid distance"
    }
})