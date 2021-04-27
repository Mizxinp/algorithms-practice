function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}


var arr = [10, 20, 5, 43, 12, 88];
console.log('0:', bubbleSort(arr));

function bubbleSort1(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}

console.log('1:', bubbleSort1(arr));

function bubbleSort2(arr) {
	for (let i = 0; i < arr.length; i++) {
		let flag = false
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				flag = true
			}
		}
		// 如果一次交换都没有发生，则说明数组有序，直接放过
		if (flag === false) return arr
	}
	return arr
}

console.log('2:', bubbleSort2(arr));

