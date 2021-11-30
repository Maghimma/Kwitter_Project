var firebaseConfig = {
  apiKey: "AIzaSyBbbZ4Pd8LC6061p9CQz9PXZuHUy_13g9Q",
  authDomain: "kwitter-1224.firebaseapp.com",
  databaseURL: "https://kwitter-1224-default-rtdb.firebaseio.com",
  projectId: "kwitter-1224",
  storageBucket: "kwitter-1224.appspot.com",
  messagingSenderId: "275368705870",
  appId: "1:275368705870:web:164e14b89b7ed73a12281f"
};
firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
      });});}
getData();
