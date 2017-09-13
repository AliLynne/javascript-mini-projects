// constants
const pressed =[];
const secretCode = 'alison';
// functions


// event listeners
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length, pressed.length - secretCode.length);
  console.log(pressed);
  if(pressed.join('').includes(secretCode)){
    console.log('SUCCESS!');
    cornify_add();
  }
});
