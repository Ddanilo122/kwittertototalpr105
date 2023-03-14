
const firebaseConfig = {
  apiKey: "AIzaSyB-DWfLpk0tE4sehIq-v2G_g702KX28JII",
  authDomain: "kwister001.firebaseapp.com",
  databaseURL: "https://kwister001-default-rtdb.firebaseio.com",
  projectId: "kwister001",
  storageBucket: "kwister001.appspot.com",
  messagingSenderId: "146228650639",
  appId: "1:146228650639:web:7e498844783972e08e46fa"
};
  
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


function addUser()
{
    user_name = document.getElementById("user_name").value;
   
    
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem('userName',user_name)
   window.location='indexII.html'
}




