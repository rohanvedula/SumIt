console.log("test");
let paragraphs = document.getElementsByTagName('p');
oth = ""
for(var i = 0; i < (paragraphs.length); i += 1){
    t = paragraphs[i].textContent;
    oth = oth + " " + t;
}
console.log(oth);

var return_first = function (){
    var tmp = null;
    var mydata = {
    'text' : oth
    }

    $.ajax({
       async: false,
       global: false,
       url: "https://rohanvedula.pythonanywhere.com/",
       type: 'POST',
       dataType: 'json',
       data: JSON.stringify(mydata),
       error: function(e){console.log(e)}, 
       success:function(e){
         console.log((e['text']));
         tmp = e['text'];
        },
       headers: {
           "Content-Type":"application/json", 
           "Authorization":"key=mykey"
       }
    });
    return tmp;    
}();

/*chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, response, sendResponse){
    console.log(message.txt);
    if (message.txt === "hello"){
        console.log(oth);
    }
}*/
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log("message sent");
    sendResponse(return_first);
}