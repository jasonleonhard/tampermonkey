function showValue(newValue) { document.getElementById("range").innerHTML = newValue; }
function rate(r) { document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = r; } // rate(2);  

function createSlidebarForm() { // DYNAMIC FORM js making html
  var f = document.createElement("form");
  f.setAttribute('action', "showValue(newValue)", "rate(r)");
  f.setAttribute('onsubmit', "rate(r)");
  f.setAttribute('z-index', "111111111");

  var i = document.createElement("input"); //input element, text
  i.setAttribute('type', "range");
  i.setAttribute('min', ".25");
  i.setAttribute('max', "6");
  i.setAttribute('step', "0.01");
  i.setAttribute('value', "1");
  i.setAttribute('onchange', "showValue(this.value); rate(this.value)");

  var s = document.createElement("span"); //input element, Submit button
  s.setAttribute('id', "range");
  s.setAttribute('value', "0");

  // var i2 = document.createElement("input"); //input element, text
  // i2.setAttribute('type', "Submit");

  f.appendChild(i);
  f.appendChild(s);
  // f.appendChild(i2);

  // document.getElementsByTagName('body')[0].appendChild(f);
  document.querySelector('#player-api').appendChild(f); // after </video>
}
createSlidebarForm();


// HTML implimentation I converted to dynamic js below
  // <script>
  // function showValue(newValue) { document.getElementById("range").innerHTML = newValue; }
  // function rate(r) { document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = r; } // rate(2);  
  // </script>

  // <form onsubmit="rate(r)">
  //   <input type="range" min=".25" max="4" step=".01" value="1" onchange="showValue(this.value); rate(this.value)" />
  //   <span id="range">0</span>
  //   <input type="submit">
  // </form> <!-- must add html to test currently or reimpliment in js -->