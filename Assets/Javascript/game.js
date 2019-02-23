
    //Declaring variables
     var win = 0;
     var loss = 0;
     var guess = 9;
     var guesssofar =[];
     

     //getting all the elements from html and storing them in variable
      var wintext = document.getElementById("win-text");
      var losstext = document.getElementById("loss-text");
      var guesstext = document.getElementById("guess-text");
      var userchoicetext = document.getElementById("userchoice-text");

     
      
     // creating function for onkey event and pusing them in guesssofar array.
     
     document.onkeyup = function(event){
         var userguess = event.key;
         guesssofar.push(userguess);
        
         var yourguess = guesssofar.join(",");
            
            
         
      // creating random letter from alphabet
        var randomChar = "abcdefghijklmnopqrstuvwxyz";
         var rletter = randomChar[Math.floor(Math.random() * randomChar.length)];
          
          //checking if userguees is eual to random letter
         
                if (userguess === rletter){
              win++;
              guess = 9;
                    }
                else {
                                         
                        guess--;
   
                      }  
          //if user uses all the guess then reset the screen      
                if (guess == 0){
                    loss++;
                    guess = 9;
                    guesssofar= [];
                }
                
                //displaying in the html

                    wintext.textContent = "win:" + win;
                    losstext.textContent = "loss:" + loss;
                    guesstext.textContent = "Guess left:" + guess;
                    userchoicetext.textContent = "your guess so far: " + yourguess ;      
                }
                                                                                                 
                          
    
   