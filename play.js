canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var tank1_width=80;
var tank1_height=100;
var tank2_width=80;
var tank2_height=100;
var tank1x=520;
var tank1y=410;
var tank2x=100;
var tank2y=0;



var tank1bulletx = tank1x;
var tank1bullety = tank1y;


var tank2bulletx = tank2x;
var tank2bullety = tank2y;

var tank1_img="tank1.png";
var tank2_img="tank2.png";
var background_img="land_brown-tagtile.jpg";


var tank1bullet_img = "tank1bullet.png";
var tank2bullet_img = "tank2bullet.png";

function add(){
    backgroundimgtag= new Image();
    backgroundimgtag.onload= uploadbackground;
    backgroundimgtag.src= background_img;


tank1imgtag= new Image();
tank1imgtag.onload= uploadtank1;
tank1imgtag.src= tank1_img;


tank1bulletimgtag= new Image();
tank1bulletimgtag.onload= uploadtank1bullet;
tank1bulletimgtag.src= tank1bullet_img;



tank2bulletimgtag= new Image();
tank2bulletimgtag.onload= uploadtank2bullet;
tank2bulletimgtag.src= tank2bullet_img;



tank2imgtag= new Image();
tank2imgtag.onload= uploadtank2;
tank2imgtag.src= tank2_img;
}

function uploadtank1(){
ctx.drawImage(tank1imgtag,tank1x,tank1y,tank1_width,tank1_height);
}

function uploadtank1bullet(){
    ctx.drawImage(tank1bulletimgtag,tank1bulletx,tank1bullety,40,40);
    }

    function uploadtank2bullet(){
        ctx.drawImage(tank2bulletimgtag,tank2bulletx,tank2bullety,40,40);
        }
    



function uploadtank2(){
    ctx.drawImage(tank2imgtag,tank2x,tank2y,tank2_width,tank2_height);
    }

    function uploadbackground(){
        ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
        }

window.addEventListener("keydown" , my_keydown1);

function my_keydown1(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37')
    {
        tank1left()
        console.log("left");
    }

    if(keyPressed == '39')
    {
        tank1right()
        console.log("right");
    }

    if(keyPressed == '8')
    {
        tank1shoot()
        console.log("tank 1 shooting");
    }
}



        

    
        function tank1right(){
            if( tank1x < 1330){
                tank1x=tank1x+10;
                tank1bulletx=tank1bulletx+10;
                console.log(" When right arrow pressed , The tank1x  = "+tank1x+",The tank1y = "+tank1y);
                uploadbackground();
                uploadtank1();
                uploadtank2();
                uploadtank1bullet();
                uploadtank2bullet();

            }
            
            }
    
            function tank1left(){
                if( tank1x > 0){
                    tank1x=tank1x-10;
                    tank1bulletx=tank1bulletx-10;
                    console.log(" When left arrow pressed , The tank1x = "+tank1x+",The tank1y = "+tank1y);
                    uploadbackground();
                    uploadtank1();
                    uploadtank2();
                    uploadtank1bullet();
                    uploadtank2bullet();
                }
                
                }



                function tank1shoot(){
                    
                        while (tank1bullety > 0) {
                        tank1bullety=tank1bullety-0.1;    
                        }

                     

                  if (tank1bulletx == tank2x) {
                    document.getElementById("music").play();
                    console.log("player A wins");
                    //window.location="tank2.html";
                    console.log("player A wins");
                    document.getElementById("game_status").innerHTML="Player A wins";
                    document.getElementById("myCanvas").hidden=true;
                  }

                
                  uploadbackground();
                  uploadtank1();
                  uploadtank2();
                  uploadtank1bullet();
                  uploadtank2bullet();
                  tank1bulletx=tank1x;
                  tank1bullety=tank1y;     
                          
                          }
                        
                 
                    
                    
                  










window.addEventListener("keydown" , my_keydown2);

function my_keydown2(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);


if(keyPressed == '65')
{
    tank2left();
    console.log("left");
}

if(keyPressed == '68')
{
    tank2right();
    console.log("right");
}

if(keyPressed == '83')
{
    tank2shoot();
    console.log("tank2 shooting");
}
}

    
  
        
      
    
        function tank2right(){
            if( tank2x < 1330){
                tank2x=tank2x+10;
                tank2bulletx=tank2bulletx+10;
                console.log(" When right arrow pressed , The tank2x  = "+tank2x+",The tank2y = "+tank2y);
                uploadbackground();
                uploadtank2();
                uploadtank1();
                uploadtank1bullet();
                uploadtank2bullet();
            }
            
            }
    
            function tank2left(){
                if( tank2x > 0){
                    tank2x=tank2x-10;
                    tank2bulletx=tank2bulletx-10;
                    console.log(" When left arrow pressed , The tank2x = "+tank2x+",The tank2y = "+tank2y);
                    uploadbackground();
                    uploadtank2();
                    uploadtank1();
                    uploadtank1bullet();
                    uploadtank2bullet();
                }
                
                }


                function tank2shoot(){
                    
                    while (tank2bullety < 450) {
                    tank2bullety=tank2bullety+0.1;    
                    }
                    
                    if (tank2bulletx == tank1x) {
                      
                        document.getElementById("music").play();
                        console.log("player B wins");
                        //window.location="tank2.html";
                        console.log("player B wins");
                        document.getElementById("game_status").innerHTML="Player B wins";
                        document.getElementById("myCanvas").hidden=true;
                       doc
                        tank1x=0;
                        tank1y=40;
                        tank2x=100;
                        tank2y=50;
                       }
     


                    console.log(" When left arrow pressed , The tank2x = "+tank2x+",The tank2y = "+tank2y);
                    uploadbackground();
                    uploadtank2bullet();
                    uploadtank1();
                    uploadtank2();
                    uploadtank1bullet();
                  
                    tank2bulletx=tank2x;
                    tank2bullety=tank2y;
                }

         
            
             