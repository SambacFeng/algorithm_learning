/**
 * 1. 对第i层进行回溯
 * 2. 若i > N，到达中止条件，储存结果并回溯
 * 3. 对于第i层的所有位置，尝试放置皇后并判断棋盘可行性，若可行则进入下一层回溯
 * 4. 取消第i层的皇后，回溯到上一层
 */

/**
 * @param {number} n // 输入n为要求n皇后的棋盘大小
 * @return {string[][]} // 返回一个二维字符串数组，为n皇后的所有可行解
 */
var NQueens = function (n) {
    // 创建一个n * n的二维数组作为棋盘，默认用 . 进行填充，证明该位置没有皇后
    let board = new Array(n).fill(0).map(_ => new Array(n).fill('.'))
    // res储存所有的可行解
    let res = []
    // 回溯函数，参数row表示当前正在尝试填充棋盘的第row + 1行
    const backtrack = row => {
        // 参数row超过棋盘行数达到n时证明整个棋盘已经被n个完全填充，将现在的棋盘状态填入结果
        if (row === n) {
            // 创建一个当前棋盘的拷贝
            let subRes = []
            board.forEach(e => subRes.push(e.join('')))
            // 将拷贝存入结果
            res.push(Array.from(subRes))
            // 满足终止条件，到达程序出口，回溯到上一层
            return
        }
        // 遍历所在行的所有列，尝试使用皇后进行填充
        for (let col = 0; col < n; col++) {
            // 如果当前位置可以放皇后
            if (isValid(row, col)) {
                // 在当前位置放一个皇后
                board[row][col] = 'Q'
                // 在下一行进行尝试，进入决策树的下一层
                backtrack(row + 1)
                // 移除当前位置的皇后，继续在本层的兄弟节点进行尝试
                board[row][col] = '.'
            }
        }
        // 当前行的所有位置已全部尝试，回溯到上一层
    }
    // 判断当前位置是否能够放置皇后的函数，参数为尝试放置皇后的位置，能放置则返回true
    const isValid = (row, col) => {
        // 判断当前位置所在列是否有皇后
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false
        }
        // 判断当前位置所在副对角线是否有皇后
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false
        }
        // 判断当前位置所在主对角线是否有皇后
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false
        }
        return true
    }

    // 程序主体，调用backtrack从第一行开始尝试在棋盘上放置皇后
    backtrack(0)
    // 返回所有的可能的放置方法
    return res
}

console.log(NQueens(6), NQueens(6).length)
console.log(NQueens(8), NQueens(8).length)