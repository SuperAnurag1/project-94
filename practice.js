const firebaseConfig = {
    apiKey: "AIzaSyDMmL-PcLNBFtT6YlZUFQDebk5E8w1S84o",
    authDomain: "kwitter-b9ba8.firebaseapp.com",
    databaseURL: "https://kwitter-b9ba8-default-rtdb.firebaseio.com",
    projectId: "kwitter-b9ba8",
    storageBucket: "kwitter-b9ba8.appspot.com",
    messagingSenderId: "836939349620",
    appId: "1:836939349620:web:f7d53cec88c8fd8f13db21"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function add_user()
{
    user_name=document.getElementById("User_Name").value;
firebase.database().ref("/").child(User_Name).update({
    purpose:"adding_user"
});
}

//ADD YOUR FIREBASE LINKS