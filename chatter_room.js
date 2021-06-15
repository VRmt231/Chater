 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCp3I0n4MTCrF1zIlsXRGu6OsyY-DSQQz8",
  authDomain: "chatter-fd069.firebaseapp.com",
  databaseURL: "https://chatter-fd069-default-rtdb.firebaseio.com",
  projectId: "chatter-fd069",
  storageBucket: "chatter-fd069.appspot.com",
  messagingSenderId: "768166285653",
  appId: "1:768166285653:web:bb0f7bd0f56a4c5ac35fdc"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!"
  function Add_Room(){
    room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
       purpose: "adding a room"
     });
     localStorage.setItem("roomname",room_name);
     window.location = "chatter_page.html"
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; 
     Room_names = childKey;
    //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row
    //End code
    });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name);
window.location = "chatter_page.html";
}
function logout(){
  localStorage.removeItem("username")
  localStorage.removeItem("roomname")
  window.location = "chatter_login.html"
}