const closebtn = document.getElementsByClassName("close");


    //creating elements
    function createElement(){
        const li = document.createElement('li');
        const inputvalue = document.querySelector(".the-input").value;
        const text = document.createTextNode(inputvalue);
        li.appendChild(text);

        if(inputvalue !== ""){
            document.querySelector(".the-list").appendChild(li); 
       }

       document.querySelector(".the-input").value = "";

       const spanclose = document.createElement("span");
        const txt = document.createTextNode("\u00D7");
        spanclose.className = "close";
        spanclose.appendChild(txt);
        li.appendChild(spanclose);

//remove
         for(i = 0; i < closebtn.length; i++){

            
             closebtn[i].addEventListener('click', function(){

                const theDiv = this.parentElement;
                theDiv.style.display = "none";
                });
        }
             

    
}


    createElement();


    addbtn = document.querySelector(".add-btn");
    addbtn.addEventListener('click', function(e){
        e.target === createElement();
    });
       
    

