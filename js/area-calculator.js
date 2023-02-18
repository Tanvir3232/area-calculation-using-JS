function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
 
    const inputFieldValue  = parseFloat(inputFieldString);
    inputField.value       = '';
    return inputFieldValue;
}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
 
    const elementValue  = parseFloat(elementString);
    return elementValue;
}
function area(a,b){
    return a*b;
}
function setOutput(elementId,shapeName,areaValue){
     const output  = document.getElementById(elementId);
     let areaValueFixed;
     if(Number.isInteger(areaValue)){
        areaValueFixed = areaValue;
     }else{
        areaValueFixed = areaValue.toFixed(1);
     }
     const li      = document.createElement('li');
     li.classList.add('my-2','flex','justify-between','items-center','text-lg');
     const liValue = output.appendChild(li);
     const btn = document.createElement("BUTTON");
     const span = document.createElement("span");
     btn.innerHTML= "Convert m<sup>2</sup>";
     btn.classList.add('bg-cyan-500',  'p-2','rounded-xl');
     const areaIs  = shapeName;
     liValue.innerText = areaIs;
     span.innerHTML = areaValueFixed + "cm<sup>2</sup>";
    
     liValue.appendChild(span);
     liValue.appendChild(btn);
    
}
document.getElementById('calculate-triangle').addEventListener('click',function(){
     const base   = getInputFieldById('base');
     const height = getInputFieldById('height');

     const areaTriangle = area(base,height)*0.5;
     setOutput('output','Triangle',areaTriangle);
});
document.getElementById('calculate-rectangle').addEventListener('click',function(){
    const width   = getInputFieldById('width');
    const length  = getInputFieldById('length');

    const areaRectangle = area(width,length);
    setOutput('output','Rectangle',areaRectangle);
});

document.getElementById('calculate-parallelogram').addEventListener('click',function(){
    const base   = getTextElementById('parallelogram-base');
    const height = getTextElementById('parallelogram-height');
    const areaParallelogram = area(base,height);
    setOutput('output','Perallelogram',areaParallelogram);

});
document.getElementById('calculate-rhombus').addEventListener('click',function(){
    const d1   = getTextElementById('diagonal-1');
    const d2 = getTextElementById('diagonal-2');
    const areaRhombus = area(d1,d2)*0.5;
    setOutput('output','Rhombus',areaRhombus);

});
document.getElementById('calculate-pentagon').addEventListener('click',function(){
    const p   = getTextElementById('p');
    const b = getTextElementById('b');
    const areaPentagon = area(p,b)*0.5;
    setOutput('output','Pentagon',areaPentagon);

});
document.getElementById('calculate-ellipse').addEventListener('click',function(){
    const a   = getTextElementById('semi-major-axis');
    const b = getTextElementById('semi-minor-axis');
    const areaEllipse = area(a,b)*3.14;
    setOutput('output','Ellipse',areaEllipse);

});

// blog section 
document.getElementById('blog').addEventListener('click',function(){
    window.location.href = 'blog.html';
});

// Background color generator
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  
  document.getElementById('triangle').addEventListener('mouseenter', function(event) {
       let element = event.target;
       element.style.backgroundColor = randomColor();
  });
  document.getElementById('rectangle').addEventListener('mouseenter', function(event) {
       let element = event.target;
       element.style.backgroundColor = randomColor();
  });
  document.getElementById('parallelogram').addEventListener('mouseenter', function(event) {
       let element = event.target;
       element.style.backgroundColor = randomColor();
  });
  document.getElementById('rhombus').addEventListener('mouseenter', function(event) {
       let element = event.target;
       element.style.backgroundColor = randomColor();
  });
  document.getElementById('pentagon').addEventListener('mouseenter', function(event) {
       let element = event.target;
       element.style.backgroundColor = randomColor();
  });
  document.getElementById('ellipse').addEventListener('mouseenter', function(event) {
    let element = event.target;
    element.style.backgroundColor = randomColor();
  });