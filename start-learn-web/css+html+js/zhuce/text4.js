
function checkbox(){
		
	var name=$("#name").val();
	var pw=$("#m").val();
	var text = '<span class="error">请输入内容</span>';
	if (name==="" ){
		alert("不能为空");
		//$("#name").after(text);
		//$(".error").css({"color":"red","fontSize":"10px"});
		return false;
		
	}
	if (!pw ){
		alert("不能为空");
		//$("#m").after(text);
		//$(".error").css({"color":"red","fontSize":"10px"});
		return false;
	}
	
	return true;		
	
}

