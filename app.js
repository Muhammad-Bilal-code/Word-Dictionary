
var myTeam = ["Bilal","Hussain","Faizan","Arbaz","Uzair"]
var counter = 0;
function getValue(val){
    var all_Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    // console.log(all_Letters)
    var elmTd = document.getElementsByTagName("td"); 


    if(val === "put-random-alphabets"){

        for(i=0;i<=elmTd.length-5;i++){
            var randomNum = Math.floor(Math.random()*25)
            elmTd[i].innerHTML = randomNum;
            for(j=0;j<=all_Letters.length-1;j++){
                if(randomNum === j){
                    elmTd[i].innerHTML = all_Letters[j];
    
                }
            }
        }
    }
    else if(val === "minus"){
        var resElm = document.getElementById("result");
        var res = document.getElementById("result").innerText;
        // var minusRes = res.substring(0,res.length-1)
        var minusRes = res.slice(0,res.length-1)

        /******Minus Work with Splice Start******/
        // var resArr = [];
        // for(i=0;i<=res.length-1;i++){
        //     resArr.push(res[i]);
        // }
        // console.log(resArr)
        // var minusRes = resArr.splice(resArr.length-1,1)
        // console.log(resArr)
        
        // var resStr;
        // for(var j=0;j<=resArr.length-1;j++){
            //     console.log(resArr[j] + "")
            //     resStr = resArr[j] + ""
            // }
            // console.log(resStr)
            
            // var resStr = resArr.join("");
        // console.log(resStr)
        // resElm.innerText = resStr;
        
        /******Minus Work with Splice End******/
        
        resElm.innerText = minusRes;

    }
    else if(val === "clearAll"){
        document.getElementById("result").innerText = ""
    }
    else if(val === "submit"){
        // alert("Hi")
        var res = document.getElementById("result").innerText;
        console.log(res)
        var resUprCase = res.charAt(0).toUpperCase() + res.slice(1)
        console.log(resUprCase)
        for(i=0;i<=myTeam.length-1;i++){
            if(myTeam[i] === resUprCase){
                alert(resUprCase)
                break;
            }
            else{
                alert("Wrong Name")
                break;
            }
        }
    }
    else if(val === "caps-on"){
        // alert(val)
        for(i=0;i<=elmTd.length-5;i++){
            elmTd[i].innerText = elmTd[i].innerText.toUpperCase()
        }
    }
    else if(val === "caps-off"){
        for(i=0;i<=elmTd.length-5;i++){
            elmTd[i].innerText = elmTd[i].innerText.toLowerCase()
        }
        // alert(val)
    }
    else{

        if(counter === 0){
            document.getElementById("result").innerHTML = ""
            var alpha = document.getElementById(val);
            document.getElementById("result").innerHTML += alpha.innerText
            counter++;
        }
        else{
            var alpha = document.getElementById(val);
            document.getElementById("result").innerHTML += alpha.innerText
        }
    }
}

