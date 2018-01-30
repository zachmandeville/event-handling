// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  addColor('one', makeBlue)
  addColor('two', makeOrange)
  addColor('three', makeGreen)
  four()
  // Your turn! Create a new function called `two`, then call it from here.
}

function addColor(id, color) {
    // Find the element, using the argument id which will show as 'one' or 'two'
    var theId = document.getElementById(id);
    // Add an event listener for entering the div, use the color argument which will show as
    // MakeBlue or something similar
    theId.addEventListener('mouseenter', color); 
    //Add the event listener for leaving the div.  Always return to white upon leaving.
    theId.addEventListener('mouseleave', makeWhite); }
/* Original Function
function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}
*/
// CREATE FUNCTION two HERE
// CREATE FUNCTION three HERE
// CREATE FUNCTION four HERE
function four(){
    var four = document.getElementById('four');
    four.addEventListener('click', makeOrange);
    four.addEventListener('mouseleave', makeWhite); }
// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeGreen(evt){
    evt.target.style.backgroundColor = 'green' }

function makeIndigo(evt){
    evt.target.style.backgroundColor = 'indigo' }

function makeOrange(evt){
    evt.target.style.backgroundColor = 'orange' }
