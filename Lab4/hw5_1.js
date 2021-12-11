// n, P, Q含义如题所示
const match = (n, P, Q) => {
    // res记录最大结果
    let res = 0
    // track记录已选择的运动员组合，track[i][0]表示第i组的男运动员，track[i][1]表示第[i]组的女运动员
    let track = []
    // bt(s, t)表示尝试第i位男运动员和第j位女运动员后可能的搭档
    const bt = (s, t) => {
        // 已组成n组搭档后计算当前配对方式的竞赛优势并更新结果
        if (track.length === n) {
            let currRes = 0
            track.forEach(e => currRes += P[e[0]][e[1]] * Q[e[1]][e[0]])
            res = Math.max(res, currRes)
            return
        }
        // 回溯
        for (let i = s; i < n; i++) {
            for (let j = t; j < n; j++) {
                // 分别尝试每一个可能的组合
                track.push([i, j])
                bt(i + 1, j + 1)
                // 回退
                track.pop()
            }
        }
    }
    // 进行回溯并返回结果
    bt(0, 0)
    return res
}

// 使用题设数据进行测试并输出结果
const n = 3
const P = [[10, 2, 3], [2, 3, 4], [3, 4, 5]]
const Q = [[2, 2, 2], [3, 5, 3], [4, 5, 1]]
console.log(match(n, P, Q)) // 输出结果为52