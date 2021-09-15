// a为待排序数组，left和right为要排序的范围
const QuickSort = (a, left, right) => {
    let l = left, r = right
    // 以待排序范围的中点元素为基准点，避免极端情况下时间复杂度退化
    const pivot = a[Math.floor((l + r) / 2)]
    while (l < r) {
        // 跳过有序部分
        while (a[l] < pivot) l++
        while (a[r] > pivot) r--
        // 交换无序部分，将比基准点小的值交换到基准点左侧，比基准点大的值交换到基准点右侧
        if (l <= r) {
            [a[l], a[r]] = [a[r], a[l]]
            l++
            r--
        }
    }
    // 对两个子数组分别进行排序
    if (left < r) QuickSort(a, left, r)
    if (l < right) QuickSort(a, l, right)
    // 返回有序数组
    return a
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9]
console.log("原数组1: ", arr)
console.log("排序后数组1: ", QuickSort(arr, 0, arr.length - 1))

arr = [2, 2, 2, 0, 1, 9, 3, 2, 1, 0, 6, 2, 0, 7, 4]
console.log("原数组2: ", arr)
console.log("排序后数组2: ", QuickSort(arr, 0, arr.length - 1))

arr = [7, 6, 3, 4, 9, 8, 2, 2, 0]
console.log("原数组3: ", arr)
console.log("排序后数组3: ", QuickSort(arr, 0, arr.length - 1))