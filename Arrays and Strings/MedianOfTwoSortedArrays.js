const findMedianSortedArrays = function(nums1, nums2) {
    let singleArr = [...nums1, ...nums2];
    let sortedArray = singleArr.sort((a,b)=> a-b);
    let mid = parseInt(sortedArray.length/2);
    if (sortedArray.length % 2 == 0) {
        return ((sortedArray[mid-1]) + (sortedArray[mid]))/2
    }
    return sortedArray[mid];

};