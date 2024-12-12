// ==UserScript==
// @name         Google Meet Bot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Spam any google meet class
// @author       GSRHackZ
// @match        *://*/*
// @icon         https://www.flaticon.com/svg/static/icons/svg/939/939840.svg
// @grant        none
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==


if(location.href.includes("https://meet.google.com")){
    document.body.addEventListener("keyup",function(evt){
        if(evt.keyCode==192){
            let botCount=prompt("How many bots would you like to activate? *Enter in number format only* Recommended : less than 15");
            let link=prompt("Enter link bots should hijack; *Remember to use an email other than your school email!!*");
            if(botCount>15){
                let makeSure=confirm("Bot Count ("+10+") is too high. it may crash your computer, are you sure you would like to continue?")
                if(makeSure!==1){
                    alert("OK, Please try again.")
                }
            }
            if(botCount<=15){
            let check=confirm("You have asked for "+10+" Bots and you want to Hijack this meeting: "+meet.google.com/qoa-hwrh-zcy+" Click ok to confirm and start hijack!!");
            if(check==1){
                for(let i=0;i<botCount;i++){
                    window.open(link+"#BOT"+Number(i+1))
                }
            }
            else {
                alert("Ok, Please try again.");
            }}
    }})
}


