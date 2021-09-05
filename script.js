$(document).ready(function () {
    var data={
        round: 1,
        energy: 3
    }
    $("#remove-one-energy").click(function(){
        data.energy--;
        data.energy=$.fn.clamp(data.energy);
        $.fn.updateData()
    })
    $("#add-one-energy").click(function(){
        data.energy++;
        data.energy=$.fn.clamp(data.energy);
        $.fn.updateData()
    })
    $("#next-round").click(function(){
        data.round++;
        data.energy+=2
        data.energy=$.fn.clamp(data.energy);
        $.fn.updateData()
    })
    $("#new-arena").click(function(){
        data.round=1;
        data.energy=3;
        $.fn.updateData()
    })
    $.fn.clamp = function(number) {
        return Math.min(Math.max(number, 0), 10);
    };
    $.fn.updateData = function() {
        $("#round").text("ROUND #"+data.round);
        $("#energy").text(data.energy+"/10");
    };
});
