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
    let rollscounter = 0;
    let playerlevel = 1;
    let coinscounter = 0;

    let counters = {
    common: 0,
    uncommon: 0,
    rare: 0,
    epic: 0,
    mythic: 0,
    legendary: 0,
    exotic: 0,
    ultra: 0,
    megaUltra: 0
};

    const sellprices = {
        common: 1,
        uncommon: 3,
        rare: 6,
        epic: 13,
        mythic: 27,
        legendery: 55,
        exotic: 102,
        ultra: 216,
        megaultra: 440
    };
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
   if(rollscounter >=100 && commoncounter >= 60){
    playerlevel = 2;
   }
   if(rollscounter >= 1000 && legenderycounter > 5 && megaultracounter > 7 && exoticcounter > 20){
    playerlevel = 3;
   }
   /*if(rollscounter>=2500&&)*/  /*to add another buying shit... idk*/
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
