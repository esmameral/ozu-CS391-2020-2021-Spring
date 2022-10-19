
function validateForm(){
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    if(number1==null||number1==""){
        alert("Enter first number, please!")
        return false;
    }
    calculate();
    return true;
}

function calculate(){
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    var op=document.getElementById("operations").value;
    var result=doCalculation(number1,number2,op);
    if(localStorage){
        localStorage.setItem("result",result);
    }
    
    
    //var resultAsHtml="<b>"+result+"</b>";
    //document.getElementById("result").innerHTML=result;
    
}

var doCalculation=function(n1,n2,op){
    var result;
    if(op=="sum"){
        result=n1+n2;
    }else if(op=="sub"){
        result=n1-n2;
    }else if (op=="mul"){
        result=n1*n2;
    }else {
        result=n1/n2;
    }
    return result;  
}

