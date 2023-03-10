
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCaGYJa_xLlJck5Yz2dLj6PXLl3Fl3ejQw",
      authDomain: "red-social-699e6.firebaseapp.com",
      databaseURL: "https://red-social-699e6-default-rtdb.firebaseio.com",
      projectId: "red-social-699e6",
      storageBucket: "red-social-699e6.appspot.com",
      messagingSenderId: "500317340657",
      appId: "1:500317340657:web:a6e0991fcc1ae99f7a3a50"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="hola "+user_name+"!";

function add_room(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location.replace("kwitter_page.html");
}
function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("room name"+Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getRoom();
function redirectToRoomName(Room_names){
      localStorage.setItem("room_name",Room_names);
      window.location="kwitter_pages.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");

}