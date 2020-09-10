$(document).ready(function(){
  $("form").submit(function(){
       if($('#password').val() != $('#password2').val()){
		   alert("Mauvais MDP");
           e.DefaultPrevented();
       }else{
		   alert("Vous etes connecté");
           e.DefaultPrevented();
	   }

  });
});
