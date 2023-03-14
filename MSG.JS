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
  
  
    var nomeSala=  localStorage.getItem("roomName");
    var nome = localStorage.getItem("userName") ;
  
  database.ref(nomeSala).on('value',data=>{
      document.getElementById("output").innerHTML='';
      data.forEach(dados=>{
          if(dados.key!='proposito'){
              var id=dados.key
              var val=dados.val()
              var likes=val['like'];
              var nome=val['nome'];
              var msg=val['mensagem'];
              pessoahtml="<h4>NOME:"+nome+"</h4>"
              msghtml="<h4>MENSAGEM:"+msg+"</h4>";
              
  Botaolike="<button class='btn btn-warning' id=" +id+" value= "+likes+ " onclick='attLike(this.id)'>"
  likeshtml="<span class='glyphicon glyphicon-thumbs-up'>like:"+likes+"</span></button><hr>";
  linha= msghtml + pessoahtml + Botaolike+likeshtml
  document.getElementById("output").innerHTML+=linha;
  
          }
      })
      
  })
  
  
    function enviar(){
      var msg=document.getElementById("msg").value;
  
      database.ref(nomeSala).push({
          mensagem:msg,nome:nome,like:0
      })
      document.getElementById("msg").value='';
    }
    function attLike(botaoId){console.log('likes')
      likes=document.getElementById(botaoId).value;
      likes=Number(likes)+1;
      database.ref(nomeSala).child(botaoId).update({
        like:likes
      });
    }