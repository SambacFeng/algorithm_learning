/* 1. 若数组中元素仅有一个则直接返回
2. 计算√n的值和各个√n等分点的索引
3. 递归地对√n个子数组分别调用归并排序算法
4. 将√n个数组合并成新数组
5. 返回新数组 */

/* const fs = require('fs')
let data = fs.readFileSync("./input.txt", "utf-8").split(' ')
let res = [], maxFreq = 1
let m = new Map()
for (let i = 1; i <= data.length; i++) {
    m.set(data[i], m.get(data[i]) + 1 || 1)
}
m.forEach((v, e) => {
    if (v > maxFreq) {
        maxFreq = v
        res = [e]
    } else if (v === maxFreq) {
        res.push(e)
    }
})
res = res.join(' ').toString()
fs.writeFileSync("./output.txt", `${maxFreq}\n${res}`) */

let arr = []
arr[0] > arr[arr.length - 1] ? {max = arr.unshift(), min = arr.pop()} : {max = arr.pop(), min = arr.unshift()}
for (let i = 0, j = arr.length; i <= j; i++, j--) {
    if (arr[i] < arr[j]) {
        if (arr[i] < min) min = arr[i]
        if (arr[j] > max) max = arr[j]
    } else {
        if (arr[i] > max) max = arr[i]
        if (arr[j] < min) min = arr[j]
    }
}
/* arr.forEach(e => {
    if (e > max) {
        max = e
    } else if (e < min) {
        min = e
    }
}) */