const coins = [2, 4, 2, 2, 1, 0]
const values = [5, 10, 20, 50, 100, 200]
let target = 0.95

const coinChange = (coins, target) => {
    // 所需硬币总数
    let res = 0
    // 转换为以分为单位便于处理
    target *= 100
    // 从大到小遍历所有硬币
    for (let i = 5; i >= 0; i++) {
        // 如果当前面值的硬币还未找零
        if (coins[i]) {
            // 从小到大遍历所有可用于找零的硬币
            for (let j = 0; j <= i; j++) {
                // 本次找零金额
                let money = values[i] = values[j]
                // 当前支付的金额小于目标金额，开始选取硬币
                if (target >= money) {
                    // 当前硬币面值可以支付找零
                    if (coins[i] * money >= target) {
                        // 本次消耗的硬币数量
                        let amount = Math.floor(target - money)
                        res += amount * 2
                        // 查询顾客是否已有足够硬币
                        for (let k = 0; k < coins.length; k++) {
                            // 能找零且顾客手中仍有该面值硬币
                            if (coins.findIndex(money / values[k]) !== -1 && coins[money - values[k]]) {
                                amount = Math.min(amount, coins[money / values[k]])
                                // 扣除顾客手中硬币
                                coins[money / values[k]]--
                                // 不用找零，修正消耗数
                                res--
                            } else {
                                // 顾客手中硬币不够找零，直接跳过
                                break
                            }
                        }
                        // 减去本次找零金额，更新目标值
                        target -= money
                    }
                } else {
                    // 当前硬币面值不能完成找零，用掉所有当前面值硬币
                    res += coins[i]
                    coins[i] = 0
                    // 更新目标值
                    target -= coins[i] * values[i]
                }
            }
        }
    }
    /*  
        如果最终没有完成找钱(target不为0)或没有可用方案(res === 0)
        输出-1表示找零失败
        否则找零成功，输出结果 
    */
    return (target || !res) ? -1 : res
}

coinChange([2, 4, 2, 2, 1, 0], 0.95) // 2
coinChange([2, 4, 2, 0, 1, 0], 0.55) // 3