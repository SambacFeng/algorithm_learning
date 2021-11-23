/* 
    
    对于枚举的每个物品i，有状态转移方程：
    m(i, j) =   {
                    max(m(i - 1, j), m(i - 1, j - wi) + vi)     j >= wi // 选中的物品能装下
                    m(i - 1, j)                                 j < wi  // 选中的物品装不下
                }
    其中j为当前剩余空间，wi为物品i的重量，vi为物品i的价值


    对于枚举的每个物品i，有状态转移方程：
    m(i, j， k) =   {
                    max(m(i - 1, j, k), m(i - 1, j - wi, k - di) + vi)     j >= wi 
                    // 选中的物品能装下
                    m(i - 1, j， k)                                 j < wi  
                    // 选中的物品装不下
                }
    其中j为当前剩余空间，wi为物品i的重量，di为物品i的体积，vi为物品i的价值


 */



/**
 * @param {number[]} T // 硬币面值
 * @param {number[]} coins // 硬币个数
 * @param {number} m // 找钱目标
 * @return {number}
 */
const coinChange = (T, coins, m) => {
    // 二维数组作为备忘录消除重叠子问题
    let memo = new Array(m.length + 1).fill(0).map(_ => new Array(coins.length + 1).fill(0))
    const dp = (T, coins, m) => {
        // 处理出口条件
        if (m < 0) return -1 
        // m < 0 时问题不成立返回-1
        if (m === 0) return 0 
        // m === 0 时无需解决，返回0
        if (memo[m][coins]) return memo[m][coins] 
        // 查备忘录，避免重复计算
        let res = Number.MAX_SAFE_INTEGER 
        // 将结果初始化为无穷大以判断是否有解
        for (let i = 0; i < T.length; i++) { 
            // 枚举每一种硬币
            if (!coins[i]) continue 
            // 如果所选的硬币已经用完，跳过
            coins[i]-- 
            // 该硬币个数-1
            let subRes = dp(T, coins, m - T[i]) 
            // 处理减去所选硬币面值和数量的子问题
            if (subRes === -1) continue 
            // 如果子问题不成立则父问题无意义，跳过
            res = Math.min(res, subRes + 1) 
            // 每次选取较小结果作为父问题结果
        }
        memo[m][coins] = (res === Number.MAX_SAFE_INTEGER) ? -1 : res 
        // 枚举过所有硬币后将当前状态的结果存入备忘录
        return memo[m][coins] 
        // 返回结果        
    }
    return dp(T, coins, m)
}