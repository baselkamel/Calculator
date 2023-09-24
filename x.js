result=document.getElementById('result')
let num=[]
function press(x){
   result.value+=x
   console.log(result.value)
}

function equall() {
let input =result.value
let output=eval(input)
document.getElementById('result').value=output
}