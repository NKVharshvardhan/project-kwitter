
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyCYngtYqlp9J975JM768OfuAFd_dBZN1GM",
     authDomain: "project-kwitter-ae17c.firebaseapp.com",
     projectId: "project-kwitter-ae17c",
     storageBucket: "project-kwitter-ae17c.appspot.com",
     messagingSenderId: "68653567511",
     appId: "1:68653567511:web:642a859343b9757cc69652",
     measurementId: "G-0DHHHW6CW8"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();






    function addRoom(){
     var room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}


    
function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
