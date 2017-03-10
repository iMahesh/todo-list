
// Check Off Specific Todos By Clicking on the text
$("ul").on("click", "span", function(){
	$(this).toggleClass("completed");
	$(this).siblings(".fa-check").toggleClass("marked");
});

//Click on X to delete Todo
$("ul").on("click", (".fa-times"), function(event){
	$(this).parent().fadeOut(250,function(){
		console.log($(this));
		 $(this).remove();
		});
	$("li").fadeOut(250,function(){
		$("li").fadeIn(100);
	});
	event.stopPropagation();
});

//click on fa-check to mark it as completed
$("ul").on("click", (".fa-check"), function(event){
	$(this).toggleClass("marked");
	$(this).siblings("span").toggleClass("completed");
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li> <span>" + todoText + "</span><i class='fa fa-times'></i><i class='fa fa-check'></i></li>")
	}
});

$(".fa-plus").on("click",function(){
	$("input").slideToggle(500);
});
