/* 
    参数: 一个邻接矩阵和一个起始点
    1. 若所有点均已被访问过则中止算法，否则将当前点设置成已被访问的状态
    2. 遍历该点的所有邻接点，更新最短距离并找到一个新的最近点作为中转节点
    3. 反复执行1、2两步
*/

// matrix为邻接矩阵，start为起始点
const dijkstra = (matrix, start = 0) => {
    // rows和cols均为顶点个数
    const rows = matrix.length, cols = matrix[0].length

    // 初始化dist数组
    let dist = new Array(rows).fill(Infinity)
    // 初始化访问数组
    let visited = new Array(rows).fill(false)
    dist[start] = 0

    // 存在未访问的节点，即所有节点全部被访问后终止循环
    while (visited.some(item => !item)) {
        // 将起始节点的状态更新为已访问
        visited[start] = true
        // 无法到达的顶点(dist === inf)不能作为中转节点
        if (dist[start] < Infinity) {
            for (let i = 0; i < cols; i++) {
                // 比较dist[start]+matrix[start][i]和dist[i]的大小决定是否更新路线和dist[i]
                dist[i] = Math.min(dist[i], dist[start] + matrix[start][i])
            }
        }

        // 寻找当前距离最近的节点作为新的中转节点
        let minIndex = -1
        let minDist = Infinity
        for (let i = 0; i < rows; i++) {
            if (!visited[i] && dist[i] < minDist) {
                minDist = dist[i]
                minIndex = i
            }
        }
        // 从新的中转节点开始寻找
        start = minIndex
    }

    // 返回到所有节点的距离
    return dist
}

// 将不存在的边长度设置为Infinity，将到自身的距离设置为0避免自环
const matrix = [
    [0, 5, 9, 2, Infinity, 6],
    [9, 0, 3, Infinity, 6, Infinity],
    [2, 3, 0, 5, Infinity, 6],
    [Infinity, Infinity, 5, 0, 1, 3],
    [6, Infinity, Infinity, 3, 0, 8],
    [6, Infinity, 4, Infinity, 5, 0]
]
console.log(dijkstra(matrix, 0))
console.log(dijkstra(matrix, 2))

/* const matrix = [
    [0, 3, 4, Infinity, 6],
    [7, 0, 4, Infinity, Infinity],
    [2, 6, 0, 5, Infinity],
    [Infinity, 3, 5, 0, 1],
    [6, Infinity, Infinity, 3, 0]
]
 */

