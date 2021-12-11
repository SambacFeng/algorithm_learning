// n为物品个数，c为背包容量，obj为物品列表，obj[i]表示第i个物品，obj[i][0]表示第i个物品的重量，obj[i][1]表示第i个物品的价值
const package_01 = (n, c, obj) => {
    // res记录最大的总价值
    let res = 0
    // bt(num)表示回溯遍历到第pos个物品
    const bt = (num, weight, value) => {
        // 遍历完全部物品时，递归到达出口，记录结果
        if (num === n) {
            res = Math.max(res, value)
            return
        }
        // 如果该物品可选，尝试选该物品
        if (weight + obj[num][0] <= c) {
            bt(num + 1, weight + obj[num][0], value + obj[num][1])
        }
        // 不选该物品
        bt(num + 1, weight, value)
    }

    bt(0, 0, 0)
    // 算法结束，返回结果
    return res
}

// 测试数据：共五件物品如obj所示，背包容量为12
const n = 5, c = 12
const obj = [[2, 4], [3, 5], [4, 7], [5, 6], [3, 6]]
// 使用测试数据进行计算，输出结果
console.log(package_01(n, c, obj)) // 输出结果为22，选择了第1235项物品