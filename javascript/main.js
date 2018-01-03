let i = Math.floor(Math.random() * 301) - 1;
let setRadioButton = ["1stRadioButton", "2ndRadioButton", "3rdRadioButton"];
let k = Math.floor(Math.random() * 2 ) - 0;
$("#startButton").click(function() {
    $.get("https://api.myjson.com/bins/m92pn", function(data) {
        let classicCard = data;
        $("#cardEffect").append(classicCard[i].text);
        $( "<img>" ).attr( "src",classicCard[i].imgGold).appendTo("#answerDiv");
        $("#" + setRadioButton[k]).append(classicCard[i].name);
        for (let h = 0; h<3; h++) {
            if ( h !== k ) {
                $("#" + setRadioButton[h]).append(classicCard[Math.floor(Math.random() * 301) - 1].name);
            }
        }
    })
});
$("answerButton").click(function() {
    let isChecked = $("#" + setRadioButton[k]).attr('checked');;
    if (isChecked !== fail) {
        alert("Congrats!!!! You choose the right card!!!!");
    } else {
        alert("Don't be sad, let partice with another card!!!!");
    }
});
