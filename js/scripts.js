$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userOneSentence = $("input#userOne").val();
    var sentenceArray = userOneSentence.split("");
    for (var index = 0; index <= sentenceArray.length; index++){
      if(sentenceArray[index] === "a" || sentenceArray[index] === "e" || sentenceArray[index] === "i" || sentenceArray[index] === "o" || sentenceArray[index] === "u" || sentenceArray[index] === "A" || sentenceArray[index] === "E" || sentenceArray[index] === "I" || sentenceArray[index] === "O" || sentenceArray[index] === "U" )
      {
        sentenceArray[index] = "-";
      }
    }
    $("p").append(sentenceArray);
  });
});
