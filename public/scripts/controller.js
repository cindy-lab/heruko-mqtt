function connectFunc(){
  displayMessage("Connecting..");  
  client = mqtt.connect(document.getElementById('broker').value)
  displayMessage(document.getElementById('broker').value);

  client.on("connect", function(){
    displayMessage("Successfully connected");
  })

  client.on("message", function (topic, payload) {
    displayMessage("Received { topic: " + topic + "; payload: " + payload + " }");
  })

}
function publishFunc(){
  client.publish(document.getElementById('pub-topic').value, document.getElementById('pub-payload').value)
  displayMessage("Published { topic: " + document.getElementById('pub-topic').value + "; payload: " + document.getElementById('pub-payload').value + " }");
}

function subscribeFunc(){
  client.subscribe(document.getElementById('sub-topic').value);
  displayMessage("Subscribe { topic: " + document.getElementById('sub-topic').value + " }")
}

function displayMessage(message) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(message);
  node.appendChild(textnode);
  document.getElementById("messages").appendChild(node);
}
