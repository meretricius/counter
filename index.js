let elem = document.getElementById("num")
let buttons = document.querySelectorAll("button")
let count = 0


buttons.forEach(button => {
    button.addEventListener("click", function(click) {
        let select = click.currentTarget.classList;

        if (select.contains("plus") && count < 10) {
            count++;
            elem.innerHTML = count;
        } else if (select.contains("min") && count > -10) {
            count--;
            elem.innerHTML = count;
        } else if (select.contains("reset")) {
            count = 0;
            elem.innerHTML = count;
        }
    });
});


// buttons.forEach( btns => {
//     btns.addEventListener("click", function(click) {
//         let select = click.currentTarget.classList;
//         if (select.contains("plus")) {
//             count++
//             elem.innerHTML = count
            
//         } else if (select.contains("min")) {
//             count--
//             elem.innerHTML = count
//         } else if (select.contains("reset")) {
//             count = 0
//             elem.innerHTML = count
//         }
        

//     })
// }) 


// console.log(buttons);


    // do {
    //     button.addEventListener("click", function(click) {

    //         let select = click.currentTarget.classList;
    //         if (select.contains("plus")) {
    //                         count++
    //                         elem.innerHTML = count
                            
    //                     } else if (select.contains("min")) {
    //                         count--
    //                         elem.innerHTML = count
    //                     } else if (select.contains("reset")) {
    //                         count = 0
    //                         elem.innerHTML = count
    //     }
        
    //     })
    // } while (count >= 10);




// button.addEventListener("click", function(click) {
//     let select = click.currentTarget.classList;

//     if (select.contains("plus") && count < 10) {
//         count++;
//         elem.innerHTML = count;
//     } else if (select.contains("min") && count > -10) {
//         count--;
//         elem.innerHTML = count;
//     } else if (select.contains("reset")) {
//         count = 0;
//         elem.innerHTML = count;
//     }
// });
