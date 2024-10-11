console.log('Client-side log');

const btn = document.getElementById("submit-btn"); 
btn.addEventListener("click", submitDataToServer);

// Submit clicked so post the data to the server
function submitDataToServer() {
  console.log("SUBMIT clicked!!!"); // display a message 

  // create an object to post to the server
  // IMPORTANT: ONE NAME - VALUE PAIR FOR EACH FIELD
  let dataObj = {fname: document.getElementById("firstName").value,
                 sname: document.getElementById("surName").value};

  // JUST USE THESE LINES AS THEY ARE - NO NEED TO CHANGE
  event.preventDefault();  // prevents 2 calls to this function!!
  const requestMsg = new XMLHttpRequest();
  requestMsg.open('post', '/putData', true); // open a HTTP post request
  requestMsg.setRequestHeader('Content-Type', "application/json;charset=UTF-8");
  requestMsg.send(JSON.stringify(dataObj));
}
