class Bubble_sort{
  constructor(){
    this.iterator1 = 0;
    this.iterator2 = 0;
    this.finished = false;
    this.numOfCards = 8;
    this.prev = -1;
    this.action = 0;
    this.fn_name = "";
    this.card;
    this.comparisons = 0;
    this.swaps = 0;
    this.operation = "";
    this.interval = 0;
    this.num = [];
    this.flag = 0;
    this.randomcounter = 2;
  };
};
let bubble_artefact = new Bubble_sort();

function main_functions()
{ 
  make_cards();
  randomise();
  setcounter();
  handlers();
};
document.body.onload = function() {main_functions();}
  function handlers(){
  document.getElementById("next").onclick = function() {start_sort();};
  document.getElementById("interval").onchange = function() {change_interval();};
  document.getElementById("interval").oninput = function() {change_interval();};
  document.getElementById("reset").onclick = function() {reload();};
  document.getElementById("pause").onclick = function() {pause();};
  document.getElementById("order").onchange = function() {change(); randomise();};
  };

function make_cards(){
  var classToFill = document.getElementById("cards");
    for(var i = 0; i<bubble_artefact.numOfCards; i++){
      var temp = document.createElement("div");
      temp.className = "card";
      classToFill.appendChild(temp);
    }
}

function randomise()
{
  bubble_artefact.swaps = 0;
  bubble_artefact.comparisons = 0;
  bubble_artefact.finished = false;
  bubble_artefact.prev = -1;
  bubble_artefact.action = 0;
  bubble_artefact.iterator1 = 0;
  bubble_artefact.iterator2 = 0;
  if(bubble_artefact.randomcounter == 2){
      for (var i = 0; i < bubble_artefact.numOfCards; i++)
        bubble_artefact.num[i] = Math.floor(Math.random() * 90 + 10);
    }else
    if(bubble_artefact.randomcounter == 0)
    {
      var ran = Math.floor(Math.random() * 90 + 10);
      bubble_artefact.num[0] = ran;
      for (var i = 1; i < bubble_artefact.numOfCards; i++)
        bubble_artefact.num[i] = bubble_artefact.num[i-1] + Math.floor(Math.random() * 90 + 10);
    }else
    if(bubble_artefact.randomcounter == 1)
    {
      var ran = Math.floor(Math.random() * 400 + 400);
      bubble_artefact.num[0] = ran;
      for (var i = 1; i < bubble_artefact.numOfCards; i++)
        bubble_artefact.num[i] = bubble_artefact.num[i-1] - Math.floor(Math.random() * 90 + 10);
    }
    bubble_artefact.card = document.querySelectorAll('.card');
  for(var i=0;i<bubble_artefact.numOfCards;i++)
  {
    bubble_artefact.card[i].innerHTML = bubble_artefact.num[i];
    bubble_artefact.card[i].style.fontStyle = "normal";
    bubble_artefact.card[i].style.color = "white";
    bubble_artefact.card[i].style.backgroundColor = "#288ec8";
  }
  bubble_artefact.flag=0;
  document.getElementById("pause").disabled = true;
  document.getElementById("pause").style.backgroundColor = "grey";
  document.getElementById("pause").value = "Pause";
};

function change_interval()
{
  if(bubble_artefact.prev == -1 && (bubble_artefact.action == 1 || bubble_artefact.action == -1)){
    if(bubble_artefact.interval != 0) { clearInterval(bubble_artefact.interval); }
    
    if(document.getElementById("interval").value != 100)
    {
      if(bubble_artefact.fn_name > "") { bubble_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value); }
      document.getElementById("pause").style.backgroundColor = "#288ec8";
    }
    else
      document.getElementById("pause").style.backgroundColor = "grey";
  }
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
  document.getElementById("ins").innerHTML = "<p><strong>Comparisons: " + bubble_artefact.comparisons ;
  
  if(eval(bubble_artefact.card[j].innerHTML) < eval(bubble_artefact.card[i].innerHTML))
    return true;
  else
    return false;
};

function swap(i, j)
{
  bubble_artefact.swaps++;
  var temp;
  document.getElementById("ins").innerHTML += "<p>Swapping " + bubble_artefact.card[i].innerHTML + " and " + bubble_artefact.card[j].innerHTML + "</p>";
  temp = eval(bubble_artefact.card[j].innerHTML);
  bubble_artefact.card[j].innerHTML = eval(bubble_artefact.card[i].innerHTML);
  bubble_artefact.card[i].innerHTML = temp;
};




function opti_bubble()
{
  if(bubble_artefact.iterator1 < bubble_artefact.end)
  {
    bubble_artefact.iterator1++;
    bubble_artefact.iterator2++;
  }
  else
  {
    if(bubble_artefact.finished)
    {
      if(document.getElementById("interval").value != 100)
      {
        clearInterval(bubble_artefact.interval);
        bubble_artefact.interval = 0;
      }
      document.getElementById("ins").innerHTML = "<h3>The sort is complete - there were " + bubble_artefact.comparisons + " comparisons and " + bubble_artefact.swaps + " swaps.</h3>";
      document.getElementById("next").style.backgroundColor = "grey";
      document.getElementById("next").disabled = true;
      document.getElementById("pause").style.backgroundColor = "grey";
      document.getElementById("pause").disabled = true;
      document.getElementById("order").disabled = false;
      bubble_artefact.iterator2 = 0;
    }
    else
    {
      bubble_artefact.finished = true;
      bubble_artefact.iterator1 = 0;
      bubble_artefact.iterator2 = 1;  
      bubble_artefact.card[bubble_artefact.end+1].style.backgroundColor = "grey";
      bubble_artefact.end--;
    }
  }
};

function next_step()
{
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
    if(bubble_artefact.fn_name == "opti_bubble") { swap(bubble_artefact.iterator1, bubble_artefact.iterator2); }
    bubble_artefact.finished = false;
    window[bubble_artefact.fn_name]();
  }
};

function pause(){
  if(bubble_artefact.prev == -1){
    bubble_artefact.prev = document.getElementById("interval").value;
    if(bubble_artefact.interval != 0) 
      clearInterval(bubble_artefact.interval);
    document.getElementById("pause").value = "Play";
  }else{
    bubble_artefact.prev = -1;
    if(bubble_artefact.fn_name > "") 
      bubble_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value);
    document.getElementById("pause").value = "Pause";
  }
};


function start_sort()
{
  document.getElementById("order").disabled = true;
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
  document.getElementById("next").value = "Next";
  document.getElementById("pause").disabled = false;
  document.getElementById("pause").style.backgroundColor = "#288ec8";
  if(document.getElementById("interval").value == 100)
  {
    document.getElementById("next").disabled = false;
    document.getElementById("pause").style.visibility = "hidden";
  }
  else
  {
    document.getElementById("pause").style.visibility = "visible";
    if(bubble_artefact.interval == 0)
      bubble_artefact.interval = setInterval(next_step, 2600-document.getElementById("interval").value);
    else
    {
      clearInterval(bubble_artefact.interval);
      bubble_artefact.interval = 0;
    }
  }

};

function change(){
  var text = document.getElementById("order").value;
  if(text == "sorted")
    bubble_artefact.randomcounter = 0;
  else
  if(text == "reversesorted")
    bubble_artefact.randomcounter = 1;
  else
    bubble_artefact.randomcounter = 2;
  document.getElementById("next").onclick = function() { start_sort(); };
  document.getElementById("next").style.backgroundColor = "#288ec8";
  document.getElementById("next").disabled = false;
  document.getElementById("next").value = "Start";
};

function reload(){
  location.reload(true);
};
function setcounter(){
  document.getElementById("order").value = "random";
};
