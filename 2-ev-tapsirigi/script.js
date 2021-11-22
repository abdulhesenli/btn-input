let div = document.getElementById("show");
let inp = document.getElementById("input");
let butt = document.getElementById("butt")
let btn = `<button type="button" onclick="yeni()" style="font-size: 20px;">  Yeniden Secin  </button>`
let Start = document.getElementById("Go");




function gonder() {

    let test = "";

    for (let i = 1; i <= inp.value; i++) {
        test += `<input placeholder="musteri ${i}" style=" width: 180px; height: 30px; font-size: 20px;  " >`

    }

    inp.style.display = "none"
    butt.style.display = "none"
    div.innerHTML = test + btn

}


function yeni() {


    inp.style.display = "inline-block"
    butt.style.display = "inline-block"
     location.reload()

}


function start() {

    let tab = document.getElementById("tab")
    let cavab = " "

    for (let i = 1; i <= 3; i++) {
        cavab += `<tr>`

        for (let i = 1; i <= 3; i++) {
            cavab += `<td > </td>`;
        }

        cavab += `</tr>`

    }

    tab.innerHTML = cavab;

}







//     let tab=document.getElementById("tab")

//     let cavab = " "


//     for(let i=1; i<4;i++){

//       cavab+=`<tr>`

//         for(let j =1; j< 4; j++){
//             cavab+=`< td ></td>`;
//         }

//         cavab+=`</tr>`
//     }


//   tab.innerHTML=cavab;
