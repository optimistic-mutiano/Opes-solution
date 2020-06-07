    //      prime numbers 1-20 
    //    function myFunc(){
    //     var n, i=1, k=0;
    //     for (n=1; n<=20;n++)
    //     {
    //         k=0;
    //         for(i=1; i<=n; i++)
    //         {if(n%i == 0){
    //             k++;}}
    //             if(k==2)
    //             {
    //            document.write(n, " ");
    //            }
    //     }}

   // Pyramid 1
  
     function myTask(){
          document.write("<h1>1</h1>");
        var pat = 10;
        for (index = 1; index < pat; index++) {
         for ( j=1; j<= (pat-1); j++){
             document.write(" ")
         }
         for (k=1; k<=index; k++){
             document.write("* ")
         }
         document.write("<br/>")
        }
        document.write("<br/>")
   
    document.write("<h1>2</h1>");
    function myTaskTwo(){
        var pak = 10;
        for (index = pak; index >= 1; index--) {
            pak--;
         for (k=pak; k>=1; k--){
             document.write("* ");
         }
          for ( j=1; j<= pak-1; j++){
             document.write(" ")
         }
         document.write("<br/>");
        }}
        myTaskTwo();
   
    document.write("<h1>3</h1>");
    function myTaskThree(){
        var pak = 10;
        for (index = 0; index <= (pak+1); index+=2) {
            for ( j=0; j<= index; j++){
             document.write("* ");
             
         }
         for (k=2; k<= (pak+2); k++){
             document.write(" ");
         }
          
         document.write("<br/>");
        }
    }
          myTaskThree();
         document.write("<br/>");
     
  // Pyramid 4
    function myTaskFour(){
    var pad = 10;
    for (index = 0; index <= pad; index++) {
        for ( j=1; j<= index; j++){
      document.write("* ")
        }
        document.write("<br/>")
     }
        for (index = pad; index>0; index--){
            for (j=1; j<=index; j++){
                document.write("* ")
            }
       
            document.write("<br/>")

    }
   
    }
    document.write("<h1>4</h1>");
    myTaskFour();
    }

      