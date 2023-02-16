
//step 1 - Text Area Input

const textAreaInput = document.getElementById('text-area-input');
let textAreaValue = textAreaInput.value;

textAreaInput.addEventListener('keyup',function(){
    textAreaValue = textAreaInput.value;

})



// step 2 = add font style section

// Bold style
const boldStyle = document.getElementById('bold-Style');
let bold = false;
boldStyle.addEventListener('click', function(){
    bold = !bold;
    if(bold===true)
    textAreaInput.style.fontWeight='bold';
    else
    textAreaInput.style.fontWeight='400';
});

// Italic Style
const italicStyle = document.getElementById('italic-style');
let italic = false;
italicStyle.addEventListener('click', function(){
    italic = !italic;
    if(italic===true)
    textAreaInput.style.fontStyle='italic';
    else
    textAreaInput.style.fontStyle='';
});

// Underline Style
const UnderlineStyle = document.getElementById('underline-style');
let underline = false;
UnderlineStyle.addEventListener('click', function(){
    underline = !underline;
    if(underline===true)
    textAreaInput.style.textDecoration='underline';
    else
    textAreaInput.style.textDecoration='';
});



// step 3 : text alignment

// text align left
const textAlignLeft = document.getElementById('text-left');
textAlignLeft.addEventListener('click', function(){

    textAreaInput.style.textAlign='left';

});

// text align center
const textAlignCenter = document.getElementById('text-center');
textAlignCenter.addEventListener('click', function(){

    textAreaInput.style.textAlign='center';

});

// text align right
const textAlignRight = document.getElementById('text-right');
textAlignRight.addEventListener('click', function(){

    textAreaInput.style.textAlign='right';

});

// text align justify
const textAlignJustify = document.getElementById('text-justify');
textAlignJustify.addEventListener('click', function(){

    textAreaInput.style.textAlign='justify';

});


// step 4 : text size and Color section

// change text color
const textColor = document.getElementById('text-color');

textColor.addEventListener('input', function(){
    const color = textColor.value;

    textAreaInput.style.color=color;
   
});



// change text size
const textSize = document.getElementById('text-size');


textSize.addEventListener('input', function(){
    
   const size = textSize.value;

    if(size>=12){
        textAreaInput.style.fontSize=size+'px';
    }
    else{
        console.log('minimum 12 text size')
    }
});



// text transform
const textTransform = document.getElementById('text-transform');
textTransform.addEventListener('input', function(){
    
    const transform = textTransform.value;
    textAreaInput.style.textTransform= transform;
 
 });