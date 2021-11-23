// 使用一个二维数组记录活动情况
let activities = [
    [1, 23, false],
    [12, 28, false],
    [25, 35, false],
    [27, 80, false],
    [36, 50, false]
]

const activityArrange = (k, acts) => {
    // res记录需要的会场数目，valid记录当前会场最后一个活动的结束时间
    let res = 0, valid = 0
    while (k) {
        // 遍历所有活动
        acts.forEach(act => {
            // 当前活动开始时间晚于最后一个活动结束时间
            // 且当前活动未被安排
            if (act[0] > valid && !act[2]) {
                // 将当前活动加入当前会场,更新最后一个活动的结束时间
                valid = act[1]
                // 将当前活动从之后的遍历中排除
                act[2] = true
                k--
            }
        })
        // 重置特征量
        valid = 0
        // 结束当前会场的安排,所需会场数+1
        res++
    }
    // 返回所需的会场数量
    return res
}
// 使用测试数据进行测试
console.log(activityArrange(activities.length, activities))
// 输出结果为3