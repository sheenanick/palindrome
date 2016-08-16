//<!-- Back End -->
function palindrome(word) {
  word = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  console.log(word);
  var splitString = word.split("");
  var backWord = splitString.reverse().join("")
  if(backWord === word){
    return true;
  }else{
    return false;
  }
}

//<!-- Front End  -->
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".form-group").removeClass("has-error");
    var word = $("input#input").val();
    if (word) {
      if(palindrome(word)){
        $(".well").text("Yes this is a palindrome!");
      }else {
        $(".well").text("This is not a palindrome!");
      }
    } else {
      $(".form-group").addClass("has-error");
    }
  });
});
