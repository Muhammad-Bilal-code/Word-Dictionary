function arrangeRandomly(){
    var all_Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    console.log(all_Letters)
    var elmTd = document.getElementsByTagName("td"); 

    for(i=0;i<=elmTd.length-2;i++){
        var randomNum = Math.floor(Math.random()*25)
        elmTd[i].innerHTML = randomNum;
        for(j=0;j<=all_Letters.length-1;j++){
            if(randomNum === j){
                elmTd[i].innerHTML = all_Letters[j];

            }
        }
    }
}