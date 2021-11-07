//////////16 de junio del 2021

$(document).ready(function(){

 //$('#resultados').hide();

 $('#calcular').click(function (e) { 
     e.preventDefault();
     var primerOcteto = parseInt($("#primerOcteto").val());
     var primerOctetoRed = parseInt($("#primerOcteto").val());
     var segundoOcteto = parseInt($("#segundoOcteto").val());
     var segundoOctetoRed = parseInt($("#segundoOcteto").val());
     var tercerOcteto = parseInt($("#tercerOcteto").val());
     var tercerOctetoRed = parseInt($("#tercerOcteto").val());
     var cuartoOcteto = parseInt($("#cuartoOcteto").val());
     var cuartoOctetoRed = parseInt($("#cuartoOcteto").val());
     var prefijo = parseInt($('#prefijo').val());

     var primerOctetoBinario = [0,0,0,0,0,0,0,0];
     var segundoOctetoBinario = [0,0,0,0,0,0,0,0];
     var tercerOctetoBinario = [0,0,0,0,0,0,0,0];
     var cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
     
     var octeto1 = 7;
     var octeto2 = 7;
     var octeto3 = 7;
     var octeto4 = 7;
//Esta linea eliomina los datos de la consilta anterior, para solo mostrar la consulata actual
    
$('#resultados').hide();
       $('#resultados').slideDown();
       $('h4').remove();
       $('h5').remove();
    
     ////////////CONVERSOR//////////////////////////

     ////////////pRIMERO OCTETO/////////////////////////
     if (primerOcteto > 255 || segundoOcteto > 255 || tercerOcteto > 255 || cuartoOcteto > 255 || prefijo > 31){
         
     alert("Datos incorrectos");
    } else{
     var direccionIp = primerOcteto + "." + segundoOcteto + "." + tercerOcteto + "." + cuartoOcteto;
     do {        
        if (Math.trunc(primerOcteto) == 1) {
            primerOctetoBinario[octeto1] = 1;
        }else if(Math.trunc(primerOcteto%2) == 1){
             primerOctetoBinario[octeto1] = 1;
         } 
            octeto1 --;
            primerOcteto /= 2;    
     } while (primerOcteto >= 1);

     //////////////////////////SEGUNDO OCTETO//////////////////////////


     do {        
        if (Math.trunc(segundoOcteto) == 1) {
            segundoOctetoBinario[octeto2] = 1;
        }else if(Math.trunc(segundoOcteto%2) == 1){
             segundoOctetoBinario[octeto2] = 1;
         } 
            octeto2 --;
            segundoOcteto /= 2;    
     } while (segundoOcteto >= 1);


     /////////////////////////TERCER OCTETO///////////////////////////////////////
    

     do {        
        if (Math.trunc(tercerOcteto) == 1) {
            tercerOctetoBinario[octeto3] = 1;
        }else if(Math.trunc(tercerOcteto%2) == 1){
             tercerOctetoBinario[octeto3] = 1;
         } 
            octeto3 --;
            tercerOcteto /= 2;    
     } while (tercerOcteto >= 1);


     ////////////////////////////CUARTO OCTETO//////////////////////////////////////

     do {        
        if (Math.trunc(cuartoOcteto) == 1) {
            cuartoOctetoBinario[octeto4] = 1;
        }else if(Math.trunc(cuartoOcteto%2) == 1){
             cuartoOctetoBinario[octeto4] = 1;
         } 
            octeto4 --;
            cuartoOcteto /= 2;    
     } while (cuartoOcteto >= 1);
    
    
     ///////////////////////////////////////

     var direccionIpBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
     "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
    }

    //////////////////////////CACULADORA DE MASCARA, WILLDARD Y BROADCAST.//////////////////////////////
    //////////30 de junio del 2021

   if(prefijo == 8){
          var mascaraBinario = "11111111.00000000.00000000.00000000";
          var mascara = "255.0.0.0";
          var wildcardBinario = "00000000.11111111.11111111.11111111";
          var wildcard = "0.255.255.255";
          
          segundoOctetoBinario  = [0,0,0,0,0,0,0,0];
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";     
     
          segundoOctetoBinario  = [1,1,1,1,1,1,1,1] ;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 9) {
          var mascaraBinario = "11111111.10000000.00000000.00000000";
          var mascara = "255.128.0.0";
          var wildcardBinario = "00000000.01111111.11111111.11111111";
          var wildcard = "0.127.255.255";
          segundoOctetoBinario [1] = 0;
          segundoOctetoBinario [2] = 0;
          segundoOctetoBinario [3] = 0;
          segundoOctetoBinario [4] = 0;
          segundoOctetoBinario [5] = 0;
          segundoOctetoBinario [6] = 0;
          segundoOctetoBinario [7] = 0;
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          
          segundoOctetoBinario [1] = 1;
          segundoOctetoBinario [2] = 1;
          segundoOctetoBinario [3] = 1;
          segundoOctetoBinario [4] = 1;
          segundoOctetoBinario [5] = 1;
          segundoOctetoBinario [6] = 1;
          segundoOctetoBinario [7] = 1;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 10) {
          var mascaraBinario = "11111111.11000000.00000000.00000000";
          var mascara = "255.192.0.0";
          var wildcardBinario = "00000000.00111111.11111111.11111111";
          var wildcard = "0.63.255.255";
          segundoOctetoBinario [2] = 0;
          segundoOctetoBinario [3] = 0;
          segundoOctetoBinario [4] = 0;
          segundoOctetoBinario [5] = 0;
          segundoOctetoBinario [6] = 0;
          segundoOctetoBinario [7] = 0;
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          
          segundoOctetoBinario [2] = 1;
          segundoOctetoBinario [3] = 1;
          segundoOctetoBinario [4] = 1;
          segundoOctetoBinario [5] = 1;
          segundoOctetoBinario [6] = 1;
          segundoOctetoBinario [7] = 1;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 11) {
          var mascaraBinario = "11111111.11100000.00000000.00000000";
          var mascara = "255.224.0.0";
          var wildcardBinario = "00000000.00011111.11111111.11111111";
          var wildcard = "0.31.255.255";
          segundoOctetoBinario [3] = 0;
          segundoOctetoBinario [4] = 0;
          segundoOctetoBinario [5] = 0;
          segundoOctetoBinario [6] = 0;
          segundoOctetoBinario [7] = 0;
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          
          segundoOctetoBinario [3] = 1;
          segundoOctetoBinario [4] = 1;
          segundoOctetoBinario [5] = 1;
          segundoOctetoBinario [6] = 1;
          segundoOctetoBinario [7] = 1;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 12) {
          var mascaraBinario = "11111111.11110000.00000000.00000000";
          var mascara = "255.240.0.0";
          var wildcardBinario = "00000000.00001111.11111111.11111111";
          var wildcard = "0.15.255.255";
          segundoOctetoBinario [4] = 0;
          segundoOctetoBinario [5] = 0;
          segundoOctetoBinario [6] = 0;
          segundoOctetoBinario [7] = 0;
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          
          segundoOctetoBinario [4] = 1;
          segundoOctetoBinario [5] = 1;
          segundoOctetoBinario [6] = 1;
          segundoOctetoBinario [7] = 1;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 13) {
          var mascaraBinario = "11111111.11111000.00000000.00000000";
          var mascara = "255.248.0.0";
          var wildcardBinario = "00000000.00000111.11111111.11111111";
          var wildcard = "0.7.255.255";

          segundoOctetoBinario [5] = 0;
          segundoOctetoBinario [6] = 0;
          segundoOctetoBinario [7] = 0;
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          
     
          segundoOctetoBinario [5] = 1;
          segundoOctetoBinario [6] = 1;
          segundoOctetoBinario [7] = 1;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 14) {
          var mascaraBinario = "11111111.11111100.00000000.00000000";
          var mascara = "255.252.0.0";
          var wildcardBinario = "00000000.00000011.11111111.11111111";
          var wildcard = "0.3.255.255";


          segundoOctetoBinario [6] = 0;
          segundoOctetoBinario [7] = 0;
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          


          segundoOctetoBinario [6] = 1;
          segundoOctetoBinario [7] = 1;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 15) {
          var mascaraBinario = "11111111.11111110.00000000.00000000";
          var mascara = "255.254.0.0";
          var wildcardBinario = "00000000.00000001.11111111.11111111";
          var wildcard = "0.1.255.255";


          
          segundoOctetoBinario [7] = 0;
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          segundoOctetoBinario [7] = 1;
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 16) {
          var mascaraBinario = "11111111.11111111.00000000.00000000";
          var mascara = "255.255.0.0";
          var wildcardBinario = "00000000.00000000.11111111.11111111";
          var wildcard = "0.0.255.255";
          tercerOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          tercerOctetoRed = 0;
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          tercerOctetoBinario = [1,1,1,1,1,1,1,1];
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   
          var segundoOctetoRed = ((segundoOctetoBinario [0] * 128) + (segundoOctetoBinario [1] * 64) + (segundoOctetoBinario [2] * 32) + (segundoOctetoBinario[3] * 16) + (segundoOctetoBinario [4] * 8) +
          (segundoOctetoBinario [5] * 4) + (segundoOctetoBinario [6] * 2) + (segundoOctetoBinario [7] * 1));
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 17) {
          var mascaraBinario = "11111111.11111111.10000000.00000000";
          var mascara = "255.255.128.0";
          var wildcardBinario = "00000000.00000000.01111111.11111111";
          var wildcard = "0.0.127.255";
          tercerOctetoBinario [1] = 0;
          tercerOctetoBinario [2] = 0;
          tercerOctetoBinario [3] = 0;
          tercerOctetoBinario [4] = 0;
          tercerOctetoBinario [5] = 0;
          tercerOctetoBinario [6] = 0;
          tercerOctetoBinario [7] = 0;
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          tercerOctetoBinario [1] = 1;
          tercerOctetoBinario [2] = 1;
          tercerOctetoBinario [3] = 1;
          tercerOctetoBinario [4] = 1;
          tercerOctetoBinario [5] = 1;
          tercerOctetoBinario [6] = 1;
          tercerOctetoBinario [7] = 1;
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 18) {
          var mascaraBinario = "11111111.11111111.11000000.00000000";
          var mascara = "255.255.192.0";
          var wildcardBinario = "00000000.00000000.00111111.11111111";
          var wildcard = "0.0.63.255";
          tercerOctetoBinario [2] = 0;
          tercerOctetoBinario [3] = 0;
          tercerOctetoBinario [4] = 0;
          tercerOctetoBinario [5] = 0;
          tercerOctetoBinario [6] = 0;
          tercerOctetoBinario [7] = 0;
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";
          tercerOctetoBinario [2] = 1;
          tercerOctetoBinario [3] = 1;
          tercerOctetoBinario [4] = 1;
          tercerOctetoBinario [5] = 1;
          tercerOctetoBinario [6] = 1;
          tercerOctetoBinario [7] = 1;
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 19) {
          var mascaraBinario = "11111111.11111111.11100000.00000000";
          var mascara = "255.255.224.0";
          var wildcardBinario = "00000000.00000000.00011111.11111111";
          var wildcard = "0.0.31.255";
          tercerOctetoBinario [3] = 0;
          tercerOctetoBinario [4] = 0;
          tercerOctetoBinario [5] = 0;
          tercerOctetoBinario [6] = 0;
          tercerOctetoBinario [7] = 0;
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";

          tercerOctetoBinario [3] = 1;
          tercerOctetoBinario [4] = 1;
          tercerOctetoBinario [5] = 1;
          tercerOctetoBinario [6] = 1;
          tercerOctetoBinario [7] = 1;
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;

   }else if (prefijo == 20) {
          var mascaraBinario = "11111111.11111111.11110000.00000000";
          var mascara = "255.255.240.0";
          var wildcardBinario = "00000000.00000000.00001111.11111111";
          var wildcard = "0.0.15.255";
          tercerOctetoBinario [4] = 0;
          tercerOctetoBinario [5] = 0;
          tercerOctetoBinario [6] = 0;
          tercerOctetoBinario [7] = 0;
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";

          tercerOctetoBinario [4] = 1;
          tercerOctetoBinario [5] = 1;
          tercerOctetoBinario [6] = 1;
          tercerOctetoBinario [7] = 1;
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 21) {
          var mascaraBinario = "11111111.11111111.11111000.00000000";
          var mascara = "255.255.248.0";
          var wildcardBinario = "00000000.00000000.00000111.11111111";
          var wildcard = "0.0.7.255";
          tercerOctetoBinario [5] = 0;
          tercerOctetoBinario [6] = 0;
          tercerOctetoBinario [7] = 0;
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";

          tercerOctetoBinario [5] = 1;
          tercerOctetoBinario [6] = 1;
          tercerOctetoBinario [7] = 1;
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 22) {
          var mascaraBinario = "11111111.11111111.11111100.00000000";
          var mascara = "255.255.252.0";
          var wildcardBinario = "00000000.00000000.00000011.11111111";
          var wildcard = "0.0.3.255";
          
          tercerOctetoBinario [6] = 0;
          tercerOctetoBinario [7] = 0;
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";


          tercerOctetoBinario [6] = 1;
          tercerOctetoBinario [7] = 1;
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 23) {
          var mascaraBinario = "11111111.11111111.11111110.00000000";
          var mascara = "255.255.254.0";
          var wildcardBinario = "00000000.00000000.00000001.11111111";
          var wildcard = "0.0.1.255";
          tercerOctetoBinario [7] = 0;
          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";

          tercerOctetoBinario [7] = 1;
          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 24) {
          var mascaraBinario = "11111111.11111111.11111111.00000000";
          var mascara = "255.255.2255.0";
          var wildcardBinario = "00000000.00000000.00000000.11111111";
          var wildcard = "0.0.0.255";

          cuartoOctetoBinario = [0,0,0,0,0,0,0,0];
          cuartoOctetoRed = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [0,0,0,0,0,0,0,1];
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;        
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + "1";

          cuartoOctetoBinario = [1,1,1,1,1,1,1,0];
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          var tercerOctetoRed = ((tercerOctetoBinario [0] * 128) + (tercerOctetoBinario [1] * 64) + (tercerOctetoBinario [2] * 32) + (tercerOctetoBinario[3] * 16) + (tercerOctetoBinario [4] * 8) +
          (tercerOctetoBinario [5] * 4) + (tercerOctetoBinario [6] * 2) + (tercerOctetoBinario [7] * 1));
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario = [1,1,1,1,1,1,1,1];
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 25) {
          var mascaraBinario = "11111111.11111111.11111111.10000000";
          var mascara = "255.255.224.128";
          var wildcardBinario = "00000000.00000000.00000000.01111111";
          var wildcard = "0.0.0.127";
          cuartoOctetoBinario [1] = 0;
          cuartoOctetoBinario [2] = 0;
          cuartoOctetoBinario [3] = 0;
          cuartoOctetoBinario [4] = 0;
          cuartoOctetoBinario [5] = 0;
          cuartoOctetoBinario [6] = 0;
          cuartoOctetoBinario [7] = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [7] = 1;
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;  
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));      
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [1] = 1;
          cuartoOctetoBinario [2] = 1;
          cuartoOctetoBinario [3] = 1;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 0;
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [1] = 1;
          cuartoOctetoBinario [2] = 1;
          cuartoOctetoBinario [3] = 1;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 1;
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 26) {
          var mascaraBinario = "11111111.11111111.11111111.11000000";
          var mascara = "255.255.255.192";
          var wildcardBinario = "00000000.00000000.00000000.00111111";
          var wildcard = "0.0.0.63";
          cuartoOctetoBinario [2] = 0;
          cuartoOctetoBinario [3] = 0;
          cuartoOctetoBinario [4] = 0;
          cuartoOctetoBinario [5] = 0;
          cuartoOctetoBinario [6] = 0;
          cuartoOctetoBinario [7] = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [7] = 1;
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;  
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));      
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [2] = 1;
          cuartoOctetoBinario [3] = 1;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 0;
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;

          cuartoOctetoBinario [2] = 1;
          cuartoOctetoBinario [3] = 1;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 1;
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 27) {
          var mascaraBinario = "11111111.11111111.11111111.11100000";
          var mascara = "255.255.255.224";
          var wildcardBinario = "00000000.00000000.00000000.00011111";
          var wildcard = "0.0.0.31";
          cuartoOctetoBinario [3] = 0;
          cuartoOctetoBinario [4] = 0;
          cuartoOctetoBinario [5] = 0;
          cuartoOctetoBinario [6] = 0;
          cuartoOctetoBinario [7] = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [7] = 1;
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;  
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));      
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [3] = 1;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 0;
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;

          cuartoOctetoBinario [3] = 1;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 1;
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 28) {
          var mascaraBinario = "11111111.11111111.11111111.11110000";
          var mascara = "255.255.255.240";
          var wildcardBinario = "00000000.00000000.00000000.00001111";
          var wildcard = "0.0.0.15";
          cuartoOctetoBinario [4] = 0;
          cuartoOctetoBinario [5] = 0;
          cuartoOctetoBinario [6] = 0;
          cuartoOctetoBinario [7] = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [7] = 1;
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;  
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));      
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 0;
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [4] = 1;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 1;
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 29) {
          var mascaraBinario = "11111111.11111111.11111111.11111000";
          var mascara = "255.255.255.248";
          var wildcardBinario = "00000000.00000000.00000000.00000111";
          var wildcard = "0.0.0.7";
          cuartoOctetoBinario [5] = 0;
          cuartoOctetoBinario [6] = 0;
          cuartoOctetoBinario [7] = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [7] = 1;
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;  
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));      
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 0;
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [5] = 1;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 1;
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 30) {
          var mascaraBinario = "11111111.11111111.11111111.11111100";
          var mascara = "255.255.224.0";
          var wildcardBinario = "00000000.00000000.00000000.00000011";
          var wildcard = "0.0.0.3";
          cuartoOctetoBinario [6] = 0;
          cuartoOctetoBinario [7] = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [7] = 1;
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;  
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));      
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 0;
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [6] = 1;
          cuartoOctetoBinario [7] = 1;
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }else if (prefijo == 31) {
          var mascaraBinario = "11111111.11111111.11111111.11111110";
          var mascara = "255.255.255.254";
          var wildcardBinario = "00000000.00000000.00000000.00000001";
          var wildcard = "0.0.0.1";
          cuartoOctetoBinario [7] = 0;
          var direccionRedBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));
          var direccionRed = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          
          cuartoOctetoBinario [7] = 1;
          var primerHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('') +"/"+ prefijo;  
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));      
          var primerHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [7] = 0;
          var ultimoHostBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');   

          
          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var ultimoHost = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
          cuartoOctetoBinario [7] = 1;
          var broadcastBinario = primerOctetoBinario.join('') +"."+ segundoOctetoBinario.join('') +"."+ tercerOctetoBinario.join('') +
          "."+ cuartoOctetoBinario.join('');

          var cuartoOctetoRed = ((cuartoOctetoBinario [0] * 128) + (cuartoOctetoBinario [1] * 64) + (cuartoOctetoBinario [2] * 32) + (cuartoOctetoBinario[3] * 16) + (cuartoOctetoBinario [4] * 8) +
          (cuartoOctetoBinario [5] * 4) + (cuartoOctetoBinario [6] * 2) + (cuartoOctetoBinario [7] * 1));

          var broadcast = primerOctetoRed +"."+ segundoOctetoRed +"."+ tercerOctetoRed +
          "." + cuartoOctetoRed;
   }


   $('#direccion').append('<h4 id = "direccionRed">' + direccionIp + '</h4>');
   $('#direccion').append(`<h5 id = "direccionRedBinario">${direccionIpBinario}</h5>`);
   $('#red').append('<h4>' + direccionRed +'</h4>');
   $('#red').append('<h5>' + direccionRedBinario +'</h5>');
   $('#mascara').append('<h4>' + mascara + '</h4');
   $('#mascara').append('<h5>' + mascaraBinario + '</h5');
   $('#primerHostValido').append('<h4>' + primerHost + '</h4');
   $('#primerHostValido').append('<h5>' + primerHostBinario + '</h5');
   $('#ultimoHostValido').append('<h4>' + ultimoHost + '</h4');
   $('#ultimoHostValido').append('<h5>' + ultimoHostBinario + '</h5');
   $('#wilcard').append('<h4>' + wildcard + '</h4');
   $('#wilcard').append('<h5>' + wildcardBinario + '</h5');
   $('#broadcast').append('<h4>' + broadcast + '</h4');
   $('#broadcast').append('<h5>' + broadcastBinario + '</h5');

   
 });   
 
})     