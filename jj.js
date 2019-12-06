var pre = "";
var aft = "";
var result;
var syb;
var flag = false;
$(document).ready(function(){
	$(".b1 button").click(function(){
		switch($(this).val()){
			case '*':
			{
				syb = "*"; 
				flag = true;
				break;
			}
			case '/':
			{
				syb = "/"; 
				flag = true;
				break;
			}
			case '+':
			{
				syb = "+"; 
				flag = true;
				break;
			}
			case '-':
			{
				syb = "-"; 
				flag = true;
				break;
			}
			case '=':
			{
				result = eval(pre + syb + aft);
				flag = false;
				console.log(result);
				break;
			}
			default:
			{
				if(flag){
					aft += $(this).val();
				}else{
					pre += $(this).val();
				}
			}
		}
	});
});