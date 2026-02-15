    setTimeout(function() {
        document.getElementById("message").style.display = "none";
    }, 7500); // 5000 milliseconds = 5 seconds

const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    
    button.disabled = true; // start cooldown
    
    generate();

    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    
    
    setTimeout(function() {
        button.disabled = false; // end cooldown after 5s
    }, 750);
});

    commoncounter = 0;
    uncommoncounter = 0;
    rarecounter = 0;
    epiccounter = 0;
    mythiccounter = 0;
    legenderycounter = 0;
    exoticcounter = 0;
    ultracounter = 0;
    megaultracounter = 0;
    rollscounter = 0;
    playerlevel = 1;
    function generate() {
        let randomNumber = Math.floor(Math.random() * 100000) + 1;
        rollscounter++;
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
   if(rollscounter >=100 && rollscounter < 1000 && commoncounter >= 60){
    playerlevel = 2;
   }
   document.getElementById("result").innerText += "common: " + commoncounter+"\n"
   +"uncommon: " + uncommoncounter+"\n"
   +"rare: " + rarecounter+"\n"
   +"epic: " + epiccounter+"\n"
   +"mythic: " + mythiccounter+"\n"
   +"legendery: " + legenderycounter+"\n"
   +"exotic: " + exoticcounter+"\n"
   +"ultra: " + ultracounter+"\n"
   +"mega ultra: " + megaultracounter+"\n"
   +"total rolls: " + rollscounter+"\n"
   +"level: " + playerlevel+"\n";
   
}
