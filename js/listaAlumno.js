var formData = [
    { Nom: 'Nigel', Ap: 'Gutierrez', AM: 'Ramirez', Mat: '00001', Prog: 'Prescolar 01', url: '../assets/01.jpeg' },
    { Nom: 'Pablo', Ap: 'Perez', AM: 'Fuentes', Mat: '00002', Prog: 'Prescolar 02', url: '../assets/02.jpg' },
    { Nom: 'Luis', Ap: 'Gomez', AM: 'Guzman', Mat: '00003', Prog: 'Prescolar 01', url: '../assets/03.jpg' },
    { Nom: 'Fernando ', Ap: 'Hernandez', AM: 'Nuñez', Mat: '00004', Prog: 'Kinder', url: '../assets/04.jpg' },
    { Nom: 'Pedro', Ap: 'Lopez', AM: 'Fuentes ', Mat: '00005', Prog: 'Prescolar 02', url: '../assets/05.jpg' },
    { Nom: 'Leonel', Ap: 'Martinez', AM: 'Montiel', Mat: '00006', Prog: 'Prescolar 03', url: '../assets/06.jpg' },
    { Nom: 'Daniel', Ap: 'Ramirez', AM: 'Velazquez', Mat: '00007', Prog: 'Prescolar 02', url: '../assets/istockphoto-542952936-612x612.jpg' },
];

var listaAlumnos=document.getElementById('myTable');

mostrarlistaAlumnos(formData);

function mostrarlistaAlumnos(alumnosCiclo) {
    listaAlumnos.innerHTML='';

    alumnosCiclo.forEach(indiceAlumno=>{
    var imagen = document.createElement('img');
        imagen.setAttribute('src', indiceAlumno.url);
        imagen.setAttribute('width', '150px');
        imagen.setAttribute('height', '150px');

    var tr= document.createElement('tr');
    var Mattd=document.createElement('td'); 
          Mattd.textContent=indiceAlumno.Mat;
          tr.appendChild(Mattd);
	var Nomtd=document.createElement('td');  
          Nomtd.textContent=indiceAlumno.Nom;
	  tr.appendChild(Nomtd);
	var Aptd=document.createElement('td');  
            Aptd.textContent=indiceAlumno.Ap;
	  tr.appendChild(Aptd);
	var Amtd=document.createElement('td');  
            Amtd.textContent=indiceAlumno.AM;
	  tr.appendChild(Amtd);
	var Protd=document.createElement('td');  
            Protd.textContent=indiceAlumno.Prog;
	  tr.appendChild(Protd);
	var Fototd=document.createElement('td');  
        Fototd.appendChild(imagen);
	    tr.appendChild(Fototd);
            
        listaAlumnos.appendChild(tr);
    });
}

function buscarAlumnos() {
    var textoBusqueda = document.getElementById('txtBuscar').value.toLowerCase();
    var alumnosBuscados = formData.filter(function (imagen) {
        return (
            imagen.Nombre.toLowerCase().includes(textoBusqueda) 
        );
    });
    mostrarListaImagenes(alumnosBuscados);
}
