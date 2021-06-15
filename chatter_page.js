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
  room_name = localStorage.getItem("roomname");
  function send(){
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
    
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data ['name'];
message = message_data ['message']
like = message_data ['like']
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();
function updateLike(message_id){
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
  like: updated_likes
});
}
function logout(){
localStorage.removeItem("username")
localStorage.removeItem("roomname")
window.location = "chatter_login.html"
}