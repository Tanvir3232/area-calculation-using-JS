function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
 
    const inputFieldValue  = parseFloat(inputFieldString);
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

     const li      = document.createElement('li');
     li.classList.add('my-2','flex','justify-between');
     const liValue = output.appendChild(li);
     const btn = document.createElement("BUTTON");
     const span = document.createElement("span");
     btn.innerHTML= "Convert m<sup>2</sup>";
     btn.classList.add('bg-cyan-500', 'text-lg', 'py-2','px-4','rounded-xl');
     const areaIs  = shapeName;
     liValue.innerText = areaIs;
     span.innerHTML = areaValue + "cm<sup>2</sup>";
    
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