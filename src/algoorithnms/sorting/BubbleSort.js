function bubbleSort(arr){
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr.length -i; j++){
			if(arr[j] > arr [j+1]){
				[arr[j],arr[j+1]] = [arr[j+1],arr[j]]
			}
		}
	}
	return arr
}


var arr = [10,20,5,43,12,88];
console.log(bubbleSort(arr));