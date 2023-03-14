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
var database = firebase.database()
var nomeSala=""
var campo ='';
function addSala(){
     nomeSala=document.getElementById('iptsala').value
    localStorage.setItem('nomeSala',nomeSala)
   database.ref("/").child(nomeSala).update({
    proposito:"adicionar sala"
   })
}


database.ref("/").on("value",(data)=>{
  campo ='';
  data.forEach((subpasta)=>{
    sala = subpasta.key;
    linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
    campo +=linha;
  });
  document.getElementById("output").innerHTML = campo;
})


function irSala(nomesala){

  localStorage.setItem("roomName",nomesala)

  window.location='msg.html';
}


  function sair(){
    localStorage.removeItem("userName")
    localStorage.removeItem("roomName")
    window.location= "index.html"
  }
  function carregar(){
    var nome1=localStorage.getItem('userName');
    document.getElementById('userName').innerHTML='SEJA BEM VINDO(A)'+ nome1
  }