function addNewWEField(){
    // console.log("Add new Field")

    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')

    let weOb=document.getElementById("we");
    let weAddButtonob=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonob)
}


function addNewAqField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here')

    let aqOb=document.getElementById("Aq");
    let aqAddButtonob=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonob)
}


//Generating  CV

function generateCV(){
    // console.log("Geenerate CV");


    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField


    // let nameT2=document.getElementById("nameT2");
    // nameT2.innerHTML=nameField



    // direct Pro


    document.getElementById('nameT2').innerHTML=nameField;

    // /Contact


    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //Adress

    document.getElementById("addressT").innerHTML=document.getElementById("contactField").value;


    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    
    document.getElementById("linkT").innerHTML=document.getElementById("linkField").value;


    // Objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;

    //Work Experience


    let wes=document.getElementsByClassName("weField");

    let str="";

    for(let e of wes){
        str=str +`<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML=str


    // acedimic 

    let aqs=document.getElementsByClassName("aqField");

    let str1="";

    for(let e of aqs){
        str1=str1 +`<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML=str1;


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

function printCV() {
    window.print();
}