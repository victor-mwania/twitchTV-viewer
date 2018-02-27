$(document).ready(function () { 
    var regularStream=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var output=[];
    for(var i=0; i<regularStream.length;i++){
    var url='https://api.twitch.tv/kraken/users/'+regularStream[i]+'?client_id=wm696nk23tnizjms0lxp737a4h900v';
    $.ajax({
        url,
        "Client_ID":"wm696nk23tnizjms0lxp737a4h900v",
        dataType: "jsonp",
        jsonp:'callback',
        success: function (response) {
           // console.log(response);
            output+=response;
        }
    });
  
}
console.log(output);
});