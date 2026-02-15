    commoncounter = 0;
    uncommoncounter = 0;
    rarecounter = 0;
    epiccounter = 0;
    mythiccounter = 0;
    legenderycounter = 0;
    exoticcounter = 0;
    ultracounter = 0;
    megaultracounter = 0;
    function generate() {
        let randomNumber = Math.floor(Math.random() * 100000) + 1;
    if(randomNumber>=1 && randomNumber<=50000){
        commoncounter++;
        document.getElementById("result").innerText = "common" + "\n"; 
    }
   if(randomNumber>50000 && randomNumber<=75000){
    uncommoncounter++;
    document.getElementById("result").innerText = "uncommon" + "\n";
   }
   if(randomNumber>75000 && randomNumber<=87500){
    rarecounter++;
    document.getElementById("result").innerText = "rare" + "\n";
   }
   if(randomNumber>87500 && randomNumber<=93750){
    epiccounter++;
    document.getElementById("result").innerText = "epic" + "\n";
   }
   if(randomNumber>93750 && randomNumber<=96875){
    mythiccounter++;
    document.getElementById("result").innerText = "mythic" + "\n";
   }
   if(randomNumber>96875 && randomNumber<=98000){
    legenderycounter++;
    document.getElementById("result").innerText = "legendery" + "\n";
   }
   if(randomNumber>98000 && randomNumber<=99000){
    exoticcounter++;
    document.getElementById("result").innerText = "exotic" + "\n";
   }
   if(randomNumber>99000 && randomNumber<=99750){
    ultracounter++;
    document.getElementById("result").innerText = "ultra" + "\n";
   }
   if(randomNumber>99750 && randomNumber<=100000){
    megaultracounter++;
    document.getElementById("result").innerText = "mega ultra"+"\n";
   }
   document.getElementById("result").innerText += "common: " + commoncounter+"\n"
   +"uncommon: " + uncommoncounter+"\n"
   +"rare: " + rarecounter+"\n"
   +"epic: " + epiccounter+"\n"
   +"mythic: " + mythiccounter+"\n"
   +"legendery: " + legenderycounter+"\n"
   +"exotic: " + exoticcounter+"\n"
   +"ultra: " + ultracounter+"\n"
   +"mega ultra" + megaultracounter+"\n";
}
