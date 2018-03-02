$(document).ready(function () { 
    var regularStream=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var output=[];
    // channel ids
    for(var i=0; i<regularStream.length;i++){
    var url='https://api.twitch.tv/kraken/users/'+regularStream[i]+'?client_id=wm696nk23tnizjms0lxp737a4h900v';
    $.ajax({
        url,
        "Client_ID":"wm696nk23tnizjms0lxp737a4h900v",
        dataType: "jsonp",
        jsonp:'callback',
        success: function (response) {
            output.push(response);          
        }
    });
}
console.log(output);
// check if channel is online or offline by using ids from output array
var ids=[];
for(var j=0; j<output.length;j++){
ids +=output[j];
}
console.log(ids);
});