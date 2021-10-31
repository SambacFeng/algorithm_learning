/* 
    1. 初始状态下将所有位置的LCS长度设置为0
    2. 从两个字符串的首个字符开始，判断其是否相等，若相等则该位置LCS长度增加若不想等则将值设置为路径上的较大值
    3. 向后遍历字符串直至两个字符串均被遍历完成
    4. 路径终点处的值即为原字符串LCS的值

    得到状态转移方程
    dp[i][j] =  {
                    0                                   i > 0; j == 0
                    dp[i - 1][j - 1] + 1                i, j > 0, s1[i] == s2[j]
                    max(dp[i - 1][j], dp[i][j - 1])     i, j > 0, s1[i] == s2[j]
                }
*/

// 参数s1，s2为两个字符串，返回值为两字符串LCS的长度
const LCS = (s1, s2) => {
    let len1 = s1.length, len2 = s2.length
    // 使用dp数组消除重叠子问题
    let dp = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0))
    // 自底向上的动态规划
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (s1[i] === s2[j]) { // 字符相同时增加当前位置LCS长度
                dp[i + 1][j + 1] = dp[i][j] + 1
            // 字符不同时，选择两个方向中较大的一个作为当前位置LCS长度
            } else if (dp[i + 1][j] > dp[i][j + 1]) { 
                dp[i + 1][j + 1] = dp[i + 1][j]
            } else {
                dp[i + 1][j + 1] = dp[i][j + 1]
            }
        }
    }
    // 返回LCS长度
    return dp[len1][len2]
}

console.log(LCS("operating system", "computer network")) // opernt
console.log(LCS("pineapple", "apple")) // apple
console.log(LCS("06207407", "850794431")) // 074