

function changeColor(button) {
    if(button=="black"){
      ctx.strokeStyle =" hsl(0, 0%, 0%)"
    }
    else if(button=="white"){
      ctx.strokeStyle = "hsl(0,0%,100%)"
    }
     else if(button=='rainbow'){
     
    isRainbow = true;
     
     }else{
      isRainbow = false;
      ctx.strokeStyle = `hsl(${button},100%,50%)`
     }

   }
  const canvas = document.querySelector('#draw')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

 // ctx.strokeStyle = 'black'
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth=50;

  let isDrawing = false;
  let lastX=0;
  let lastY=0;
  let hue=0 
  let isRainbow = false;

 

  function draw(e){
    if(!isDrawing) return

    if(isRainbow){
      ctx.strokeStyle =  `hsl(${hue}, 100%, 50%)`
      hue++
    }

    console.log(e);  
    ctx.beginPath();
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    
  }

  canvas.addEventListener('mousedown',(e)=>{
    isDrawing =true;
    lastX=e.offsetX;
    lastY=e.offsetY

  })
  canvas.addEventListener('mousemove',draw)
  canvas.addEventListener('mouseup',() => {
 
    isDrawing = false})
  canvas.addEventListener('mouseout',() => isDrawing = false)

