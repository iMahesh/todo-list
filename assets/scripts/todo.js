
// Check Off Specific Todos By Clicking
$("ul").on("click", "span", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "i", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li> <span>" + todoText + "</span><i class='fa fa-times'></i></li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});
