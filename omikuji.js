var username;
var userresult;

/*ユーザの名前を確認するポップアップを表示する
　名前を入力があった場合、その名前をusernameとする*/
username = prompt("お名前を教えてください。");

/*もし名前の入力がなければusernameを名無しとする*/
if (username == ""){
    username = "名無し";
}
/*nameの中にusernameを格納する*/
document.getElementById("name").innerHTML = username;

/*randの中身に0~4の値を格納する*/
var rand = Math.floor(Math.random() * 5);

/*もしrandの中身がuserresultの値を大吉とする*/
if (rand == 0){
    userresult = "大吉";
}
/*もしrandの中身がuserresultの値を中吉とする*/
if (rand == 1){
    userresult = "中吉";
}
/*もしrandの中身がuserresultの値を小吉とする*/
if (rand == 2){
    userresult = "小吉";    
}
/*もしrandの中身がuserresultの値を吉とする*/
if (rand == 3){
    userresult = "吉";  
}
/*もしrandの中身がuserresultの値を凶とする*/
if (rand == 4){
    userresult = "凶";    
}

/*resultにuserresultの値を格納する*/
document.getElementById("result").innerHTML = userresult;
