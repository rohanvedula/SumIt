document.getElementById('btn').addEventListener('click', hello);

function hello() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(response){
            if(typeof response === 'undefined'){
                document.getElementById('output1').innerHTML = "Please reload the page!"
            }
            else{
                document.getElementById('output1').innerHTML=response;
            }
        });
    });
}

setTimeout(colChange, 500)
setTimeout(change, 700)

function colChange(){
        /*document.body.style.background = "white";*/
        $("#test").toggleClass('aft');
        $("#div1").fadeToggle(200);
}

$(document).ready(function(){
    $("#output1").hide();
    $("#logo").hide();
    $("#hp").hide();
    /*$("#logo1").hide();
    $("#hp1").hide();*/
});

function change(){
    $(document).ready(function(){
        $("#logo").show();
        $("#hp").show();
        $("#output1").show();
        /*$("#logo1").show();
        $("#hp1").show();*/
    }); 
}