/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组
 * input: numbers1=[1, 2, 3], nums2=[2, 5, 6]
 * output: [1, 2, 2, 3, 5, 6]
 */

 function merge(nums1, nums2, m, n) {
     let i = m -1
     let j = n -1
     let k = m + n -1

     const result = [...nums1]

     while(i >= 0 && j >=0) {
         if (result[i] >= nums2[j]) {
            result[k] = result[i]
            i --
            k --
         } else {
            result[k] = nums2[j] 
            j --
            k --
         }
     }

     // 如果nums1提前遍历完，剩下nums2。则表示nums1的头部空出来了，可以直接将nums2整个补到nums1中
     while(j >= 0) {
         result[k] = nums2[k]
         k --
         j --
     }

     return result
 }

 const arr1 = [1, 2, 3, 0, 0, 0]
 const arr2 = [2, 5, 6]
 console.log(merge(arr1, arr2, 3, 3))