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
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,message:msg,like:0
    });
    document.getElementById("msg").value="";
}
function getData(){
    firebase.database().ref("/"+room_name).on('value',function (snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot) {
            childKey=childSnapshot.key;
            childData=childSnapshot.val();
            if (childKey!="purpose"){
                firebase_message_id=childKey;
                message_data=childData;
                nombre=message_data['name'];
                message=message_data['message'];
                like=message_data['like'];
                name_with_tag="<h4> " + nombre + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
                like_button="<button class='btn btn-warning' id=" +firebase_message_id+" value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                row=name_with_tag+message_with_tag+like_button+span_with_tag;
                document.getElementById("output").innerHTML+=row
            }

        });
    });
}
getData();
function updateLike(message_id){
    button_id=message_id;
    likes=document.getElementById(buttton_id).value;
    update_likes=Number(likes)+1;
    firebase.database().ref(room_name).chlid(message_id).update({
        like:update_likes
    });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");

}