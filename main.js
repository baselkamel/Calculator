result=document.getElementById('result')
let num=[]
function press(x){
   result.value+=x
    
   console.log(result.value) 
//    clearnum()
}

function equal(){
let input=result.value
console.log(input)
let output=eval(input)
document.getElementById('result').value=output
}

function clearnum(){
//  result.value=''
result.value=''
   
}




    