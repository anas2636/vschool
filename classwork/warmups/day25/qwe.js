// function checkPassword(str)
//  {
//    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//    return re.test(str);
//  }
//
//  function checkForm(form)
//  {
//    if(form.username.value === "") {
//      alert("Error: Username cannot be blank!");
//      form.username.focus();
//      return false;
//    }
//    re = /^\w+$/;
//    if(!re.test(form.username.value)) {
//      alert("Error: Username must contain only letters, numbers and underscores!");
//      form.username.focus();
//      return false;
//    }
//    if(form.pwd1.value !== "" && form.pwd1.value == form.pwd2.value) {
//      if(!checkPassword(form.pwd1.value)) {
//        alert("The password you have entered is not valid!");
//        form.pwd1.focus();
//        return false;
//      }
//    } else {
//      alert("Error: Please check that you've entered and confirmed your password!");
//      form.pwd1.focus();
//      return false;
//    }
//    return true;
//  }
//********************
//var chars = "!@#$%^&*()_+}{?><][';\/0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//        var string_length = 8;
//        var randomstring = '';
//        for (var i=0; i<string_length; i++) {
//            var rnum = Math.floor(Math.random() * chars.length);
//            randomstring += chars.substring(rnum,rnum+1);
//        }
//console.log(rnum,rnum+1[i])
//*****************
var al = "abcdefghijklmnopqrstuvwxyz";
var spec = "!@#$%^&*()_+?";
var nums = "1234567890";

var charSets = [al, al.toUpperCase(), spec, nums];

function testPassword(str) {
  for(var i = 0; i < charSets.length; i++) {
    var pass = false;
    for(var j = 0; j < charSets[i].length; j++) {
      for(var x = 0; x < str.length; x++) {
        if(str[x] == charSets[i][j]) {
          pass = true;
          break;
        }
      }
    }
    if(pass == false) {
      return false;
    }
  }
  return true;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genPassword(length) {
  var password = "";
  while(!testPassword(password)) {
    console.log(password);
    password = "";
    for(var i = 0; i < length; i++) {
      var set = charSets[getRandomInt(0, charSets.length -1)];
      var char = set[getRandomInt(0, set.length - 1)];
      password += char;
    }
  }
  return password;
}

document.getElementById("submit").addEventListener("click", function() {
  var length = parseInt(document.getElementById("length").value);
  if(length >= 8) {
    document.getElementById("output").innerHTML = genPassword(length);
  } else {
    alert("Must be at least 8 charcters");
  }
});