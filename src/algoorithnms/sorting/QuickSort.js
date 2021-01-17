/*
	通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，
	然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列 	
*/


function quickSort(arr){
	if(arr.length <= 1)return arr;
	let leftArr = [];
	let rightArr = [];
	let pivot = arr[0];
	for(let i=1; i<arr.length; i++){
		arr[i] >= pivot ? rightArr.push(arr[i]) : leftArr.push(arr[i]);
	}
	return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

let arr = [10, 20, 5, 43, 12, 88];

console.log(quickSort(arr));