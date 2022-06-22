function cambioTabD(){
    tab1 = document.getElementById("tabs-1");
    tab2 = document.getElementById("tabs-2");
    descripcion = document.getElementById("descripcion");
    programa = document.getElementById("programa");

    if(!descripcion.classList.contains("active")){
        descripcion.classList.add("active")
        programa.classList.remove("active")
        tab1.classList.remove("d-none")
        tab2.classList.add("d-none")
    }
}

function cambioTabP(){
    tab1 = document.getElementById("tabs-1");
    tab2 = document.getElementById("tabs-2");
    descripcion = document.getElementById("descripcion");
    programa = document.getElementById("programa");

    if(!programa.classList.contains("active")){
        descripcion.classList.remove("active")
        programa.classList.add("active")
        tab1.classList.add("d-none")
        tab2.classList.remove("d-none")
    }
}