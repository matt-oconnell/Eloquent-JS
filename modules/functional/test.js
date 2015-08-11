missingNo = [1,2,3,4,5,7].forEach(function(el, i) {
	console.log('running');
    if(el != i + 1)
		console.log( i + 1);
		return i + 1
})

var nums = [1,2,3,4,5,7];
var sum = nums.length *(nums.length + 1)/2


var string = 'some string';
var newString3 = '';
for(var i = string.length; i--; i > -1) {
	console.log(i);
	newString3 += string[i];
}
console.log(newString3);

