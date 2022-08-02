class Bubble_sort{
  constructor(){
     this.iterator1 = 0;
    this.iterator2 = 0;
    this.finished = false;
    this.numOfCards = 36;
    this.action = 0;
    this.fn_name = "";
    this.card;
    this.comparisons = 0;
    this.swaps = 0;
    this.operation = "";
    this.interval = 0;
    this.num = [];
    this.copy_array = [];
    this.copy_reset = [];
    this.flag = 0;
    this.counter = 0;
    this.answer1;
    this.answer2;
    this.rand_num;
  };
};
let bubble_artefact = new Bubble_sort();

function main_functions()
{ 
  randomise();
  start_sort();
  makeQuestion();
  handlers();
};
document.body.onload = function() {main_functions();}
  function handlers(){
  document.getElementById("next").onclick = function() {next_step();};
  document.getElementById("reset").onclick = function() {clickedReset();};
  document.getElementById("submit").onclick = function() {checkAnswer();};
  document.getElementById("new_question").onclick = function() {reload();};
  };
function clickedReset()
{ 
  for (var i = 0 ; i < bubble_artefact.numOfCards ; i++ )
    bubble_artefact.num[i] = bubble_artefact.copy_reset[i];
  bubble_artefact.card = document.querySelectorAll('.card');
  for(var i = 0 ; i < bubble_artefact.numOfCards ; i++ )
  {
    bubble_artefact.card[i].innerHTML = bubble_artefact.num[i];
    bubble_artefact.card[i].style.fontStyle = "normal";
    bubble_artefact.card[i].style.color = "white";
  }
  bubble_artefact.counter = 0;
  bubble_artefact.swaps = 0;
  bubble_artefact.minimum = 0;
  document.getElementById("ins").innerHTML = "";
  document.getElementById("textbox").value = "";
  document.getElementById("textbox1").value = "";
  start_sort();
};


function randomise()
{
  var classToFill = document.getElementById("cards");
    for (var i = 0; i < bubble_artefact.numOfCards; i++) {
          bubble_artefact.num[i] = Math.floor(Math.random() * 90 + 10);
          bubble_artefact.copy_array[i] = bubble_artefact.num[i];
          bubble_artefact.copy_reset[i] = bubble_artefact.num[i];
          var temp = document.createElement("div");
          temp.className = "card";
          temp.innerHTML = bubble_artefact.num[i];
          temp.style.fontStyle = "normal";
          temp.style.color = "white";
          classToFill.appendChild(temp);
          if((i+1)%12 == 0)classToFill.appendChild(document.createElement("br"));
      }
  bubble_artefact.flag=0;
};


function compare(i, j)
{
  bubble_artefact.comparisons++;
  for(var n = 0; n < bubble_artefact.numOfCards; n++)
  {
    if(n == i || n == j)
    {
      if(bubble_artefact.card[n].style.backgroundColor != "grey" || !bubble_artefact.flag)
       bubble_artefact.card[n].style.backgroundColor = "#a4c652";
    }else
    { 
      if(bubble_artefact.card[n].style.backgroundColor != "grey" && !bubble_artefact.flag)
      bubble_artefact.card[n].style.backgroundColor = "#288ec8"; 
    }
  }
  if(eval(bubble_artefact.card[j].innerHTML) < eval(bubble_artefact.card[i].innerHTML))
    return true;
  else
    return false;
};


function swap(i, j)
{
  bubble_artefact.swaps++;
  var temp;
  temp = eval(bubble_artefact.card[j].innerHTML);
  bubble_artefact.card[j].innerHTML = eval(bubble_artefact.card[i].innerHTML);
  bubble_artefact.card[i].innerHTML = temp;
};

function opti_bubble()
{
  if(bubble_artefact.iterator1>=bubble_artefact.end && !bubble_artefact.finished){
    clearInterval(bubble_artefact.interval); bubble_artefact.interval = 0;
    bubble_artefact.counter++;
    document.getElementById("next").style.backgroundColor = "#288ec8";
    document.getElementById("next").disabled = false;
    document.getElementById("ins").innerHTML = "Iterations completed: " + bubble_artefact.counter;
  }

  if(bubble_artefact.iterator1 < bubble_artefact.end)
  {
    bubble_artefact.iterator1++;
    bubble_artefact.iterator2++;
  }
  else
  {
    bubble_artefact.iterator1 = 0;
    bubble_artefact.iterator2 = 1;  
  }
};

function next_step()
{
  document.getElementById("ins").innerHTML = "Iterations completed: " + bubble_artefact.counter;
  if(bubble_artefact.interval == 0)
  {
    bubble_artefact.interval = setInterval(next_step, 110);
    document.getElementById("next").style.backgroundColor = "grey";
    document.getElementById("next").disabled = true;
  }
  if(bubble_artefact.action == 1)
  {
    if(compare(bubble_artefact.iterator1, bubble_artefact.iterator2))
        bubble_artefact.action = -1;
    else
        window[bubble_artefact.fn_name]();
  }
  else
  {
    bubble_artefact.action = 1;
    if(bubble_artefact.fn_name == "opti_bubble")
        swap(bubble_artefact.iterator1, bubble_artefact.iterator2);
    bubble_artefact.finished = false;
    window[bubble_artefact.fn_name]();
  }
};



function makeQuestion(){
  bubble_artefact.rand_num = Math.floor(Math.random() * 6) + 2;
  if(bubble_artefact.rand_num==4 || bubble_artefact.rand_num==5 || bubble_artefact.rand_num==6 || bubble_artefact.rand_num==7 || bubble_artefact.rand_num==8 || bubble_artefact.rand_num==9)
  document.getElementById("question").innerHTML = "<b>Question :</b> Find the difference between the largest and the "+bubble_artefact.rand_num+"th largest elements from the following array. Report the difference and the number of iterations you need to run in order to <b>determine</b> the "+bubble_artefact.rand_num+"th largest element required to get to the answer.<br>(Hint: Remember the observations we made for each iteration)<br><br><br>";
  if(bubble_artefact.rand_num==2)
  document.getElementById("question").innerHTML = "<b>Question :</b>Find the difference between the largest and the "+bubble_artefact.rand_num+"nd largest elements from the following array. Report the difference and the number of iterations you need to run in order to <b>determine</b> the "+bubble_artefact.rand_num+"th largest element required to get to the answer.<br>(Hint: Remember the observations we made for each iteration)<br><br><br>";
  if(bubble_artefact.rand_num==3)
  document.getElementById("question").innerHTML = "<b>Question :</b>Find the difference between the largest and the "+bubble_artefact.rand_num+"rd largest elements from the following array. Report the difference and the number of iterations you need to run in order to <b>determine</b> the "+bubble_artefact.rand_num+"th largest element required to get to the answer.<br>(Hint: Remember the observations we made for each iteration).<br><br><br>";
  bubble_artefact.copy_array.sort();
  bubble_artefact.answer1 = bubble_artefact.copy_array[bubble_artefact.numOfCards-1] - bubble_artefact.copy_array[bubble_artefact.numOfCards-bubble_artefact.rand_num];
  bubble_artefact.answer2 = bubble_artefact.rand_num;
};

function checkAnswer(){
  var text1;
    try{
    text1 = document.getElementById("textbox").value;
    } catch(err){
      console.log("There is some problem with text input: ", err);
    }
  var text2;
    try{
      text2 = document.getElementById("textbox1").value;
    } catch(err){
      console.log("There is some problem with text input: ", err);
    }
  if(text1 == "" || text2 == "")
    document.getElementById("ins").innerHTML = "Please enter valid values";
  else if(text1 > 100 || text2 > 100)
    document.getElementById("ins").innerHTML = "Please enter valid values";
  else if(text1 == bubble_artefact.answer1 && text2 == bubble_artefact.answer2){
    document.getElementById("ins").innerHTML = "CORRECT ANSWER";
    document.getElementById("next").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("reset").disabled = true;

    document.getElementById("next").style.backgroundColor = "grey";
    document.getElementById("submit").style.backgroundColor = "grey";
    document.getElementById("reset").style.backgroundColor = "grey";
  }
  else{
    document.getElementById("ins").innerHTML = "WRONG ANSWER";
    document.getElementById("next").disabled = true;
    document.getElementById("next").style.backgroundColor = "grey";
  }
};


function start_sort()
{
  if(bubble_artefact.interval != 0) { clearInterval(bubble_artefact.interval); bubble_artefact.interval = 0; }
  document.getElementById("comment-box-smaller").style.visibility = "visible";
  bubble_artefact.card = document.querySelectorAll('.card');
  bubble_artefact.action = 1;
  bubble_artefact.finished = true;
  bubble_artefact.comparisons = 0;
  bubble_artefact.swaps = 0;
  bubble_artefact.fn_name = "opti_bubble";
 
  bubble_artefact.iterator1 = 0;
  bubble_artefact.iterator2 = 1;
  bubble_artefact.end = bubble_artefact.numOfCards-2;
  bubble_artefact.operation = "Swap";
  next_step();

  document.getElementById("next").onclick = function() { next_step(); };
  
  if(bubble_artefact.interval == 0)
    bubble_artefact.interval = setInterval(next_step, 110);
  else
  {
    clearInterval(bubble_artefact.interval);
    bubble_artefact.interval = 0;
    document.getElementById("next").style.backgroundColor = "#288ec8";
    document.getElementById("next").disabled = false;
  }
};

function reload(){
  location.reload(true);
};
