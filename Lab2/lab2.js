/* 
    1. 输入一个有序数组(以升序为例)和要查找的目标值
    2. 定义 搜索上界 = 数组最后一个元素，搜索下界 = 数组第一个元素
    3. 定义 中值 = 索引为 (上界 + 下界) / 2 的数组元素
    4. 比较 目标值与中值，若 目标值 < 中值，则将上界 赋值为 中值索引 - 1，若 目标值 > 中值,则将下界 赋值为中值索引 + 1
    5. 重复 步骤3 ~ 4，直到 目标值等于中值 返回 中值索引，或上下界的值不合法 即 下界 > 上界 时，证明未找到目标值，返回 -1
 */

// 输入为已排序的数组和要查找的值
let binarySearch = (sortedArray, target) => {
    // 搜索边界
    let lowIndex = 0
    let highIndex = sortedArray.length - 1

    // lowIndex > highIndex 时，搜索完成
    while (lowIndex <= highIndex) {
        // 二分位置
        let midIndex = Math.floor((lowIndex + highIndex) / 2)

        // 二分位索引处的值等于目标时搜索成功，返回索引
        if (sortedArray[midIndex] === target) return midIndex

        // 未找到时，根据比较结果选择搜索哪个半边
        sortedArray[midIndex] < target ? lowIndex = midIndex + 1 : highIndex = midIndex - 1
    }

    // 搜索完成时仍未找到，返回-1
    return -1
}

// 输入为数组最大值范围和数组元素个数
let generateSortedArray = (maxVal, n) => {
    let ret = Array(n).fill(0).map(_ => Math.round(Math.random() * maxVal))

    // 返回[0, maxVal)范围内的均匀随机递增数组
    return ret.sort((a, b) => a - b)
}

// 对程序进行验证，在随机生成的长度为20值为0 - 99的有序数组中查找数字74(74为我的学号后两位)并输出结果
for (let i = 0; i < 5; i++) {
    let arr = generateSortedArray(100, 20)
    console.log("第", i, "次搜索", "sortedArray: ", arr)
    console.log("searchTarget: ", 74, "indexOfTarget: ", binarySearch(arr, 74))
    console.log()
}
