<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>login</title>
<style type="text/css">
body {
	font: 28px Arial, Helvetica, sans-serif;
	background-image: url(16983806_p0_master1200.jpg);
	 background-repeat:no-repeat ;
  background-size:100% 100%;
  background-attachment: fixed;
}
.error { color:#ff0000;}
.text { color:#FFF}

</style>
<?php

//功能：登录页面填写
$name=$pwd1="";
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
  if (empty($_POST["txt_username"]))
  {
      $nameErr = "名字是必须的";
  }
   else
   {
       $name = test_input($_POST["txt_username"]);
	   //检测名字是否只包含字母和数字
	   if (!preg_match("/^[a-zA-Z0-9]/",$name))
	   {
	        $nameErr = "只允许字母和数字";
	   }
		if (strlen($name)>10)
		{
		    $nameErr = "输入不得大于10个字符";
		}
   }
   if (empty($_POST["txt_pwd"]))
   {
	   $pwd1Err = "密码必填";
	}
	else
	{
		$pwd1=test_input($_POST["txt_pwd"]);
		//检测密码是否只包含数字和空格
		if (!preg_match("/^[a-zA-Z0-9]/",$pwd1))
		{
			$pwd1Err="只允许字母与数字";
		}
		if (strlen($pwd1)>10)
		{
		    $pwd1Err = "输入不得大于10个字符";
		}
	}
 if((($_POST['txt_username']!="")&&($_POST['txt_pwd']!=""))&&($nameErr ==""&& $pwd1Err==""))
 {    session_start();
	   $_SESSION['username']=$_POST['txt_username'];
	   $_SESSION['password']=$_POST['txt_pwd'];
	 echo "<script>window.location.href='login_do.php';</script>";
	 }
else {echo $login='登陆信息有误';}
}
function test_input($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

?>
</head>
<body>

<form name="form1" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" >


<p>&nbsp;</p>
<p>&nbsp;</p>
<table border="1" align="center">
<tr>
<td colspan="3" align="center" class="text">榕易网后台管理员登录</td></tr>
  <tr>
    <td class="text">用户名：</td>
    <td> <input type="text" name="txt_username"/></td>
     <td><span class="error">*<?php echo $nameErr;?></td>
  </tr>
  <tr>
    <td class="text">密码：</td>
    <td><input type="password" name="txt_pwd"/></td> 
    <td width="150"><span class="error">*<?php echo $pwd1Err;?></td>
  </tr>
  <tr>
  <td colspan="3" align="center">
  <input type="submit"  value="登录"/>
    <input type="reset"  value="清空"/>
    </td>
    </tr>

</table>
</form>  
</body>
</html>
