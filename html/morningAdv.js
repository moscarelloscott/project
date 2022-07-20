var story = 0; // keep story from being undefined 
var form = document.getElementById('theAdventure');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var story_telling = {
  "start": { //beginning of the story will call 1a 1b 1c
    "question": "When shopping around for a new house it is important to keep __________",
    "answers": {
      "a": "Money in your pocket",
      "b": "A good head",
      "c": "A sandwich to eat",
    }
  },
  // Money Path will call 2a 2b 2c
  "1_a": {
    "question": "Money in your pocket is nice but not the correct answer. To have a good head is to be _______",
    "answers": {
      "a": "Strong headed",
      "b": "Pretty vain",
      "c": "Smart cookie"
    }
  },

  "2_a": { //strong
    "question": "Strong headed is wrong, try again",
  },
  "2_b": { //pretty
    "question": "Pretty vain is wrong, try again",
  },
  "2_c": { //smart
    "question": "Smart cookies are very intelligent, good job you won",
  },

  // good head Path will call 2d 2e 2f

  "1_b": {
    "question": "A good head is correct, you are very smart! No if your teacher yells all the time he is __________?",
    "answers": {
      "d": "On fire",
      "e": "lighting it up",
      "f": "Hot headed",
    }
  },
  "2_d": { //on fire
    "question": "On fire is wrong.",
  },
  "2_e": { //lighting it up
    "question": "lighting it up is wrong",
  },
  "2_f": { //hot headed
    "question": "Hot headed people are easily angry, great job you win!",
    "end": "the end"
  },

  // Sandwich Path will call2g 2h 2i

  "1_c": {
    "question": "I like sandwiches but that is wrong. When you get a good grade in class you have a ________",
    "answers": {
      "g": "Good head",
      "h": "luck of the Gods",
      "i": "pokemon helping you",
    }
  },
  "2_g": { //good head
    "question": "Great answer, you are very smart, you have a good head!",
  },
  "2_h": { // luck
    "question": "Luck is wrong",
  },
  "2_i": { //pokemon
    "question": "Really, pokemon is wrong",
  },
  
};

// Continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
    console.log("Story time!"); // Console log to make sure things are working
  }
});

// Reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}

// Generate answers from story
function populateForm(story) {
  var current_story = story_telling[story];//take values from story_telling story
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }
  }

  form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
  form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning