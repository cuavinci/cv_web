document.getElementById('home').addEventListener('click', function(){

    document.getElementById('texto_a_mostrar').innerHTML = "Soy un experto en la materia, pero sin aquellos que me han ayudado durante el camino, no estaría hoy donde estoy. Me gusta conectar con personas con el mismo objetivo y poner toda mi ilusión y mis conocimientos en lo que hago para marcar la diferencia.";
    
    });
    document.getElementById('proyectos').addEventListener('click', function(){
    
        document.getElementById('texto_a_mostrar').innerHTML = "Siempre estoy trabajando en algo. Normalmente, en conseguir buenos resultados para mis clientes. Sin embargo, a veces, me gusta involucrarme en un proyecto personal que me permita experimentar con conceptos e ideas nuevos.";
        
        });
    document.getElementById('aptitudes').addEventListener('click', function(){
    
    document.getElementById('texto_a_mostrar').innerHTML = "Todos tenemos nuestros puntos fuertes. He perfeccionado el mío para que puedas concentrarte en el tuyo. Ponte en contacto conmigo para que te cuente cómo puedo ayudarte.";
    
    });
    document.getElementById('motivacion').addEventListener('click', function(){
    
        document.getElementById('texto_a_mostrar').innerHTML = "Mi trabajo es mi objetivo y la fuerza que me impulsa. Es la razon por la que me levanto todos los días y por la que me dedico a esto. Sin embargo, lo más importante es que me alienta a conseguir cosas más grandes y mejores con cada nuevo desafío que se presenta.";
        
        });
   

           function defecto(){
            document.getElementById('texto_a_mostrar').innerHTML = "Mi correo es: same.gardner@example.com";
           }

            function ShowSelected()
            {
            /* Para obtener el valor */
            var elegido_por_el_usuario = document.getElementById("contacto").value;
             switch(elegido_por_el_usuario){
            case '1': document.getElementById('texto_a_mostrar').innerHTML = "Mi correo es: same.gardner@example.com";
            break;
            case '2': document.getElementById('texto_a_mostrar').innerHTML = "Mi numero es: ( 747 ) 850-7086";
            break;
             } }