const btn = document.querySelector("button");


const addElement = function () {
    // console.log("click")
    const div = document.createElement("div");
    document.body.appendChild(div);
}

btn.addEventListener("click" , addElement);

