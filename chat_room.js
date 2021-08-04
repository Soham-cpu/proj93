
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAbWxdH57pxFGm1wYxvw8G--5WpXNt5X4k",
      authDomain: "kwitterapp-b4ee9.firebaseapp.com",
      projectId: "kwitterapp-b4ee9",
      storageBucket: "kwitterapp-b4ee9.appspot.com",
      messagingSenderId: "157414068368",
      appId: "1:157414068368:web:451c83bb1a5db82a270815"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
