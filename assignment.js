// QUESTION1 :Get number of hours, minutes and seconds from number of seconds.

var timeinunits = function(sec) {
	console.log("heloo")
	var hrs=Math.floor(sec/3600);
	var mins=Math.floor((sec%3600)/60);
	var secs=Math.floor(sec%60);
	var answer=""
	answer+="Hours =" +hrs+" ,minutes ="+mins+ " ,seconds ="+secs
	return answer
}
// console.log(timeinunits(3680))

// QUESTION 2:You are given  two numbers L and R, you have to find if XOR of all the numbers in range L to R (L,R both inclusive) is odd or even
var num=window.prompt()
var xorOperation = function(l,r) {
    let arr = [],xor
    for(let i=l;i<=r;i++){
        arr.push(i)
    }
    xor = arr[0]
    for(let i=1;i<r-l+1;i++){
        xor = xor^arr[i]
    }
  if (xor/2==0){
    return ("Even")
  }
  else{
    return("odd")
  }
};
for(var i=1;i<=num;i++){
    var l=window.prompt()
    var r=window.prompt()
    console.log(xorOperation(l,r))
}

// QUESTION 3:You are given with T number of strings. You need to sort the strings according to their first character.
var num=window.prompt()
var arr=[]
for(var i=1;i<=num;i++){
    var str1=window.prompt()
    arr.push(str1)
}
arr.sort()
arr.forEach(function(item) {
 console.log(item);
})


